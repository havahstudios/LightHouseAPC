import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageBanner from "@/components/PageBanner";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import PracticeSidebar from "@/app/practice-areas/_components/PracticeSidebar";
import { counties, countiesInRegion, countyName, findCounty, industriesFor, type Region } from "@/lib/content/counties";
import { breadcrumbSchema, legalServiceSchema, pageTitle } from "@/lib/seo";
import { photos, site } from "@/lib/site";

// Banner photo for each region (placeholders until the firm has regional photography).
const regionPhotos: Record<Region, string> = {
  "Southern California": photos.palms,
  "Central Coast": photos.hero,
  "Central Valley": photos.justice,
  "Sacramento Valley": photos.justice,
  "Bay Area": photos.skyline,
  "Sierra Nevada": photos.justice,
  "Far North": photos.justice,
};

const injuryLinks = [
  { label: "Car accidents", slug: "car-accidents" },
  { label: "Truck accidents", slug: "truck-accidents" },
  { label: "Motorcycle accidents", slug: "motorcycle-accidents" },
  { label: "Pedestrian accidents", slug: "pedestrian-accidents" },
  { label: "Slip and fall injuries", slug: "slip-and-fall" },
  { label: "Wrongful death", slug: "wrongful-death" },
];

export function generateStaticParams() {
  return counties.map((county) => ({ county: county.slug }));
}

export const dynamicParams = false;

function describe(county: NonNullable<ReturnType<typeof findCounty>>) {
  const places = county.cities.slice(0, 3).join(", ");
  return `Employment and personal injury lawyers for ${places} and all of ${countyName(county)}. Wrongful termination, wage claims, harassment and injuries. Free consultation.`;
}

export async function generateMetadata({ params }: PageProps<"/areas-served/[county]">): Promise<Metadata> {
  const { county: slug } = await params;
  const county = findCounty(slug);
  if (!county) return {};
  return {
    title: pageTitle(`${countyName(county)} Employment Lawyer`),
    description: describe(county).slice(0, 155),
    alternates: { canonical: `/areas-served/${county.slug}` },
  };
}

// One California county: local industries and employers, common workplace issues, and how we help.
export default async function CountyPage({ params }: PageProps<"/areas-served/[county]">) {
  const { county: slug } = await params;
  const county = findCounty(slug);
  if (!county) notFound();

  const name = countyName(county);
  const path = `/areas-served/${county.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Areas We Serve", href: "/areas-served" },
    { label: name, href: path },
  ];
  const neighbors = countiesInRegion(county.region).filter((c) => c.slug !== county.slug);

  return (
    <>
      <JsonLd data={legalServiceSchema(path, "Employment law and personal injury", describe(county))} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageBanner
        crumbs={crumbs}
        eyebrow={`${county.region} · Areas We Serve`}
        title={`${name} Employment & Personal Injury Lawyers`}
        lead={`${site.name} stands up for workers and accident victims in ${county.cities.slice(0, 4).join(", ")} and communities throughout ${name}.`}
        image={regionPhotos[county.region]}
      />

      <section className="bg-shell py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="space-y-16">
            {/* Local economy + employers */}
            <div>
              <h2 className="text-3xl leading-tight font-light md:text-[2.25rem]">Working in {name}</h2>
              <p className="mt-6 leading-8 text-stone">{county.economy}</p>
              <p className="mt-5 leading-8 text-stone">
                Whoever you work for, California law gives you strong protections — including fair pay, safe working
                conditions and freedom from discrimination and retaliation. If an employer breaks those rules, we can
                help you hold them accountable.
              </p>

              <div className="mt-9 border border-line bg-white p-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-stone uppercase">Large employers in the area include</p>
                <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {county.employers.map((employer) => (
                    <li key={employer} className="flex gap-3 text-[0.95rem] text-ink">
                      <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-beacon" />
                      {employer}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-5 text-stone">
                  Listed only as examples of major local employers. Being listed does not mean an employer has done
                  anything wrong.
                </p>
              </div>
            </div>

            {/* Industries and their common workplace issues */}
            <div>
              <h2 className="text-3xl leading-tight font-light md:text-[2.25rem]">Common Workplace Issues by Industry</h2>
              <p className="mt-4 leading-8 text-stone">
                These are the problems we see most often in {name}&apos;s biggest industries. Click any issue to learn your rights.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {industriesFor(county).map((industry) => (
                  <div key={industry.label} className="border border-line border-t-2 border-t-beacon bg-white p-6">
                    <h3 className="font-serif text-xl text-ink">{industry.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone">{industry.description}</p>
                    <ul className="mt-4 space-y-1">
                      {industry.issues.map((issue) => (
                        <li key={issue.text}>
                          <Link
                            href={`/practice-areas/${issue.slug}`}
                            className="group flex items-start justify-between gap-3 border-b border-line/70 py-2 text-sm text-ink transition-colors hover:text-beacon-dark"
                          >
                            {issue.text}
                            <Icon name="arrowRight" className="mt-0.5 size-3.5 shrink-0 text-beacon opacity-60 transition-opacity group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal injury */}
            <div>
              <h2 className="text-3xl leading-tight font-light md:text-[2.25rem]">Hurt in an Accident in {name}?</h2>
              <p className="mt-6 leading-8 text-stone">
                We also represent people injured through someone else&apos;s carelessness on {name} roads, job sites and
                properties — and families who have lost a loved one.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {injuryLinks.map((link) => (
                  <li key={link.slug}>
                    <Link
                      href={`/practice-areas/${link.slug}`}
                      className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors hover:border-beacon hover:text-beacon-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cities */}
            <div>
              <h2 className="text-3xl leading-tight font-light md:text-[2.25rem]">Communities We Serve in {name}</h2>
              <p className="mt-6 leading-8 text-stone">
                We represent clients throughout {name}, including {county.cities.join(", ")}. Cases in the county are
                generally filed with the {name} Superior Court, and we meet clients in person, by phone or by video.
              </p>
            </div>
          </div>

          <PracticeSidebar
            linksTitle={`Other ${county.region} counties`}
            links={neighbors.map((c) => ({ label: countyName(c), href: `/areas-served/${c.slug}` }))}
            allLink={{ label: "All 58 counties", href: "/areas-served" }}
          />
        </div>
      </section>
    </>
  );
}
