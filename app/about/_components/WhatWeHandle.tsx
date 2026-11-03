import Link from "next/link";
import BackgroundImage from "@/components/BackgroundImage";
import Icon from "@/components/Icon";
import { practiceGroups } from "@/lib/content/practiceAreas";
import { darkScrim, photos } from "@/lib/site";

// The firm's two practice groups, each linking to its overview page, over a darkened photo.
export default function WhatWeHandle() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <BackgroundImage src={photos.palms} overlay={darkScrim} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl font-light text-white md:text-[2.5rem]">What We Handle</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {practiceGroups.map((group) => (
            <Link
              key={group.id}
              href={`/practice-areas/${group.id}`}
              className="group flex flex-col rounded-[4px] border border-white/15 bg-ink/40 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-beacon"
            >
              <span className="mb-6 block h-[3px] w-10 bg-beacon" />
              <h3 className="font-serif text-2xl font-light text-white">{group.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-white/70">{group.intro}</p>
              <p className="mt-6 text-xs text-white/50">{group.areas.length} practice areas</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-beacon uppercase">
                Explore {group.title}
                <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
