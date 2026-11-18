import { createPublicClient } from "@/lib/supabase/public";
import type { BlogPost } from "./types";

// Reading blog posts for the public site. Only published posts are visible (Row Level Security).

const COLUMNS = "id, slug, title, summary, body, cover_image, practice_slug, published, published_at, updated_at";

export async function listPublishedPosts(limit?: number): Promise<BlogPost[]> {
  const supabase = createPublicClient();
  if (!supabase) return [];
  let query = supabase.from("blog_posts").select(COLUMNS).eq("published", true).order("published_at", { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error) console.error("listPublishedPosts failed:", error.message);
  return (data as BlogPost[] | null) ?? [];
}

export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  const supabase = createPublicClient();
  if (!supabase) return null;
  const { data, error } = await supabase.from("blog_posts").select(COLUMNS).eq("slug", slug).eq("published", true).maybeSingle();
  if (error) console.error("getPublishedPost failed:", error.message);
  return (data as BlogPost | null) ?? null;
}
