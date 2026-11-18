import type { Metadata } from "next";
import EmptyContent from "@/components/EmptyContent";
import PageBanner from "@/components/PageBanner";
import ResultCard from "@/components/ResultCard";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { listPublishedResults } from "@/lib/cms/results";
import { breadcrumbSchema, pageTitle } from "@/lib/seo";
import { photos } from "@/lib/site";

// Results are added in /admin -> Recent Results. Saving there refreshes this page right away.
export const revalidate = 300;

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Results", href: "/case-results" },
];

export const metadata: Metadata = {
  title: pageTitle("Case Results"),
  description:
    "Recent settlements and verdicts won by Lighthouse Law APC for California workers and injury victims. Click any result to read how we got there.",
  alternates: { canonical: "/case-results" },
};

export default async function CaseResultsPage() {
  const results = await listPublishedResults();

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageBanner
        crumbs={crumbs}
        eyebrow="Case Results"
        title="Recent Results for Our Clients"
        lead="Every case is different, but these results show what preparation and persistence can achieve. Click any result to read the story behind it."
        image={photos.justice}
      />
      <section className="bg-shell py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {results.length === 0 ? (
            <EmptyContent
              title="Results coming soon"
              text="We're adding recent outcomes for our clients. To find out what your own case may be worth, call us for a free, confidential consultation."
            />
          ) : (
            <>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((result) => (
                  <li key={result.id}>
                    <ResultCard result={result} />
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-xs leading-5 text-stone">
                Prior results do not guarantee a similar outcome. Each case depends on its own facts and the law that applies.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
