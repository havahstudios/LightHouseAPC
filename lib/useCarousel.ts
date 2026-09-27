"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Shared slider logic: tracks which slide is first, works out how many fit on screen,
// and optionally advances on a timer (paused while the visitor hovers).
export function useCarousel(count: number, autoplayMs?: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(count - 1);
  const [paused, setPaused] = useState(false);

  // Measure how many slides fit, so we never scroll past the last one.
  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      const first = track?.firstElementChild as HTMLElement | null;
      if (!track || !first) return;
      const visible = Math.max(1, Math.round(track.clientWidth / first.clientWidth));
      const max = Math.max(0, count - visible);
      setMaxIndex(max);
      setIndex((i) => Math.min(i, max));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count]);

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  useEffect(() => {
    if (!autoplayMs || paused) return;
    const timer = setInterval(next, autoplayMs);
    return () => clearInterval(timer);
  }, [autoplayMs, paused, next]);

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  };

  // Each slide moves left by its own width × index.
  const slideStyle = {
    transform: `translateX(-${index * 100}%)`,
    transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const progress = (index + 1) / (maxIndex + 1);

  return { trackRef, next, prev, slideStyle, pauseHandlers, progress };
}
