import "server-only";
import type { AdminDb } from "@/lib/auth";
import { cleanHtml, plainText } from "@/lib/richText";
import type { SectionDefault } from "./pageSections";

// Saves every section of an editable page at once.
export async function savePageSections(
  db: AdminDb,
  page: string,
  sections: SectionDefault[],
  values: Record<string, { heading: string; body: string }>,
): Promise<string | null> {
  const rows = sections.map((section) => {
    const value = values[section.key] ?? { heading: "", body: "" };
    const body =
      section.format === "rich" ? cleanHtml(value.body) : section.format === "plain" ? plainText(value.body) : "";
    return { page, key: section.key, heading: value.heading.trim() || section.heading, body: body || section.body };
  });

  const { error } = await db.from("page_sections").upsert(rows, { onConflict: "page,key" });
  if (error) {
    console.error("savePageSections failed:", error.message);
    return "The changes couldn't be saved. Please try again.";
  }
  return null;
}
