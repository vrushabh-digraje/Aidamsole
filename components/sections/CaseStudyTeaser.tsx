"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { SectionIcons } from "@/components/ui/SectionIcons";
import { ROUTES } from "@/lib/constants";
import { getPublishedIndustries } from "@/lib/published";
import { cn } from "@/lib/utils";

type CaseStudyTeaserProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const industryDetails: Record<
  string,
  {
    module: string;
    image: string;
    gradient: string;
    textColor: string;
    badgeColor: string;
    borderHover: string;
    diagram: React.ReactNode;
  }
> = {
  "retail-distribution": {
    module: "CRM + Inventory + Books",
    image: "/brand/case-study-retail.jpg",
    gradient: "from-amber-600 via-amber-700 to-amber-900",
    textColor: "text-amber-600",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-600",
    borderHover: "hover:border-amber-300",
    diagram: (
      <div className="w-full max-w-[240px] rounded-xl border border-amber-200/40 bg-white/95 backdrop-blur-md p-4 shadow-lg text-left space-y-3">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <span className="text-[10px] font-bold text-amber-600">Omnichannel Trade Sync</span>
          <span className="text-[9px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">Active</span>
        </div>
        <div className="space-y-1.5">
          <p className="text-[9px] text-gray-400 font-bold">LIVE STOCKS:</p>
          <div className="flex justify-between text-[10px] text-gray-700">
            <span>Warehouse A (Delhi)</span>
            <span className="font-extrabold">1,450 units</span>
          </div>
          <div className="flex justify-between text-[10px] text-gray-700">
            <span>Warehouse B (Dubai)</span>
            <span className="font-extrabold text-amber-600">30 units (Low)</span>
          </div>
        </div>
        <div className="bg-amber-50/50 p-2 rounded border border-amber-100/60 text-[9px] text-gray-600 font-semibold leading-relaxed">
          Order placed triggers auto stock reserves and Books billing drafts.
        </div>
      </div>
    )
  },
  "real-estate": {
    module: "Zoho CRM + Analytics",
    image: "/brand/case-study-real-estate.jpg",
    gradient: "from-sky-600 via-sky-700 to-sky-900",
    textColor: "text-sky-600",
    badgeColor: "bg-sky-50 border-sky-200 text-sky-600",
    borderHover: "hover:border-sky-300",
    diagram: (
      <div className="w-full max-w-[240px] rounded-xl border border-sky-200/40 bg-white/95 backdrop-blur-md p-4 shadow-lg text-left space-y-3">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <span className="text-[10px] font-bold text-sky-600">CRM Deal Stages</span>
          <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">Broker View</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] bg-gray-50 p-1.5 rounded">
            <span>Enquiry Received</span>
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          </div>
          <div className="flex justify-between items-center text-[10px] bg-gray-50 p-1.5 rounded">
            <span>Site Visit Booked</span>
            <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
          </div>
          <div className="flex justify-between items-center text-[10px] bg-gray-50 p-1.5 rounded">
            <span>Payment Scheduled</span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
    )
  },
  "manufacturing": {
    module: "CRM + Projects + Books",
    image: "/brand/case-study-manufacturing.jpg",
    gradient: "from-emerald-600 via-emerald-700 to-emerald-900",
    textColor: "text-emerald-600",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-600",
    borderHover: "hover:border-emerald-300",
    diagram: (
      <div className="w-full max-w-[240px] rounded-xl border border-emerald-200/40 bg-white/95 backdrop-blur-md p-4 shadow-lg text-left space-y-3">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <span className="text-[10px] font-bold text-emerald-600">Production Card</span>
          <span className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded">In Queue</span>
        </div>
        <p className="text-[11px] font-extrabold text-gray-800">Job Card #WO-8912</p>
        <div className="space-y-1.5 text-[10px] text-gray-600">
          <div className="flex justify-between"><span>Materials:</span><span className="font-bold text-gray-800">100% Allocated</span></div>
          <div className="flex justify-between"><span>Work Progress:</span><span className="font-bold text-emerald-600">80% Done</span></div>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded overflow-hidden">
          <div className="h-full bg-emerald-500 rounded" style={{ width: '80%' }}></div>
        </div>
      </div>
    )
  },
  "healthcare": {
    module: "CRM + Desk + Creator",
    image: "/brand/case-study-healthcare.jpg",
    gradient: "from-rose-600 via-rose-700 to-rose-900",
    textColor: "text-rose-600",
    badgeColor: "bg-rose-50 border-rose-200 text-rose-600",
    borderHover: "hover:border-rose-300",
    diagram: (
      <div className="w-full max-w-[240px] rounded-xl border border-rose-200/40 bg-white/95 backdrop-blur-md p-4 shadow-lg text-left space-y-3">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <span className="text-[10px] font-bold text-rose-600">Patient Portal</span>
          <span className="text-[9px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded">Live</span>
        </div>
        <div className="space-y-2">
          <div className="p-2 rounded bg-rose-50/30 border border-rose-100/50 flex justify-between items-center text-[10px]">
            <span>Appt Reminders</span>
            <span className="text-[8px] bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded">SENT</span>
          </div>
          <div className="p-2 rounded bg-gray-50 border border-gray-100 flex justify-between items-center text-[10px]">
            <span>Referrals File</span>
            <span className="text-gray-400">Archived</span>
          </div>
        </div>
      </div>
    )
  },
  "education": {
    module: "CRM + Books + Creator",
    image: "/brand/case-study-education.jpg",
    gradient: "from-indigo-600 via-indigo-700 to-indigo-900",
    textColor: "text-indigo-600",
    badgeColor: "bg-indigo-50 border-indigo-200 text-indigo-600",
    borderHover: "hover:border-indigo-300",
    diagram: (
      <div className="w-full max-w-[240px] rounded-xl border border-indigo-200/40 bg-white/95 backdrop-blur-md p-4 shadow-lg text-left space-y-3">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <span className="text-[10px] font-bold text-indigo-600">Counseling Intake</span>
          <span className="text-[9px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded">Active</span>
        </div>
        <div className="space-y-1.5">
          <p className="text-[9px] text-gray-400 font-bold">CONVERSION FUNNEL:</p>
          <div className="h-1.5 w-full bg-gray-100 rounded overflow-hidden">
            <div className="h-full bg-indigo-600 rounded" style={{ width: '92%' }}></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-600 mt-1">
            <span>Interview Checked:</span>
            <span className="font-extrabold text-gray-900">92%</span>
          </div>
        </div>
      </div>
    )
  },
  "service": {
    module: "Projects + Books + Analytics",
    image: "/brand/case-study-service.jpg",
    gradient: "from-teal-600 via-teal-700 to-teal-900",
    textColor: "text-teal-600",
    badgeColor: "bg-teal-50 border-teal-200 text-teal-600",
    borderHover: "hover:border-teal-300",
    diagram: (
      <div className="w-full max-w-[240px] rounded-xl border border-teal-200/40 bg-white/95 backdrop-blur-md p-4 shadow-lg text-left space-y-3">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <span className="text-[10px] font-bold text-teal-600">Consultant Timesheets</span>
          <span className="text-[9px] bg-teal-50 text-teal-600 px-1.5 py-0.5 rounded">Verified</span>
        </div>
        <div className="space-y-1.5 text-[10px] text-gray-600">
          <div className="flex justify-between"><span>Milestone 1 Billings:</span><span className="font-bold text-gray-800">Approved</span></div>
          <div className="flex justify-between"><span>P&L Gross Margins:</span><span className="font-bold text-emerald-600">78%</span></div>
        </div>
      </div>
    )
  }
};

