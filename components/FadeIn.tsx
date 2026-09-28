"use client";

import { useEffect, useRef, useState } from "react";

// Softly fades a section in (no movement) the first time it scrolls into view.
export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-opacity duration-700 ease-out ${shown ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}
