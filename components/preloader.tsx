"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If user has already visited in this session, skip long preloader
    const hasSeenPreloader = sessionStorage.getItem("mp_preloader_seen");
    if (hasSeenPreloader || shouldReduceMotion) {
      setLoading(false);
      return;
    }

    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("mp_preloader_seen", "true");
            document.body.style.overflow = "";
          }, 350);
          return 100;
        }
        // Organic speed increments
        const increment = Math.floor(Math.random() * 14) + 6;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8 sm:px-12 sm:py-10 text-ivory select-none"
          role="status"
          aria-live="polite"
        >
          {/* Top Bar: Brand & Mode */}
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ivory/50">
            <span className="flex items-center gap-2">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime" />
              <span>Independent Practice</span>
            </span>
            <span>Folio · 2026</span>
          </div>

          {/* Center Stage: Monogram, Name & Status */}
          <div className="mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              <span className="grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-full bg-lime text-2xl sm:text-3xl font-bold tracking-[-0.12em] text-ink shadow-[0_0_50px_rgba(213,255,85,0.35)]">
                MP
              </span>
              <span className="pulse-dot absolute -inset-1.5 rounded-full border border-lime/40" />
            </motion.div>

            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight leading-none"
            >
              Myka Perez
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-2.5 font-mono text-xs uppercase tracking-[0.2em] text-ivory/60"
            >
              Email &amp; Social Marketing
            </motion.p>

            {/* Hairline Progress Bar */}
            <div className="mt-8 h-[2px] w-56 sm:w-72 overflow-hidden rounded-full bg-ivory/15">
              <motion.div
                className="h-full bg-lime shadow-[0_0_12px_rgba(213,255,85,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Dynamic Status Text */}
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-lime/90 min-h-[1.5em]">
              {progress < 40 && "Curating point of view…"}
              {progress >= 40 && progress < 85 && "Loading thoughtful marketing…"}
              {progress >= 85 && "Make your brand impossible to ignore."}
            </p>
          </div>

          {/* Bottom Bar: Live Numeric Progress */}
          <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ivory/40">
            <span>Stand out in inboxes &amp; feeds</span>
            <span className="font-mono text-xs text-lime font-bold tabular-nums">
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
