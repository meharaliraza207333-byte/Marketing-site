import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Start a project with Myka Perez — email marketing and social media strategy inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime font-medium">Work with me / 04</p>
            <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.75rem,8vw,7rem)] leading-[0.9]">
              Let&apos;s make your next move a <em className="italic">good one.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-ivory/70 leading-relaxed">
              Tell me a little about what you&apos;re building. I&apos;ll come back to you within two business days.
            </p>
          </MotionReveal>
        </div>
      </section>
      <section className="bg-ivory px-6 py-16 text-ink sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <MotionReveal direction="up" distance={20}>
            <aside>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 font-medium">Say hello</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block border-b border-ink font-serif text-2xl sm:text-3xl transition-opacity hover:opacity-70"
              >
                {site.email}
              </a>
              <p className="mt-4 max-w-xs text-sm text-ink/65 leading-relaxed">
                Prefer a quick note? Email works beautifully, too.
              </p>
              <div className="mt-8 rounded-2xl bg-paper p-5 sm:p-6 shadow-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45 font-medium">Reply time</p>
                <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                  Within two business days. Share as much context as you have—the brief can be messy.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-2.5 text-sm font-medium">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-ink/60"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-ink/60"
                >
                  Instagram ↗
                </a>
              </div>
            </aside>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.15} distance={24}>
            <ContactForm />
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
