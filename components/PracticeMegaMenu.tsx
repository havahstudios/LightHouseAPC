"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { practiceGroups } from "@/lib/content/practiceAreas";

type Props = {
  id: string;
  onNavigate: () => void;
};

// Dropdown under "Practice Areas": lists the two groups. Hovering a group opens
// its full list of services beside it (to the left, so it never runs off the screen).
export default function PracticeMegaMenu({ id, onNavigate }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = practiceGroups.find((g) => g.id === activeId);

  return (
    // The top padding bridges the gap between the menu button and the panel, so hovering doesn't drop.
    <div id={id} className="absolute top-full left-1/2 -translate-x-1/2 pt-5" onMouseLeave={() => setActiveId(null)}>
      <div className="animate-menu-in relative w-72 border-t-2 border-beacon bg-white shadow-[0_30px_60px_-30px_rgba(6,17,29,0.55)]">
        <ul>
          {practiceGroups.map((group) => {
            const selected = group.id === activeId;
            return (
              <li key={group.id}>
                <Link
                  href={`/practice-areas/${group.id}`}
                  onClick={onNavigate}
                  onMouseEnter={() => setActiveId(group.id)}
                  onFocus={() => setActiveId(group.id)}
                  aria-expanded={selected}
                  className={`group flex items-center justify-between gap-4 border-b border-line px-6 py-4 transition-colors ${
                    selected ? "bg-sand" : "hover:bg-sand"
                  }`}
                >
                  <Icon
                    name="chevronDown"
                    className={`size-4 shrink-0 rotate-90 transition-colors ${selected ? "text-beacon-dark" : "text-stone/60"}`}
                    strokeWidth={2}
                  />
                  <span className="flex-1 text-right">
                    <span className="block font-serif text-lg text-ink">{group.title}</span>
                    <span className="mt-0.5 block text-xs text-stone">{group.areas.length} practice areas</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/practice-areas"
          onClick={onNavigate}
          onMouseEnter={() => setActiveId(null)}
          className="flex items-center justify-end gap-2 px-6 py-4 text-sm font-medium text-beacon-dark transition-colors hover:text-ink"
        >
          View all practice areas <Icon name="arrowRight" className="size-4" />
        </Link>

        {/* Side panel: every service in the hovered group */}
        {active && (
          <div
            role="region"
            aria-label={`${active.title} practice areas`}
            className="animate-menu-in absolute -top-[2px] right-full w-[600px] border-t-2 border-beacon bg-white px-8 pt-6 pb-7 shadow-[0_30px_60px_-30px_rgba(6,17,29,0.55)]"
          >
            <div className="flex items-center justify-between gap-6 border-b border-line pb-4">
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-stone uppercase">{active.title}</p>
              <Link
                href={`/practice-areas/${active.id}`}
                onClick={onNavigate}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-beacon-dark"
              >
                Overview <Icon name="arrowRight" className="size-4" />
              </Link>
            </div>
            <ul className="mt-2 grid grid-cols-2 gap-x-8">
              {active.areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    onClick={onNavigate}
                    className="block border-b border-line/60 py-2 text-[0.9rem] text-ink transition-colors hover:text-beacon-dark"
                  >
                    {area.shortTitle ?? area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
