"use client";

import { useState, useEffect } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type UseCaseFlowItem = {
  title: string;
  summary: string;
  steps: string[];
};

type UseCaseFlowProps = {
  title: string;
  description: string;
  items: UseCaseFlowItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

// Console simulation logs mapped by step indices for realistic feedback
const simulateLogs = (stepIndex: number, label: string) => {
  const cleanLabel = label.toLowerCase();
  
  if (cleanLabel.includes("website") || cleanLabel.includes("lead comes") || stepIndex === 0) {
    return {
      status: "CAPTURING ENQUIRY",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      logs: [
        "[09:00:01] Inbound webhook received from www.aidamsole.com",
        "[09:00:02] Payload validated: Name=\"Rahul S.\" Email=\"rahul@domain.com\"",
        "[09:00:02] UTM source identified: \"Google Search Ad Campaign\"",
        "[09:00:03] Capture status: SUCCESS (Lead Object Prepared)"
      ]
    };
  }
  
  if (cleanLabel.includes("crm") || cleanLabel.includes("enters") || stepIndex === 1) {
    return {
      status: "CRM INTAKE",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      logs: [
        "[09:00:03] Creating record in Zoho CRM Leads module...",
        "[09:00:04] Duplicate checker active: 0 exact matches found.",
        "[09:00:04] Record created successfully with ID: lead_89124_XYZ",
        "[09:00:04] Status initialized to: NEW"
      ]
    };
  }

  if (cleanLabel.includes("assigned") || cleanLabel.includes("owner") || stepIndex === 2) {
    return {
      status: "ROUTING RULES",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      logs: [
        "[09:00:05] Matching territory config: \"Middle East Distribution\"",
        "[09:00:05] Routing target: Karan Sharma (Senior Account Manager)",
        "[09:00:06] Ownership assigned. Central SLA tracking active.",
        "[09:00:06] Mobile push alert dispatched to owner terminal."
      ]
    };
  }

  if (cleanLabel.includes("follow-up") || cleanLabel.includes("scheduled") || stepIndex === 3) {
    return {
      status: "ACTION TRIGGERED",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      logs: [
        "[09:00:07] Scheduling automatic follow-up: \"First Contact Call\"",
        "[09:00:07] Response SLA clock set to: 15-Minute Response Window",
        "[09:00:08] Auto-dispatching pre-written welcome email templates...",
        "[09:00:08] Activity logged in central rep agenda timeline."
      ]
    };
  }

  if (cleanLabel.includes("pipeline") || cleanLabel.includes("tracked") || stepIndex === 4) {
    return {
      status: "STAGE GATE",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      logs: [
        "[09:00:09] Converting Lead to Deal: \"Upgrade scope layout\"",
        "[09:00:10] Current Stage entry: Proposal / Price Quotation",
        "[09:00:10] Mandatory checklist loaded: require signed scope spec",
        "[09:00:10] Deal value calculated: ₹2,40,000"
      ]
    };
  }

  if (cleanLabel.includes("closed-won") || cleanLabel.includes("recorded") || stepIndex === 5) {
    return {
      status: "WON TRANSACTION",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      logs: [
        "[09:00:11] Digital contract signature verified via Zoho Sign.",
        "[09:00:12] Status changed: CLOSED-WON",
        "[09:00:12] Drafting Zoho Books invoices with ID: INV-2026-089",
        "[09:00:13] Handoff alert sent to fulfillment queue."
      ]
    };
  }

  return {
    status: "SYSTEM SYNC",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    logs: [
      `[09:00:13] Pushing deal telemetry parameters to Zoho Analytics...`,
      `[09:00:14] Running dynamic aggregation calculations.`,
      `[09:00:14] Executive dashboard KPI index updated successfully.`,
      `[09:00:15] Status completed for step: ${label}`
    ]
  };
};

export function UseCaseFlow({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: UseCaseFlowProps) {
  const headingId = "use-case-flow-heading";

  // Track the active step index for each workflow item
  // We can track the active indices in a simple array or object state
  const [activeStepIndices, setActiveStepIndices] = useState<Record<string, number>>({});

  const handleStepClick = (itemTitle: string, idx: number) => {
    setActiveStepIndices((prev) => ({
      ...prev,
      [itemTitle]: idx,
    }));
  };

  return (
    <Section
      id="use-cases"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      {/* Header */}
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      {/* Workflow Items List */}
      <div className="mt-10 grid gap-10">
        {items.map((item) => {
          const activeIndex = activeStepIndices[item.title] ?? 0;
          const activeStepLabel = item.steps[activeIndex] || "";
          const consoleData = simulateLogs(activeIndex, activeStepLabel);

          return (
            <article
              key={item.title}
              className="rounded-none border border-gray-200 bg-white p-6 shadow-sm relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-primary shrink-0" />

              {/* Title & Info */}
              <div className="pt-2">
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 font-semibold max-w-2xl">
                  {item.summary}
                </p>
              </div>

              {/* Interactive Player Layout (2-Column Grid) */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Side: Step List (7 Columns) */}
                <div className="lg:col-span-7">
                  <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                    Click steps to simulate the workflow path:
                  </p>
                  <ol className="grid gap-3 sm:grid-cols-2">
                    {item.steps.map((step, index) => {
                      const isSelected = activeIndex === index;
                      return (
                        <li key={`${item.title}-${step}`}>
                          <button
                            type="button"
                            onClick={() => handleStepClick(item.title, index)}
                            onMouseEnter={() => handleStepClick(item.title, index)}
                            className={cn(
                              "w-full text-left rounded-none border p-4 transition-all duration-200 focus:outline-none flex gap-3 h-full justify-between items-start",
                              isSelected
                                ? "border-primary ring-2 ring-primary/10 bg-blue-50/10 shadow-sm"
                                : "border-gray-200 bg-white hover:border-primary/50 hover:bg-gray-50/50"
                            )}
                          >
                            <div>
                              <span className={cn(
                                "text-[9px] font-extrabold uppercase tracking-wide",
                                isSelected ? "text-primary" : "text-gray-400"
                              )}>
                                Step {String(index + 1).padStart(2, "0")}
                              </span>
                              <p className="mt-1 text-xs font-bold text-gray-800 leading-snug">
                                {step}
                              </p>
                            </div>

                            {/* Active arrow indicators */}
                            <span className={cn(
                              "text-xs transition-transform duration-200 shrink-0",
                              isSelected ? "text-primary translate-x-0.5" : "text-gray-300"
                            )}>
                              {isSelected ? "●" : "→"}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                {/* Right Side: Live System Action Console (5 Columns) */}
                <div className="lg:col-span-5 flex flex-col h-full justify-between self-stretch">
                  <div className="flex flex-col h-full bg-gray-950 border border-gray-800 p-4 shadow-inner relative justify-between">
                    <div>
                      {/* Console Header */}
                      <div className="flex items-center justify-between border-b border-gray-800 pb-2.5 mb-3 text-[9px] font-extrabold uppercase tracking-wider">
                        <span className="text-gray-400 font-mono">SYSTEM LOGGER v1.2</span>
                        <span className={cn(
                          "px-2 py-0.5 rounded-none font-extrabold font-mono",
                          consoleData.color,
                          consoleData.bg
                        )}>
                          {consoleData.status}
                        </span>
                      </div>

                      {/* Log stream */}
                      <ul className="space-y-2 font-mono text-[10px] leading-relaxed">
                        {consoleData.logs.map((log, lIdx) => (
                          <li
                            key={lIdx}
                            className={cn(
                              "text-gray-400",
                              lIdx === consoleData.logs.length - 1 ? consoleData.color : ""
                            )}
                          >
                            {log}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Console Status Footer */}
                    <div className="mt-6 pt-2.5 border-t border-gray-900 flex justify-between items-center text-[8px] font-mono font-bold text-gray-500">
                      <span>FLOW LOG INDEX: {activeIndex + 1}/{item.steps.length}</span>
                      <span className="flex items-center gap-1.5 uppercase">
                        <span className="h-1 w-1 bg-emerald-500 rounded-full animate-ping" />
                        Live monitor active
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
