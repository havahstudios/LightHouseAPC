import type { MetadataRoute } from "next";
import { listPublishedPosts } from "@/lib/cms/blog";
import { listPublishedResults } from "@/lib/cms/results";
import { counties } from "@/lib/content/counties";
import { allPracticeSlugs } from "@/lib/content/services";
import { site } from "@/lib/site";

// How important each page is relative to the others (practice and county pages default to 0.8).
const priorities: Record<string, number> = {
  "": 1,
  "/practice-areas": 0.9,
  "/about": 0.7,
  "/areas-served": 0.8,
  "/blog": 0.7,
  "/case-results": 0.7,
  "/contact": 0.7,
  "/privacy-policy": 0.2,
  "/disclaimer": 0.2,
};

// Re-checked every 5 minutes so new blog posts and results show up (saving in /admin also refreshes it).
export const revalidate = 300;

// sitemap.xml — the list of pages Google should crawl.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    "",
    "/practice-areas",
    ...allPracticeSlugs().map((slug) => `/practice-areas/${slug}`),
    "/about",
    "/areas-served",
    ...counties.map((county) => `/areas-served/${county.slug}`),
    "/blog",
    "/case-results",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];
  const fixed: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: priorities[path] ?? 0.8,
  }));

  const [posts, results] = await Promise.all([listPublishedPosts(), listPublishedResults()]);
  const content: MetadataRoute.Sitemap = [
    ...posts.map((post) => ({ url: `${site.url}/blog/${post.slug}`, lastModified: new Date(post.updated_at), priority: 0.6 })),
    ...results.map((r) => ({ url: `${site.url}/case-results/${r.slug}`, lastModified: new Date(r.updated_at), priority: 0.5 })),
  ];
  return [...fixed, ...content];
}
