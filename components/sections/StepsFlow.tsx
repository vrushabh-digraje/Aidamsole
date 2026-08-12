"use client";

import { useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type StepsFlowItem = {
  number: string;
  title: string;
  description: string;
};

type StepsFlowProps = {
  title: string;
  description: string;
  items: StepsFlowItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

export function StepsFlow({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: StepsFlowProps) {
  const headingId = "steps-flow-heading";
  const [activeIndex, setActiveIndex] = useState(0);

  // Render content mockups inside the step preview panel based on the active index
  const renderStepVisual = (index: number) => {
    switch (index) {
      case 0: // Mapping
        return (
          <div className="flex flex-col justify-center h-full p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Chaos Mapping</span>
            </div>
            {/* Simulation of process node linkage */}
            <div className="relative border border-dashed border-gray-200 p-4 bg-white rounded-none">
              <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                <span className="text-gray-400">Incoming Lead</span>
                <span className="text-amber-600 font-bold">Unassigned Inbox</span>
              </div>
              <div className="h-1 bg-gray-100 w-full relative mb-3">
                <div className="absolute left-0 top-0 h-full w-2/3 bg-amber-400 animate-[shimmer_1.5s_infinite]" />
              </div>
              <div className="flex justify-between items-center text-[10px] bg-red-50 text-red-700 px-2 py-1 border border-red-100">
                <span>Problem: 34% drop-off at handoff</span>
                <span className="font-bold">Excel Tracker</span>
              </div>
            </div>
          </div>
        );
      case 1: // Design
        return (
          <div className="flex flex-col justify-center h-full p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">RACI & Gate Rules</span>
            </div>
            <div className="border border-gray-200 bg-white rounded-none overflow-hidden">
              <table className="w-full text-left border-collapse text-[10px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 font-bold text-gray-600">
                    <th className="p-2">Stage Gate</th>
                    <th className="p-2">Owner</th>
                    <th className="p-2">Exit Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="p-2 font-bold">Intake</td>
                    <td className="p-2 text-primary">Sales Rep</td>
                    <td className="p-2">SLA: 15m</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Handoff</td>
                    <td className="p-2 text-sky-600">Ops Manager</td>
                    <td className="p-2 text-emerald-600 font-bold">Signed SLA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 2: // Configuration
        return (
          <div className="flex flex-col justify-center h-full p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Zoho CRM Layout Builder</span>
            </div>
            <div className="border border-gray-200 p-4 bg-white rounded-none">
              <div className="flex flex-col gap-2">
                <div className="text-[10px]">
                  <label className="block text-gray-400 mb-1 font-bold">Deal Stage</label>
                  <div className="p-2 border border-emerald-500 bg-emerald-50/20 text-emerald-800 font-bold">
                    Proposal Signed
                  </div>
                </div>
                <div className="text-[10px]">
                  <label className="block text-gray-400 mb-1 font-bold">Mandatory Attachments</label>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 border border-gray-200">
                    <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full" />
                    <span>invoicing_data.pdf</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3: // Onboarding
        return (
          <div className="flex flex-col justify-center h-full p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sandbox Dry Runs</span>
            </div>
            <div className="border border-gray-200 p-4 bg-white rounded-none text-[10px] text-gray-600">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800">Operational Rhythm</span>
                <span className="text-indigo-600 font-bold">Weekly Review</span>
              </div>
              <p className="leading-relaxed">
                Teams log deals directly inside Zoho. Managers run sales pipeline reports live in the dashboard instead of rebuilding Excel lists.
              </p>
            </div>
          </div>
        );
      case 4: // Stabilization
        return (
          <div className="flex flex-col justify-center h-full p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">KPI Reporting</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-gray-200 p-3 bg-white text-center rounded-none">
                <span className="block text-[8px] text-gray-400 uppercase font-bold">Zoho Adoption</span>
                <span className="text-lg font-extrabold text-emerald-600">98.4%</span>
              </div>
              <div className="border border-gray-200 p-3 bg-white text-center rounded-none">
                <span className="block text-[8px] text-gray-400 uppercase font-bold">Manual Files</span>
                <span className="text-lg font-extrabold text-rose-600">0 Files</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Section
      id="implementation"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      {/* Section Title Header */}
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      {/* Interactive Tabs Layout */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        {/* Left Side: Navigation Vertical List */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {items.map((item, idx) => (
            <button
              key={item.number}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "w-full text-left p-5 border transition-all duration-300 rounded-none relative flex flex-col justify-between",
                activeIndex === idx
                  ? "border-primary bg-blue-50/10 shadow-sm"
                  : "border-gray-200 bg-white hover:bg-gray-50/50 hover:border-gray-300"
              )}
            >
              {/* Left Accent indicator line */}
              {activeIndex === idx && (
                <div className="absolute left-0 inset-y-0 w-1 bg-primary" />
              )}
              
              <div className="flex items-center gap-3">
                <span className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-none border",
                  activeIndex === idx
                    ? "text-primary border-primary/20 bg-blue-50/30"
                    : "text-gray-400 border-gray-200 bg-gray-50"
                )}>
                  {item.number}
                </span>
                <h3 className="text-sm font-extrabold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Mobile Only: Show description under active tab */}
              {activeIndex === idx && (
                <p className="mt-3 text-xs leading-relaxed text-gray-500 lg:hidden block">
                  {item.description}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Right Side: Showcase Preview Window (Large Desktop Only) */}
        <div className="hidden lg:col-span-7 lg:flex flex-col border border-gray-200 bg-white shadow-md rounded-none overflow-hidden min-h-[380px]">
          {/* Header Bar */}
          <div className="bg-gray-50 border-b border-gray-150 px-4 py-3 flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-wider shrink-0">
            <span>ENGAGEMENT FLOW SIMULATION</span>
            <span className="text-primary font-extrabold">STAGE {items[activeIndex].number}</span>
          </div>

          {/* Details & Graphic Display Split */}
          <div className="grid grid-rows-[auto_1fr] flex-grow">
            {/* Description Paragraph */}
            <div className="p-6 border-b border-gray-150 bg-gray-50/30">
              <h4 className="text-base font-extrabold text-gray-900">
                {items[activeIndex].title}
              </h4>
              <p className="mt-2.5 text-xs leading-relaxed text-gray-500">
                {items[activeIndex].description}
              </p>
            </div>

            {/* Live Interactive Graphic Window */}
            <div className="bg-white flex-grow flex flex-col justify-center">
              {renderStepVisual(activeIndex)}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
