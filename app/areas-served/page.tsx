import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { countiesInRegion, regions } from "@/lib/content/counties";
import { breadcrumbSchema, pageTitle } from "@/lib/seo";
import { photos } from "@/lib/site";
import CountyDirectory from "./_components/CountyDirectory";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Areas We Serve", href: "/areas-served" },
];

export const metadata: Metadata = {
  title: pageTitle("Areas We Serve: All 58 California Counties"),
  description:
    "Lighthouse Law APC represents workers and injury victims in all 58 California counties. Find your county, its major industries and how we can help.",
  alternates: { canonical: "/areas-served" },
};

export default function AreasServedPage() {
  const groups = regions.map((region) => ({ region, counties: countiesInRegion(region) }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageBanner
        crumbs={crumbs}
        eyebrow="Areas We Serve"
        title="Serving Workers and Injury Victims in All 58 California Counties"
        lead="From the farms of the Central Valley to the warehouses of the Inland Empire and the tech campuses of Silicon Valley, every industry has its own risks. Find your county to see the local employers and workplace issues we help with."
        image={photos.palms}
      />
      <section className="bg-shell py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CountyDirectory groups={groups} />
          <p className="mt-16 max-w-3xl text-xs leading-5 text-stone">
            Employers are listed only as examples of major employers in each area, based on public information. Being
            listed does not mean an employer has done anything wrong.
          </p>
        </div>
      </section>
    </>
  );
}
