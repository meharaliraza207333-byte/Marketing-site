import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

type Variant = "lime" | "ink" | "ghost" | "text";

export function ButtonLink({
  href,
  children,
  variant = "lime",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
}) {
  const styles: Record<Variant, string> = {
    lime: "bg-lime text-ink shadow-[0_10px_30px_rgba(213,255,85,.18)] hover:-translate-y-0.5 hover:bg-ivory",
    ink: "bg-ink text-ivory hover:-translate-y-0.5 hover:bg-lime hover:text-ink",
    ghost: "border border-ivory/25 bg-ivory/5 text-ivory hover:-translate-y-0.5 hover:border-lime hover:text-lime",
    text: "rounded-none border-b border-current px-0 py-1 hover:text-lime",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${styles[variant]}`}
    >
      {children}
      {arrow && variant === "lime" ? (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-lime">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      ) : (
        arrow && <ArrowUpRight className="h-4 w-4" />
      )}
    </Link>
  );
}
