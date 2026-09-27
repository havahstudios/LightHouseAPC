import Link from "next/link";
import { site } from "@/lib/site";

// Tower monogram logo: the lighthouse tower forms the letter L.
export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const name = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-beacon" : "text-beacon-dark";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 60 66" className="h-12 w-11 shrink-0 text-beacon" aria-hidden="true">
        <path d="M29.5 4.75 48 1M29.5 4.75 49 7.5M29.5 4.75 48 14" stroke="currentColor" strokeWidth="1.2" opacity=".7" />
        <rect x="23" y="2.5" width="6" height="4.5" fill="currentColor" />
        <path d="M22 8h8l2 42H20z" fill="currentColor" />
        <rect x="20" y="50" width="26" height="4.5" fill="currentColor" />
        <path d="M18 61q3.5-3 7 0t7 0 7 0 7 0" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="leading-none">
        <span className={`block font-serif text-[1.55rem] font-light ${name}`}>{site.shortName}</span>
        <span className={`mt-1.5 block font-sans text-[0.58rem] font-medium tracking-[0.3em] uppercase ${sub}`}>
          APC · {site.tagline}
        </span>
      </span>
    </Link>
  );
}
