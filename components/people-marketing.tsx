import Image from "next/image";
import { ButtonLink } from "./button-link";

const visuals = [
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    alt: "Creative team collaborating around a table",
    label: "Social direction / Human first",
    className: "mt-10",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    alt: "Marketing professionals planning a campaign",
    label: "AI assisted / Strategically led",
    className: "mb-10",
  },
];

export function PeopleMarketing() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-ivory sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_78%_22%,rgba(213,255,85,.22),transparent_24%),linear-gradient(rgba(246,243,236,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(246,243,236,.06)_1px,transparent_1px)] [background-size:auto,32px_32px,32px_32px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">05 / People + systems</p>
          <h2 className="mt-4 font-serif text-[clamp(2.8rem,5.4vw,5.7rem)] leading-[0.9]">
            Human ideas.<br />
            <em className="italic">Intelligent</em> momentum.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/70">
            Great marketing still starts with people. AI makes the research, production, and testing rhythm sharper—while voice,
            relevance, and good judgment stay firmly human.
          </p>
          <div className="mt-8"><ButtonLink href="/services" variant="ghost">See how I work</ButtonLink></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {visuals.map((visual) => (
            <figure key={visual.label} className={`group relative overflow-hidden rounded-[1.5rem] border border-ivory/12 bg-ivory/5 ${visual.className}`}>
              <Image src={visual.src} alt={visual.alt} width={1200} height={1500} sizes="(min-width: 1024px) 28vw, 80vw" className="h-[380px] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/90">
                <span className="max-w-[12rem] leading-relaxed">{visual.label}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-[10px] font-bold tracking-[-0.12em] text-ink">MP</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
