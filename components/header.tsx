"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";

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
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="pointer-events-auto relative mx-auto flex max-w-6xl items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-ivory/95 px-3 py-2 text-ink shadow-[0_10px_40px_rgba(0,0,0,.28)] backdrop-blur-md"
            aria-label="Myka Perez home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-[10px] font-bold tracking-[-0.12em] text-ink">MP</span>
            <span className="pr-2 text-sm font-semibold tracking-tight">Myka Perez</span>
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-ivory/95 p-1.5 text-ink shadow-[0_10px_40px_rgba(0,0,0,.28)] backdrop-blur-md md:flex"
            aria-label="Primary navigation"
          >
            {links.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active(href) ? "bg-ink text-ivory" : "hover:bg-ink/10"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-ink shadow-[0_10px_40px_rgba(0,0,0,.28)] transition hover:bg-ivory md:inline-flex"
          >
            Let&apos;s talk
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-lime">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-ivory text-ink md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-4 bg-ink transition ${open ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-ink transition ${open ? "-translate-y-0.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <nav
          id="mobile-nav"
          className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/97 px-6 pb-10 pt-24 text-ivory backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          <Link href="/" className="flex items-center justify-between border-b border-ivory/15 py-4 font-serif text-4xl">
            Home
            <ArrowUpRight className="h-6 w-6 text-lime" />
          </Link>
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between border-b border-ivory/15 py-4 font-serif text-4xl"
            >
              {name}
              <ArrowUpRight className="h-6 w-6 text-lime" />
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
