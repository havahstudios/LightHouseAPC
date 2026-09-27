import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import { processSteps } from "@/lib/content/home";
import { photos } from "@/lib/site";

// Photo on one side (stays pinned while you scroll), step-by-step claim process on the other.
export default function Process() {
  return (
    <section className="grid bg-sand lg:grid-cols-2">
      <div className="min-h-[380px] lg:sticky lg:top-0 lg:h-screen">
        <div className="relative h-full min-h-[380px]">
          <Image src={photos.attorney} alt="Attorney placeholder photo" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>

      <div className="px-5 py-20 sm:px-8 md:py-28 lg:px-16 xl:pr-[max(4rem,calc((100vw-72rem)/2))]">
        <div>
          <h2 className="text-3xl leading-tight font-light md:text-[2.75rem]">
            What Is the California Employment Claim Process?
          </h2>
          <p className="mt-8 text-[0.95rem] leading-8">
            Most employment cases move through a series of stages. Knowing what to expect makes the process
            less stressful and helps you make confident decisions along the way.
          </p>
          <p className="mt-6 text-[0.95rem]">The process generally includes:</p>
        </div>

        <ol className="mt-8 space-y-7">
          {processSteps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="w-8 shrink-0 pt-0.5 font-serif text-lg text-beacon-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.95rem] leading-7">
                <strong className="font-semibold text-ink">{step.title}:</strong> {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div>
          <p className="mt-10 text-[0.95rem] leading-8">
            Every case follows its own path, but you won&apos;t navigate any of these steps alone.
          </p>
          <ButtonLink href="/contact" className="mt-10">
            Contact Us Today
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
