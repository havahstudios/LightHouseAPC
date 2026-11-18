"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { deleteResult, moveResult, saveResult } from "@/lib/cms/resultsAdmin";

export type ResultFormState = { error?: string; success?: string };

// Public pages that show results and need refreshing after a change.
function refreshResultPages(...slugs: (string | null | undefined)[]) {
  revalidatePath("/");
  revalidatePath("/case-results");
  revalidatePath("/sitemap.xml");
  slugs.forEach((slug) => slug && revalidatePath(`/case-results/${slug}`));
}

export async function saveResultAction(_prev: ResultFormState, formData: FormData): Promise<ResultFormState> {
  console.log("[admin] save result: start");
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "") || null;

  const outcome = await saveResult(supabase, {
    id,
    amount: String(formData.get("amount") ?? ""),
    caseType: String(formData.get("case_type") ?? ""),
    summary: String(formData.get("summary") ?? ""),
    body: String(formData.get("body") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    published: formData.get("published") === "on",
  });
  if ("error" in outcome) {
    console.log("[admin] save result: failed");
    return { error: outcome.error };
  }

  refreshResultPages(outcome.result.slug, outcome.previousSlug);
  // Re-load this edit page so the form shows the saved version.
  revalidatePath(`/admin/results/${outcome.result.id}`);
  console.log("[admin] save result: done", outcome.result.slug);
  if (!id) redirect(`/admin/results/${outcome.result.id}?saved=1`);
  return { success: outcome.result.published ? "Saved. The result is live on the website." : "Saved as a draft (not visible on the website)." };
}

export async function deleteResultAction(formData: FormData) {
  console.log("[admin] delete result: start");
  const { supabase } = await requireAdmin();
  const outcome = await deleteResult(supabase, String(formData.get("id") ?? ""));
  if (!outcome.error) refreshResultPages(outcome.slug);
  console.log("[admin] delete result: done");
  redirect("/admin/results");
}

export async function moveResultAction(formData: FormData) {
  console.log("[admin] move result: start");
  const { supabase } = await requireAdmin();
  const direction = formData.get("direction") === "up" ? "up" : "down";
  await moveResult(supabase, String(formData.get("id") ?? ""), direction);
  refreshResultPages();
  revalidatePath("/admin/results");
  console.log("[admin] move result: done");
}
