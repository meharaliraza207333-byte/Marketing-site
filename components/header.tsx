"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "./icons";
import { site } from "@/lib/site";

const links = [
  ["Work", "/projects"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/projects" ? pathname.startsWith(href) : pathname === href);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3.5 sm:px-6">
        <div className="pointer-events-auto relative mx-auto flex max-w-6xl items-center justify-between gap-3">
          {/* Brand Logo & Live Availability indicator */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-full bg-ivory/95 px-3 py-1.5 text-ink shadow-[0_10px_40px_rgba(0,0,0,.28)] backdrop-blur-md transition duration-200 hover:bg-ivory"
              aria-label="Myka Perez home"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-lime text-[10px] font-bold tracking-[-0.12em] text-ink transition-transform duration-300 group-hover:scale-105">
                MP
              </span>
              <span className="pr-1.5 text-xs font-semibold tracking-tight sm:text-sm">Myka Perez</span>
            </Link>

            {/* Availability Pill (Inspired by Reference) */}
            <div className="hidden items-center gap-2 rounded-full border border-ivory/15 bg-ink/75 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ivory/80 backdrop-blur-md sm:inline-flex">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
              <span>Available for projects</span>
            </div>
          </div>

          {/* Center Navigation Bar (Desktop & Laptop) */}
          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-ivory/95 p-1 text-ink shadow-[0_10px_40px_rgba(0,0,0,.28)] backdrop-blur-md md:flex"
            aria-label="Primary navigation"
          >
            {links.map(([name, href]) => {
              const isActive = active(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 lg:px-4 lg:py-2 lg:text-sm ${
                    isActive ? "text-ivory" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 z-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-lime px-3.5 py-2 text-xs font-semibold text-ink shadow-[0_10px_40px_rgba(0,0,0,.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-ivory sm:inline-flex sm:px-4 sm:py-2.5 sm:text-sm"
            >
              Let&apos;s talk
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-lime transition-transform duration-200 group-hover:rotate-45 sm:h-7 sm:w-7">
                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </Link>

            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-ivory text-ink shadow-[0_10px_30px_rgba(0,0,0,.28)] transition hover:bg-lime md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className="relative flex h-4 w-4 flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-4 bg-ink transition-all duration-300 ${
                    open ? "translate-y-1 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-ink transition-all duration-300 ${
                    open ? "-translate-y-1 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Polished Animated Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink/98 px-6 pb-8 pt-24 text-ivory backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            {/* Top section: availability status on mobile */}
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-lime">
              <span className="pulse-dot h-2 w-2 rounded-full bg-lime" />
              <span>Available for select briefs</span>
            </div>

            {/* Center: Large editorial links with staggered entrance */}
            <div className="flex flex-col my-auto">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between border-b border-ivory/12 py-3.5 font-serif text-3xl sm:text-4xl transition-colors ${
                  pathname === "/" ? "text-lime" : "text-ivory hover:text-lime"
                }`}
              >
                <span>Home</span>
                <ArrowUpRight className="h-5 w-5 text-lime transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              {links.map(([name, href]) => {
                const isActive = active(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between border-b border-ivory/12 py-3.5 font-serif text-3xl sm:text-4xl transition-colors ${
                      isActive ? "text-lime" : "text-ivory hover:text-lime"
                    }`}
                  >
                    <span>{name}</span>
                    <ArrowUpRight className="h-5 w-5 text-lime transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom info & direct contact */}
            <div className="space-y-4 pt-4 border-t border-ivory/15">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-lime py-3 text-center text-sm font-semibold text-ink transition hover:bg-ivory"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <div className="flex justify-between items-center text-xs text-ivory/60 font-mono uppercase tracking-wider">
                <a href={`mailto:${site.email}`} className="hover:text-lime">
                  {site.email}
                </a>
                <div className="flex gap-4">
                  <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime">
                    LinkedIn
                  </a>
                  <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-lime">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
