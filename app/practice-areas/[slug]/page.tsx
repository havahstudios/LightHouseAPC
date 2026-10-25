import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPracticeSlugs, getPracticePage } from "@/lib/content/services";
import { pageTitle } from "@/lib/seo";
import { site } from "@/lib/site";
import HubPage from "../_components/HubPage";
import ServicePage from "../_components/ServicePage";

// Every practice page is built ahead of time (fast, and easy for Google to read).
export function generateStaticParams() {
  return allPracticeSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPracticePage(slug);
  if (!page) return {};

  const title = pageTitle(page.content.h1);
  const path = `/practice-areas/${slug}`;
  return {
    title,
    description: page.content.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: page.content.metaDescription,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function PracticePage({ params }: PageProps<"/practice-areas/[slug]">) {
  const { slug } = await params;
  const page = getPracticePage(slug);
  if (!page) notFound();

  return page.kind === "hub" ? <HubPage data={page} /> : <ServicePage data={page} />;
}
