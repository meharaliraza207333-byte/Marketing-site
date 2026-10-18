import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CampaignArt } from "@/components/campaign-art";
import { FinalCta } from "@/components/final-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About Myka Perez, independent email marketing specialist and social media strategist.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime font-medium">About / 03</p>
            <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.75rem,8vw,7rem)] leading-[0.9]">
              The person behind
              <br />
              the <em className="italic">send.</em>
            </h1>
            <p className="mt-6 max-w-lg text-base sm:text-lg text-ivory/70 leading-relaxed">
              Part strategist, part editor, always paying attention.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal direction="up" distance={24}>
            <CampaignArt
              palette="lavender"
              label="Editorial abstract portrait placeholder"
              className="h-[min(70vw,560px)] min-h-[300px] sm:min-h-[340px] rounded-[1.75rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            />
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={20}>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">Hello, I&apos;m Myka</p>
              <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.95]">
                Placeholder bio, waiting for a true story.
              </h2>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-ink/70 leading-relaxed">
                This space is intentionally ready for the specialist&apos;s real biography: the moments that shaped their point
                of view, the industries they know best, and the reason they care about making marketing feel more human.
              </p>
              <p className="mt-4 max-w-xl text-base sm:text-lg text-ink/70 leading-relaxed">
                Until those details are supplied, this portfolio avoids presenting invented credentials, personal history, or
                experience as fact.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="ink">
                  Say hello
                </ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime font-medium">Working philosophy</p>
            <h2 className="mt-3 font-serif text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.92]">
              Be useful.
              <br />
              Be <em className="italic">unmistakable.</em>
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-8 lg:ml-[20%] md:grid-cols-2">
            <MotionReveal direction="up" delay={0.1} distance={20}>
              <p className="text-base sm:text-lg text-ivory/70 leading-relaxed">
                People can tell when a brand is trying too hard—and when it has something real to offer. Good marketing
                respects both their time and their intelligence.
              </p>
            </MotionReveal>
            <MotionReveal direction="up" delay={0.2} distance={20}>
              <p className="text-base sm:text-lg text-ivory/70 leading-relaxed">
                That means fewer empty gestures, more meaningful details, and a steady focus on the relationship behind the
                metric.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">The toolkit</p>
            <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.95]">
              Tools are just tools.
              <br />
              <em className="italic">Judgment</em> is the work.
            </h2>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={20}>
            <div className="flex flex-wrap content-start gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/20 px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:border-ink hover:bg-ink hover:text-ivory hover:-translate-y-0.5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">Collaboration, simply</p>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={20}>
            <div>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.95]">
                Clear communication. Kind candor. No black boxes.
              </h2>
              <p className="mt-5 max-w-lg text-base sm:text-lg text-ink/70 leading-relaxed">
                You&apos;ll always know what&apos;s moving, why it matters, and what I need from you next. The process is organized
                enough to keep momentum and flexible enough to let a good idea breathe.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="ink">
                  Work with me
                </ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
