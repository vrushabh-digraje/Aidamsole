"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { SectionIcons } from "@/components/ui/SectionIcons";
import { cn } from "@/lib/utils";

type WhyZohoProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const benefits = [
  {
    title: "Seamless & automated workflows",
    description: "Automate lead capture to invoicing — less manual work, fewer errors.",
    icon: "connected" as const,
    accentColor: "border-l-blue-500 text-blue-600 bg-blue-50/40",
    badge: "Automation",
    bgImage: "/brand/platform-creator.jpg",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center p-6 bg-blue-50/20 rounded-2xl min-h-[260px]">
        {/* Workflow visual diagram */}
        <div className="flex items-center gap-2 w-full max-w-[280px] justify-between">
          <div className="rounded-xl border border-blue-200 bg-white p-3 text-center shadow-sm w-20 flex-shrink-0">
            <p className="text-[10px] font-bold text-blue-500">Lead</p>
            <p className="text-[9px] text-gray-500 mt-0.5">Captured</p>
          </div>
          <div className="flex-1 h-[2px] border-t-2 border-dashed border-blue-300 relative">
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-blue-600 animate-ping"></span>
          </div>
          <div className="rounded-xl border border-blue-200 bg-white p-3 text-center shadow-sm w-20 flex-shrink-0">
            <p className="text-[10px] font-bold text-blue-500">Deal</p>
            <p className="text-[9px] text-gray-500 mt-0.5">Automated</p>
          </div>
          <div className="flex-1 h-[2px] border-t-2 border-dashed border-blue-300"></div>
          <div className="rounded-xl border border-blue-200 bg-white p-3 text-center shadow-sm w-20 flex-shrink-0">
            <p className="text-[10px] font-bold text-blue-500">Invoice</p>
            <p className="text-[9px] text-gray-500 mt-0.5">Sent (Books)</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Customer & lead management",
    description: "Track every enquiry in Zoho CRM with clear ownership and follow-up.",
    icon: "people" as const,
    accentColor: "border-l-amber-500 text-amber-600 bg-amber-50/40",
    badge: "Sales Pipeline",
    bgImage: "/brand/solution-sales.jpg",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center p-6 bg-amber-50/20 rounded-2xl min-h-[260px]">
        {/* CRM Lead profile card */}
        <div className="w-full max-w-[240px] rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-amber-100 text-xs font-bold text-amber-600 flex items-center justify-center">KS</div>
            <div>
              <p className="text-xs font-extrabold text-gray-800">Karan Sharma</p>
              <p className="text-[9px] text-gray-400">Retail & Distribution Lead</p>
            </div>
            <span className="ml-auto text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Hot Lead</span>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">Deal Value:</span>
              <span className="font-bold text-gray-700">₹4,50,000</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">Next Action:</span>
              <span className="font-bold text-gray-700">Send Demo Proposal</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Employee & HR control",
    description: "Zoho People brings leave, attendance, and team admin into one place.",
    icon: "building" as const,
    accentColor: "border-l-red-500 text-red-600 bg-red-50/40",
    badge: "HR Management",
    bgImage: "/brand/platform-people.jpg",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center p-6 bg-red-50/20 rounded-2xl min-h-[260px]">
        {/* Attendance Check-in Widget */}
        <div className="w-full max-w-[220px] rounded-xl border border-red-200 bg-white p-4 shadow-sm text-center">
          <div className="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </div>
          <p className="text-xs font-extrabold text-gray-800">Rahul Verma</p>
          <p className="text-[10px] text-gray-500">Check-in: 09:00 AM (On Time)</p>
          <div className="mt-4 flex gap-2">
            <div className="flex-1 text-center bg-gray-50 rounded py-1">
              <p className="text-[8px] font-bold text-gray-400 uppercase">Leave Bal</p>
              <p className="text-xs font-bold text-gray-800">14 Days</p>
            </div>
            <div className="flex-1 text-center bg-gray-50 rounded py-1">
              <p className="text-[8px] font-bold text-gray-400 uppercase">Weekly hrs</p>
              <p className="text-xs font-bold text-gray-800">42 hrs</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Inventory & operations",
    description: "Connect stock, orders, and fulfillment so operations sees sales truth.",
    icon: "process" as const,
    accentColor: "border-l-indigo-500 text-indigo-600 bg-indigo-50/40",
    badge: "Inventory & Stocks",
    bgImage: "/brand/platform-campaigns.jpg",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center p-6 bg-indigo-50/20 rounded-2xl min-h-[260px]">
        {/* Product Stock card */}
        <div className="w-full max-w-[240px] rounded-xl border border-indigo-200 bg-white p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-gray-800">SKU: DISP-50X</span>
            <span className="text-[9px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">Low Stock Alert</span>
          </div>
          <p className="text-xs font-extrabold text-gray-800">Retail Display Box (Pack of 50)</p>
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
            <div>
              <p className="text-[8px] text-gray-400 uppercase">Whse Delhi:</p>
              <p className="text-xs font-bold text-indigo-600">450 units</p>
            </div>
            <div>
              <p className="text-[8px] text-gray-400 uppercase">Whse Dubai:</p>
              <p className="text-xs font-bold text-rose-500">12 units</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Actionable analytics",
    description: "Leadership dashboards from live Zoho data — weekly reviews.",
    icon: "market" as const,
    accentColor: "border-l-emerald-500 text-emerald-600 bg-emerald-50/40",
    badge: "Live Dashboards",
    bgImage: "/brand/platform-analytics.jpg",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center p-6 bg-emerald-50/20 rounded-2xl min-h-[260px]">
        {/* Analytics bar chart card */}
        <div className="w-full max-w-[220px] rounded-xl border border-emerald-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-extrabold text-gray-800 mb-4">Monthly Revenue Trends</p>
          <div className="flex items-end justify-between h-20 pt-4 px-1 gap-2">
            <div className="w-full bg-emerald-100 rounded-t h-[30%]"></div>
            <div className="w-full bg-emerald-200 rounded-t h-[50%]"></div>
            <div className="w-full bg-emerald-300 rounded-t h-[75%]"></div>
            <div className="w-full bg-emerald-500 rounded-t h-[95%] animate-pulse"></div>
          </div>
          <div className="flex justify-between text-[8px] text-gray-400 mt-2 font-bold uppercase">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Time & cost efficiency",
    description: "One Zoho stack instead of scattered tools — lower license sprawl.",
    icon: "check" as const,
    accentColor: "border-l-violet-500 text-violet-600 bg-violet-50/40",
    badge: "Cost Consolidation",
    bgImage: "/brand/solution-finance.jpg",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center p-6 bg-violet-50/20 rounded-2xl min-h-[260px]">
        {/* Cost Comparison Matrix */}
        <div className="w-full max-w-[240px] rounded-xl border border-violet-200 bg-white p-4 shadow-sm space-y-3">
          <p className="text-xs font-extrabold text-gray-800 border-b border-gray-100 pb-1.5">Stack Consolidation</p>
          <div className="flex justify-between text-[10px] text-gray-400 line-through">
            <span>Salesforce + QuickBooks + Slack:</span>
            <span>$238/mo</span>
          </div>
          <div className="flex justify-between items-center text-xs font-bold text-violet-600 bg-violet-50 p-2 rounded">
            <span>Unified Zoho One:</span>
            <span className="text-sm font-extrabold">$37/mo</span>
          </div>
        </div>
      </div>
    )
  },
];

