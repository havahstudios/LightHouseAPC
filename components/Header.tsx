"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { nav, site } from "@/lib/site";

// Fixed top bar: see-through over the hero, turns solid navy once you scroll.
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/90 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
          <Logo />

          <div className="hidden flex-col items-end gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="font-serif text-[1.35rem] font-normal text-white transition-colors hover:text-beacon-light"
            >
              Call us at: {site.phone}
            </a>
            <nav aria-label="Main">
              <ul className="flex items-center gap-7">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative pb-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                          active ? "after:scale-x-100" : "after:scale-x-0"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <a
              href={site.phoneHref}
              className="hidden font-serif text-lg text-white sm:block"
            >
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[7px]"
              aria-label="Open menu"
            >
              <span className="h-px w-8 bg-white" />
              <span className="h-px w-8 bg-white" />
              <span className="h-px w-8 bg-white" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
