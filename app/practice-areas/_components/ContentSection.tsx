import Icon from "@/components/Icon";
import type { ServiceSection } from "@/lib/content/services/types";

// One H2 section of a practice page: heading, paragraphs, optional checklist.
export default function ContentSection({ section }: { section: ServiceSection }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="text-2xl leading-snug font-normal md:text-[2rem]">{section.heading}</h2>
      {section.paragraphs.map((text) => (
        <p key={text.slice(0, 40)} className="mt-5 text-[1rem] leading-8">
          {text}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-6 space-y-3">
          {section.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-[1rem] leading-7">
              <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-beacon text-beacon-dark">
                <Icon name="check" className="size-3" strokeWidth={2.5} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.closing?.map((text) => (
        <p key={text.slice(0, 40)} className="mt-6 text-[1rem] leading-8">
          {text}
        </p>
      ))}
    </section>
  );
}
