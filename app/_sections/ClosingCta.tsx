import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import { photos, site } from "@/lib/site";

// Photo beside a final call to action.
export default function ClosingCta() {
  return (
    <section className="grid bg-shell lg:grid-cols-2">
      <div className="relative min-h-[380px] lg:min-h-[640px]">
        <Image src={photos.justice} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex items-center px-5 py-20 sm:px-8 md:py-28 lg:px-16 xl:pr-[max(4rem,calc((100vw-72rem)/2))]">
        <div>
          <h2 className="text-3xl leading-tight font-light md:text-[2.75rem]">
            Speak With an Experienced Los Angeles Employment Lawyer at {site.name} Today
          </h2>
          <p className="mt-8 text-[0.95rem] leading-8">
            Losing your job or dealing with mistreatment at work can turn your life upside down. Acting
            quickly matters: deadlines apply, and early advice can protect your options. Our team will
            review what happened, explain your rights in plain language and outline a clear path forward.
          </p>
          <p className="mt-6 text-[0.95rem] leading-8">
            You deserve a workplace that follows the law. Contact us today for a free, confidential
            consultation with a Los Angeles employment attorney.
          </p>
          <ButtonLink href="/contact" className="mt-10">
            Get a Free Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
