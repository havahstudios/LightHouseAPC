import Link from "next/link";
import Icon from "@/components/Icon";
import type { PracticeArea } from "@/lib/content/practiceAreas";

// One clickable practice area in a list: name, one-line summary and an arrow button.
export default function PracticeRow({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="group -mx-3 flex items-center gap-5 rounded-sm border-b border-line px-3 py-5 transition-colors hover:bg-white"
    >
      <span className="min-w-0 flex-1">
        <span className="block font-serif text-lg leading-snug text-ink transition-colors group-hover:text-beacon-dark">
          {area.shortTitle ?? area.title}
        </span>
        <span className="mt-1 block truncate text-sm text-stone">{area.summary}</span>
      </span>
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-beacon-dark transition-colors group-hover:border-beacon group-hover:bg-beacon group-hover:text-ink"
        aria-hidden="true"
      >
        <Icon name="arrowRight" className="size-4" />
      </span>
    </Link>
  );
}
