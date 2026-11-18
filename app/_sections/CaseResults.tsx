import ButtonLink from "@/components/ButtonLink";
import ResultCard from "@/components/ResultCard";
import { listPublishedResults } from "@/lib/cms/results";

// "Recent Results" on the homepage: the first three published results (set in /admin).
// Hidden until at least one result is published.
export default async function CaseResults() {
  const results = await listPublishedResults(3);
  if (results.length === 0) return null;

  return (
    <section className="bg-shell py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-4 text-xs font-semibold tracking-[0.22em] text-ink uppercase">
              <span className="h-px w-10 bg-beacon" />
              Recent Results
            </p>
            <h2 className="mt-5 max-w-xl text-4xl leading-tight font-light md:text-[2.75rem]">Results for Our Clients</h2>
          </div>
          <ButtonLink href="/case-results" variant="outline" className="!text-beacon-dark">
            View All Results
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {results.map((result) => (
            <li key={result.id}>
              <ResultCard result={result} />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-stone">Prior results do not guarantee a similar outcome.</p>
      </div>
    </section>
  );
}
