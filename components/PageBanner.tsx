import BackgroundImage from "@/components/BackgroundImage";
import Breadcrumbs, { type Crumb } from "@/app/practice-areas/_components/Breadcrumbs";
import { darkScrim } from "@/lib/site";

type Props = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
};

// Photo banner at the top of inner pages (contact, legal pages): breadcrumbs, H1 and a short lead.
export default function PageBanner({ crumbs, eyebrow, title, lead, image }: Props) {
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
        {lead && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">{lead}</p>}
      </div>
    </section>
  );
}
