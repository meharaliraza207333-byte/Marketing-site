"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects } from "@/lib/data";
import { CampaignArt } from "./campaign-art";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "./icons";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

export function CampaignShowcase() {
  const slides = useMemo(() => projects.filter((project) => project.featured), []);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const current = slides[index];

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((value) => (value + dir + slides.length) % slides.length);
    },
    [slides.length],
  );

  const select = useCallback(
    (newIndex: number) => {
      setDirection(newIndex > index ? 1 : -1);
      setIndex(newIndex);
    },
    [index],
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
      {/* Decorative stacked shadow cards for tactile editorial depth */}
      <div className="pointer-events-none absolute -right-4 top-6 hidden h-full w-[94%] rounded-[1.75rem] border border-ivory/8 bg-ivory/[0.025] transition-transform duration-500 hover:rotate-1 lg:block" />
      <div className="pointer-events-none absolute -right-2 top-3 hidden h-full w-[97%] rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.035] transition-transform duration-500 lg:block" />

      {/* Main card with interactive slide animation */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ivory/12 bg-ivory/[0.04] shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop-blur-sm">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.slug}
            custom={direction}
            variants={shouldReduceMotion ? undefined : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <CampaignArt
              palette={current.palette}
              kicker={current.cover.kicker}
              headline={current.cover.headline}
              caption={current.cover.caption}
              label={`${current.title} campaign visual`}
              className="h-[min(62vw,480px)] min-h-[300px] sm:min-h-[340px]"
            />
            <div className="flex items-end justify-between gap-4 p-5 sm:p-6" aria-live="polite">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-lime">
                  {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} · Concept
                </p>
                <Link
                  href={`/projects/${current.slug}`}
                  className="mt-1 block truncate font-serif text-2xl leading-none transition-colors hover:text-lime sm:text-3xl"
                >
                  {current.title}
                </Link>
                <p className="mt-2 max-w-sm text-sm text-ivory/65 leading-relaxed">{current.description}</p>
              </div>
              <Link
                href={`/projects/${current.slug}`}
                className="group grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime text-ink shadow-[0_4px_20px_rgba(213,255,85,0.3)] transition-all duration-300 hover:scale-105 hover:bg-ivory"
                aria-label={`Open ${current.title} case study`}
              >
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Controls & Progress Indicators */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2" role="group" aria-label="Choose a campaign concept">
          {slides.map((slide, slideIndex) => {
            const isCurrent = slideIndex === index;
            return (
              <button
                key={slide.slug}
                type="button"
                aria-pressed={isCurrent}
                aria-label={`Show ${slide.title}`}
                onClick={() => select(slideIndex)}
                className={`relative h-2 rounded-full transition-all duration-300 focus-visible:outline-offset-4 ${
                  isCurrent ? "w-8 bg-lime shadow-[0_0_12px_rgba(213,255,85,0.4)]" : "w-2.5 bg-ivory/25 hover:bg-ivory/60"
                }`}
              />
            );
          })}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime active:translate-y-0"
            aria-label="Previous campaign"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime active:translate-y-0"
            aria-label="Next campaign"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
