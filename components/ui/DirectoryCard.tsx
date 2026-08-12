"use client";

import Image from "next/image";
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

// Light theme category presets with top border accents, readable text tokens, and images
const cardThemePresets: Record<
  string,
  {
    bg: string; // Theme color for the top border and icon container
    accentText: string; // Highly legible text color for light backgrounds
    image?: string;
  }
> = {
  // Solutions
  "sales-system": {
    bg: "bg-amber-500",
    accentText: "text-amber-700 group-hover:text-amber-800",
    image: "/brand/solution-sales.jpg"
  },
  "operations-system": {
    bg: "bg-sky-500",
    accentText: "text-sky-700 group-hover:text-sky-800",
    image: "/brand/solution-operations.jpg"
  },
  "support-system": {
    bg: "bg-rose-500",
    accentText: "text-rose-700 group-hover:text-rose-800",
    image: "/brand/solution-support.jpg"
  },
  "finance-operations": {
    bg: "bg-emerald-500",
    accentText: "text-emerald-700 group-hover:text-emerald-800",
    image: "/brand/solution-finance.jpg"
  },
  
  // Industries
  "retail-distribution": {
    bg: "bg-amber-500",
    accentText: "text-amber-700 group-hover:text-amber-800",
    image: "/brand/case-study-retail.jpg"
  },
  "real-estate": {
    bg: "bg-sky-500",
    accentText: "text-sky-700 group-hover:text-sky-800",
    image: "/brand/case-study-real-estate.jpg"
  },
  "manufacturing": {
    bg: "bg-emerald-500",
    accentText: "text-emerald-700 group-hover:text-emerald-800",
    image: "/brand/case-study-manufacturing.jpg"
  },
  "healthcare": {
    bg: "bg-rose-500",
    accentText: "text-rose-700 group-hover:text-rose-800",
    image: "/brand/case-study-healthcare.jpg"
  },
  "education": {
    bg: "bg-indigo-500",
    accentText: "text-indigo-700 group-hover:text-indigo-800",
    image: "/brand/case-study-education.jpg"
  },
  "service": {
    bg: "bg-teal-500",
    accentText: "text-teal-700 group-hover:text-teal-800",
    image: "/brand/case-study-service.jpg"
  },

  // Platform
  "crm": {
    bg: "bg-[#E42527]",
    accentText: "text-[#E42527] group-hover:text-red-700",
    image: "/brand/solution-sales.jpg"
  },
  "books": {
    bg: "bg-emerald-500",
    accentText: "text-emerald-700 group-hover:text-emerald-800",
    image: "/brand/solution-finance.jpg"
  },
  "inventory": {
    bg: "bg-amber-500",
    accentText: "text-amber-700 group-hover:text-amber-800",
    image: "/brand/solution-operations.jpg"
  },
  "projects": {
    bg: "bg-blue-500",
    accentText: "text-blue-700 group-hover:text-blue-800",
    image: "/brand/platform-projects.jpg"
  },
  "people": {
    bg: "bg-yellow-500",
    accentText: "text-yellow-700 group-hover:text-yellow-800",
    image: "/brand/platform-people.jpg"
  },
  "desk": {
    bg: "bg-rose-500",
    accentText: "text-rose-700 group-hover:text-rose-800",
    image: "/brand/solution-support.jpg"
  },
  "analytics": {
    bg: "bg-cyan-500",
    accentText: "text-cyan-700 group-hover:text-cyan-800",
    image: "/brand/platform-analytics.jpg"
  },
  "creator": {
    bg: "bg-orange-500",
    accentText: "text-orange-700 group-hover:text-orange-800",
    image: "/brand/platform-creator.jpg"
  },
  "campaigns": {
    bg: "bg-purple-500",
    accentText: "text-purple-700 group-hover:text-purple-800",
    image: "/brand/platform-campaigns.jpg"
  },
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
  const slug = href.split("/").pop() || "";
  
  const theme = cardThemePresets[slug] ?? {
    bg: "bg-blue-600",
    accentText: "text-blue-700 group-hover:text-blue-850"
  };

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col rounded-none border border-gray-200 bg-white p-0 no-underline transition-all duration-300 ease-in-out",
        "hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 hover:no-underline overflow-hidden",
        tall && "min-h-[220px] md:min-h-[240px]",
        className
      )}
    >
      {/* 1. Colored top accent strip indicator (no border-radius) */}
      <div className={cn("h-1.5 w-full shrink-0", theme.bg)} />

      {/* 2. Top-framed Showcase Image Block (no border-radius) */}
      {theme.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-150 z-10 rounded-none">
          <Image
            src={theme.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-103 rounded-none"
            sizes="(max-w-7xl) 33vw, 25vw"
          />
        </div>
      ) : (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-150 flex items-center justify-center z-10 rounded-none">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Blueprint Preview</span>
        </div>
      )}

      {/* 3. Bottom Text Block (no border-radius) */}
      <div className="relative z-10 flex flex-col flex-grow justify-between p-6 bg-white rounded-none">
        <div>
          {/* Side-by-side Square Badge and Title */}
          <div className="flex items-center gap-3">
            <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-none text-white shadow-sm transition-all duration-300 group-hover:scale-105", theme.bg)}>
              <span className="[&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:stroke-[2]">
                {icon}
              </span>
            </span>
            <h3 className="text-base font-extrabold tracking-tight text-gray-900 transition-colors duration-300">
              {title}
            </h3>
          </div>

          {description ? (
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              {description}
            </p>
          ) : null}
        </div>

        {/* Dynamic CTA link with sliding indicator arrow */}
        {ctaLabel ? (
          <span className={cn("inline-flex items-center gap-1.5 pt-5 text-xs font-bold transition-all duration-300 ease-in-out", theme.accentText)}>
            {ctaLabel}
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true">→</span>
          </span>
        ) : null}
      </div>
    </Link>
  );
}
