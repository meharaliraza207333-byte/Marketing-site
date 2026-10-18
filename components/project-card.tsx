import Link from "next/link";
import type { Project } from "@/lib/data";
import { CampaignArt } from "./campaign-art";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card group ${featured ? "md:col-span-2" : ""}`}>
      <Link
        href={`/projects/${project.slug}`}
        className="relative block overflow-hidden rounded-[1.5rem]"
        aria-label={`View ${project.title} case study`}
      >
        <CampaignArt
          palette={project.palette}
          kicker={project.cover.kicker}
          headline={project.cover.headline}
          caption={project.cover.caption}
          label={`${project.title} campaign visual`}
          className={featured ? "h-[min(48vw,560px)] min-h-[280px]" : "h-[min(42vw,420px)] min-h-[240px]"}
        />
        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-ivory text-ink transition group-hover:rotate-45 group-hover:bg-lime">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        <span>{project.category}</span>
        <span>{project.concept ? "Concept project" : "Case study"}</span>
      </div>
      <Link href={`/projects/${project.slug}`} className="project-card-title mt-2 block font-serif text-[clamp(1.6rem,2.4vw,2.4rem)] leading-none hover:italic">
        {project.title}
      </Link>
      <p className="mt-2 max-w-md text-sm text-muted">{project.description}</p>
    </article>
  );
}