export function WhyZoho({
  tone = "muted",
  spacing = "default",
  className,
}: WhyZohoProps) {
  const headingId = "why-zoho-heading";
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto rotation loop logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveStep((current) => (current + 1) % benefits.length);
    }, 5500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  const handleBenefitHover = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false); // Stop autoplay when user hovers
  };

  const activeBenefit = benefits[activeStep] ?? benefits[0];

  return (
    <Section
      id="why-zoho"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Why Zoho
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Why businesses choose Zoho
        </h2>
        <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">
          A connected suite for sales, finance, HR, and operations — configured
          around how your team already works.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-12 items-center">
        
        {/* Left Side: Benefit Selection Cards List (Takes 5/12 columns on large screens) */}
        <ul className="space-y-3 lg:col-span-5 w-full">
          {benefits.map((item, index) => {
            const Icon = SectionIcons[item.icon];
            const isActive = index === activeStep;

            return (
              <li
                key={item.title}
                onMouseEnter={() => handleBenefitHover(index)}
                onClick={() => handleBenefitHover(index)}
                className={cn(
                  "group flex gap-4 rounded-xl border bg-white p-4 shadow-sm transition-all duration-300 cursor-pointer relative border-l-4",
                  isActive 
                    ? cn("border-blue-600 shadow-md scale-[1.01] z-10", item.accentColor.split(" ").slice(2).join(" ")) 
                    : "border-gray-200 border-l-transparent hover:border-blue-200/60 hover:shadow-md"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-colors duration-300",
                    isActive ? item.accentColor.split(" ").slice(0, 2).join(" ") : "group-hover:bg-slate-100 group-hover:text-blue-600"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 leading-snug group-hover:text-gray-500 transition-colors">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Right Side: Showcase Preview Window (Takes 7/12 columns on large screens) */}
        <div className="h-full flex flex-col justify-center lg:col-span-7 w-full">
          <div className="w-full rounded-2xl border border-gray-200/90 bg-white p-6 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            {/* Subtle background image watermark */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none transition-all duration-700 select-none">
              <Image
                src={activeBenefit.bgImage}
                alt=""
                fill
                className="object-cover transition-opacity duration-700"
              />
            </div>

            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 relative z-10">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-400/80"></span>
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-full">
                {activeBenefit.badge}
              </span>
            </div>

            {/* Render illustration center */}
            <div className="my-auto flex items-center justify-center py-4 relative z-10">
              {activeBenefit.illustration}
            </div>

            {/* Bottom Captions */}
            <div className="border-t border-gray-100 pt-3 text-center relative z-10">
              <p className="text-[11px] font-bold text-gray-900 leading-tight">
                {activeBenefit.title}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Live Zoho operating system preview mockups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
