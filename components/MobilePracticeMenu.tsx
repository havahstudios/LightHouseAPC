"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { practiceGroups } from "@/lib/content/practiceAreas";

// "Practice Areas" in the phone menu: expands into the two groups, then each group's services.
export default function MobilePracticeMenu({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div className="border-b border-white/10">
      <div className="flex items-center justify-between">
        <Link href="/practice-areas" onClick={onNavigate} className="block py-4 font-serif text-2xl font-light text-white">
          Practice Areas
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Hide practice areas" : "Show practice areas"}
          className="flex size-11 items-center justify-center text-white"
        >
          <Icon name="chevronDown" className={`size-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="animate-menu-in pb-4">
          {practiceGroups.map((group) => {
            const groupOpen = openGroup === group.id;
            return (
              <div key={group.id} className="border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setOpenGroup(groupOpen ? null : group.id)}
                  aria-expanded={groupOpen}
                  className="flex w-full items-center justify-between py-3 pl-3 text-left text-lg text-beacon"
                >
                  {group.title}
                  <Icon name="chevronDown" className={`size-4 transition-transform duration-200 ${groupOpen ? "rotate-180" : ""}`} />
                </button>
                {groupOpen && (
                  <ul className="animate-menu-in pb-3 pl-6">
                    <li>
                      <Link
                        href={`/practice-areas/${group.id}`}
                        onClick={onNavigate}
                        className="block py-2 text-sm font-semibold tracking-wide text-white"
                      >
                        {group.title} overview
                      </Link>
                    </li>
                    {group.areas.map((area) => (
                      <li key={area.slug}>
                        <Link href={`/practice-areas/${area.slug}`} onClick={onNavigate} className="block py-2 text-[0.95rem] text-white/75">
                          {area.shortTitle ?? area.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
