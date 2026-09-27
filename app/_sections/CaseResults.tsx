import ButtonLink from "@/components/ButtonLink";
import { caseResults } from "@/lib/content/home";

// Stacked list of past results with big serif headings.
export default function CaseResults() {
  return (
    <section className="bg-shell py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <p className="flex items-center gap-4 text-xs font-semibold tracking-[0.22em] text-ink uppercase">
            <span className="h-px w-10 bg-beacon" />
            Our results speak for themselves
          </p>
          <p className="mt-3 text-xs text-stone/80 italic">Sample results shown — to be replaced with the firm&apos;s real outcomes.</p>
        </div>

        <div className="mt-12 max-w-4xl space-y-14">
          {caseResults.map((result, i) => (
            <div key={result.title + i}>
              <h3 className="text-4xl font-light md:text-[3.25rem]">{result.title}</h3>
              <p className="mt-5 text-[0.95rem] leading-8">{result.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ButtonLink href="/case-results">View All Case Results</ButtonLink>
        </div>
      </div>
    </section>
  );
}
