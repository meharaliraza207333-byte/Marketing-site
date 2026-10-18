import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import { CampaignArt } from "@/components/campaign-art";
import { ButtonLink } from "@/components/button-link";
import { MotionReveal } from "@/components/motion-reveal";
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
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="px-6 pb-16 pt-24 sm:px-10 sm:pt-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={16}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory/60 transition-colors hover:text-lime"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to selected work</span>
            </Link>
          </MotionReveal>

          <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <MotionReveal direction="up" delay={0.1} distance={20}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime font-medium">
                {project.category} · {project.format}
              </p>
              <h1 className="mt-4 font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.9] break-words">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-ivory/72 leading-relaxed">{project.description}</p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.2} distance={20}>
              <div className="rounded-[1.5rem] border border-ivory/12 bg-ivory/[0.03] p-5 backdrop-blur-sm sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/45 font-medium">Created for</p>
                <p className="mt-2 font-serif text-2xl sm:text-3xl">{project.client}</p>
                <p className="mt-2 text-xs sm:text-sm text-ivory/55">
                  {project.concept ? "Demonstration concept" : "Client case study"}
                </p>
              </div>
            </MotionReveal>
          </div>

          <MotionReveal direction="up" delay={0.25} distance={24}>
            <CampaignArt
              palette={project.palette}
              kicker={project.cover.kicker}
              headline={project.cover.headline}
              caption={project.cover.caption}
              label={`${project.title} campaign visual`}
              className="mt-10 sm:mt-12 h-[min(58vw,640px)] min-h-[280px] sm:min-h-[340px] rounded-[1.75rem] shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
            />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-2">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">Client overview</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl leading-[0.95]">{project.client}</h2>
            <p className="mt-5 max-w-md text-base sm:text-lg text-ink/70 leading-relaxed">{project.overview}</p>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={20}>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">The challenge</p>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-ink/85">{project.challenge}</p>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">Goals</p>
              <ul className="mt-3">
                {project.goals.map((goal) => (
                  <li key={goal} className="border-t border-ink/12 py-3.5 text-sm sm:text-base text-ink/80 last:border-b">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 sm:gap-16 lg:grid-cols-2">
          <MotionReveal direction="up" distance={20}>
            <article>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime font-medium">The strategy</p>
              <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.95]">
                A clear way forward, with room for feeling.
              </h2>
              <p className="mt-5 max-w-lg text-base sm:text-lg text-ivory/70 leading-relaxed">{project.strategy}</p>
            </article>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={20}>
            <article>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime font-medium">Execution</p>
              <ol className="mt-6">
                {project.execution.map((item, itemIndex) => (
                  <li key={item} className="flex gap-4 border-t border-ivory/12 py-4 text-lg sm:text-xl text-ivory/90 last:border-b">
                    <span className="font-mono text-[10px] text-lime font-medium">0{itemIndex + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </article>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">Campaign visuals</p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl">System &amp; Art Direction</h3>
              </div>
              <p className="max-w-sm text-sm text-ink/60">Original visual direction created to communicate the campaign&apos;s tone and system.</p>
            </div>
          </MotionReveal>
          <div className="grid gap-6 md:grid-cols-2">
            <MotionReveal direction="up" delay={0.1} distance={20}>
              <CampaignArt
                palette={project.palette}
                kicker={project.cover.kicker}
                headline={project.cover.headline}
                caption={project.cover.caption}
                className="h-[min(42vw,480px)] min-h-[260px] rounded-[1.5rem] shadow-md"
              />
            </MotionReveal>
            <MotionReveal direction="up" delay={0.2} distance={20}>
              <CampaignArt
                palette={project.palette === "lime" ? "lavender" : "lime"}
                className="h-[min(42vw,480px)] min-h-[260px] rounded-[1.5rem] shadow-md"
              />
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-lav px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] font-medium">Results</p>
            <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,4.2rem)] leading-[0.95]">
              {project.concept ? "A concept, not a claimed outcome." : "Measured impact."}
            </h2>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={20}>
            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-ink/85">
              {project.concept
                ? "This is a demonstration project, so it has no client metrics or performance claims. The work is here to show the strategic thinking, creative direction, and execution approach available for a real engagement."
                : "Verified outcomes will be documented here with client approval."}
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">Lessons learned</p>
            <h2 className="mt-4 max-w-5xl font-serif text-[clamp(2.2rem,5vw,5.2rem)] leading-[0.95]">“{project.lessons}”</h2>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="ink">
                Bring me a challenge like this
              </ButtonLink>
            </div>
          </MotionReveal>
        </div>
      </section>

      <nav className="flex flex-col gap-4 border-t border-ivory/12 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16" aria-label="Case studies">
        <Link href={`/projects/${previous.slug}`} className="group inline-flex items-center gap-2 text-sm hover:text-lime transition-colors">
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>{previous.title}</span>
        </Link>
        <Link href="/projects" className="text-sm text-ivory/50 hover:text-lime transition-colors">
          All projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="group inline-flex items-center gap-2 text-sm hover:text-lime transition-colors">
          <span>{next.title}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </nav>
    </>
  );
}
