import Link from "next/link";
import { site } from "@/lib/site";

// Short welcome text right under the hero, with the circled checkmark from the reference.
export default function Intro() {
  return (
    <section className="relative bg-shell pt-4 pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <svg viewBox="0 0 64 64" className="-mt-10 mb-8 size-16 md:-mt-16" aria-hidden="true">
            <circle cx="30" cy="32" r="26" fill="none" className="stroke-ink" strokeWidth="1.5" />
            <path d="M52 10a30 30 0 0 1 0 44" fill="none" className="stroke-ink" strokeWidth="1.5" />
            <path d="m19 32 8 8 15-17" fill="none" className="stroke-beacon" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h2 className="max-w-xl text-4xl leading-tight font-light md:text-[2.75rem]">
            Los Angeles Employment Lawyer
          </h2>
        </div>

        <div className="mt-10 grid gap-8 text-[0.95rem] leading-8 md:grid-cols-2 md:gap-16">
          <div>
            <p>
              If you were fired, harassed, discriminated against or denied the wages you earned, call{" "}
              <a href={site.phoneHref} className="text-beacon-dark hover:underline">
                {site.name} at {site.phone}
              </a>{" "}
              for a free, confidential consultation. Employment claims have strict deadlines, and evidence
              like emails and pay records can disappear quickly. The sooner you speak with a Los Angeles
              employment lawyer, the more we can do to protect your case.
            </p>
          </div>
          <div>
            <p>
              Standing up to an employer can feel intimidating, especially when your income is on the
              line. You don&apos;t have to do it alone. Our team can explain your rights, gather the proof
              you need and push back against a company&apos;s lawyers so you can focus on moving forward.{" "}
              <Link href="/contact" className="text-beacon-dark hover:underline">
                Contact our Los Angeles employment law office
              </Link>{" "}
              today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
