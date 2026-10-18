import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowUpRight } from "./icons";

const footerLinks = [
  ["Home", "/"],
  ["Work", "/projects"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-lime">Have a brief in mind?</p>
        <Link href="/contact" className="group inline-block font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.88]">
          Let&apos;s make it{" "}
          <em className="italic text-lime">
            land.
            <ArrowUpRight className="ml-2 inline h-[0.45em] w-[0.45em] align-baseline transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </em>
        </Link>

        <div className="mt-16 flex flex-col gap-8 border-t border-ivory/12 pt-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Myka Perez home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-[10px] font-bold tracking-[-0.12em] text-ink">MP</span>
            <span className="text-sm font-semibold">{site.name}</span>
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ivory/70" aria-label="Footer">
            {footerLinks.map(([name, href]) => (
              <Link key={href} href={href} className="hover:text-lime">
                {name}
              </Link>
            ))}
            <a href={`mailto:${site.email}`} className="hover:text-lime">
              Email
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime">
              LinkedIn
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-lime">
              Instagram
            </a>
          </nav>
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            © {new Date().getFullYear()} {site.name}. Independent practice.
          </p>
        </div>
      </div>
    </footer>
  );
}
