"use client";

import { useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { SectionIcons } from "@/components/ui/SectionIcons";
import { cn } from "@/lib/utils";

export type ServiceItem = {
  title: string;
  description: string;
  icon?: keyof typeof SectionIcons;
};

type ServicesGridProps = {
  title?: string;
  description?: string;
  items: ServiceItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const defaultIcons: (keyof typeof SectionIcons)[] = [
  "consultation",
  "implementation",
  "connected",
  "training",
  "support",
];

const serviceDetails = [
  {
    subtitle: "Process Mapping & Blueprinting",
    bullets: [
      "Conduct in-depth workshops to map your current sales & operations workflow.",
      "Identify manual gaps, double-data entries, and handoff bottlenecks.",
      "Deliver a comprehensive blueprint of your future-state Zoho architecture."
    ],
    badge: "Phase 1: Discovery",
    accentColor: "border-blue-500 text-blue-600 bg-blue-50/50",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center bg-blue-50/20 rounded-2xl p-6 min-h-[220px]">
        {/* Flowchart Diagram */}
        <div className="flex flex-col gap-4 w-full max-w-[200px]">
          <div className="rounded-lg border border-blue-200 bg-white p-2.5 text-center text-xs font-bold text-blue-900 shadow-sm">
            1. Map Processes
          </div>
          <div className="h-4 border-l-2 border-dashed border-blue-400 mx-auto"></div>
          <div className="rounded-lg border border-blue-200 bg-white p-2.5 text-center text-xs font-bold text-blue-900 shadow-sm animate-pulse">
            2. Design Zoho Blueprint
          </div>
          <div className="h-4 border-l-2 border-dashed border-blue-400 mx-auto"></div>
          <div className="rounded-lg border border-blue-200 bg-white p-2.5 text-center text-xs font-bold text-blue-900 shadow-sm">
            3. Agree & Begin Build
          </div>
        </div>
      </div>
    )
  },
  {
    subtitle: "Custom CRM & Connected App Build",
    bullets: [
      "Configure Zoho CRM with custom fields, pipelines, layouts, and stages.",
      "Build workflow automation rules to automate notifications and lead routing.",
      "Clean, map, and import historical contacts, deals, and records safely."
    ],
    badge: "Phase 2: Configuration",
    accentColor: "border-amber-500 text-amber-600 bg-amber-50/50",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center bg-amber-50/20 rounded-2xl p-6 min-h-[220px]">
        {/* CRM Kanban Card Representation */}
        <div className="w-full max-w-[200px] rounded-xl border border-amber-200 bg-white p-3.5 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-amber-600 uppercase bg-amber-50 px-2 py-0.5 rounded">In Progress</span>
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
          </div>
          <p className="text-xs font-extrabold text-gray-800">Zoho CRM Layout</p>
          <div className="mt-2.5 space-y-1.5">
            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
            <div className="h-1.5 w-4/5 bg-gray-100 rounded"></div>
            <div className="h-1.5 w-3/5 bg-gray-100 rounded"></div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
            <div className="h-5 w-5 rounded-full bg-amber-100 text-[10px] font-bold text-amber-600 flex items-center justify-center">MD</div>
            <span className="text-[10px] font-bold text-gray-500">$45,000</span>
          </div>
        </div>
      </div>
    )
  },
  {
    subtitle: "Connected Application Ecosystem",
    bullets: [
      "Connect Zoho CRM with WhatsApp Business API for instant client notifications.",
      "Sync sales and invoices with Zoho Books or external finance apps in real-time.",
      "Build secure client portals for inventory ordering and delivery tracking."
    ],
    badge: "Phase 3: Integration",
    accentColor: "border-indigo-500 text-indigo-600 bg-indigo-50/50",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center bg-indigo-50/20 rounded-2xl p-6 min-h-[220px]">
        {/* Hub Integration Diagram */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-indigo-200/60 animate-spin" style={{ animationDuration: '10s' }}></div>
          {/* Central Zoho Hub */}
          <div className="z-10 h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md font-bold text-[10px]">Zoho</div>
          {/* Linked bubble 1 */}
          <div className="absolute -top-2 -left-2 h-7 w-7 rounded-full bg-white border border-indigo-100 text-indigo-600 shadow-sm flex items-center justify-center text-[10px] font-bold">WA</div>
          {/* Linked bubble 2 */}
          <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full bg-white border border-indigo-100 text-indigo-600 shadow-sm flex items-center justify-center text-[10px] font-bold">INV</div>
          {/* Linked bubble 3 */}
          <div className="absolute top-1/2 -right-6 h-7 w-7 rounded-full bg-white border border-indigo-100 text-indigo-600 shadow-sm flex items-center justify-center text-[10px] font-bold">ACC</div>
        </div>
      </div>
    )
  },
  {
    subtitle: "Role-Based Adopt-Ready Training",
    bullets: [
      "Deliver tailored training sessions based on the exact roles your staff run.",
      "Provide custom video recording playbooks showing real workflow processes.",
      "Establish day-one adopt checklists for admins and standard users."
    ],
    badge: "Phase 4: Adoption",
    accentColor: "border-emerald-500 text-emerald-600 bg-emerald-50/50",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center bg-emerald-50/20 rounded-2xl p-6 min-h-[220px]">
        {/* Training Checklist Widget */}
        <div className="w-full max-w-[200px] rounded-xl border border-emerald-200 bg-white p-3.5 shadow-sm space-y-2.5">
          <p className="text-xs font-extrabold text-gray-800 border-b border-gray-100 pb-1.5">User Checklist</p>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded border border-emerald-400 bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            <span className="text-[11px] text-gray-600">Lead Conversion</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded border border-emerald-400 bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            <span className="text-[11px] text-gray-600">Deal Handoffs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded border border-gray-200 flex items-center justify-center text-[10px] font-bold"></span>
            <span className="text-[11px] text-gray-400">Invoicing Flow</span>
          </div>
        </div>
      </div>
    )
  },
  {
    subtitle: "SLA-Backed Ongoing Optimisation",
    bullets: [
      "Direct portal access for system ticket submission and troubleshooting help.",
      "Continuous optimization audits as your sales and team sizes scale.",
      "Rapid assistance for dashboard modifications and workflow adjustments."
    ],
    badge: "Phase 5: Support",
    accentColor: "border-violet-500 text-violet-600 bg-violet-50/50",
    illustration: (
      <div className="relative h-full w-full flex items-center justify-center bg-violet-50/20 rounded-2xl p-6 min-h-[220px]">
        {/* Support Ticket Ticket Status */}
        <div className="w-full max-w-[200px] rounded-xl border border-violet-200 bg-white p-3.5 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded">SLA Active</span>
            <span className="text-[10px] font-bold text-gray-400">#8914</span>
          </div>
          <p className="text-xs font-extrabold text-gray-800">Fast Turnaround</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex -space-x-2">
              <div className="h-5 w-5 rounded-full bg-violet-100 border border-white text-[9px] font-bold text-violet-600 flex items-center justify-center">AG</div>
              <div className="h-5 w-5 rounded-full bg-blue-100 border border-white text-[9px] font-bold text-blue-600 flex items-center justify-center">SR</div>
            </div>
            <span className="text-[10px] font-bold text-violet-600">Response &lt; 1hr</span>
          </div>
        </div>
      </div>
    )
  }
];

