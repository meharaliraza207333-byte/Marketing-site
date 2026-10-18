"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects, type ProjectCategory } from "@/lib/data";
import { ProjectCard } from "./project-card";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Email Marketing",
  "Automation",
  "Social Media",
  "Content Strategy",
];

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shouldReduceMotion = useReducedMotion();
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      {/* Category filter bar with animated active pill and touch scroll */}
      <div
        className="no-scrollbar mb-10 flex gap-2 overflow-x-auto pb-2 scroll-smooth"
        aria-label="Filter projects"
        role="group"
      >
        {filters.map((filter) => {
          const isSelected = active === filter;
          return (
            <button
              key={filter}
              type="button"
              className={`relative shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 ${
                isSelected ? "text-ivory" : "bg-paper text-ink/75 hover:bg-ink/10"
              }`}
              onClick={() => setActive(filter)}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <motion.span
                  layoutId="active-filter-pill"
                  className="absolute inset-0 z-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          );
        })}
      </div>

      {/* Animated Projects Grid */}
      <motion.div
        layout={!shouldReduceMotion}
        className="grid gap-8 sm:gap-10 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              key={project.slug}
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={index === 0 && active === "All" ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={index === 0 && active === "All"} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {visible.length === 0 && <p className="text-muted mt-8">No projects in this category yet.</p>}
    </div>
  );
}
