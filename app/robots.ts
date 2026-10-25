import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// robots.txt — lets search engines crawl the site and points them to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