export function ServicesGrid({
  title = "Zoho consulting & implementation services",
  description = "End-to-end support — from discovery to go-live and ongoing help.",
  items,
  tone = "default",
  spacing = "default",
  className,
}: ServicesGridProps) {
  const headingId = "services-heading";
  const [activeStep, setActiveStep] = useState(0);

  const detail = serviceDetails[activeStep] ?? serviceDetails[0];

  return (
    <Section
      id="services"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Our services
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">{description}</p>
      </div>

      {/* Services Grid (Step Cards) */}
      <ul
        className={cn(
          "mt-10 grid gap-4 grid-cols-2 lg:grid-cols-5",
          "relative"
        )}
      >
        {items.map((item, index) => {
          const iconKey = item.icon ?? defaultIcons[index] ?? "consultation";
          const Icon = SectionIcons[iconKey];
          const isActive = index === activeStep;

          return (
            <li
              key={item.title}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
              className={cn(
                "group flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 cursor-pointer relative",
                isActive 
                  ? "border-blue-600 ring-1 ring-blue-600/30 scale-[1.02] shadow-md z-10" 
                  : "border-gray-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              )}
            >
              <span 
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 shadow-sm",
                  isActive ? "bg-blue-600 text-white" : "bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <p className={cn(
                "mt-4 text-[10px] font-bold uppercase tracking-wider",
                isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"
              )}>
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-sm md:text-base font-extrabold tracking-tight text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-snug text-gray-400 line-clamp-2 md:line-clamp-none">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Interactive Detail Panel below */}
      {detail ? (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 ease-in-out grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className={cn("rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider", detail.accentColor)}>
                {detail.badge}
              </span>
            </div>
            <h4 className="mt-3 text-lg font-extrabold text-gray-900 md:text-xl">
              {detail.subtitle}
            </h4>
            <ul className="mt-4 space-y-3">
              {detail.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="h-full flex items-center justify-center border-t border-gray-100 pt-6 md:border-t-0 md:border-l md:border-gray-100 md:pt-0 md:pl-6">
            {detail.illustration}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
