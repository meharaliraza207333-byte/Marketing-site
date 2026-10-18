"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { CampaignArt } from "./campaign-art";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "./icons";

export function CampaignShowcase() {
  const slides = useMemo(() => projects.filter((project) => project.featured), []);
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const go = (direction: number) => {
    setIndex((value) => (value + direction + slides.length) % slides.length);
  };

  return (
    <section className="relative" aria-label="Featured campaign concepts">
      <div className="overflow-hidden rounded-[1.75rem] border border-ivory/12 bg-ivory/4 shadow-[0_30px_80px_rgba(0,0,0,.35)]">
        <CampaignArt
          palette={current.palette}
          kicker={current.cover.kicker}
          headline={current.cover.headline}
          caption={current.cover.caption}
          label={`${current.title} campaign visual`}
          className="h-[min(58vw,520px)] min-h-[340px]"
        />
        <div className="flex items-end justify-between gap-4 p-5" aria-live="polite">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-lime">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} · Concept
            </p>
            <Link href={`/projects/${current.slug}`} className="mt-1 block font-serif text-3xl leading-none hover:text-lime">
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
