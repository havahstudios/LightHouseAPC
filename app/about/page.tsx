import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { breadcrumbSchema, legalServiceSchema, pageTitle } from "@/lib/seo";
import { photos, site } from "@/lib/site";
import OurOffice from "./_components/OurOffice";
import Values from "./_components/Values";
import WhatWeHandle from "./_components/WhatWeHandle";

// General firm page. No attorney names or bios yet (client request).

const description =
  "Lighthouse Law APC is a Beverly Hills trial firm representing Los Angeles workers and accident victims in employment and personal injury cases.";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export const metadata: Metadata = {
  title: pageTitle("About Our Los Angeles Law Firm"),
  description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={legalServiceSchema("/about", "Employment law and personal injury", description)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageBanner
        crumbs={crumbs}
        eyebrow="About Us"
        title="Trial Lawyers for Los Angeles Workers and Injury Victims"
        lead={`${site.name} stands up for people against employers, corporations and insurance companies, and guides them safely through one of the hardest times of their lives.`}
        image={photos.skyline}
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl leading-tight font-light md:text-[2.5rem]">Who We Are</h2>
            <div className="mt-6 space-y-5 leading-8 text-stone">
              <p>
                {site.name} is a Beverly Hills law firm focused on two things: protecting employees who have
                been treated unfairly at work, and helping people who have been hurt because of someone
                else&apos;s carelessness.
              </p>
              <p>
                Losing a job, facing harassment or recovering from an accident is overwhelming. The other side
                usually has a team of lawyers working to pay you as little as possible. We level the playing
                field — investigating what happened, gathering the evidence and fighting for the full
                compensation the law allows.
              </p>
              <p>
                Like a lighthouse, our job is to help you see the way forward. We explain your rights clearly,
                handle the legal work and stay with you from the first call to the final result.
              </p>
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[4px] lg:h-[560px]">
            <Image
              src={photos.office}
              alt={`${site.name} office`}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 h-[3px] w-24 bg-beacon" />
          </div>
        </div>
      </section>

      <Values />
      <WhatWeHandle />
      <OurOffice />
    </>
  );
}
