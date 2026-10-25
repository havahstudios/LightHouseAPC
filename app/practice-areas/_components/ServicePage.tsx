import ButtonLink from "@/components/ButtonLink";
import { areasServed } from "@/lib/content/home";
import { findArea, type ServicePageData } from "@/lib/content/services";
import type { ServiceSection } from "@/lib/content/services/types";
import { breadcrumbSchema, faqSchema, legalServiceSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import ContentSection from "./ContentSection";
import FaqSection from "./FaqSection";
import JsonLd from "./JsonLd";
import PracticeHero from "./PracticeHero";
import PracticeSidebar from "./PracticeSidebar";

const reasons: Record<string, string[]> = {
  "employment-law": [
    "We represent employees — never employers",
    "Free, confidential consultations",
    "Most cases handled on contingency: no attorney fees unless we recover money for you",
    "Trial lawyers who prepare every case as if it's going to court",
    "Clear communication and prompt answers to your questions",
  ],
  "personal-injury": [
    "We handle the insurance companies so you can focus on healing",
    "Free, confidential consultations",
    "No attorney fees unless we recover compensation for you",
    "Trial lawyers who prepare every case as if it's going to court",
    "Help connecting with doctors and specialists when you need care",
  ],
};

const process: Record<string, string[]> = {
  "employment-law": [
    "Free consultation: we listen, review your documents and explain your rights and deadlines.",
    "Investigation: we gather records, messages and witness accounts that support your claim.",
    "Agency filing: when required, we file with the Civil Rights Department, EEOC or Labor Commissioner.",
    "Negotiation: we present your claim to the employer and push for a fair resolution.",
    "Litigation and trial: if the employer won't be fair, we're prepared to take your case to court.",
  ],
  "personal-injury": [
    "Free consultation: we learn what happened and explain your options and deadlines.",
    "Investigation: we collect reports, photos, video, medical records and witness accounts.",
    "Treatment and documentation: we track your medical care and the full cost of your injuries.",
    "Negotiation: we handle the insurance companies and demand full and fair compensation.",
    "Litigation and trial: if insurers won't be fair, we're prepared to take your case to court.",
  ],
};

// Layout for a single practice area page (e.g. /practice-areas/wrongful-termination).
export default function ServicePage({ data }: { data: ServicePageData }) {
  const { area, group, content } = data;
  const path = `/practice-areas/${area.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: group.title, href: `/practice-areas/${group.id}` },
    { label: area.title, href: path },
  ];

  // Shared sections, written around this page's topic.
  const whyUs: ServiceSection = {
    heading: `Why choose ${site.name} for your ${area.title.toLowerCase()} case`,
    paragraphs: [
      `The lawyer you choose can shape how your case unfolds. ${site.name} is a trial law firm based in Beverly Hills, serving clients throughout Los Angeles.`,
    ],
    bullets: reasons[group.id],
  };
  const howItWorks: ServiceSection = {
    heading: `How your ${area.title.toLowerCase()} case works with us`,
    paragraphs: [
      "Every case is different, but most follow a similar path. We keep you informed at each step and explain your choices in plain language.",
    ],
    bullets: process[group.id],
  };
  const local: ServiceSection = {
    heading: "Serving Los Angeles, Beverly Hills and nearby communities",
    paragraphs: [
      `Our office at ${site.address.line1} in Beverly Hills is convenient for clients across Los Angeles County, including ${areasServed.slice(0, -1).join(", ")}, and ${areasServed.at(-1)}. We're also happy to meet by phone or video.`,
    ],
  };

  const relatedLinks = content.related
    .map((slug) => findArea(slug))
    .filter((a) => a !== undefined)
    .map((a) => ({ label: a.title, href: `/practice-areas/${a.slug}` }));

  return (
    <>
      <JsonLd data={legalServiceSchema(path, area.title, content.metaDescription)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(content.faqs)} />

      <PracticeHero crumbs={crumbs} eyebrow={group.title} title={content.h1} lead={content.intro[0]} />

      <div className="bg-shell py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article>
            {content.intro.slice(1).map((text) => (
              <p key={text.slice(0, 40)} className="mb-14 font-serif text-xl leading-9 font-light text-ink">
                {text}
              </p>
            ))}

            {content.sections.map((section) => (
              <ContentSection key={section.heading} section={section} />
            ))}
            <ContentSection section={howItWorks} />
            <ContentSection section={whyUs} />
            <ContentSection section={local} />

            <FaqSection title={`${area.title}: frequently asked questions`} faqs={content.faqs} />

            <div className="mt-16 bg-navy p-8 md:p-10">
              <p className="font-serif text-2xl font-light text-white md:text-3xl">
                Talk to a Los Angeles {group.id === "employment-law" ? "employment" : "personal injury"} lawyer today
              </p>
              <p className="mt-3 text-white/70">
                Free, confidential consultation. Call {site.phone} or send us a message.
              </p>
              <ButtonLink href="/contact" className="mt-7">
                Get a Free Consultation
              </ButtonLink>
            </div>
          </article>

          <PracticeSidebar
            linksTitle="Related practice areas"
            links={relatedLinks}
            allLink={{ label: `All ${group.title.toLowerCase()} services`, href: `/practice-areas/${group.id}` }}
          />
        </div>
      </div>
    </>
  );
}
