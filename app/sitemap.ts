import type { MetadataRoute } from "next";
import { allPracticeSlugs } from "@/lib/content/services";
import { site } from "@/lib/site";

// sitemap.xml — the list of pages Google should crawl.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/practice-areas", ...allPracticeSlugs().map((slug) => `/practice-areas/${slug}`)];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/practice-areas" ? 0.9 : 0.8,
  }));
}
