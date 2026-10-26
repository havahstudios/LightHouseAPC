"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import PracticeMegaMenu from "@/components/PracticeMegaMenu";
import { nav, site } from "@/lib/site";

// Fixed top bar: see-through over the hero, turns solid navy once you scroll.
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hovering opens the Practice Areas dropdown; a short delay before closing stops it flickering.
  const openPractice = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPracticeOpen(true);
  };
  const closePracticeSoon = () => {
    closeTimer.current = setTimeout(() => setPracticeOpen(false), 160);
  };
  const closePractice = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPracticeOpen(false);
  };

  useEffect(() => {
    if (!practiceOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPracticeOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [practiceOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"} ${
          scrolled || practiceOpen
            ? "bg-navy/95 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "bg-transparent"
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
                  const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  const isPractice = item.href === "/practice-areas";
                  return (
                    <li
                      key={item.href}
                      className="flex items-center gap-1"
                      onMouseEnter={isPractice ? openPractice : undefined}
                      onMouseLeave={isPractice ? closePracticeSoon : undefined}
                    >
                      <Link
                        href={item.href}
                        className={`relative pb-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                          active ? "after:scale-x-100" : "after:scale-x-0"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {isPractice && (
                        <button
                          type="button"
                          onClick={() => (practiceOpen ? closePractice() : openPractice())}
                          aria-expanded={practiceOpen}
                          aria-controls="practice-menu"
                          aria-label="Show practice areas"
                          className="-mb-1 p-0.5 text-white/80 transition-colors hover:text-white"
                        >
                          <Icon
                            name="chevronDown"
                            className={`size-3.5 transition-transform duration-200 ${practiceOpen ? "rotate-180" : ""}`}
                            strokeWidth={2}
                          />
                        </button>
                      )}
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

        {practiceOpen && (
          <div className="hidden lg:block">
            <PracticeMegaMenu
              id="practice-menu"
              onNavigate={closePractice}
              onMouseEnter={openPractice}
              onMouseLeave={closePracticeSoon}
            />
          </div>
        )}
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
