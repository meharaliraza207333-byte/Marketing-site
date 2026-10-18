import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CampaignArt } from "@/components/campaign-art";
import { FinalCta } from "@/components/final-cta";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About Myka Perez, independent email marketing specialist and social media strategist.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">About / 03</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
            The person behind
            <br />
            the <em className="italic">send.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ivory/70">Part strategist, part editor, always paying attention.</p>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <CampaignArt palette="lavender" label="Editorial abstract portrait placeholder" className="h-[min(70vw,560px)] min-h-[320px] rounded-[1.75rem]" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Hello, I&apos;m Myka</p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.95]">Placeholder bio, waiting for a true story.</h2>
            <p className="mt-5 max-w-xl text-ink/70">
              This space is intentionally ready for the specialist&apos;s real biography: the moments that shaped their point
              of view, the industries they know best, and the reason they care about making marketing feel more human.
            </p>
            <p className="mt-4 max-w-xl text-ink/70">
              Until those details are supplied, this portfolio avoids presenting invented credentials, personal history, or
              experience as fact.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="ink">
                Say hello
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">Working philosophy</p>
          <h2 className="mt-3 font-serif text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.92]">
            Be useful.
            <br />
            Be <em className="italic">unmistakable.</em>
          </h2>
          <div className="mt-12 grid gap-8 md:ml-[20%] md:grid-cols-2">
            <p className="text-lg text-ivory/70">
              People can tell when a brand is trying too hard—and when it has something real to offer. Good marketing
              respects both their time and their intelligence.
            </p>
            <p className="text-lg text-ivory/70">
              That means fewer empty gestures, more meaningful details, and a steady focus on the relationship behind the
              metric.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">The toolkit</p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.95]">
              Tools are just tools.
              <br />
              <em className="italic">Judgment</em> is the work.
            </h2>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-ink/20 px-4 py-2 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Collaboration, simply</p>
          <div>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.95]">
              Clear communication. Kind candor. No black boxes.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-ink/70">
              You&apos;ll always know what&apos;s moving, why it matters, and what I need from you next. The process is organized
              enough to keep momentum and flexible enough to let a good idea breathe.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="ink">
                Work with me
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
