"use client";

import { useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type ProblemGridItem = {
  title: string;
  description: string;
  icon:
    | "leakage"
    | "pipeline"
    | "delay"
    | "payment"
    | "reporting"
    | "accountability";
};

type ProblemGridProps = {
  title: string;
  description: string;
  items: ProblemGridItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

// Premium themed checklists with high legibility and action items
const solutionChecklists: Record<ProblemGridItem["icon"], string[]> = {
  leakage: [
    "Deploy API connectors to capture leads from ads, web, and referrals instantly.",
    "Auto-assign records to active regional reps using territory rules.",
    "Monitor response times via automated SLA validation timers."
  ],
  pipeline: [
    "Lock mandatory deal parameters at each qualification stage.",
    "Generate alert notifications for deals stagnant over 72 hours.",
    "Align pipeline phases to replicate verified client steps."
  ],
  delay: [
    "Trigger immediate customer follow-ups on stage transition.",
    "Configure push alerts to assign urgent next-action alerts.",
    "Sync customer correspondence history to central timelines."
  ],
  accountability: [
    "Establish clear department ownership roles for process transitions.",
    "Enforce layout rules so status changes require field validations.",
    "Log every record transition in a secure, central audit log."
  ],
  reporting: [
    "Graph conversion funnels dynamically on real-time dashboards.",
    "Schedule automated performance summaries directly to executive inboxes.",
    "Establish standard, consistent criteria for won/lost classifications."
  ],
  payment: [
    "Generate professional invoices automatically upon deal closure.",
    "Integrate credit card and regional payment gateway links.",
    "Schedule recurring reminder schedules for outstanding collections."
  ]
};

function ProblemIcon({ type }: { type: ProblemGridItem["icon"] }) {
  const className = "h-5 w-5 stroke-[1.75]";

  switch (type) {
    case "leakage":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 3v10M8 9l4 4 4-4" stroke="currentColor" />
          <path d="M5 19h14" stroke="currentColor" />
        </svg>
      );
    case "pipeline":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="4" width="6" height="16" rx="1" stroke="currentColor" />
          <rect x="9" y="8" width="6" height="12" rx="1" stroke="currentColor" />
          <rect x="15" y="12" width="6" height="8" rx="1" stroke="currentColor" />
        </svg>
      );
    case "delay":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path d="M12 7v6l4 2" stroke="currentColor" />
        </svg>
      );
    case "payment":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" />
          <path d="M2 10h20" stroke="currentColor" />
        </svg>
      );
    case "reporting":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M4 19V5M4 19h16" stroke="currentColor" />
          <path d="M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" />
        </svg>
      );
    case "accountability":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="9" cy="8" r="3" stroke="currentColor" />
          <path d="M3 19a6 6 0 0 1 12 0" stroke="currentColor" />
          <path d="M16 11l2 2 4-4" stroke="currentColor" />
        </svg>
      );
  }
}

export function ProblemGrid({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: ProblemGridProps) {
  const headingId = "problem-grid-heading";
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <Section
      id="problems"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      {/* Section Header Copy */}
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      {/* Premium Color Grid */}
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          const checklist = solutionChecklists[item.icon] ?? [];
          
          return (
            <li
              key={item.title}
              className={cn(
                "group relative flex flex-col justify-between rounded-none border bg-white p-6 shadow-sm transition-all duration-300",
                isExpanded 
                  ? "border-rose-300 shadow-lg ring-1 ring-rose-100 bg-slate-50/10" 
                  : "border-gray-200 hover:shadow-lg hover:-translate-y-1 hover:border-rose-200"
              )}
            >
              {/* Premium Rose left indicator strip */}
              <div className={cn(
                "absolute left-0 inset-y-0 w-1.5 shrink-0 transition-transform duration-300",
                isExpanded ? "bg-rose-600 scale-y-100" : "bg-rose-450 group-hover:scale-y-105"
              )} />

              <div>
                {/* Header row: Premium Crimson Warning Badge */}
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-none border transition-all duration-300",
                    isExpanded 
                      ? "bg-rose-600 border-rose-600 text-white" 
                      : "bg-rose-50/50 border-rose-100/80 text-rose-700 group-hover:scale-105"
                  )}>
                    <ProblemIcon type={item.icon} />
                  </span>
                  <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                    Failure Gate 0{idx + 1}
                  </span>
                </div>

                {/* Title in high contrast grey with deep crimson active hover */}
                <h3 className="mt-5 text-base font-extrabold text-gray-900 tracking-tight group-hover:text-rose-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-gray-500">
                  {item.description}
                </p>

                {/* Interactive Diagnostic Drawer in premium Slate/Emerald themes */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isExpanded ? "max-h-[220px] mt-5 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="p-4 bg-white border border-emerald-150 rounded-none text-[11px] text-gray-600 shadow-sm relative">
                    {/* Sage indicator line */}
                    <div className="absolute left-0 inset-y-0 w-1 bg-emerald-500" />
                    
                    <p className="font-extrabold text-emerald-800 uppercase tracking-wider text-[9px] mb-2.5 pl-1.5">
                      How we solve this in Zoho:
                    </p>
                    <ul className="space-y-2 pl-1.5">
                      {checklist.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">✓</span>
                          <span className="leading-relaxed font-semibold text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action expander button with legible warning color triggers */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className={cn(
                    "text-xs font-bold transition-all duration-200 focus:outline-none hover:underline",
                    isExpanded ? "text-gray-500" : "text-rose-700 hover:text-rose-800"
                  )}
                >
                  {isExpanded ? "Close Diagnosis" : "How Zoho Solves This →"}
                </button>
                
                {/* Active alert indicator with glowing state transitions */}
                <span className="flex items-center gap-1.5 text-[9px] uppercase font-bold text-gray-400">
                  <span className={cn(
                    "h-1.5 w-1.5 rounded-full animate-ping", 
                    isExpanded ? "bg-emerald-500" : "bg-rose-500"
                  )} />
                  {isExpanded ? "Resolved" : "Stagnant"}
                </span>
              </div>

            </li>
          );
        })}
      </ul>
    </Section>
  );
}
