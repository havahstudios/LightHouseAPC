import type { SectionDefault } from "@/lib/cms/pageSections";

type Props = {
  heading: string;
  values: SectionDefault[];
};

// "How we work" principles shown in a four-column grid on the About page.
export default function Values({ heading, values }: Props) {
  return (
    <section className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-xl text-3xl leading-tight font-light md:text-[2.5rem]">{heading}</h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value, i) => (
            <li key={value.key} className="border-t-2 border-beacon pt-6">
              <span className="font-serif text-sm text-beacon-dark">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-sans text-base font-semibold text-ink">{value.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-stone">{value.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
