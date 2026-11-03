import type { MetadataRoute } from "next";
import { allPracticeSlugs } from "@/lib/content/services";
import { site } from "@/lib/site";

// How important each page is relative to the others (practice pages default to 0.8).
const priorities: Record<string, number> = {
  "": 1,
  "/practice-areas": 0.9,
  "/contact": 0.7,
  "/privacy-policy": 0.2,
  "/disclaimer": 0.2,
};

// sitemap.xml — the list of pages Google should crawl.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/practice-areas",
    ...allPracticeSlugs().map((slug) => `/practice-areas/${slug}`),
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: priorities[path] ?? 0.8,
  }));
}
