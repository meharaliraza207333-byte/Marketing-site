import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function ServiceCard({
  service,
}: {
  service: { number: string; title: string; copy: string; items: string[] };
}) {
  return (
    <article className="grid gap-8 border-t border-ivory/15 py-8 md:grid-cols-2">
      <div>
        <span className="font-mono text-[11px] text-lime">{service.number}</span>
        <h3 className="mt-3 max-w-md font-serif text-[clamp(2rem,3vw,3.1rem)] leading-[0.95]">{service.title}</h3>
      </div>
      <div>
        <p className="max-w-md text-ivory/70">{service.copy}</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <span className="text-lime">✳</span>
              {item}
            </li>
          ))}
        </ul>
        <Link href="/services" className="mt-6 inline-flex items-center gap-2 border-b border-ivory/40 pb-1 text-sm hover:border-lime hover:text-lime">
          Explore services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
