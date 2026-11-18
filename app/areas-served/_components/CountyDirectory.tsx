"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { industries } from "@/lib/content/counties/industries";
import type { County, Region } from "@/lib/content/counties";

type Props = {
  groups: { region: Region; counties: County[] }[];
};

// All 58 counties grouped by region, with a search box that matches county names,
// cities, industries and employers (e.g. "Fresno", "Foster Farms", "warehouse").
export default function CountyDirectory({ groups }: Props) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const matches = (county: County) =>
    !q ||
    [county.name, county.seat, ...county.cities, ...county.employers, ...county.industries.map((key) => industries[key].label)]
      .join(" ")
      .toLowerCase()
      .includes(q);

  const visible = groups
    .map((group) => ({ ...group, counties: group.counties.filter(matches) }))
    .filter((group) => group.counties.length > 0);

  return (
    <>
      <div className="flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div className="w-full max-w-md">
          <label htmlFor="county-search" className="text-xs font-semibold tracking-[0.18em] text-stone uppercase">
            Find your county
          </label>
          <input
            id="county-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="County, city, industry or employer"
            className="mt-3 w-full rounded-[3px] border border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink outline-none transition placeholder:text-stone/60 focus:border-beacon focus:ring-2 focus:ring-beacon/20"
          />
        </div>
        <nav aria-label="Jump to a region" className="flex flex-wrap gap-2">
          {groups.map((group) => (
            <a
              key={group.region}
              href={`#${group.region.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs text-ink transition-colors hover:border-beacon hover:text-beacon-dark"
            >
              {group.region}
            </a>
          ))}
        </nav>
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-stone">
          No counties match “{query}”. Try a city or county name — we serve all of California.
        </p>
      )}

      {visible.map((group) => (
        <section key={group.region} id={group.region.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-28 pt-14">
          <h2 className="flex items-center gap-4 text-2xl font-light md:text-3xl">
            {group.region}
            <span className="text-sm text-stone">{group.counties.length}</span>
          </h2>
          <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.counties.map((county) => (
              <li key={county.slug}>
                <Link
                  href={`/areas-served/${county.slug}`}
                  className="group flex h-full flex-col border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-beacon hover:shadow-[0_24px_50px_-35px_rgba(6,17,29,0.45)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-ink transition-colors group-hover:text-beacon-dark">{county.name} County</h3>
                      <p className="mt-1 text-xs text-stone">County seat: {county.seat}</p>
                    </div>
                    <Icon name="arrowRight" className="mt-1.5 size-4 shrink-0 text-beacon transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-5 text-[0.68rem] font-semibold tracking-[0.16em] text-stone uppercase">Major industries</p>
                  <p className="mt-1.5 text-sm leading-6 text-ink">
                    {county.industries.slice(0, 3).map((key) => industries[key].label).join(" · ")}
                  </p>
                  <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.16em] text-stone uppercase">Large employers include</p>
                  <p className="mt-1.5 text-sm leading-6 text-stone">{county.employers.slice(0, 3).join(", ")}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
