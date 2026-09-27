import Link from "next/link";
import { site } from "@/lib/site";

// Temporary text logo with a lighthouse mark. Swap for the real logo file once designed.
export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white" : "text-ink";

  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 40 44" className="h-11 w-10 shrink-0 text-beacon" aria-hidden="true">
        <path
          d="M20 2 4 8v12c0 10 7 18.5 16 22 9-3.5 16-12 16-22V8L20 2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M17 17h6l1.5 17h-9L17 17Z" fill="currentColor" />
        <path d="M16.5 14h7v3h-7z" fill="currentColor" opacity=".85" />
        <path d="M18 11.5h4l.5 2.5h-5z" fill="currentColor" />
        <path
          d="M24 14.5 32 12M24 15.5l8 1.5M16 14.5 8 12M16 15.5 8 17"
          stroke="currentColor"
          strokeWidth="1"
          opacity=".55"
        />
      </svg>
      <span className="leading-none">
        <span className={`block font-sans text-[1.05rem] font-semibold tracking-[0.14em] uppercase ${text}`}>
          {site.shortName}
        </span>
        <span
          className={`mt-1.5 block font-sans text-[0.62rem] tracking-[0.34em] uppercase ${
            tone === "light" ? "text-white/70" : "text-stone"
          }`}
        >
          APC · {site.tagline}
        </span>
      </span>
    </Link>
  );
}
