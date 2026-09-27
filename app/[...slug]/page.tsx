import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import { site } from "@/lib/site";

// Temporary "coming soon" pages for menu links until the inner pages are built.
const pages: Record<string, string> = {
  about: "About Us",
  "practice-areas": "Practice Areas",
  resources: "Resources",
  "areas-served": "Areas Served",
  contact: "Contact Us",
  "case-results": "Case Results",
  reviews: "Client Reviews",
  disclaimer: "Disclaimer",
  "privacy-policy": "Privacy Policy",
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug: [slug] }));
}

export const dynamicParams = false;

export default async function PlaceholderPage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const title = pages[slug.join("/")];
  if (!title) notFound();

  return (
    <section className="bg-ink pt-44 pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="mb-7 block h-[3px] w-16 bg-beacon" />
        <h1 className="text-4xl font-light text-white md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-white/75">
          This page is coming soon. In the meantime, call {site.phone} or send us a message below for a
          free, confidential consultation.
        </p>
        <ButtonLink href="/" className="mt-10">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
