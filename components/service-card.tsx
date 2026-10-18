import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function ServiceCard({
  service,
}: {
  service: { number: string; title: string; copy: string; items: string[] };
}) {
  return (
    <article className="group grid gap-8 border-t border-ivory/15 py-10 transition-colors duration-300 md:grid-cols-2 md:hover:border-lime/50">
      <div>
        <span className="font-mono text-[11px] text-lime font-medium">{service.number}</span>
        <h3 className="mt-3 max-w-md font-serif text-[clamp(2rem,3vw,3.1rem)] leading-[0.95] transition-colors duration-200 group-hover:text-lime">
          {service.title}
        </h3>
      </div>
      <div>
        <p className="max-w-md text-ivory/70 leading-relaxed">{service.copy}</p>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-ivory/85">
              <span className="text-lime text-xs" aria-hidden="true">
                ✳
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="group/link mt-6 inline-flex items-center gap-2 border-b border-ivory/40 pb-1 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
        >
          <span>Explore services</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
