"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Icon from "@/components/Icon";
import Stars from "@/components/Stars";
import VideoModal from "@/components/VideoModal";
import { photos, site } from "@/lib/site";

// Full-screen opening section: background, headline, button and angled bottom edge.
export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden bg-ink md:h-[100svh] md:min-h-[760px]">
      {/* Background: a video when one is added, otherwise a photo */}
      <div className="absolute inset-0">
        {site.heroVideo ? (
          <video src={site.heroVideo} autoPlay muted loop playsInline className="h-full w-full object-cover" />
        ) : (
          <Image src={photos.hero} alt="" fill priority sizes="100vw" className="object-cover" />
        )}
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-36 pb-48 sm:px-8 md:pb-40">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-white font-serif text-xl font-medium text-ink">
            G
          </span>
          <span>
            <span className="block text-sm text-white">
              <strong className="font-semibold">{site.google.reviewCount}</strong> Google reviews
            </span>
            <Stars className="size-5" />
          </span>
        </div>

        <h1 className="max-w-4xl text-[2.6rem] leading-[1.12] font-normal text-white sm:text-5xl md:text-[4rem]">
          Los Angeles&apos; Trusted Employment Law Attorneys
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-[1.35rem]">
          Wrongfully fired, harassed or underpaid? We stand up for California workers.
          <br className="hidden md:block" /> No fees unless we win for you.
        </p>

        <div className="mt-10">
          <ButtonLink href="/contact">Get a Free Consultation</ButtonLink>
        </div>
      </div>

      {/* Angled bottom edge */}
      <svg
        className="absolute inset-x-0 bottom-[-1px] z-10 h-[90px] w-full md:h-[190px]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 100,100 0,100" className="fill-shell" />
      </svg>

      {/* Video play button */}
      <button
        type="button"
        onClick={() => setVideoOpen(true)}
        className="group absolute right-6 bottom-24 z-20 flex size-20 items-center justify-center rounded-full bg-beacon/35 md:right-[9%] md:bottom-28 md:size-24"
        aria-label="Play firm video"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-beacon text-white transition-colors duration-300 group-hover:bg-beacon-dark md:size-16">
          <Icon name="play" className="ml-1 size-6" />
        </span>
      </button>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} src={site.firmVideo} />
    </section>
  );
}
