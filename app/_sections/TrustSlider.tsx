"use client";

import SliderArrows from "@/components/SliderArrows";
import { trustBadges } from "@/lib/content/home";
import { useCarousel } from "@/lib/useCarousel";

// Auto-sliding row of award / media badges. Placeholders until real badges are provided.
export default function TrustSlider() {
  const { trackRef, next, prev, slideStyle, pauseHandlers, progress } = useCarousel(trustBadges.length, 3200);

  return (
    <section className="bg-white py-14" aria-label="Awards and recognition" {...pauseHandlers}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex">
            {trustBadges.map((badge) => (
              <div key={badge} className="shrink-0 basis-1/2 px-3 md:basis-1/4" style={slideStyle}>
                <div className="flex h-28 flex-col items-center justify-center gap-2 rounded-sm border border-line bg-shell px-4 text-center">
                  <svg viewBox="0 0 24 24" className="size-7 text-beacon" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                    <circle cx="12" cy="9" r="6" />
                    <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
                  </svg>
                  <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-stone uppercase">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <SliderArrows onPrev={prev} onNext={next} progress={progress} />
        </div>
      </div>
    </section>
  );
}
