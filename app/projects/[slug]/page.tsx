import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import { CampaignArt } from "@/components/campaign-art";
import { ButtonLink } from "@/components/button-link";
import { ArrowLeft, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? project.title : "Case Study", description: project?.description };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="px-6 pb-16 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory/60 hover:text-lime">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to selected work
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">
                {project.category} · {project.format}
              </p>
              <h1 className="mt-4 font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.9]">{project.title}</h1>
              <p className="mt-5 max-w-xl text-lg text-ivory/72">{project.description}</p>
            </div>
            <div className="rounded-[1.5rem] border border-ivory/12 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/45">Created for</p>
              <p className="mt-2 font-serif text-3xl">{project.client}</p>
              <p className="mt-2 text-sm text-ivory/55">{project.concept ? "Demonstration concept" : "Client case study"}</p>
            </div>
          </div>
          <CampaignArt
            palette={project.palette}
            kicker={project.cover.kicker}
            headline={project.cover.headline}
            caption={project.cover.caption}
            label={`${project.title} campaign visual`}
            className="mt-12 h-[min(58vw,640px)] min-h-[320px] rounded-[1.75rem]"
          />
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Client overview</p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.95]">{project.client}</h2>
            <p className="mt-5 max-w-md text-lg text-ink/70">{project.overview}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">The challenge</p>
            <p className="mt-3 text-lg">{project.challenge}</p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Goals</p>
            <ul className="mt-3">
              {project.goals.map((goal) => (
                <li key={goal} className="border-t border-ink/12 py-3 last:border-b">
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">The strategy</p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.95]">A clear way forward, with room for feeling.</h2>
            <p className="mt-5 max-w-lg text-lg text-ivory/70">{project.strategy}</p>
          </article>
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">Execution</p>
            <ol className="mt-6">
              {project.execution.map((item, itemIndex) => (
                <li key={item} className="flex gap-4 border-t border-ivory/12 py-4 text-xl last:border-b">
                  <span className="font-mono text-[10px] text-lime">0{itemIndex + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Campaign visuals</p>
            <p className="max-w-sm text-sm text-ink/60">Original visual direction created to communicate the campaign&apos;s tone and system.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <CampaignArt
              palette={project.palette}
              kicker={project.cover.kicker}
              headline={project.cover.headline}
              caption={project.cover.caption}
              className="h-[min(42vw,480px)] min-h-[260px] rounded-[1.5rem]"
            />
            <CampaignArt
              palette={project.palette === "lime" ? "lavender" : "lime"}
              className="h-[min(42vw,480px)] min-h-[260px] rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      <section className="bg-lav px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]">Results</p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4.2rem)] leading-[0.95]">
              {project.concept ? "A concept, not a claimed outcome." : "Measured impact."}
            </h2>
          </div>
          <p className="max-w-lg text-lg">
            {project.concept
              ? "This is a demonstration project, so it has no client metrics or performance claims. The work is here to show the strategic thinking, creative direction, and execution approach available for a real engagement."
              : "Verified outcomes will be documented here with client approval."}
          </p>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Lessons learned</p>
          <h2 className="mt-4 max-w-5xl font-serif text-[clamp(2.4rem,5.5vw,5.6rem)] leading-[0.95]">“{project.lessons}”</h2>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="ink">
              Bring me a challenge like this
            </ButtonLink>
          </div>
        </div>
      </section>

      <nav className="flex justify-between border-t border-ivory/12 px-6 py-8 sm:px-10 lg:px-16" aria-label="Case studies">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm hover:text-lime">
          All projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="inline-flex items-center gap-2 text-sm hover:text-lime">
          Next: {next.title} <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>
    </>
  );
}
