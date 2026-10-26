import type { Metadata } from "next";
import Image from "next/image";
import { safeNextPath } from "@/lib/siteAccess";
import { photos, site } from "@/lib/site";
import UnlockForm from "./UnlockForm";

export const metadata: Metadata = {
  title: `Private Preview | ${site.name}`,
  robots: { index: false, follow: false },
};

// Branded password page shown while the site is in private preview.
export default async function UnlockPage({ searchParams }: PageProps<"/unlock">) {
  const { next } = await searchParams;

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-ink px-5 py-16">
      {/* Drifting Los Angeles skyline, heavily darkened */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={photos.hero} alt="" fill priority sizes="100vw" className="animate-slow-drift object-cover opacity-50" />
        <div className="absolute inset-0 bg-ink/75" />
      </div>

      <div className="relative z-10 w-full max-w-lg text-center">
        {/* Lighthouse mark with a sweeping beam of light */}
        <div className="relative mx-auto h-[88px] w-20">
          <div
            className="animate-beam-sweep pointer-events-none absolute top-[6px] left-[35px] h-[280px] w-[1400px] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <svg viewBox="0 0 1400 280" className="h-full w-full">
              <defs>
                <linearGradient id="beam" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" style={{ stopColor: "var(--color-beacon)", stopOpacity: 0 }} />
                  <stop offset="0.5" style={{ stopColor: "var(--color-beacon-light)", stopOpacity: 0.35 }} />
                  <stop offset="1" style={{ stopColor: "var(--color-beacon)", stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <polygon points="700,140 0,40 0,240" fill="url(#beam)" />
              <polygon points="700,140 1400,40 1400,240" fill="url(#beam)" />
            </svg>
          </div>
          <svg viewBox="0 0 60 66" className="relative h-[88px] w-20 text-beacon" aria-hidden="true">
            <rect x="23" y="2.5" width="6" height="4.5" fill="currentColor" />
            <path d="M22 8h8l2 42H20z" fill="currentColor" />
            <rect x="20" y="50" width="26" height="4.5" fill="currentColor" />
            <path d="M18 61q3.5-3 7 0t7 0 7 0 7 0" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>

        <p className="mt-8 font-serif text-2xl font-light text-white">{site.shortName}</p>
        <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.32em] text-white/70 uppercase">Trial Lawyers</p>
        <p className="mt-1 text-[0.62rem] font-medium tracking-[0.32em] text-beacon uppercase">APC · Los Angeles</p>

        <span className="mx-auto mt-10 block h-px w-12 bg-beacon/60" />
        <h1 className="mt-10 text-4xl font-light text-white md:text-5xl">Private Preview</h1>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-white/70">
          Our new website is almost ready. Enter the password to take a look.
        </p>

        <UnlockForm next={safeNextPath(next)} />
      </div>
    </section>
  );
}
