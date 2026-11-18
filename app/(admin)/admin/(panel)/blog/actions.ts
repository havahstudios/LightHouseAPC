"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { deletePost, savePost } from "@/lib/cms/blogAdmin";

export type PostFormState = { error?: string; success?: string };

// Public pages that show blog posts and need refreshing after a change.
function refreshBlogPages(...slugs: (string | null | undefined)[]) {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  slugs.forEach((slug) => slug && revalidatePath(`/blog/${slug}`));
}

export async function savePostAction(_prev: PostFormState, formData: FormData): Promise<PostFormState> {
  console.log("[admin] save post: start");
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "") || null;
  const cover = formData.get("cover");

  const result = await savePost(supabase, {
    id,
    title: String(formData.get("title") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    summary: String(formData.get("summary") ?? ""),
    body: String(formData.get("body") ?? ""),
    practiceSlug: String(formData.get("practice_slug") ?? "") || null,
    published: formData.get("published") === "on",
    coverFile: cover instanceof File ? cover : null,
    removeCover: formData.get("remove_cover") === "on",
  });
  if ("error" in result) {
    console.log("[admin] save post: failed");
    return { error: result.error };
  }

  refreshBlogPages(result.post.slug, result.previousSlug);
  // Refresh this edit page's data (e.g. the cover photo preview).
  revalidatePath(`/admin/blog/${result.post.id}`);
  console.log("[admin] save post: done", result.post.slug);
  if (!id) redirect(`/admin/blog/${result.post.id}?saved=1`);
  return { success: result.post.published ? "Saved. The post is live on the website." : "Saved as a draft (not visible on the website)." };
}

export async function deletePostAction(formData: FormData) {
  console.log("[admin] delete post: start");
  const { supabase } = await requireAdmin();
  const result = await deletePost(supabase, String(formData.get("id") ?? ""));
  if (!result.error) refreshBlogPages(result.slug);
  console.log("[admin] delete post: done");
  redirect("/admin/blog");
}
