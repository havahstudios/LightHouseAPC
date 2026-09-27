"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Modal from "@/components/Modal";
import PracticeIcon from "@/components/PracticeIcon";
import { practiceAreas, type PracticeArea } from "@/lib/content/practiceAreas";

// Grid of practice areas. Clicking one opens a popup with a short description.
export default function PracticeAreas() {
  const [selected, setSelected] = useState<PracticeArea | null>(null);

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[2fr_3fr]">
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

        <div>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {practiceAreas.map((area) => (
              <li key={area.title}>
                <button
                  type="button"
                  onClick={() => setSelected(area)}
                  className="group flex w-full items-center gap-5 border-b border-line py-5 text-left"
                >
                  <PracticeIcon name={area.icon} className="size-9" />
                  <span className="font-serif text-[1.05rem] text-ink transition-colors group-hover:text-beacon-dark">
                    {area.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <Link
            href="/practice-areas"
            className="mt-8 inline-block border-b border-beacon pb-1 text-sm text-beacon-dark transition hover:text-ink"
          >
            View all practice areas
          </Link>
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)} label={selected?.title ?? "Practice area"} className="max-w-2xl">
        {selected && (
          <div className="rounded-sm bg-white p-8 shadow-2xl md:p-12">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <PracticeIcon name={selected.icon} className="size-10" />
                <h3 className="text-2xl font-normal md:text-3xl">{selected.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="text-xs font-semibold tracking-[0.18em] text-stone uppercase transition hover:text-ink"
              >
                Close
              </button>
            </div>
            <p className="mt-6 text-[0.95rem] leading-8">{selected.summary}</p>
            <Link
              href="/practice-areas"
              className="mt-8 inline-block text-xs font-semibold tracking-[0.18em] text-beacon-dark uppercase transition hover:text-ink"
            >
              View practice area
            </Link>
          </div>
        )}
      </Modal>
    </section>
  );
}
