"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { ROUTES } from "@/lib/constants";
import { getPublishedInsights } from "@/lib/published";
import { cn } from "@/lib/utils";

type InsightsTeaserProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  limit?: number;
  className?: string;
};

function getInsightIllustration(slug: string, isHovered: boolean) {
  const commonSvg = "w-full h-full text-blue-600 transition-all duration-500";

  switch (slug) {
    case "crm-mistakes-after-go-live":
      return (
        <div className="relative w-full h-[140px] rounded-xl bg-gradient-to-tr from-amber-500/10 to-amber-500/5 border border-amber-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b12_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b12_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="z-10 flex items-center gap-4 transition-transform duration-500" style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
            {/* CRM Screen icon */}
            <div className="relative h-14 w-20 rounded-lg border border-amber-300 bg-white shadow-md p-2 flex flex-col justify-between">
              <div className="h-1.5 w-full bg-amber-500/20 rounded" />
              <div className="space-y-1">
                <div className="h-1 w-10 bg-amber-500/30 rounded" />
                <div className="h-1 w-8 bg-amber-500/30 rounded" />
              </div>
              <div className="h-1 w-full bg-amber-500/10 rounded" />
            </div>

            {/* Broken Link Chain */}
            <div className="text-amber-500 font-extrabold text-sm animate-pulse">/ /</div>

            {/* Spreadsheet card falling */}
            <div className="relative h-14 w-14 rounded-lg border border-emerald-300 bg-white shadow-md p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="h-2 w-2 rounded bg-emerald-500" />
                <span className="text-[7px] font-bold text-emerald-600">Excel</span>
              </div>
              <div className="grid grid-cols-3 gap-0.5">
                <div className="h-1.5 bg-gray-100 rounded-[1px]" />
                <div className="h-1.5 bg-gray-100 rounded-[1px]" />
                <div className="h-1.5 bg-gray-100 rounded-[1px]" />
                <div className="h-1.5 bg-gray-100 rounded-[1px]" />
                <div className="h-1.5 bg-gray-100 rounded-[1px]" />
                <div className="h-1.5 bg-gray-100 rounded-[1px]" />
              </div>
            </div>
          </div>
        </div>
      );

    case "handoffs-break-operations":
      return (
        <div className="relative w-full h-[140px] rounded-xl bg-gradient-to-tr from-sky-500/10 to-sky-500/5 border border-sky-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e912_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e912_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="z-10 flex items-center gap-4 transition-transform duration-500" style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
            {/* Sales Pipeline Card */}
            <div className="relative h-14 w-16 rounded-lg border border-sky-300 bg-white shadow-md p-2 flex flex-col justify-between">
              <span className="text-[7px] font-bold text-sky-600 bg-sky-50 px-1 rounded self-start">Pipeline</span>
              <div className="h-1.5 w-full bg-emerald-500 rounded text-[7px] font-bold text-white flex items-center justify-center">WON</div>
            </div>

            {/* Gap Arrow */}
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-red-500 animate-bounce">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Projects checklist card falling out of sync */}
            <div className="relative h-14 w-16 rounded-lg border border-red-200 bg-white shadow-md p-2 flex flex-col justify-between">
              <span className="text-[7px] font-bold text-red-500 bg-red-50 px-1 rounded self-start">Handoff</span>
              <div className="space-y-1">
                <div className="h-1.5 w-full bg-gray-100 rounded" />
                <div className="h-1.5 w-8 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      );

    case "design-system-before-zoho":
      return (
        <div className="relative w-full h-[140px] rounded-xl bg-gradient-to-tr from-emerald-500/10 to-emerald-500/5 border border-emerald-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98112_1px,transparent_1px),linear-gradient(to_bottom,#10b98112_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="z-10 flex items-center gap-3 transition-transform duration-500" style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
            {/* Blueprint Blueprint Frame */}
            <div className="relative h-14 w-20 rounded-lg border border-dashed border-emerald-400 bg-white shadow-md p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[7px] font-bold text-emerald-600">Strategy Blueprint</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-full bg-emerald-50/80 border border-emerald-100 rounded" />
                <div className="h-1.5 w-10 bg-emerald-50/80 border border-emerald-100 rounded" />
              </div>
            </div>

            {/* Sync cog */}
            <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6 text-emerald-600", isHovered ? "animate-spin" : "animate-[spin_6s_linear_infinite]")}>
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-[140px] rounded-xl bg-gradient-to-tr from-blue-500/10 to-blue-500/5 border border-blue-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c712_1px,transparent_1px),linear-gradient(to_bottom,#0284c712_1px,transparent_1px)] bg-[size:14px_24px]" />
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border text-blue-600">💡</span>
        </div>
      );
  }
}

export function InsightsTeaser({
  tone = "default",
  spacing = "default",
  limit = 3,
  className,
}: InsightsTeaserProps) {
  const headingId = "insights-teaser-heading";
  const items = getPublishedInsights().slice(0, limit);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <Section
      id="insights"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Insights
          </p>
          <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            More insights, more value
          </h2>
          <p className="mt-3 text-sm md:text-base leading-snug text-gray-500">
            Practical notes on Zoho implementation, CRM adoption, and operating
            design.
          </p>
        </div>
        <Link
          href={ROUTES.insights}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View all insights →
        </Link>
      </div>

      <ul className="grid gap-6 md:grid-cols-3">
        {items.map((item) => {
          const isHovered = hoveredCard === item.slug;
          
          let titleHighlight = "group-hover:text-blue-600";
          if (item.slug === "crm-mistakes-after-go-live") {
            titleHighlight = "group-hover:text-amber-600";
          } else if (item.slug === "handoffs-break-operations") {
            titleHighlight = "group-hover:text-sky-600";
          } else if (item.slug === "design-system-before-zoho") {
            titleHighlight = "group-hover:text-emerald-600";
          }

          return (
            <li 
              key={item.slug}
              onMouseEnter={() => setHoveredCard(item.slug)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
                {/* Custom graphic asset header */}
                <div className="mb-4">
                  {getInsightIllustration(item.slug, isHovered)}
                </div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  {item.category}
                </p>
                <h3 className={cn("mt-2 text-base font-extrabold tracking-tight text-gray-900 transition-colors duration-300", titleHighlight)}>
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-xs md:text-sm leading-snug text-gray-500">
                  {item.description}
                </p>
                <Link
                  href={`${ROUTES.insights}/${item.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-blue-600 no-underline hover:text-blue-700"
                >
                  <span>Read insight</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
