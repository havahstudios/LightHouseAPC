"use client";

import Modal from "@/components/Modal";
import Icon from "@/components/Icon";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string | null;
};

// Plays the firm's video in a popup. Shows a tidy placeholder until a video is added.
export default function VideoModal({ open, onClose, src }: Props) {
  return (
    <Modal open={open} onClose={onClose} label="Firm video" className="max-w-5xl">
      <button
        type="button"
        onClick={onClose}
        className="absolute -top-11 right-0 flex items-center gap-2 text-xs tracking-[0.2em] text-white uppercase"
      >
        Close <Icon name="close" className="size-5" />
      </button>
      <div className="aspect-video w-full overflow-hidden rounded-sm bg-navy">
        {src ? (
          <video src={src} controls autoPlay className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-white/70">
            <span className="flex size-16 items-center justify-center rounded-full border border-beacon/60 text-beacon">
              <Icon name="play" className="size-6" />
            </span>
            <p className="font-serif text-xl font-light text-white">Firm video coming soon</p>
          </div>
        )}
      </div>
    </Modal>
  );
}
