import type { Metadata } from "next";
import ConsultationForm from "@/components/ConsultationForm";
import PageBanner from "@/components/PageBanner";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { breadcrumbSchema, legalServiceSchema, pageTitle } from "@/lib/seo";
import { photos, site } from "@/lib/site";
import ContactDetails from "./_components/ContactDetails";
import NextSteps from "./_components/NextSteps";

const description =
  "Contact Lighthouse Law APC for a free, confidential consultation with a Los Angeles employment and personal injury lawyer. Call (310) 487-0024.";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = {
  title: pageTitle("Contact Our Los Angeles Trial Lawyers"),
  description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={legalServiceSchema("/contact", "Employment law and personal injury", description)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageBanner
        crumbs={crumbs}
        eyebrow="Contact Us"
        title="Talk to a Los Angeles Trial Lawyer Today"
        lead="Whether you were wronged at work or hurt in an accident, we'll listen, explain your options and tell you honestly whether we can help. Your consultation is free and confidential."
        image={photos.office}
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="self-start rounded-[4px] bg-navy p-7 shadow-[0_30px_60px_-35px_rgba(6,17,29,0.6)] sm:p-10">
            <span className="mb-6 block h-[3px] w-12 bg-beacon" />
            <h2 className="text-3xl font-light text-white md:text-[2.25rem]">Request a Free Consultation</h2>
            <p className="mt-3 mb-9 text-sm leading-6 text-white/65">
              Tell us a little about what happened and how to reach you. We&apos;ll get back to you promptly.
            </p>
            <ConsultationForm source="contact" />
          </div>

          <div className="space-y-14">
            <ContactDetails />
            <NextSteps />
          </div>
        </div>
      </section>

      <section className="border-t-2 border-beacon">
        <iframe
          title={`${site.name} office map`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
          className="block h-[420px] w-full grayscale-[0.6]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
