"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { CampaignArt } from "./campaign-art";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "./icons";

export function CampaignShowcase() {
  const slides = useMemo(() => projects.filter((project) => project.featured), []);
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const go = useCallback(
    (direction: number) => {
      setIndex((value) => (value + direction + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section className="relative" aria-label="Featured campaign concepts" aria-roledescription="carousel">
      <div className="pointer-events-none absolute -right-6 top-8 hidden h-full w-[92%] rounded-[1.75rem] border border-ivory/8 bg-ivory/4 lg:block" />
      <div className="pointer-events-none absolute -right-3 top-4 hidden h-full w-[96%] rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.03] lg:block" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-ivory/12 bg-ivory/[0.04] shadow-[0_30px_80px_rgba(0,0,0,.35)]">
        <CampaignArt
          palette={current.palette}
          kicker={current.cover.kicker}
          headline={current.cover.headline}
          caption={current.cover.caption}
          label={`${current.title} campaign visual`}
          className="h-[min(62vw,480px)] min-h-[300px] sm:min-h-[340px]"
        />
        <div className="flex items-end justify-between gap-4 p-5" aria-live="polite">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-lime">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} · Concept
            </p>
            <Link href={`/projects/${current.slug}`} className="mt-1 block truncate font-serif text-2xl leading-none hover:text-lime sm:text-3xl">
              {current.title}
            </Link>
            <p className="mt-2 max-w-sm text-sm text-ivory/65">{current.description}</p>
          </div>
          <Link
            href={`/projects/${current.slug}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime text-ink transition hover:rotate-12"
            aria-label={`Open ${current.title} case study`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2" role="group" aria-label="Choose a campaign concept">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.slug}
              type="button"
              aria-pressed={slideIndex === index}
              aria-label={`Show ${slide.title}`}
              onClick={() => setIndex(slideIndex)}
              className={`h-2 rounded-full transition focus-visible:outline-offset-4 ${slideIndex === index ? "w-8 bg-lime" : "w-2 bg-ivory/30 hover:bg-ivory/70"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory hover:border-lime hover:text-lime"
            aria-label="Previous campaign"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory hover:border-lime hover:text-lime"
            aria-label="Next campaign"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
