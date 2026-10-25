import Link from "next/link";
import PracticeIcon from "@/components/PracticeIcon";
import type { HubPageData } from "@/lib/content/services";
import { practiceGroups } from "@/lib/content/practiceAreas";
import { breadcrumbSchema, faqSchema, legalServiceSchema } from "@/lib/seo";
import ContentSection from "./ContentSection";
import FaqSection from "./FaqSection";
import JsonLd from "./JsonLd";
import PracticeHero from "./PracticeHero";
import PracticeSidebar from "./PracticeSidebar";

// Layout for a group page (/practice-areas/employment-law or /practice-areas/personal-injury).
export default function HubPage({ data }: { data: HubPageData }) {
  const { group, content } = data;
  const path = `/practice-areas/${group.id}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: group.title, href: path },
  ];
  const otherGroups = practiceGroups.filter((g) => g.id !== group.id);

  return (
    <>
      <JsonLd data={legalServiceSchema(path, group.title, content.metaDescription)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(content.faqs)} />

      <PracticeHero crumbs={crumbs} eyebrow="Practice Areas" title={content.h1} lead={content.intro[0]} />

      <div className="bg-shell py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article>
            {content.intro.slice(1).map((text) => (
              <p key={text.slice(0, 40)} className="mb-14 font-serif text-xl leading-9 font-light text-ink">
                {text}
              </p>
            ))}

            <section>
              <h2 className="text-2xl leading-snug font-normal md:text-[2rem]">Our {group.title.toLowerCase()} services</h2>
              <p className="mt-5 text-[1rem] leading-8">{group.intro}</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {group.areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="group flex h-full flex-col border border-line bg-white p-6 transition-colors hover:border-beacon"
                    >
                      <span className="flex items-center gap-3">
                        {area.icon && <PracticeIcon name={area.icon} className="size-7 shrink-0" />}
                        <span className="font-serif text-lg text-ink transition-colors group-hover:text-beacon-dark">
                          {area.title}
                        </span>
                      </span>
                      <span className="mt-3 flex-1 text-sm leading-6">{area.summary}</span>
                      <span className="mt-4 text-xs font-semibold tracking-[0.16em] text-beacon-dark uppercase">
                        Learn more
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-14">
              {content.sections.map((section) => (
                <ContentSection key={section.heading} section={section} />
              ))}
            </div>

            <FaqSection title={`${group.title}: frequently asked questions`} faqs={content.faqs} />
          </article>

          <PracticeSidebar
            linksTitle="Also practicing"
            links={otherGroups.map((g) => ({ label: g.title, href: `/practice-areas/${g.id}` }))}
            allLink={{ label: "View all practice areas", href: "/practice-areas" }}
          />
        </div>
      </div>
    </>
  );
}
