"use client";

import SliderArrows from "@/components/SliderArrows";
import Stars from "@/components/Stars";
import { testimonials } from "@/lib/content/home";
import { useCarousel } from "@/lib/useCarousel";

// Client review slider: two reviews at a time on desktop, one on phones.
export default function Testimonials() {
  const { trackRef, next, prev, slideStyle, pauseHandlers, progress } = useCarousel(testimonials.length, 7000);

  return (
    <section className="bg-shell py-20 md:py-28" {...pauseHandlers}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <h2 className="text-4xl font-light md:text-[2.75rem]">Client Testimonials</h2>
          <p className="mt-3 text-xs text-stone/80 italic">Sample reviews shown — to be replaced with real client reviews.</p>
        </div>

        <div className="mt-14 overflow-hidden">
          <div ref={trackRef} className="-mx-6 flex">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex shrink-0 basis-full flex-col px-6 md:basis-1/2" style={slideStyle}>
                <Stars />
                <blockquote className="mt-7 flex-1 font-serif text-[1.05rem] leading-8 font-light text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-xs font-semibold tracking-[0.18em] text-beacon-dark uppercase">
                  {t.name} <span className="text-stone/70">· {t.matter}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <SliderArrows onPrev={prev} onNext={next} progress={progress} />
        </div>
      </div>
    </section>
  );
}
