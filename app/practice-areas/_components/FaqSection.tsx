import type { ServiceFaq } from "@/lib/content/services/types";

// Frequently asked questions. Uses native <details> so answers open without extra code
// and stay readable by search engines.
export default function FaqSection({ title, faqs }: { title: string; faqs: ServiceFaq[] }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl leading-snug font-normal md:text-[2rem]">{title}</h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-lg text-ink [&::-webkit-details-marker]:hidden">
              <h3 className="font-serif text-lg font-normal">{faq.question}</h3>
              <span
                aria-hidden="true"
                className="mt-1 text-xl leading-none text-beacon-dark transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 pr-10 text-[0.95rem] leading-7">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
