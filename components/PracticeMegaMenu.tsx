"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { practiceGroups } from "@/lib/content/practiceAreas";
import { site } from "@/lib/site";

type Props = {
  id: string;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

// Dropdown under "Practice Areas": pick a group on the left, see its services on the right.
export default function PracticeMegaMenu({ id, onNavigate, onMouseEnter, onMouseLeave }: Props) {
  const [activeId, setActiveId] = useState(practiceGroups[0].id);
  const active = practiceGroups.find((g) => g.id === activeId) ?? practiceGroups[0];

  return (
    <div
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="animate-menu-in absolute inset-x-0 top-full border-t-2 border-beacon bg-white shadow-[0_30px_60px_-30px_rgba(6,17,29,0.45)]"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[260px_minmax(0,1fr)] gap-12 px-8 py-10">
        {/* Left: choose a group */}
        <div className="border-r border-line pr-10">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-stone uppercase">Practice Areas</p>
          <div className="mt-4" role="tablist" aria-label="Practice area groups">
            {practiceGroups.map((group) => {
              const selected = group.id === active.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onMouseEnter={() => setActiveId(group.id)}
                  onFocus={() => setActiveId(group.id)}
                  onClick={() => setActiveId(group.id)}
                  className={`relative block w-full border-b border-line py-4 pl-4 text-left transition-colors ${
                    selected ? "text-ink" : "text-stone hover:text-ink"
                  }`}
                >
                  <span
                    className={`absolute top-3 bottom-3 left-0 w-[3px] bg-beacon transition-opacity ${selected ? "opacity-100" : "opacity-0"}`}
                    aria-hidden="true"
                  />
                  <span className="block font-serif text-xl">{group.title}</span>
                  <span className="mt-1 block text-xs text-stone">{group.areas.length} services</span>
                </button>
              );
            })}
          </div>
          <Link
            href="/practice-areas"
            onClick={onNavigate}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-beacon-dark transition-colors hover:text-ink"
          >
            View all practice areas <Icon name="arrowRight" className="size-4" />
          </Link>
          <p className="mt-8 text-xs leading-5 text-stone">
            Free, confidential consultation
            <br />
            <a href={site.phoneHref} className="font-serif text-lg text-ink transition-colors hover:text-beacon-dark">
              {site.phone}
            </a>
          </p>
        </div>

        {/* Right: the selected group's services */}
        <div role="tabpanel" aria-label={active.title}>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
            <p className="max-w-2xl text-sm leading-6 text-stone">{active.intro}</p>
            <Link
              href={`/practice-areas/${active.id}`}
              onClick={onNavigate}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-beacon-dark"
            >
              {active.title} overview <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
          <ul className="mt-4 grid grid-cols-3 gap-x-8">
            {active.areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  onClick={onNavigate}
                  className="group flex items-center justify-between gap-3 border-b border-line/60 py-2.5 text-[0.92rem] text-ink transition-colors hover:text-beacon-dark"
                >
                  <span>{area.shortTitle ?? area.title}</span>
                  <Icon
                    name="arrowRight"
                    className="size-3.5 shrink-0 text-beacon opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
