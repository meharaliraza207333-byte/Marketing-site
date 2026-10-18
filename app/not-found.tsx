import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="px-6 py-40 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">404 / Lost in the feed</p>
        <h1 className="mt-4 font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
          That page has
          <br />
          <em className="italic">moved on.</em>
        </h1>
        <div className="mt-8">
          <ButtonLink href="/">Back home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
