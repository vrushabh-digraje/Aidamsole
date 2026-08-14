"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { cn } from "@/lib/utils";

type IndustryHubItem = {
  slug: string;
  name: string;
  description: string;
};

type IndustryHubProps = {
  title: string;
  description: string;
  items: IndustryHubItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const industryDetails: Record<string, {
  challenge: string;
  blueprint: string;
  badge: string;
  colorClass: string;
  accentBorder: string;
  flowSvg: React.ReactNode;
  bgImage: string;
}> = {
  "retail-distribution": {
    challenge: "Managing omnichannel stock sync, dealer orders, and collections across distribution channels.",
    blueprint: "CRM Leads → Auto stock depletion in Zoho Inventory → Instant invoice in Zoho Books → WhatsApp confirmation.",
    badge: "Inventory & Trade Sync",
    colorClass: "bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100/50",
    accentBorder: "border-l-amber-500",
    bgImage: "/brand/case-study-retail.jpg",
    flowSvg: (
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-amber-200 bg-white">
          <span className="font-bold text-gray-800">1. CRM Lead</span>
          <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">Converted</span>
        </div>
        <div className="h-3 border-l border-dashed border-amber-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-amber-200 bg-white">
          <span className="font-bold text-gray-800">2. Zoho Inventory</span>
          <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">Stock Deducted</span>
        </div>
        <div className="h-3 border-l border-dashed border-amber-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-amber-200 bg-white">
          <span className="font-bold text-gray-800">3. Zoho Books Invoice</span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Sent</span>
        </div>
      </div>
    )
  },
  "real-estate": {
    challenge: "Combating lead follow-up delays, tracking broker assignments, and scheduling site visits.",
    blueprint: "Inbound Enquiry → CRM allocation to Broker → Calendar invite sent for Site Visit → Automated follow-up task.",
    badge: "Lead & Agent Routing",
    colorClass: "bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-100/50",
    accentBorder: "border-l-sky-500",
    bgImage: "/brand/case-study-real-estate.jpg",
    flowSvg: (
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-sky-200 bg-white">
          <span className="font-bold text-gray-800">1. Property Enquiry</span>
          <span className="text-[10px] text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">Incoming</span>
        </div>
        <div className="h-3 border-l border-dashed border-sky-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-sky-200 bg-white">
          <span className="font-bold text-gray-800">2. Broker Assignment</span>
          <span className="text-[10px] text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">Active</span>
        </div>
        <div className="h-3 border-l border-dashed border-sky-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-sky-200 bg-white">
          <span className="font-bold text-gray-800">3. Site Visit Trigger</span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Calendar Sent</span>
        </div>
      </div>
    )
  },
  "manufacturing": {
    challenge: "Handling custom quotations, manufacturing job card conversions, and tracking vendor purchase orders.",
    blueprint: "Quote approved in CRM → Automatic Job Card creation in Zoho Creator → Raw material request alert to vendor.",
    badge: "Quote to Production",
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100/50",
    accentBorder: "border-l-emerald-500",
    bgImage: "/brand/case-study-manufacturing.jpg",
    flowSvg: (
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-emerald-200 bg-white">
          <span className="font-bold text-gray-800">1. Custom Quote</span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Approved</span>
        </div>
        <div className="h-3 border-l border-dashed border-emerald-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-emerald-200 bg-white">
          <span className="font-bold text-gray-800">2. Job Card Build</span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Active</span>
        </div>
        <div className="h-3 border-l border-dashed border-emerald-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-emerald-200 bg-white">
          <span className="font-bold text-gray-800">3. Purchase Order</span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Sent</span>
        </div>
      </div>
    )
  },
  "healthcare": {
    challenge: "Optimizing patient clinic booking slots, referral tracking, and automated reminder alerts.",
    blueprint: "Booking Form (Website) → Patient CRM Profile created → Automated reminder SMS → Invoice generated.",
    badge: "Patient Flow Systems",
    colorClass: "bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100/50",
    accentBorder: "border-l-rose-500",
    bgImage: "/brand/case-study-healthcare.jpg",
    flowSvg: (
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-rose-200 bg-white">
          <span className="font-bold text-gray-800">1. Online Appointment</span>
          <span className="text-[10px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Booked</span>
        </div>
        <div className="h-3 border-l border-dashed border-rose-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-rose-200 bg-white">
          <span className="font-bold text-gray-800">2. Doctor Scheduled</span>
          <span className="text-[10px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Assigned</span>
        </div>
        <div className="h-3 border-l border-dashed border-rose-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-rose-200 bg-white">
          <span className="font-bold text-gray-800">3. SMS Reminder</span>
          <span className="text-[10px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Delivered</span>
        </div>
      </div>
    )
  },
  "education": {
    challenge: "Managing student inquiries, counsellor assignment routing, and dynamic installment fee tracking.",
    blueprint: "Course Lead → Counselor Assigned → Intake interview check-off → Fee payment schedule mapping.",
    badge: "Student Intake Sync",
    colorClass: "bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100/50",
    accentBorder: "border-l-indigo-500",
    bgImage: "/brand/case-study-education.jpg",
    flowSvg: (
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-indigo-200 bg-white">
          <span className="font-bold text-gray-800">1. Intake Inquiry</span>
          <span className="text-[10px] text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Registered</span>
        </div>
        <div className="h-3 border-l border-dashed border-indigo-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-indigo-200 bg-white">
          <span className="font-bold text-gray-800">2. Counselor Handoff</span>
          <span className="text-[10px] text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">In Interview</span>
        </div>
        <div className="h-3 border-l border-dashed border-indigo-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-indigo-200 bg-white">
          <span className="font-bold text-gray-800">3. Fee Ledger Setup</span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Ready</span>
        </div>
      </div>
    )
  },
  "service": {
    challenge: "Tracking timesheets, managing multi-tier project milestones, and triggering automated milestone billing.",
    blueprint: "Project Created → Consultant timesheet logs → Milestone completion flag → Auto invoice trigger in Books.",
    badge: "Milestone Billing Sync",
    colorClass: "bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-100/50",
    accentBorder: "border-l-teal-500",
    bgImage: "/brand/case-study-service.jpg",
    flowSvg: (
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-teal-200 bg-white">
          <span className="font-bold text-gray-800">1. Project Milestone</span>
          <span className="text-[10px] text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">Completed</span>
        </div>
        <div className="h-3 border-l border-dashed border-teal-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-teal-200 bg-white">
          <span className="font-bold text-gray-800">2. Timesheet Validation</span>
          <span className="text-[10px] text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">Approved</span>
        </div>
        <div className="h-3 border-l border-dashed border-teal-300 ml-6"></div>
        <div className="flex items-center justify-between p-2 rounded-lg border border-teal-200 bg-white">
          <span className="font-bold text-gray-800">3. Milestone Invoice</span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">E-mailed</span>
        </div>
      </div>
    )
  }
};

export function IndustryHub({
  title,
  description,
  items,
  tone = "muted",
  spacing = "default",
  className,
}: IndustryHubProps) {
  const headingId = "industry-hub-heading";
  const [activeStep, setActiveStep] = useState(0);

  const activeItem = items[activeStep] ?? items[0];
  const activeSlug = activeItem?.slug ?? "";
  const detail = industryDetails[activeSlug] ?? industryDetails["retail-distribution"];

  return (
    <Section
      id="industries"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Industries
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">
          {description}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-12 items-center">
        {/* Left column: Industry selector tabs (Takes 5/12 columns on large screens) */}
        <ul className="space-y-3 lg:col-span-5 w-full">
          {items.map((item, index) => {
            const isActive = index === activeStep;
            const detailsPreset = industryDetails[item.slug];
            
            return (
              <li
                key={item.slug}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "group flex gap-4 rounded-xl border bg-white p-4 shadow-sm transition-all duration-300 cursor-pointer border-l-4 relative",
                  isActive 
                    ? cn("border-blue-600 scale-[1.01] shadow-md z-10", detailsPreset?.colorClass.split(" ").slice(1).join(" ")) 
                    : "border-gray-200 border-l-transparent hover:border-blue-200/60 hover:shadow-md"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-colors duration-300",
                    isActive ? detailsPreset?.colorClass.split(" ").slice(0, 2).join(" ") : "group-hover:bg-slate-100 group-hover:text-blue-600"
                  )}
                >
                  <DirectoryIcon name={item.slug} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-gray-900 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-400 leading-snug truncate group-hover:text-gray-500">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Right column: Interactive blueprint monitor (Takes 7/12 columns on large screens) */}
        <div className="h-full flex flex-col justify-center lg:col-span-7 w-full">
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[350px]">
            {/* Subtle background image watermark */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none transition-all duration-700 select-none">
              <Image
                src={detail?.bgImage ?? "/brand/case-study-retail.jpg"}
                alt=""
                fill
                className="object-cover transition-opacity duration-700"
              />
            </div>

            {/* Window control header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 relative z-10">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-400/80"></span>
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-full">
                {detail?.badge}
              </span>
            </div>

            {/* Inner blueprint core content */}
            <div className="my-auto py-5 grid md:grid-cols-2 gap-6 items-center relative z-10">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Primary challenge:</p>
                <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-semibold">
                  {detail?.challenge}
                </p>

                <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Zoho system blueprint:</p>
                <p className="mt-1.5 text-xs text-gray-700 leading-relaxed font-bold">
                  {detail?.blueprint}
                </p>
              </div>

              <div className="flex justify-center border-t border-gray-50 pt-5 md:border-t-0 md:pt-0 md:border-l md:border-gray-100 md:pl-5">
                {detail?.flowSvg}
              </div>
            </div>

            {/* Bottom link trigger */}
            <div className="border-t border-gray-100 pt-3 flex justify-between items-center relative z-10">
              <span className="text-[10px] text-gray-400 font-bold">Zoho {activeItem?.name} Solution Blueprint</span>
              <Link
                href={`/industries/${activeItem?.slug}`}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                <span>Explore system blueprint</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
