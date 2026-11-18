import { createPublicClient } from "@/lib/supabase/public";
import type { PageSection } from "./types";

// Editable page text. Each page lists its sections and their built-in text here; the
// admin's saved version (if any) replaces the built-in one.

// format: "rich" = formatted text from the editor (HTML), "plain" = a simple paragraph, "none" = heading only.
export type SectionDefault = {
  key: string;
  label: string; // name shown in the admin
  heading: string;
  body: string;
  format: "rich" | "plain" | "none";
};

export async function getPageSections(page: string, defaults: SectionDefault[]): Promise<Record<string, SectionDefault>> {
  const saved = new Map<string, PageSection>();
  const supabase = createPublicClient();
  if (supabase) {
    const { data, error } = await supabase.from("page_sections").select("page, key, heading, body").eq("page", page);
    if (error) console.error("getPageSections failed:", error.message);
    (data as PageSection[] | null)?.forEach((row) => saved.set(row.key, row));
  }

  return Object.fromEntries(
    defaults.map((d) => {
      const row = saved.get(d.key);
      return [d.key, row ? { ...d, heading: row.heading || d.heading, body: row.body || d.body } : d];
    }),
  );
}
