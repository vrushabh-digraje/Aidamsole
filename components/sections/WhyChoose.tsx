"use client";

import { useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

type WhyChooseProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const pillars = [
  {
    title: "Expert Team",
    accent: "border-sky-400 text-sky-700 hover:border-sky-500",
    glowColor: "shadow-sky-100/50 hover:shadow-sky-200/60 ring-sky-500/10",
    iconBg: "bg-sky-50 text-sky-600",
    detail: "10+ certifications across Zoho CRM, Books, Creator, & Analytics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Trusted Partner",
    accent: "border-emerald-400 text-emerald-700 hover:border-emerald-500",
    glowColor: "shadow-emerald-100/50 hover:shadow-emerald-200/60 ring-emerald-500/10",
    iconBg: "bg-emerald-50 text-emerald-600",
    detail: "Official Zoho Authorized Partner status with 100% clear delivery record.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <path d="M12 3 4 7v5c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    accent: "border-indigo-400 text-indigo-700 hover:border-indigo-500",
    glowColor: "shadow-indigo-100/50 hover:shadow-indigo-200/60 ring-indigo-500/10",
    iconBg: "bg-indigo-50 text-indigo-600",
    detail: "Post go-live SLA ticketing channel with turnaround responses < 1 hour.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Proven Process",
    accent: "border-amber-400 text-amber-700 hover:border-amber-500",
    glowColor: "shadow-amber-100/50 hover:shadow-amber-200/60 ring-amber-500/10",
    iconBg: "bg-amber-50 text-amber-600",
    detail: "Strict blueprints mapped and agreed on before writing any Zoho workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <path d="M4 19V5M4 19h16" />
        <path d="M8 15v-4M12 15V8M16 15v-6" />
      </svg>
    ),
  },
] as const;

const proofs = [
  {
    id: "partner",
    title: "Zoho Authorized Partner",
    caption: "Recognised partner status",
    iconBg: "bg-sky-50 text-sky-600 group-hover/proof:bg-sky-600 group-hover/proof:text-white",
    borderHover: "hover:border-sky-200 hover:ring-1 hover:ring-sky-500/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <path d="M12 3 4 7v5c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4z" />
      </svg>
    ),
  },
  {
    id: "coverage",
    title: "India & GCC",
    caption: "Manchar · Ajman coverage",
    iconBg: "bg-emerald-50 text-emerald-600 group-hover/proof:bg-emerald-600 group-hover/proof:text-white",
    borderHover: "hover:border-emerald-200 hover:ring-1 hover:ring-emerald-500/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
      </svg>
    ),
  },
  {
    id: "focus",
    title: "Mid-market focus",
    caption: "Built for growing teams",
    iconBg: "bg-amber-50 text-amber-600 group-hover/proof:bg-amber-500 group-hover/proof:text-white",
    borderHover: "hover:border-amber-200 hover:ring-1 hover:ring-amber-500/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "process",
    title: "Process before software",
    caption: "Systems designed, then built on Zoho",
    iconBg: "bg-purple-50 text-purple-600 group-hover/proof:bg-purple-600 group-hover/proof:text-white",
    borderHover: "hover:border-purple-200 hover:ring-1 hover:ring-purple-500/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8.5 6h7M7.5 8.2 10.5 16M16.5 8.2 13.5 16" />
      </svg>
    ),
  },
] as const;

export function WhyChoose({
  tone = "default",
  spacing = "default",
  className,
}: WhyChooseProps) {
  const headingId = "why-choose-heading";
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <Section
      id="why-us"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="grid items-center gap-10 lg:grid-cols-12">
        
        {/* Left — copy (Takes 4/12 columns) */}
        <div className="max-w-md lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Why Aidamsole
          </p>
          <h2
            id={headingId}
            className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            Why clients choose Aidamsole?
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-500">
            Businesses choose us for one reason — we make Zoho work for how
            they already operate. Consultation, implementation, training, and
            support as one connected engagement.
          </p>
        </div>

        {/* Center — interactive floating value cards grid (Takes 4/12 columns) */}
        <div className="relative mx-auto w-full max-w-sm lg:col-span-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl"
          />

          <ul className="relative grid grid-cols-2 gap-4">
            {pillars.map((item, index) => {
              const isHovered = index === activePillar;
              return (
                <li
                  key={item.title}
                  onMouseEnter={() => setActivePillar(index)}
                  onMouseLeave={() => setActivePillar(null)}
                  className={cn(
                    "rounded-2xl border-2 bg-white p-4 shadow-sm transition-all duration-500 ease-in-out cursor-default relative overflow-hidden flex flex-col justify-between min-h-[140px]",
                    item.accent,
                    item.glowColor,
                    index % 2 === 1 && "mt-5",
                    index % 2 === 0 && "-mt-1",
                    isHovered ? "scale-[1.04] shadow-md z-10 border-opacity-100 ring-1" : "border-opacity-60"
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300",
                        item.iconBg,
                        isHovered && "scale-105"
                      )}
                    >
                      {item.icon}
                    </span>
                    <p className="mt-3 text-xs font-extrabold tracking-tight text-gray-900 leading-tight">
                      {item.title}
                    </p>
                  </div>
                  
                  {/* Dynamic reveal text details inside grid card */}
                  <div className={cn(
                    "mt-2 text-[10px] text-gray-500 leading-snug transition-all duration-500 ease-in-out overflow-hidden",
                    isHovered ? "max-h-[60px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {item.detail}
                  </div>

                  <span
                    className={cn(
                      "mt-2.5 block h-0.5 w-6 rounded-full",
                      item.accent.includes("sky") && "bg-sky-400",
                      item.accent.includes("emerald") && "bg-emerald-400",
                      item.accent.includes("indigo") && "bg-indigo-400",
                      item.accent.includes("amber") && "bg-amber-400",
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — proof cards (Takes 4/12 columns) */}
        <ul className="flex flex-col gap-3 lg:col-span-4 w-full">
          {proofs.map((item) => {
            const isHighlight = activePillar !== null && (
              (activePillar === 0 && item.id === "partner") ||
              (activePillar === 1 && item.id === "coverage") ||
              (activePillar === 2 && item.id === "focus") ||
              (activePillar === 3 && item.id === "process")
            );
            return (
              <li
                key={item.title}
                className={cn(
                  "group/proof flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-500 ease-in-out",
                  isHighlight 
                    ? "border-blue-500 scale-[1.02] shadow-md ring-1 ring-blue-500/10" 
                    : "hover:border-blue-200 hover:-translate-x-0.5 hover:shadow-md",
                  item.borderHover
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 shadow-sm",
                    item.iconBg,
                    isHighlight && "scale-105"
                  )}
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className={cn(
                    "text-xs font-extrabold tracking-tight text-gray-900 transition-colors duration-300",
                    isHighlight && "text-blue-600"
                  )}>
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[10px] text-gray-500">{item.caption}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
