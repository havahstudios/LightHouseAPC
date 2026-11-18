import "server-only";
import type { AdminDb } from "@/lib/auth";
import { cleanHtml, isBlank, plainText } from "@/lib/richText";
import { slugify } from "@/lib/slug";
import type { BlogPost } from "./types";

// Admin-side blog actions. Row Level Security makes sure only admins can change anything.

const COLUMNS = "id, slug, title, summary, body, cover_image, practice_slug, published, published_at, updated_at";
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const IMAGE_TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

export async function listAllPosts(db: AdminDb): Promise<BlogPost[]> {
  const { data, error } = await db.from("blog_posts").select(COLUMNS).order("updated_at", { ascending: false });
  if (error) console.error("listAllPosts failed:", error.message);
  return (data as BlogPost[] | null) ?? [];
}

export async function getPost(db: AdminDb, id: string): Promise<BlogPost | null> {
  const { data } = await db.from("blog_posts").select(COLUMNS).eq("id", id).maybeSingle();
  return (data as BlogPost | null) ?? null;
}

export type PostInput = {
  id: string | null;
  title: string;
  slug: string;
  summary: string;
  body: string;
  practiceSlug: string | null;
  published: boolean;
  coverFile: File | null;
  removeCover: boolean;
};

export type SaveResult = { error: string } | { post: BlogPost; previousSlug: string | null };

// Checks the input, uploads a new cover photo if one was chosen, and saves the post.
export async function savePost(db: AdminDb, input: PostInput): Promise<SaveResult> {
  const title = input.title.trim();
  const slug = slugify(input.slug || title);
  const body = cleanHtml(input.body);
  if (!title) return { error: "Please add a title." };
  if (!slug) return { error: "Please add a web address (letters and numbers)." };
  if (isBlank(body)) return { error: "The post is empty. Please write something before saving." };

  const existing = input.id ? await getPost(db, input.id) : null;
  if (input.id && !existing) return { error: "This post no longer exists." };

  let coverImage = input.removeCover ? null : (existing?.cover_image ?? null);
  if (input.coverFile && input.coverFile.size > 0) {
    const ext = IMAGE_TYPES[input.coverFile.type];
    if (!ext) return { error: "The photo must be a JPG, PNG or WebP file." };
    if (input.coverFile.size > MAX_IMAGE_BYTES) return { error: "The photo is too large. Please use one under 5 MB." };
    const path = `${slug}-${Date.now()}.${ext}`;
    const upload = await db.storage.from("blog-images").upload(path, input.coverFile, { contentType: input.coverFile.type });
    if (upload.error) {
      console.error("cover upload failed:", upload.error.message);
      return { error: "The photo couldn't be uploaded. Please try again." };
    }
    coverImage = db.storage.from("blog-images").getPublicUrl(path).data.publicUrl;
  }

  const summary = (input.summary.trim() || plainText(body)).slice(0, 300);
  const row = {
    slug,
    title,
    summary,
    body,
    cover_image: coverImage,
    practice_slug: input.practiceSlug || null,
    published: input.published,
    // Keep the original publish date; set it the first time the post goes live.
    published_at: input.published ? (existing?.published_at ?? new Date().toISOString()) : (existing?.published_at ?? null),
  };

  const query = existing
    ? db.from("blog_posts").update(row).eq("id", existing.id).select(COLUMNS).single()
    : db.from("blog_posts").insert(row).select(COLUMNS).single();
  const { data, error } = await query;
  if (error) {
    console.error("savePost failed:", error.message);
    if (error.code === "23505") return { error: "Another post already uses this web address. Please change it." };
    return { error: "The post couldn't be saved. Please try again." };
  }
  return { post: data as BlogPost, previousSlug: existing && existing.slug !== slug ? existing.slug : null };
}

export async function deletePost(db: AdminDb, id: string): Promise<{ error?: string; slug?: string }> {
  const { data, error } = await db.from("blog_posts").delete().eq("id", id).select("slug").maybeSingle();
  if (error) {
    console.error("deletePost failed:", error.message);
    return { error: "The post couldn't be deleted. Please try again." };
  }
  return { slug: (data as { slug: string } | null)?.slug };
}
