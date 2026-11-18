import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import RichText from "@/components/RichText";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { getPageSections } from "@/lib/cms/pageSections";
import { aboutDefaults } from "@/lib/content/about";
import { breadcrumbSchema, legalServiceSchema, pageTitle } from "@/lib/seo";
import { photos, site } from "@/lib/site";
import OurOffice from "./_components/OurOffice";
import Values from "./_components/Values";
import WhatWeHandle from "./_components/WhatWeHandle";

// General firm page. No attorney names or bios yet (client request).
// The text is editable in /admin -> About page; saving there refreshes this page.
export const revalidate = 300;

const description =
  "Lighthouse Law APC is a Beverly Hills trial firm representing California workers and accident victims in employment and personal injury cases.";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export const metadata: Metadata = {
  title: pageTitle("About Our California Law Firm"),
  description,
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const text = await getPageSections("about", aboutDefaults);
  const values = ["value-1", "value-2", "value-3", "value-4"].map((key) => text[key]);

  return (
    <>
      <JsonLd data={legalServiceSchema("/about", "Employment law and personal injury", description)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageBanner
        crumbs={crumbs}
        eyebrow="About Us"
        title={text.banner.heading}
        lead={text.banner.body}
        image={photos.skyline}
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl leading-tight font-light md:text-[2.5rem]">{text["who-we-are"].heading}</h2>
            <RichText html={text["who-we-are"].body} className="mt-6" />
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

      <Values heading={text["how-we-work"].heading} values={values} />
      <WhatWeHandle heading={text["what-we-handle"].heading} />
      <OurOffice heading={text["our-office"].heading} body={text["our-office"].body} />
    </>
  );
}
