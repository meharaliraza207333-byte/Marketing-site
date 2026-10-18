import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/final-cta";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Email campaign strategy, newsletter design, automation, social media management, and performance reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">Services / 01</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
            Thoughtful strategy.
            <br />
            <em className="italic">Strong signals.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/70">
            Flexible support for teams who care how their brand shows up—one campaign, one calendar, and one relationship
            at a time.
          </p>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="grid gap-6 border-t border-ink/12 py-10 last:border-b md:grid-cols-[7rem_1.1fr_1fr] md:transition-colors md:hover:bg-ink/[0.03]"
            >
              <div>
                {index === 0 || services[index - 1].group !== service.group ? (
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">{service.group}</p>
                ) : null}
                <span className="font-mono text-[11px] text-ink/45">{service.number}</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[0.95]">{service.title}</h2>
              <p className="max-w-md text-ink/70">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-lav px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em]">Ways to partner</p>
          <div>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,4.2rem)] leading-[0.95]">
              Project support, ongoing momentum, or a little of both.
            </h2>
            <p className="mt-6 max-w-lg text-ink/75">
              Every engagement is shaped around the actual work at hand: a launch, a social content system, monthly email
              support, or an integrated email + social rhythm.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="ink">
                Tell me what you need
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title="Not sure where to start?" copy="We can figure out the right first move together." />
    </>
  );
}
