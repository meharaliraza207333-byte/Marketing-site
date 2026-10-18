"use client";

import { useState } from "react";
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
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="mb-10 flex gap-2 overflow-auto pb-2" aria-label="Filter projects" role="group">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
              active === filter ? "bg-ink text-ivory" : "bg-paper text-ink/70 hover:bg-ink hover:text-ivory"
            }`}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard project={project} key={project.slug} featured={index === 0 && active === "All"} />
        ))}
      </div>
      {visible.length === 0 && <p className="text-muted">No projects in this category yet.</p>}
    </div>
  );
}
