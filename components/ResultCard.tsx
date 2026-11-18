import Link from "next/link";
import Icon from "@/components/Icon";
import type { CaseResult } from "@/lib/cms/types";

// One case result: big dollar amount, case type and a short summary. Clicking opens the full story.
export default function ResultCard({ result }: { result: CaseResult }) {
  return (
    <Link
      href={`/case-results/${result.slug}`}
      className="group flex h-full flex-col border border-line border-t-2 border-t-beacon bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-beacon hover:shadow-[0_30px_60px_-40px_rgba(6,17,29,0.45)] md:p-8"
    >
      <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-stone uppercase">{result.case_type}</p>
      <p className="mt-4 font-serif text-4xl font-light text-ink transition-colors group-hover:text-beacon-dark md:text-[2.75rem]">
        {result.amount}
      </p>
      <p className="mt-5 flex-1 text-sm leading-7 text-stone">{result.summary}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-beacon-dark uppercase">
        Read the case story
        <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
