import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";
import FooterLinks from "@/components/FooterLinks";
import Icon, { type IconName } from "@/components/Icon";
import Logo from "@/components/Logo";
import { areasServed } from "@/lib/content/home";
import { site } from "@/lib/site";

const aboutLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Attorneys", href: "/about" },
  { label: "Case Results", href: "/case-results" },
  { label: "Client Reviews", href: "/reviews" },
  { label: "Areas We Serve", href: "/areas-served" },
];

const resourceLinks = [
  { label: "Blog", href: "/resources" },
  { label: "FAQ", href: "/resources" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact", href: "/contact" },
];

const socials: { name: IconName; label: string }[] = [
  { name: "facebook", label: "Facebook" },
  { name: "linkedin", label: "LinkedIn" },
  { name: "instagram", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer>
      {/* Consultation form */}
      <section className="bg-ink py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div>
            <h2 className="mb-10 text-3xl font-light text-white md:text-[2.5rem]">
              Get a Free Consultation, 24/7
            </h2>
            <ConsultationForm source="footer" />
          </div>
        </div>
      </section>

      {/* Contact details + map */}
      <section className="grid bg-shell lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="bg-navy px-5 py-16 sm:px-8 lg:py-20 lg:pr-12 lg:pl-[max(2rem,calc((100vw-72rem)/2))]">
          <div>
            <h2 className="text-3xl font-light text-white md:text-[2.5rem] md:leading-tight">
              Contact Us
              <br />
              Today
            </h2>
            <p className="mt-8 font-serif text-lg text-white">Los Angeles, CA</p>
            <address className="mt-3 text-sm leading-relaxed text-white/70 not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
            </address>
            <p className="mt-5 text-sm text-white/70">
              Phone:{" "}
              <a href={site.phoneHref} className="text-beacon transition hover:text-beacon-light">
                {site.phone}
              </a>
            </p>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block border-b border-beacon pb-1 text-sm text-beacon transition hover:text-beacon-light"
            >
              Get Directions
            </a>
            <div className="mt-10 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-[3px] bg-beacon text-ink transition-colors hover:bg-beacon-light"
                >
                  <Icon name={s.name} className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="min-h-[360px]">
          <iframe
            title={`${site.name} office map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            className="h-full min-h-[360px] w-full grayscale-[0.6]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* About + areas served */}
      <section className="bg-shell py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="border-b border-ink pb-4 font-sans text-sm font-semibold tracking-[0.12em] uppercase">
              About Our Firm
            </h3>
            <p className="mt-6 text-sm leading-7">
              {site.name} represents employees throughout Los Angeles and California who have been
              wronged at work. We know how stressful it is to lose a job or feel unsafe on the job, so we
              offer clear guidance, fast communication and determined advocacy from the first call to the
              final result. As trial lawyers, we are prepared to take your case all the way to a verdict.
            </p>
          </div>
          <div>
            <h3 className="border-b border-ink pb-4 font-sans text-sm font-semibold tracking-[0.12em] uppercase">
              Areas We Serve
            </h3>
            <p className="mt-6 text-sm leading-7">
              {site.name} serves Los Angeles and nearby communities, including{" "}
              {areasServed.slice(0, -1).join(", ")}, and {areasServed.at(-1)}.
            </p>
          </div>
        </div>
      </section>

      {/* Link columns */}
      <section className="border-t border-line bg-sand py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-6">
              Standing up for California workers. Free, confidential consultations.
            </p>
          </div>
          <FooterLinks title="About Us" links={aboutLinks} />
          <FooterLinks title="Resources" links={resourceLinks} />
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-line px-5 pt-6 text-xs text-stone sm:px-8">
          <p>
            <Link href="/disclaimer" className="hover:text-ink">Disclaimer</Link> |{" "}
            <Link href="/privacy-policy" className="hover:text-ink">Privacy Policy</Link> | ©{" "}
            {new Date().getFullYear()} {site.name}. All Rights Reserved. Attorney Advertising. Prior results
            do not guarantee a similar outcome.
          </p>
        </div>
      </section>
    </footer>
  );
}
