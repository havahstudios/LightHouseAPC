import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackgroundImage from "@/components/BackgroundImage";
import ButtonLink from "@/components/ButtonLink";
import RichText from "@/components/RichText";
import Breadcrumbs from "@/app/practice-areas/_components/Breadcrumbs";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { getPublishedResult, listPublishedResults } from "@/lib/cms/results";
import { isBlank } from "@/lib/richText";
import { breadcrumbSchema, pageTitle } from "@/lib/seo";
import { darkScrim, photos, site } from "@/lib/site";

export const revalidate = 300;

export async function generateStaticParams() {
  const results = await listPublishedResults();
  return results.map((result) => ({ slug: result.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-results/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPublishedResult(slug);
  if (!result) return {};
  return {
    title: pageTitle(`${result.amount} ${result.case_type} Result`),
    description: result.summary.slice(0, 155),
    alternates: { canonical: `/case-results/${result.slug}` },
  };
}

// The story behind one result: what happened, what the firm did, and the outcome.
export default async function CaseResultPage({ params }: PageProps<"/case-results/[slug]">) {
  const { slug } = await params;
  const result = await getPublishedResult(slug);
  if (!result) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Case Results", href: "/case-results" },
    { label: `${result.amount} ${result.case_type}`, href: `/case-results/${result.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="relative overflow-hidden bg-ink pt-40 pb-16 md:pt-44 md:pb-20">
        <BackgroundImage src={photos.justice} overlay={darkScrim} priority />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Breadcrumbs crumbs={crumbs} />
          <p className="mt-10 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-beacon uppercase">
            <span className="h-px w-8 bg-beacon" />
            {result.case_type}
          </p>
          <h1 className="mt-5 font-serif text-5xl font-light text-white md:text-7xl">{result.amount}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">{result.summary}</p>
        </div>
      </section>

      <section className="bg-shell py-14 md:py-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          {!isBlank(result.body) && (
            <>
              <h2 className="text-3xl font-light md:text-[2.25rem]">How We Got This Result</h2>
              <RichText html={result.body} className="mt-6 text-[1.02rem]" />
            </>
          )}
          <p className="mt-10 border-l-2 border-beacon pl-5 text-sm leading-6 text-stone">
            Prior results do not guarantee a similar outcome. Each case depends on its own facts and the law that applies.
          </p>

          <div className="mt-12 rounded-[4px] bg-navy p-8 text-white md:p-10">
            <h2 className="text-2xl font-light md:text-3xl">Facing something similar?</h2>
            <p className="mt-3 leading-7 text-white/70">Tell us what happened. Your consultation is free and confidential.</p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <ButtonLink href="/contact">Get a Free Consultation</ButtonLink>
              <a href={site.phoneHref} className="font-serif text-xl text-white transition hover:text-beacon-light">
                {site.phone}
              </a>
            </div>
          </div>
          <Link href="/case-results" className="mt-10 inline-block text-sm text-beacon-dark hover:text-ink">
            ← All case results
          </Link>
        </article>
      </section>
    </>
  );
}
