import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected email, automation, social, and content strategy concepts from Myka Perez.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <MotionReveal direction="up" distance={20}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime font-medium">Selected work / 02</p>
            <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.75rem,8vw,7rem)] leading-[0.9]">
              Ideas that find
              <br />
              their <em className="italic">people.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-ivory/70 leading-relaxed">
              Original concepts and client-ready thinking across email, lifecycle, social, and content strategy.
            </p>
            <div className="mt-6 max-w-xl rounded-2xl border border-ivory/12 bg-ivory/5 p-4 font-mono text-[11px] leading-relaxed tracking-wide text-ivory/70 backdrop-blur-sm">
              All projects currently shown are clearly marked as concepts. No client results or testimonials have been
              invented.
            </div>
          </MotionReveal>
        </div>
      </section>
      <section className="bg-ivory px-6 py-16 text-ink sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
