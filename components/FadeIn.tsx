"use client";

import { useEffect, useRef, useState } from "react";

// Gently fades a section in (and lifts it slightly) the first time it scrolls into view.
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
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Once shown, no transform is left behind, so popups inside still position correctly.
  return (
    <div
      ref={ref}
      className={`transition-[opacity,translate] duration-1000 ease-out ${shown ? "opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {children}
    </div>
  );
}
