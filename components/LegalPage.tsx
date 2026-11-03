import PageBanner from "@/components/PageBanner";
import type { LegalDoc } from "@/lib/content/legal";
import { photos } from "@/lib/site";

type Props = {
  doc: LegalDoc;
  path: string;
};

// Shared layout for the Privacy Policy and Disclaimer: banner, then an easy-to-read column of sections.
export default function LegalPage({ doc, path }: Props) {
  return (
    <>
      <PageBanner
        crumbs={[
          { label: "Home", href: "/" },
          { label: doc.title, href: path },
        ]}
        eyebrow="Legal"
        title={doc.title}
        image={photos.justice}
      />

      <section className="bg-shell py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-stone uppercase">Last updated {doc.updated}</p>
          <p className="mt-6 text-lg leading-8 text-ink">{doc.intro}</p>

          {doc.sections.map((section) => (
            <div key={section.heading} className="mt-12 border-t border-line pt-10">
              <h2 className="text-2xl font-light md:text-[1.75rem]">{section.heading}</h2>
              {section.paragraphs?.map((text) => (
                <p key={text} className="mt-4 leading-7 text-stone">
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-4 leading-7 text-stone">
                      <span className="mt-[0.7rem] h-px w-4 shrink-0 bg-beacon" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
