import { ButtonLink } from "@/components/button-link";
import { CampaignShowcase } from "@/components/campaign-showcase";
import { FinalCta } from "@/components/final-cta";
import { PeopleMarketing } from "@/components/people-marketing";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { processSteps, projects, serviceGroups, tools } from "@/lib/data";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:min-h-[100svh] lg:px-16 lg:pt-32 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_12%,rgba(213,255,85,0.18),transparent_42%),radial-gradient(ellipse_at_8%_88%,rgba(217,207,255,0.14),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Independent specialist
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Email + social
              </span>
            </div>
            <h1 className="max-w-[11ch] font-serif text-[clamp(2.85rem,6.2vw,5.35rem)] leading-[0.92]">
              Make Your Brand <em className="italic">Impossible</em> to Ignore.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/72 sm:text-lg">
              Thoughtful email marketing and social media growth for brands that want more than volume—campaigns with a
              point of view, and a presence people actually look forward to.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
              <ButtonLink href="/projects" variant="ghost">
                Explore My Work
              </ButtonLink>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/40">
              Working with {tools.slice(0, 4).join(" · ")}
            </p>
            <div className="mt-6 grid max-w-xl grid-cols-2 overflow-hidden rounded-2xl border border-ivory/12 bg-ivory/[0.035] text-sm">
              <div className="border-r border-ivory/12 px-4 py-4 sm:px-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-lime">Email</p>
                <p className="mt-1.5 leading-snug text-ivory/70">Campaigns, newsletters, and lifecycle flows.</p>
              </div>
              <div className="px-4 py-4 sm:px-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-lime">Social</p>
                <p className="mt-1.5 leading-snug text-ivory/70">Strategy, calendars, and channel care.</p>
              </div>
            </div>
          </div>
          <CampaignShowcase />
        </div>
        <nav className="mt-8 flex justify-center gap-3 lg:hidden" aria-label="Social media links">
          {[
            ["LinkedIn", site.social.linkedin],
            ["Instagram", site.social.instagram],
            ["Email", `mailto:${site.email}`],
          ].map(([name, href]) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-ivory/18 px-3 py-1.5 text-xs text-ivory/75 hover:border-lime hover:text-lime"
            >
              {name}
            </a>
          ))}
        </nav>
      </section>

      <section className="overflow-hidden border-y border-ink bg-lime py-3.5 text-ink" aria-label="Capabilities">
        <div className="marquee-track flex gap-8 font-serif text-[clamp(1.5rem,2.8vw,2.5rem)]">
          {Array.from({ length: 2 }).map((_, index) => (
            <p key={index} className="flex gap-8 whitespace-nowrap">
              Email strategy <span>✳</span> Social direction <span>✳</span> Lifecycle marketing <span>✳</span> Content
              systems <span>✳</span> Campaign optimization <span>✳</span>
            </p>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[0.92]">
            Good marketing isn&apos;t louder.
            <br />
            It&apos;s <em className="italic">worth</em> paying attention to.
          </h2>
          <div>
            <p className="max-w-sm text-ink/70">
              I help considered brands earn attention with a clear point of view, a distinctive rhythm, and ideas that
              travel across inboxes and feeds.
            </p>
            <div className="mt-6">
              <ButtonLink href="/about" variant="text" arrow={false}>
                A little more about me →
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">02 / What I do</p>
              <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92]">
                Make every <em className="italic">touchpoint</em> count.
              </h2>
            </div>
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          </div>
          <div className="mt-12">
            {serviceGroups.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">03 / Selected work</p>
              <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92]">
                Strategy with <em className="italic">staying power.</em>
              </h2>
            </div>
            <ButtonLink href="/projects" variant="text" arrow={false}>
              View all projects →
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard project={project} key={project.slug} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">04 / How we&apos;ll work</p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92]">
              Less busywork.
              <br />
              More <em className="italic">good work.</em>
            </h2>
          </div>
          <ol>
            {processSteps.map((step) => (
              <li key={step.number} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/15 py-6 last:border-b">
                <span className="font-mono text-[11px] text-ink/50">{step.number}</span>
                <div>
                  <h3 className="font-serif text-3xl leading-none">{step.title}</h3>
                  <p className="mt-3 max-w-md text-ink/65">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PeopleMarketing />

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">Ways to start</p>
          <h2 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95]">
            A clear first move, without invented proof.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["A launch", "One campaign, one sequence, or one content system with a defined finish line."],
              ["A monthly rhythm", "Ongoing email or social support with a shared calendar and reporting."],
              ["Both channels", "A joined-up inbox and feed, so the brand sounds like itself everywhere."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-[1.5rem] border border-ivory/12 bg-ivory/[0.04] p-6">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-ivory/45">
            Client testimonials will be added here once they are supplied—nothing is fabricated in the meantime.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
