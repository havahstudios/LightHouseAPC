import Icon from "@/components/Icon";
import BackgroundImage from "@/components/BackgroundImage";
import { whyHireReasons } from "@/lib/content/home";
import { photos, site } from "@/lib/site";

// Dark see-through card over a background photo, listing reasons to hire the firm.
export default function WhyHire() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <BackgroundImage src={photos.skyline} overlay="bg-ink/35" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="bg-navy/85 px-7 py-12 backdrop-blur-sm md:px-16 md:py-20">
            <h2 className="max-w-3xl text-3xl leading-tight font-light text-white md:text-[2.75rem]">
              Why Should I Hire {site.name} If I Was Treated Unfairly at Work?
            </h2>
            <div className="mt-10 max-w-3xl space-y-6 text-[0.95rem] leading-8 text-white/80">
              <p>
                When your employer has crossed the line, you need someone firmly on your side. {site.name}{" "}
                combines deep knowledge of California employment law with personal, hands-on attention, so
                you always know where your case stands.
              </p>
              <p>Workers across Los Angeles choose us because:</p>
              <ul className="space-y-5">
                {whyHireReasons.map((reason) => (
                  <li key={reason} className="flex gap-4">
                    <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-beacon text-beacon">
                      <Icon name="check" className="size-3" strokeWidth={2.5} />
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
              <p>
                Getting advice early can change how your case unfolds. Reach out today to schedule a free
                consultation with a Los Angeles employment attorney.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
