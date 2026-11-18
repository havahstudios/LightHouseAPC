import Link from "next/link";
import { site } from "@/lib/site";

// Tower monogram logo: the lighthouse tower forms the letter L.
// Wide, letter-spaced "LIGHTHOUSE LAW, APC" with a smaller "Civil Litigation Attorneys" underneath.
export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const name = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-beacon" : "text-beacon-dark";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.logoName} home`}>
      <svg viewBox="0 0 60 66" className="h-11 w-10 shrink-0 text-beacon sm:h-12 sm:w-11" aria-hidden="true">
        <path d="M29.5 4.75 48 1M29.5 4.75 49 7.5M29.5 4.75 48 14" stroke="currentColor" strokeWidth="1.2" opacity=".7" />
        <rect x="23" y="2.5" width="6" height="4.5" fill="currentColor" />
        <path d="M22 8h8l2 42H20z" fill="currentColor" />
        <rect x="20" y="50" width="26" height="4.5" fill="currentColor" />
        <path d="M18 61q3.5-3 7 0t7 0 7 0 7 0" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-serif text-[0.98rem] font-normal tracking-[0.13em] whitespace-nowrap uppercase sm:text-[1.32rem] sm:tracking-[0.16em] ${name}`}
        >
          {site.logoName}
        </span>
        <span
          className={`mt-2 block font-sans text-[0.5rem] font-semibold tracking-[0.3em] whitespace-nowrap uppercase sm:text-[0.62rem] sm:tracking-[0.36em] ${sub}`}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
