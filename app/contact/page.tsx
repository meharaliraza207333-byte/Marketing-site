import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Start a project with Mara Cole — email marketing and social media strategy inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">Work with me / 04</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
            Let&apos;s make your next move a <em className="italic">good one.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/70">
            Tell me a little about what you&apos;re building. I&apos;ll come back to you within two business days.
          </p>
        </div>
      </section>
      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Say hello</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block border-b border-ink font-serif text-2xl sm:text-3xl">
              {site.email}
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink/60">Prefer a quick note? Email works beautifully, too.</p>
            <div className="mt-8 flex flex-col gap-2 text-sm">
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-ink/60">
                LinkedIn ↗
              </a>
              <a href={site.social.instagram} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-ink/60">
                Instagram ↗
              </a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
