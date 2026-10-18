import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CampaignShowcase } from "@/components/campaign-showcase";
import { FinalCta } from "@/components/final-cta";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { processSteps, projects, serviceGroups } from "@/lib/data";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(213,255,85,0.16),transparent_46%),radial-gradient(ellipse_at_10%_80%,rgba(217,207,255,0.12),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Independent specialist
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Email + social
              </span>
            </div>
            <h1 className="max-w-xl font-serif text-[clamp(3.4rem,8vw,6.6rem)] leading-[0.9]">
              Make Your Brand <em className="italic">Impossible</em> to Ignore.
            </h1>
            <p className="mt-6 max-w-md text-lg text-ivory/72">
              Thoughtful email marketing and social media growth for brands that want more than volume—campaigns with a
              point of view, and a presence people actually look forward to.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
              <ButtonLink href="/projects" variant="ghost">
                Explore My Work
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 overflow-hidden rounded-2xl border border-ivory/12 bg-ivory/[0.035] text-sm backdrop-blur-sm">
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
        <nav
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
          aria-label="Social media links"
        >
          {[
            ["Li", site.social.linkedin, "LinkedIn"],
            ["Ig", site.social.instagram, "Instagram"],
            ["Em", `mailto:${site.email}`, "Email"],
          ].map(([label, href, name]) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="grid h-11 w-11 place-items-center rounded-full border border-ivory/18 text-xs font-semibold text-ivory/80 hover:border-lime hover:text-lime"
              aria-label={name}
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      <section className="overflow-hidden border-y border-ink bg-lime py-4 text-ink" aria-label="Capabilities">
        <div className="marquee-track flex gap-8 font-serif text-[clamp(1.6rem,3vw,2.8rem)]">
          {Array.from({ length: 2 }).map((_, index) => (
            <p key={index} className="flex gap-8 whitespace-nowrap">
              Email strategy <span>✳</span> Social direction <span>✳</span> Lifecycle marketing <span>✳</span> Content
              systems <span>✳</span> Campaign optimization <span>✳</span>
            </p>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.92]">
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
              <h2 className="mt-3 font-serif text-[clamp(2.6rem,5vw,5rem)] leading-[0.92]">
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
              <h2 className="mt-3 font-serif text-[clamp(2.6rem,5vw,5rem)] leading-[0.92]">
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
            <h2 className="mt-3 font-serif text-[clamp(2.6rem,5vw,5rem)] leading-[0.92]">
              Less busywork.
              <br />
              More <em className="italic">good work.</em>
            </h2>
          </div>
          <ol className="space-y-0">
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

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-ivory/12 p-8 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">Testimonials</p>
          <p className="mt-4 max-w-2xl text-lg text-ivory/70">
            Client quotes will live here once they are supplied. Until then, this site does not invent social proof.
          </p>
          <Link href="/contact" className="mt-6 inline-flex text-sm text-lime hover:underline">
            Ask about working together →
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
