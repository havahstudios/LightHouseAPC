import { notFound } from "next/navigation";
import Link from "next/link";
import BackgroundImage from "@/components/BackgroundImage";
import ButtonLink from "@/components/ButtonLink";
import Icon from "@/components/Icon";
import { practiceGroups } from "@/lib/content/practiceAreas";
import { darkScrim, photos, site } from "@/lib/site";

// Temporary "coming soon" pages for menu links until the inner pages are built.
const pages: Record<string, string> = {
  about: "About Us",
  resources: "Resources",
  "areas-served": "Areas Served",
  contact: "Contact Us",
  "case-results": "Case Results",
  reviews: "Client Reviews",
  disclaimer: "Disclaimer",
  "privacy-policy": "Privacy Policy",
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug: [slug] }));
}

export const dynamicParams = false;

export default async function PlaceholderPage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const title = pages[slug.join("/")];
  if (!title) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-44 pb-24">
        <BackgroundImage src={photos.hero} overlay={darkScrim} priority />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <span className="mb-7 block h-[3px] w-16 bg-beacon" />
          <h1 className="text-4xl font-light text-white md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            This page is coming soon. In the meantime, call {site.phone} or send us a message below for a
            free, confidential consultation.
          </p>
          <ButtonLink href="/" className="mt-10">
            Back to Home
          </ButtonLink>
        </div>
      </section>

      {/* Light break between the dark banner and the dark footer form */}
      <section className="bg-shell py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">Explore our practice areas</p>
          <ul className="mt-4 grid border-t border-line md:grid-cols-2 md:gap-x-14">
            {practiceGroups.map((group) => (
              <li key={group.id}>
                <Link
                  href={`/practice-areas/${group.id}`}
                  className="group flex items-center justify-between gap-5 border-b border-line py-5"
                >
                  <span className="font-serif text-xl text-ink transition-colors group-hover:text-beacon-dark">
                    {group.title}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-line text-beacon-dark transition-colors group-hover:border-beacon group-hover:bg-beacon group-hover:text-ink">
                    <Icon name="arrowRight" className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
