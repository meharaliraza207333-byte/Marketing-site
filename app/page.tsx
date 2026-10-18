import { ButtonLink } from "@/components/button-link";
import { CampaignShowcase } from "@/components/campaign-showcase";
import { FinalCta } from "@/components/final-cta";
import { PeopleMarketing } from "@/components/people-marketing";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { AmbientLight } from "@/components/ambient-light";
import { MotionReveal } from "@/components/motion-reveal";
import { StaggeredHeadline, AnimatedWord } from "@/components/split-text";
import { InteractiveTilt } from "@/components/interactive-tilt";
import { processSteps, projects, serviceGroups, tools } from "@/lib/data";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero Section with Interactive Ambient Lighting & Staggered Split-Word Entrance */}
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:min-h-[100svh] lg:px-16 lg:pt-32 lg:pb-20">
        <AmbientLight />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <MotionReveal direction="up" delay={0.05} distance={16}>
              <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm transition-all duration-200 hover:border-lime/40">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime" />
                  Independent specialist
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm transition-all duration-200 hover:border-lime/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Email + social
                </span>
              </div>
            </MotionReveal>

            {/* Editorial Staggered Headline */}
            <StaggeredHeadline
              className="max-w-[12ch] font-serif text-[clamp(2.75rem,6.2vw,5.35rem)] leading-[0.92]"
              delay={0.12}
            >
              <AnimatedWord>Make</AnimatedWord>{" "}
              <AnimatedWord>Your</AnimatedWord>{" "}
              <AnimatedWord>Brand</AnimatedWord>{" "}
              <AnimatedWord className="italic text-lime">Impossible</AnimatedWord>{" "}
              <AnimatedWord>to</AnimatedWord>{" "}
              <AnimatedWord>Ignore.</AnimatedWord>
            </StaggeredHeadline>

            <MotionReveal direction="up" delay={0.28} distance={20}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/72 sm:text-lg">
                Thoughtful email marketing and social media growth for brands that want more than volume—campaigns with a
                point of view, and a presence people actually look forward to.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.38} distance={20}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
                <ButtonLink href="/projects" variant="ghost">
                  Explore My Work
                </ButtonLink>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.48} distance={16}>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/40">
                Working with {tools.slice(0, 4).join(" · ")}
              </p>

              {/* Interactive Channel Cards */}
              <div className="mt-5 grid max-w-xl grid-cols-2 overflow-hidden rounded-2xl border border-ivory/12 bg-ivory/[0.035] text-sm backdrop-blur-sm transition-all duration-300 hover:border-ivory/25 hover:bg-ivory/[0.06]">
                <div className="group/email border-r border-ivory/12 px-4 py-4 sm:px-5 transition-colors hover:bg-ivory/[0.04]">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-lime font-medium">Email</p>
                    <span className="text-[10px] text-ivory/40 transition-transform duration-300 group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <p className="mt-1.5 leading-snug text-ivory/70 text-xs sm:text-sm">Campaigns, newsletters, and lifecycle flows.</p>
                </div>
                <div className="group/social px-4 py-4 sm:px-5 transition-colors hover:bg-ivory/[0.04]">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-lime font-medium">Social</p>
                    <span className="text-[10px] text-ivory/40 transition-transform duration-300 group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <p className="mt-1.5 leading-snug text-ivory/70 text-xs sm:text-sm">Strategy, calendars, and channel care.</p>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Interactive 3D Tilt Campaign Showcase */}
          <MotionReveal direction="left" delay={0.2} distance={28} className="w-full">
            <InteractiveTilt maxTilt={6} className="w-full">
              <CampaignShowcase />
            </InteractiveTilt>
          </MotionReveal>
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
              className="rounded-full border border-ivory/18 px-3.5 py-1.5 text-xs text-ivory/75 transition-all duration-200 hover:border-lime hover:text-lime hover:-translate-y-0.5"
            >
              {name}
            </a>
          ))}
        </nav>
      </section>

      {/* Continuously Moving Seamless Capabilities Marquee */}
      <section className="overflow-hidden border-y border-ink bg-lime py-3.5 text-ink select-none shadow-sm" aria-label="Capabilities">
        <div className="marquee-track flex gap-8 font-serif text-[clamp(1.4rem,2.8vw,2.5rem)]">
          {Array.from({ length: 4 }).map((_, index) => (
            <p key={index} className="flex gap-8 whitespace-nowrap">
              Email strategy{" "}
              <span className="inline-block transition-transform duration-700 hover:rotate-180 hover:scale-125">✳</span>{" "}
              Social direction{" "}
              <span className="inline-block transition-transform duration-700 hover:rotate-180 hover:scale-125">✳</span>{" "}
              Lifecycle marketing{" "}
              <span className="inline-block transition-transform duration-700 hover:rotate-180 hover:scale-125">✳</span>{" "}
              Content systems{" "}
              <span className="inline-block transition-transform duration-700 hover:rotate-180 hover:scale-125">✳</span>{" "}
              Campaign optimization{" "}
              <span className="inline-block transition-transform duration-700 hover:rotate-180 hover:scale-125">✳</span>
            </p>
          ))}
        </div>
      </section>

      {/* Editorial Mission Statement */}
      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <MotionReveal direction="up" distance={24}>
            <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[0.92]">
              Good marketing isn&apos;t louder.
              <br />
              It&apos;s <em className="italic">worth</em> paying attention to.
            </h2>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={20}>
            <div>
              <p className="max-w-sm text-ink/70 leading-relaxed text-base sm:text-lg">
                I help considered brands earn attention with a clear point of view, a distinctive rhythm, and ideas that
                travel across inboxes and feeds.
              </p>
              <div className="mt-6">
                <ButtonLink href="/about" variant="text" arrow={false}>
                  A little more about me →
                </ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
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
          </MotionReveal>

          <div className="mt-12">
            {serviceGroups.map((service, index) => (
              <MotionReveal key={service.number} delay={index * 0.12} direction="up" distance={24}>
                <ServiceCard service={service} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
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
          </MotionReveal>

          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2">
            {projects.slice(0, 3).map((project, index) => (
              <MotionReveal key={project.slug} delay={index * 0.12} direction="up" distance={24} className={index === 0 ? "md:col-span-2" : ""}>
                <ProjectCard project={project} featured={index === 0} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We'll Work / Process Steps with Interactive Row Hovers */}
      <section className="bg-paper px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <MotionReveal direction="up" distance={20}>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">04 / How we&apos;ll work</p>
              <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92]">
                Less busywork.
                <br />
                More <em className="italic">good work.</em>
              </h2>
            </div>
          </MotionReveal>

          <ol>
            {processSteps.map((step, index) => (
              <MotionReveal key={step.number} delay={index * 0.1} direction="up" distance={18}>
                <li className="group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr] gap-4 border-t border-ink/15 py-6 last:border-b transition-colors duration-300 hover:border-lime/60 cursor-default">
                  <span className="font-mono text-[11px] text-ink/50 font-medium transition-colors duration-300 group-hover:text-lime">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl leading-none transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm sm:text-base text-ink/65 leading-relaxed">
                      {step.copy}
                    </p>
                  </div>
                </li>
              </MotionReveal>
            ))}
          </ol>
        </div>
      </section>

      <PeopleMarketing />

      {/* Ways to Start with Interactive Glow and Hover Lift */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime font-medium">Ways to start</p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95]">
              A clear first move, without invented proof.
            </h2>
          </MotionReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["A launch", "One campaign, one sequence, or one content system with a defined finish line."],
              ["A monthly rhythm", "Ongoing email or social support with a shared calendar and reporting."],
              ["Both channels", "A joined-up inbox and feed, so the brand sounds like itself everywhere."],
            ].map(([title, copy], index) => (
              <MotionReveal key={title} delay={index * 0.12} direction="up" distance={20}>
                <article className="group h-full rounded-[1.5rem] border border-ivory/12 bg-ivory/[0.04] p-6 sm:p-7 transition-all duration-300 hover:border-lime/50 hover:bg-ivory/[0.07] hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl transition-colors group-hover:text-lime">{title}</h3>
                    <span className="text-lime text-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{copy}</p>
                </article>
              </MotionReveal>
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
