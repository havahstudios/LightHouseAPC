"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import ButtonLink from "@/components/ButtonLink";
import { nav, site } from "@/lib/site";

type Props = { open: boolean; onClose: () => void };

// Full-screen navy menu for phones and tablets.
export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 pt-6 pb-10 lg:hidden">
      <button
        type="button"
        onClick={onClose}
        className="ml-auto flex h-10 w-10 items-center justify-center text-white"
        aria-label="Close menu"
      >
        <Icon name="close" className="size-7" />
      </button>

      <nav aria-label="Mobile" className="mt-8">
        <ul className="space-y-1">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block border-b border-white/10 py-4 font-serif text-2xl font-light text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto space-y-5" onClick={onClose}>
        <a href={site.phoneHref} className="flex items-center gap-3 font-serif text-xl text-beacon">
          <Icon name="phone" /> {site.phone}
        </a>
        <ButtonLink href="/contact" className="w-full">
          Get a Free Consultation
        </ButtonLink>
      </div>
    </div>
  );
}
