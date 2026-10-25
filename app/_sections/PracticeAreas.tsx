"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Modal from "@/components/Modal";
import PracticeIcon from "@/components/PracticeIcon";
import { practiceGroups, type PracticeArea, type PracticeGroup } from "@/lib/content/practiceAreas";

type Selection = { area: PracticeArea; group: PracticeGroup };

// Featured practice areas in two groups. Clicking one opens a popup with a short description.
export default function PracticeAreas() {
  const [selected, setSelected] = useState<Selection | null>(null);

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[2fr_5fr]">
        <div>
          <h2 className="text-5xl leading-[1.1] font-light md:text-[4rem]">
            Practice
            <br />
            Areas
          </h2>
          <ButtonLink href="/contact" className="mt-10">
            Get a Free Consultation
          </ButtonLink>
        </div>

        <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {practiceGroups.map((group) => (
            <div key={group.id}>
              <h3 className="flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.2em] text-ink uppercase">
                <span className="h-px w-8 bg-beacon" />
                {group.title}
              </h3>
              <ul className="mt-3">
                {group.areas
                  .filter((area) => area.icon)
                  .map((area) => (
                    <li key={area.title}>
                      <button
                        type="button"
                        onClick={() => setSelected({ area, group })}
                        className="group flex w-full items-center gap-5 border-b border-line py-4 text-left"
                      >
                        <PracticeIcon name={area.icon!} className="size-8 shrink-0" />
                        <span className="font-serif text-[1.05rem] text-ink transition-colors group-hover:text-beacon-dark">
                          {area.title}
                        </span>
                      </button>
                    </li>
                  ))}
              </ul>
              <Link
                href={`/practice-areas/${group.id}`}
                className="mt-6 inline-block border-b border-beacon pb-1 text-sm text-beacon-dark transition hover:text-ink"
              >
                All {group.title.toLowerCase()} services
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        label={selected?.area.title ?? "Practice area"}
        className="max-w-2xl"
      >
        {selected && (
          <div className="rounded-sm bg-white p-8 shadow-2xl md:p-12">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                {selected.area.icon && <PracticeIcon name={selected.area.icon} className="size-10" />}
                <h3 className="text-2xl font-normal md:text-3xl">{selected.area.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="text-xs font-semibold tracking-[0.18em] text-stone uppercase transition hover:text-ink"
              >
                Close
              </button>
            </div>
            <p className="mt-6 text-[0.95rem] leading-8">{selected.area.summary}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href={`/practice-areas/${selected.area.slug}`}
                className="text-xs font-semibold tracking-[0.18em] text-beacon-dark uppercase transition hover:text-ink"
              >
                Learn more about {selected.area.title.toLowerCase()}
              </Link>
              <Link
                href={`/practice-areas/${selected.group.id}`}
                className="text-xs font-semibold tracking-[0.18em] text-stone uppercase transition hover:text-ink"
              >
                All {selected.group.title.toLowerCase()} services
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
