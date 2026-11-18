"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { savePageSections } from "@/lib/cms/pageSectionsAdmin";
import { aboutDefaults } from "@/lib/content/about";

export type AboutFormState = { error?: string; success?: string };

export async function saveAboutAction(_prev: AboutFormState, formData: FormData): Promise<AboutFormState> {
  console.log("[admin] save about: start");
  const { supabase } = await requireAdmin();
  const values = Object.fromEntries(
    aboutDefaults.map((s) => [
      s.key,
      { heading: String(formData.get(`${s.key}.heading`) ?? ""), body: String(formData.get(`${s.key}.body`) ?? "") },
    ]),
  );

  const error = await savePageSections(supabase, "about", aboutDefaults, values);
  if (error) return { error };
  revalidatePath("/about");
  revalidatePath("/admin/about"); // re-load the form with the saved text
  console.log("[admin] save about: done");
  return { success: "Saved. The About page is updated." };
}
