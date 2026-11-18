import ButtonLink from "@/components/ButtonLink";
import { site } from "@/lib/site";

// Shown on the blog and results pages before anything has been published.
export default function EmptyContent({ title, text }: { title: string; text: string }) {
  return (
    <div className="mx-auto max-w-2xl rounded-[4px] border border-line bg-white px-8 py-14 text-center">
      <span className="mx-auto block h-[3px] w-12 bg-beacon" />
      <h2 className="mt-7 text-2xl font-light md:text-3xl">{title}</h2>
      <p className="mt-4 leading-7 text-stone">{text}</p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
        <ButtonLink href="/contact">Get a Free Consultation</ButtonLink>
        <a href={site.phoneHref} className="font-serif text-xl text-ink transition hover:text-beacon-dark">
          {site.phone}
        </a>
      </div>
    </div>
  );
}
