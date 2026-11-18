import { listPublishedPosts } from "@/lib/cms/blog";
import BlogPosts from "./BlogPosts";

// Loads the newest published blog posts for the homepage slider. Hidden until there's at least one.
export default async function LatestPosts() {
  const posts = await listPublishedPosts(6);
  if (posts.length === 0) return null;
  return <BlogPosts posts={posts} />;
}
