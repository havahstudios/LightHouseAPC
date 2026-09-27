"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import BackgroundImage from "@/components/BackgroundImage";
import VideoModal from "@/components/VideoModal";
import { photos, site } from "@/lib/site";

// Large centered statement over a dark photo, with a play button for the firm video.
export default function VideoStatement() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-ink py-28 md:min-h-[720px]">
      <BackgroundImage src={photos.palms} overlay="bg-ink/75" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-3xl leading-snug font-light text-white md:text-[2.9rem] md:leading-tight">
            A Guiding Light for Workers
            <br className="hidden md:block" /> Through Difficult Times
        </h2>
        <button
            type="button"
            onClick={() => setOpen(true)}
            className="group mx-auto mt-16 flex size-24 items-center justify-center rounded-full border border-white/80 text-white transition-colors duration-300 hover:border-beacon hover:bg-beacon hover:text-ink"
            aria-label="Play firm video"
          >
            <Icon name="play" className="ml-1 size-7" />
        </button>
      </div>
      <VideoModal open={open} onClose={() => setOpen(false)} src={site.firmVideo} />
    </section>
  );
}
