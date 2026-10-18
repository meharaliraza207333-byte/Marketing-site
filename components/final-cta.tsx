import { ButtonLink } from "./button-link";
import { MotionReveal } from "./motion-reveal";

export function FinalCta({
  eyebrow = "Your next good idea starts here",
  title = "Ready to make some noise?",
  copy = "Bring the brief, the blank page, or the thing that isn’t quite working yet.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-lime px-6 py-20 text-ink sm:px-10 sm:py-24 lg:px-16">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-between items-center gap-10 lg:flex-row lg:items-center">
        <MotionReveal direction="up" distance={20} className="w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.9]">{title}</h2>
          <p className="mt-5 max-w-md text-base sm:text-lg leading-relaxed">{copy}</p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="ink">
              Let&apos;s work together
            </ButtonLink>
          </div>
        </MotionReveal>
        <MotionReveal direction="up" delay={0.2} distance={20} className="shrink-0">
          <div className="group grid h-44 w-44 place-items-center rounded-full bg-ink text-[6rem] leading-none text-lime shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-105 sm:h-60 sm:w-60 sm:text-[8rem] lg:h-72 lg:w-72 lg:text-[9rem]">
            <span className="rotate-12 transition-transform duration-700 group-hover:rotate-45">✳</span>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
