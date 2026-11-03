import ButtonLink from "@/components/ButtonLink";
import { areasServed } from "@/lib/content/home";
import { site } from "@/lib/site";

// Office location and the communities the firm serves, with a call to action.
export default function OurOffice() {
  return (
    <section className="bg-shell py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl leading-tight font-light md:text-[2.5rem]">
            Based in Beverly Hills, Serving All of Los Angeles
          </h2>
          <p className="mt-6 leading-8 text-stone">
            Our office sits on West Olympic Boulevard in Beverly Hills, minutes from Century City, West
            Hollywood and Downtown Los Angeles. We meet clients in person, by phone or by video, whichever is
            easiest for you.
          </p>
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
          <p className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">Communities we serve</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {["Los Angeles", ...areasServed].map((area) => (
              <li key={area} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
