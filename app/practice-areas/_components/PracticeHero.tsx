import BackgroundImage from "@/components/BackgroundImage";
import ButtonLink from "@/components/ButtonLink";
import { darkScrim, site } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
};

// Banner at the top of every practice page: photo, breadcrumbs, H1, short lead and call buttons.
export default function PracticeHero({ crumbs, eyebrow, title, lead, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-16 md:pt-44 md:pb-20">
      <BackgroundImage src={image} overlay={darkScrim} priority />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Breadcrumbs crumbs={crumbs} />
        <p className="mt-10 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-beacon uppercase">
          <span className="h-px w-8 bg-beacon" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-light text-white md:text-[3.5rem]">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">{lead}</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink href="/contact">Get a Free Consultation</ButtonLink>
          <a href={site.phoneHref} className="font-serif text-xl text-white transition hover:text-beacon-light">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
