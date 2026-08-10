import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type DirectoryCardProps = {
  href: string;
  title: string;
  description?: string;
  icon: ReactNode;
  className?: string;
  /** Optional in-card CTA label (e.g. "View System"). */
  ctaLabel?: string;
  /** Increase vertical presence for entry-point cards. */
  tall?: boolean;
};

export function DirectoryCard({
  href,
  title,
  description,
  icon,
  className,
  ctaLabel,
  tall = false,
}: DirectoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 no-underline shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-200 hover:no-underline hover:shadow-md",
        tall && "min-h-[220px] md:min-h-[240px]",
        className,
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition duration-200 group-hover:scale-105">
        <span className="[&_svg]:h-6 [&_svg]:w-6 [&_svg]:text-white [&_svg]:stroke-[1.75]">
          {icon}
        </span>
      </span>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-primary">
        {title}
      </h3>

      {description ? (
        <p className="mt-2 line-clamp-3 text-sm leading-snug text-gray-600">
          {description}
        </p>
      ) : null}

      {ctaLabel ? (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary transition-all duration-300 ease-in-out group-hover:gap-2.5">
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </span>
      ) : null}
    </Link>
  );
}
