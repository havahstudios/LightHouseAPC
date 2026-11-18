import ButtonLink from "@/components/ButtonLink";
import Link from "next/link";
import { counties } from "@/lib/content/counties";
import { site } from "@/lib/site";

// A few of the largest counties, shown as links on the About page.
const featured = ["los-angeles-county", "orange-county", "san-diego-county", "riverside-county", "san-bernardino-county", "fresno-county", "kern-county", "sacramento-county", "santa-clara-county", "alameda-county"];
const featuredCounties = featured.map((slug) => counties.find((c) => c.slug === slug)!);

// Office location and the counties the firm serves, with a call to action.
export default function OurOffice({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="bg-shell py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl leading-tight font-light md:text-[2.5rem]">{heading}</h2>
          <p className="mt-6 leading-8 text-stone">{body}</p>
          <address className="mt-8 border-l-2 border-beacon pl-5 leading-relaxed text-ink not-italic">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink href="/contact">Get a Free Consultation</ButtonLink>
            <a href={site.phoneHref} className="font-serif text-xl text-ink transition hover:text-beacon-dark">
              {site.phone}
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">Counties we serve</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {featuredCounties.map((county) => (
              <li key={county.slug}>
                <Link
                  href={`/areas-served/${county.slug}`}
                  className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors hover:border-beacon hover:text-beacon-dark"
                >
                  {county.name} County
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/areas-served" className="mt-6 inline-block border-b border-beacon pb-0.5 text-sm text-beacon-dark transition-colors hover:text-ink">
            See all 58 California counties
          </Link>
        </div>
      </div>
    </section>
  );
}
