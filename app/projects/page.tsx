import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected email, automation, social, and content strategy concepts from Mara Cole.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">Selected work / 02</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
            Ideas that find
            <br />
            their <em className="italic">people.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/70">
            Original concepts and client-ready thinking across email, lifecycle, social, and content strategy.
          </p>
          <p className="mt-6 max-w-xl rounded-2xl bg-ivory/8 p-4 font-mono text-[11px] leading-relaxed tracking-wide text-ivory/70">
            All projects currently shown are clearly marked as concepts. No client results or testimonials have been
            invented.
          </p>
        </div>
      </section>
      <section className="bg-ivory px-6 py-20 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
