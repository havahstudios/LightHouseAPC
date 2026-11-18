import "server-only";
import type { AdminDb } from "@/lib/auth";
import { cleanHtml } from "@/lib/richText";
import { slugify } from "@/lib/slug";
import type { CaseResult } from "./types";

// Admin-side case result actions. Row Level Security makes sure only admins can change anything.

const COLUMNS = "id, slug, amount, case_type, summary, body, sort_order, published, updated_at";

export async function listAllResults(db: AdminDb): Promise<CaseResult[]> {
  const { data, error } = await db
    .from("case_results")
    .select(COLUMNS)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) console.error("listAllResults failed:", error.message);
  return (data as CaseResult[] | null) ?? [];
}

export async function getResult(db: AdminDb, id: string): Promise<CaseResult | null> {
  const { data } = await db.from("case_results").select(COLUMNS).eq("id", id).maybeSingle();
  return (data as CaseResult | null) ?? null;
}

export type ResultInput = {
  id: string | null;
  amount: string;
  caseType: string;
  summary: string;
  body: string;
  slug: string;
  published: boolean;
};

export type SaveResultOutcome = { error: string } | { result: CaseResult; previousSlug: string | null };

// "1250000" or "1.25 million" -> shown as typed, but a bare number gets a $ and commas.
function formatAmount(raw: string) {
  const text = raw.trim();
  const digits = text.replace(/[$,\s]/g, "");
  if (/^\d+$/.test(digits)) return `$${Number(digits).toLocaleString("en-US")}`;
  return text.startsWith("$") || !/^\d/.test(text) ? text : `$${text}`;
}

export async function saveResult(db: AdminDb, input: ResultInput): Promise<SaveResultOutcome> {
  const amount = formatAmount(input.amount);
  const caseType = input.caseType.trim();
  const summary = input.summary.trim();
  if (!input.amount.trim()) return { error: "Please add the dollar amount." };
  if (!caseType) return { error: "Please add the type of case." };
  if (!summary) return { error: "Please add a short description for the card." };
  const slug = slugify(input.slug || `${amount} ${caseType}`);

  const existing = input.id ? await getResult(db, input.id) : null;
  if (input.id && !existing) return { error: "This result no longer exists." };

  const row: Record<string, unknown> = {
    slug,
    amount,
    case_type: caseType,
    summary: summary.slice(0, 300),
    body: cleanHtml(input.body),
    published: input.published,
  };
  if (!existing) {
    // New results go to the top of the list.
    const { data: first } = await db.from("case_results").select("sort_order").order("sort_order").limit(1).maybeSingle();
    row.sort_order = ((first as { sort_order: number } | null)?.sort_order ?? 1) - 1;
  }

  const query = existing
    ? db.from("case_results").update(row).eq("id", existing.id).select(COLUMNS).single()
    : db.from("case_results").insert(row).select(COLUMNS).single();
  const { data, error } = await query;
  if (error) {
    console.error("saveResult failed:", error.message);
    if (error.code === "23505") return { error: "Another result already uses this web address. Please change it." };
    return { error: "The result couldn't be saved. Please try again." };
  }
  return { result: data as CaseResult, previousSlug: existing && existing.slug !== slug ? existing.slug : null };
}

export async function deleteResult(db: AdminDb, id: string): Promise<{ error?: string; slug?: string }> {
  const { data, error } = await db.from("case_results").delete().eq("id", id).select("slug").maybeSingle();
  if (error) {
    console.error("deleteResult failed:", error.message);
    return { error: "The result couldn't be deleted. Please try again." };
  }
  return { slug: (data as { slug: string } | null)?.slug };
}

// Moves a result one place up or down by renumbering the whole list.
export async function moveResult(db: AdminDb, id: string, direction: "up" | "down") {
  const all = await listAllResults(db);
  const i = all.findIndex((r) => r.id === id);
  const j = direction === "up" ? i - 1 : i + 1;
  if (i < 0 || j < 0 || j >= all.length) return;
  [all[i], all[j]] = [all[j], all[i]];
  await Promise.all(
    all.map((r, index) => (r.sort_order === index ? null : db.from("case_results").update({ sort_order: index }).eq("id", r.id))),
  );
}