export function CaseStudyTeaser({
  tone = "default",
  spacing = "default",
  className,
}: CaseStudyTeaserProps) {
  const headingId = "case-study-teaser-heading";
  const tablistId = useId();
  const studies = getPublishedIndustries();
  const [active, setActive] = useState(0);
  const study = studies[active] ?? studies[0];

  if (!study) return null;

  const detail = industryDetails[study.slug] ?? {
    module: "Zoho CRM",
    image: "/brand/hero-pattern.jpg",
    gradient: "from-blue-600 via-blue-700 to-blue-900",
    textColor: "text-blue-600",
    badgeColor: "bg-blue-50 border-blue-200 text-blue-600",
    borderHover: "hover:border-blue-300",
    diagram: null
  };

  const go = (next: number) => {
    const length = studies.length;
    setActive(((next % length) + length) % length);
  };

  return (
    <Section
      id="case-studies"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Industry systems
          </p>
          <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            How we structure Zoho by industry
          </h2>
          <p className="mt-3 text-sm md:text-base leading-snug text-gray-500">
            Published system designs — process first, then Zoho configuration.
            Named client results are shared only with permission.
          </p>
        </div>
        <Link
          href={ROUTES.caseStudies}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View all case studies →
        </Link>
      </div>

      {/* Tabs segment */}
      {studies.length > 1 ? (
        <div
          role="tablist"
          aria-label="Industry system designs"
          id={tablistId}
          className="mb-6 flex gap-2 overflow-x-auto pb-1"
        >
          {studies.map((item, index) => {
            const selected = index === active;
            const detailsPreset = industryDetails[item.slug];
            
            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`case-panel-${item.slug}`}
                id={`case-tab-${item.slug}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all border",
                  selected
                    ? cn("border-blue-600 text-white bg-blue-600 shadow-sm font-extrabold", detailsPreset?.badgeColor.split(" ").slice(2).join(" "))
                    : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
                )}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      ) : null}

      {/* Main panel card */}
      <div
        role="tabpanel"
        id={`case-panel-${study.slug}`}
        aria-labelledby={`case-tab-${study.slug}`}
        className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 group"
      >
        <div className="grid lg:grid-cols-2">
          {/* Left illustration pane with Background Image and Accent Overlay */}
          <div className="relative min-h-[300px] overflow-hidden flex flex-col items-center justify-center p-8 border-b border-gray-100 lg:border-b-0 lg:border-r lg:min-h-full bg-slate-950">
            {/* Background image */}
            <Image
              src={detail.image}
              alt={study.name}
              fill
              className="object-cover opacity-60 transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
            <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-25 mix-blend-overlay", detail.gradient)} />
            
            {/* Diagram Content */}
            <div className="z-10 w-full flex flex-col items-center gap-4">
              <span className={cn("inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-md border backdrop-blur-sm", detail.badgeColor.split(" ").slice(1).join(" "))}>
                <DirectoryIcon name={study.slug} className="h-6 w-6" />
              </span>
              <p className="text-sm font-extrabold text-white tracking-tight drop-shadow-sm">{study.name}</p>
              {detail.diagram}
            </div>
            
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 border border-gray-150 px-3 py-1.5 text-[10px] font-bold text-gray-700 shadow-sm z-10">
              {study.name} Blueprint · {detail.module}
            </div>
          </div>

          {/* Right text context pane */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">
              {study.hero.headline}
            </h3>
            <p className="mt-4 text-xs md:text-sm leading-relaxed text-gray-500">
              {study.hero.description}
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {study.problems.slice(0, 3).map((row) => (
                <div 
                  key={row.title}
                  className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    <SectionIcons.check className={cn("h-4 w-4 shrink-0", detail.textColor)} />
                    Focus Areas
                  </dt>
                  <dd className="mt-2 text-xs leading-snug text-gray-700 font-bold">
                    {row.title}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-50 pt-6">
              <Button href={`${ROUTES.industries}/${study.slug}`} className="text-xs font-bold px-5 py-2.5">
                View {study.name} system
              </Button>
              <Link
                href={ROUTES.contact}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Book a free consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigator controls */}
      {studies.length > 1 ? (
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xs font-bold text-gray-400" aria-live="polite">
            {active + 1} / {studies.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous industry system"
              onClick={() => go(active - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next industry system"
              onClick={() => go(active + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
