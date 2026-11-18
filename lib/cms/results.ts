import { createPublicClient } from "@/lib/supabase/public";
import type { CaseResult } from "./types";

// Reading case results for the public site. Only published results are visible (Row Level Security).

const COLUMNS = "id, slug, amount, case_type, summary, body, sort_order, published, updated_at";

export async function listPublishedResults(limit?: number): Promise<CaseResult[]> {
  const supabase = createPublicClient();
  if (!supabase) return [];
  let query = supabase
    .from("case_results")
    .select(COLUMNS)
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error) console.error("listPublishedResults failed:", error.message);
  return (data as CaseResult[] | null) ?? [];
}

export async function getPublishedResult(slug: string): Promise<CaseResult | null> {
  const supabase = createPublicClient();
  if (!supabase) return null;
  const { data, error } = await supabase.from("case_results").select(COLUMNS).eq("slug", slug).eq("published", true).maybeSingle();
  if (error) console.error("getPublishedResult failed:", error.message);
  return (data as CaseResult | null) ?? null;
}
