"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Stars from "@/components/Stars";
import { site } from "@/lib/site";

// Small floating rating card pinned to the bottom-left corner, like the reference site.
export default function GoogleRatingBadge() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-40 hidden items-center gap-3 rounded-md border-t-4 border-beacon bg-white py-3 pr-9 pl-4 shadow-[0_10px_40px_-10px_rgba(6,17,29,0.35)] sm:flex"
    >
      <span className="font-serif text-3xl font-medium text-ink">{site.google.rating}</span>
      <span className="leading-tight">
        <span className="block text-[0.7rem] font-semibold tracking-wide text-ink">Google Rating</span>
        <Stars className="size-3.5" />
        <span className="block text-[0.68rem] text-stone">Based on {site.google.reviewCount} reviews</span>
      </span>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute top-1.5 right-1.5 p-1 text-stone/60 transition hover:text-ink"
        aria-label="Hide rating"
      >
        <Icon name="close" className="size-3.5" />
      </button>
    </div>
  );
}
