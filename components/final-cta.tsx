import { ButtonLink } from "./button-link";

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
    <section className="relative overflow-hidden bg-lime px-6 py-24 text-ink sm:px-10 lg:px-16">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-between gap-10 lg:flex-row lg:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em]">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9]">{title}</h2>
          <p className="mt-5 max-w-md text-lg">{copy}</p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="ink">
              Let&apos;s work together
            </ButtonLink>
          </div>
        </div>
        <div className="grid h-56 w-56 place-items-center rounded-full bg-ink text-[9rem] leading-none text-lime sm:h-72 sm:w-72">
          <span className="rotate-12">✳</span>
        </div>
      </div>
    </section>
  );
}
