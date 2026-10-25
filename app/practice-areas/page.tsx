import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import PracticeIcon from "@/components/PracticeIcon";
import { practiceGroups } from "@/lib/content/practiceAreas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Practice Areas | Employment Law & Personal Injury | ${site.name}`,
  description: `${site.name} represents Los Angeles workers and injury victims in employment law and personal injury cases. Free, confidential consultations.`,
  alternates: { canonical: "/practice-areas" },
};

// Every practice area, grouped into Employment Law and Personal Injury.
export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-ink pt-44 pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="mb-7 block h-[3px] w-16 bg-beacon" />
          <h1 className="text-4xl font-light text-white md:text-6xl">Practice Areas</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {site.name} is a trial law firm standing up for people across Los Angeles in two areas:
            workers mistreated by their employers, and people injured through someone else&apos;s
            carelessness.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {practiceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-[3px] border border-white/25 px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-beacon hover:text-beacon"
              >
                {group.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {practiceGroups.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 py-20 md:py-24 ${i % 2 === 0 ? "bg-shell" : "bg-sand"}`}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-light md:text-[2.75rem]">
                <Link href={`/practice-areas/${group.id}`} className="transition-colors hover:text-beacon-dark">
                  {group.title}
                </Link>
              </h2>
              <p className="mt-5 text-[0.95rem] leading-8">{group.intro}</p>
            </div>

            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="group flex h-full flex-col rounded-sm border border-line bg-white p-7 transition-colors hover:border-beacon"
                  >
                    <span className="flex items-center gap-3">
                      {area.icon && <PracticeIcon name={area.icon} className="size-7 shrink-0" />}
                      <h3 className="text-lg leading-snug font-normal transition-colors group-hover:text-beacon-dark">
                        {area.title}
                      </h3>
                    </span>
                    <span className="mt-3 flex-1 text-sm leading-7">{area.summary}</span>
                    <span className="mt-5 text-xs font-semibold tracking-[0.16em] text-beacon-dark uppercase">Learn more</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-navy py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-light text-white">Not sure which one fits your situation?</h2>
            <p className="mt-3 text-white/70">
              Tell us what happened. We&apos;ll explain your options in a free, confidential consultation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <ButtonLink href="/contact">Get a Free Consultation</ButtonLink>
            <a href={site.phoneHref} className="font-serif text-xl text-beacon transition hover:text-beacon-light">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
