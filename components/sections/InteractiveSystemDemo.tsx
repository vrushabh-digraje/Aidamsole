"use client";

import { useEffect, useRef, useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const AUTO_PLAY_MS = 2500;

export type SystemDemoStep = {
  id: "lead" | "crm" | "deal" | "project" | "invoice" | "dashboard" | string;
  title: string;
  description: string;
  tools: string[];
  outcomes: string[];
};

export const systemDemoSteps: SystemDemoStep[] = [
  {
    id: "lead",
    title: "Lead Capture",
    description:
      "Leads from Meta Ads, Website, WhatsApp automatically captured into one system.",
    tools: ["Zoho Forms", "SalesIQ"],
    outcomes: [
      "No missed leads",
      "Instant response readiness",
      "One source of truth",
    ],
  },
  {
    id: "crm",
    title: "CRM Management",
    description:
      "Every lead is tracked, assigned, and visible across the sales team.",
    tools: ["Zoho CRM"],
    outcomes: ["Clear ownership", "Full visibility", "Faster follow-ups"],
  },
  {
    id: "deal",
    title: "Deal Pipeline",
    description:
      "Deals move through structured stages with tracking and accountability.",
    tools: ["Zoho CRM"],
    outcomes: [
      "Faster deal closure",
      "Predictable pipeline",
      "No stalled opportunities",
    ],
  },
  {
    id: "project",
    title: "Project Execution",
    description:
      "After closure, projects are created and tracked without handoff gaps.",
    tools: ["Zoho Projects"],
    outcomes: [
      "On-time delivery",
      "Accountable teams",
      "Handoff without gaps",
    ],
  },
  {
    id: "invoice",
    title: "Invoicing",
    description:
      "Invoices are generated from closed work and payments are tracked.",
    tools: ["Zoho Books"],
    outcomes: [
      "Faster collections",
      "Accurate billing",
      "Cash flow clarity",
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description:
      "Leadership sees the full business — pipeline, delivery, and revenue — in one view.",
    tools: ["Zoho Analytics"],
    outcomes: [
      "Real-time control",
      "Decision-ready reports",
      "One business view",
    ],
  },
];

export type SystemStepChangeSource = "user" | "autoplay" | "sync" | "hover";

type InteractiveSystemDemoProps = {
  title?: string;
  description?: string;
  steps?: SystemDemoStep[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
  showSectionChrome?: boolean;
  className?: string;
  autoPlay?: boolean;
  /** Controlled active step id (for CRM sync). */
  activeStepId?: string;
  onStepChange?: (stepId: string, source: SystemStepChangeSource) => void;
};

function StepIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const common = cn("h-5 w-5 stroke-[1.75]", className);

  switch (id) {
    case "lead":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            stroke="currentColor"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" />
          <path
            d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
          />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
          <path d="M3 10h18M8 4v16" stroke="currentColor" />
        </svg>
      );
    case "deal":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" />
          <circle cx="18" cy="12" r="2" stroke="currentColor" />
          <circle cx="15" cy="18" r="2" stroke="currentColor" />
        </svg>
      );
    case "project":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M9 11l3 3L22 4" stroke="currentColor" />
          <path
            d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            stroke="currentColor"
          />
        </svg>
      );
    case "invoice":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"
            stroke="currentColor"
          />
          <path d="M8 10h5M8 14h3" stroke="currentColor" />
        </svg>
      );
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3" y="3" width="7" height="9" rx="1" stroke="currentColor" />
          <rect x="14" y="3" width="7" height="5" rx="1" stroke="currentColor" />
          <rect x="14" y="12" width="7" height="9" rx="1" stroke="currentColor" />
          <rect x="3" y="16" width="7" height="5" rx="1" stroke="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
        </svg>
      );
  }
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12l5 5L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OutcomeIcon({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  const common = cn("h-4 w-4 stroke-[1.75]", className);
  const variant = index % 4;

  if (variant === 0) {
    return <CheckIcon className={common} />;
  }

  if (variant === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M4 19V5M4 19h16" stroke="currentColor" />
        <path d="M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path
        d="M13 3 4 14h7l-1 7 9-11h-7l1-7z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkflowConnector({ active }: { active?: boolean }) {
  return (
    <div aria-hidden="true" className="flex flex-col items-center py-0.5">
      <span
        className={cn(
          "h-3 w-px transition-colors duration-300 ease-in-out",
          active ? "bg-blue-600/50" : "bg-gray-200",
        )}
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={cn(
          "h-3 w-3 rotate-90 transition-colors duration-300 ease-in-out",
          active ? "text-blue-600" : "text-gray-300",
        )}
      >
        <path
          d="M5 12h12M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
      <span
        className={cn(
          "h-3 w-px transition-colors duration-300 ease-in-out",
          active ? "bg-blue-600/50" : "bg-gray-200",
        )}
      />
    </div>
  );
}

function DemoToolbar({
  steps,
  activeIndex,
  paused,
  autoPlayEnabled,
  progressKey,
  onTogglePause,
  label = "How Your Business System Works",
}: {
  steps: SystemDemoStep[];
  activeIndex: number;
  paused: boolean;
  autoPlayEnabled: boolean;
  progressKey: number;
  onTogglePause: () => void;
  label?: string;
}) {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-3 md:px-5">
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-blue-700 transition-colors duration-300 ease-in-out">
        {label}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-gray-900">
              Guided product walkthrough
            </p>
            <p className="text-xs text-gray-600 transition-opacity duration-300 ease-in-out">
              Step {String(activeIndex + 1).padStart(2, "0")} of{" "}
              {String(steps.length).padStart(2, "0")} ·{" "}
              {steps[activeIndex]?.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold uppercase tracking-wide",
              paused
                ? "bg-gray-100 text-gray-600"
                : "bg-blue-50 text-blue-600",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                paused ? "bg-gray-400" : "bg-blue-600 animate-pulse",
              )}
            />
            {paused ? "Paused" : "Auto play"}
          </span>

          {autoPlayEnabled ? (
            <button
              type="button"
              onClick={onTogglePause}
              className="cursor-pointer rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm transition-all duration-300 ease-in-out hover:border-blue-600/40 hover:bg-blue-50/10"
              aria-pressed={paused}
              aria-label={paused ? "Resume auto play" : "Pause auto play"}
            >
              {paused ? "Resume" : "Pause"}
            </button>
          ) : null}
        </div>
      </div>

      <div
        className="mt-3 h-1 overflow-hidden rounded-full bg-gray-100"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(((activeIndex + 1) / steps.length) * 100)}
        aria-label="Walkthrough progress"
      >
        <div
          key={progressKey}
          className={cn(
            "h-full w-full rounded-full bg-blue-600 animate-demo-progress",
            paused && "[animation-play-state:paused]",
          )}
        />
      </div>

      <div className="mt-2.5 flex gap-1">
        {steps.map((step, index) => (
          <span
            key={step.id}
            aria-hidden="true"
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-300 ease-in-out",
              index < activeIndex
                ? "bg-blue-600"
                : index === activeIndex
                  ? "bg-blue-600/35"
                  : "bg-gray-100",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function StepRail({
  steps,
  activeId,
  activeIndex,
  onSelect,
  onHover,
}: {
  steps: SystemDemoStep[];
  activeId: string;
  activeIndex: number;
  onSelect: (id: string) => void;
  onHover: (id: string) => void;
}) {
  return (
    <ol
      className="relative space-y-0 overflow-visible bg-gray-50 p-4 md:p-5"
      aria-label="System workflow steps"
    >
      {steps.map((step, index) => {
        const isActive = step.id === activeId;
        const isPast = index < activeIndex;
        const number = String(index + 1).padStart(2, "0");

        return (
          <li key={step.id} className={cn("relative", isActive && "z-10")}>
            <button
              type="button"
              onClick={() => onSelect(step.id)}
              onMouseEnter={() => onHover(step.id)}
              aria-pressed={isActive}
              className={cn(
                "group grid w-full cursor-pointer grid-cols-[auto_1fr] items-center gap-3 rounded-xl border border-l-4 px-3 py-3 text-left transition-all duration-300 ease-in-out",
                isActive
                  ? "scale-105 border-blue-200 border-l-4 border-l-blue-700 bg-blue-50 shadow-md"
                  : "border-gray-200 border-l-transparent bg-white/80 opacity-60 hover:border-blue-200 hover:border-l-blue-400 hover:bg-blue-50/50 hover:opacity-100 hover:shadow-sm",
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ease-in-out",
                  isActive
                    ? "border-blue-700 bg-blue-700 text-white shadow-sm"
                    : isPast
                      ? "border-blue-200 bg-blue-50 text-blue-700 group-hover:border-blue-300"
                      : "border-gray-200 bg-white text-blue-700 group-hover:border-blue-200 group-hover:bg-blue-50",
                )}
              >
                <StepIcon id={step.id} className="h-4 w-4" />
              </span>

              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[11px] font-semibold tracking-[0.14em] transition-colors duration-300 ease-in-out",
                      isActive ? "text-blue-700" : "text-gray-500",
                    )}
                  >
                    {number}
                  </span>
                  {isActive ? (
                    <span className="rounded-md bg-blue-700/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                      Active
                    </span>
                  ) : null}
                </span>
                <span className="mt-0.5 block text-sm font-semibold tracking-tight text-gray-900">
                  {step.title}
                </span>
              </span>
            </button>

            {index < steps.length - 1 ? (
              <div className="flex justify-start pl-[1.7rem]">
                <WorkflowConnector active={index < activeIndex} />
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function MiniWorkflow({
  steps,
  activeId,
  onSelect,
  onHover,
}: {
  steps: SystemDemoStep[];
  activeId: string;
  onSelect: (id: string) => void;
  onHover: (id: string) => void;
}) {
  const activeIndex = steps.findIndex((step) => step.id === activeId);

  return (
    <div
      className="rounded-xl border border-gray-200 bg-gray-50 p-4"
      aria-label="Workflow path"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-600">
        End-to-end path
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-1">
        {steps.map((step, index) => {
          const isActive = step.id === activeId;
          const isPast = index < activeIndex;

          return (
            <div key={step.id} className="flex items-center">
              <button
                type="button"
                onClick={() => onSelect(step.id)}
                onMouseEnter={() => onHover(step.id)}
                className={cn(
                  "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border transition-all duration-300 ease-in-out",
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : isPast
                      ? "border-blue-600/30 bg-white text-blue-600 hover:border-blue-600/50"
                      : "border-gray-200 bg-white text-gray-500 hover:border-blue-600/40 hover:text-blue-600",
                )}
                aria-label={step.title}
                aria-current={isActive ? "step" : undefined}
              >
                <StepIcon id={step.id} className="h-3.5 w-3.5" />
              </button>
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "mx-1 flex items-center text-gray-300 transition-colors duration-300 ease-in-out",
                    index < activeIndex && "text-blue-600/50",
                  )}
                >
                  <span className="h-px w-2.5 bg-current" />
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                    <path
                      d="M5 12h12M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getWalkthroughVisual(id: string) {
  const key = id.trim().toLowerCase();
  switch (key) {
    case "lead":
      return (
        <div className="w-full max-w-[200px] rounded-xl border border-blue-200 bg-white p-4 shadow-sm text-center animate-fade-in">
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Meta Ads Form</span>
          <div className="mt-3 space-y-2 text-left">
            <div className="h-5 rounded bg-gray-50 border border-gray-200 text-[9px] text-gray-400 flex items-center pl-2">S. Kumar</div>
            <div className="h-5 rounded bg-gray-50 border border-gray-200 text-[9px] text-gray-400 flex items-center pl-2">skumar@gmail.com</div>
            <div className="h-5 rounded bg-blue-600 text-[9px] font-bold text-white flex items-center justify-center shadow-sm">Submit Lead</div>
          </div>
        </div>
      );
    case "crm":
      return (
        <div className="w-full max-w-[220px] rounded-xl border border-blue-200 bg-white p-4 shadow-sm animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded-full bg-blue-100 text-[10px] font-bold text-blue-600 flex items-center justify-center">SK</div>
            <div>
              <p className="text-[10px] font-extrabold text-gray-800">S. Kumar</p>
              <p className="text-[8px] text-gray-400">Owner: Rahul Dev</p>
            </div>
          </div>
          <div className="space-y-1.5 border-t border-gray-50 pt-2 text-[9px]">
            <div className="flex justify-between"><span className="text-gray-400">Status:</span><span className="font-bold text-blue-600">Assigned</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Phone:</span><span className="font-bold text-gray-700">+91 98765...</span></div>
          </div>
        </div>
      );
    case "deal":
      return (
        <div className="w-full max-w-[220px] rounded-xl border border-blue-200 bg-white p-4 shadow-sm animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Deal Pipeline</span>
            <span className="text-[9px] font-bold text-gray-700">₹8,50,000</span>
          </div>
          <p className="text-[10px] font-extrabold text-gray-800">Proposal & Presentation</p>
          <div className="h-1.5 w-full bg-gray-100 rounded overflow-hidden mt-3">
            <div className="h-full bg-blue-600 rounded" style={{ width: '65%' }}></div>
          </div>
          <p className="text-[8px] text-gray-400 mt-1.5">Confidence Level: 65%</p>
        </div>
      );
    case "project":
      return (
        <div className="w-full max-w-[200px] rounded-xl border border-blue-200 bg-white p-4 shadow-sm space-y-2.5 animate-fade-in">
          <p className="text-[10px] font-extrabold text-gray-800 border-b border-gray-100 pb-1.5">Zoho Projects board</p>
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded border border-blue-500 bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">✓</span>
            <span className="text-[10px] text-gray-600">CRM Handoff Checklist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded border border-blue-500 bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">✓</span>
            <span className="text-[10px] text-gray-600">Milestone Stage 1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded border border-gray-200 flex items-center justify-center text-[9px] font-bold"></span>
            <span className="text-[10px] text-gray-400">User Adoption Training</span>
          </div>
        </div>
      );
    case "invoice":
      return (
        <div className="w-full max-w-[220px] rounded-xl border border-blue-200 bg-white p-4 shadow-sm animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[9px] font-bold text-gray-500">Invoice: #INV-2026-90</span>
            <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">PAID</span>
          </div>
          <p className="text-[11px] font-extrabold text-gray-800">Sales & Setup Fees</p>
          <div className="mt-4 pt-2.5 border-t border-gray-100 flex justify-between items-center text-[10px]">
            <span className="text-gray-400">Total Amt:</span>
            <span className="font-extrabold text-gray-900">₹45,000</span>
          </div>
        </div>
      );
    case "dashboard":
      return (
        <div className="w-full max-w-[200px] rounded-xl border border-blue-200 bg-white p-4 shadow-sm text-center animate-fade-in">
          <p className="text-[10px] font-extrabold text-gray-800 mb-3">Leadership Analytics</p>
          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full text-blue-100">
              <path className="text-blue-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-blue-600" strokeDasharray="80, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute text-[10px] font-extrabold text-gray-800">+55% ROI</div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function DetailPanel({
  step,
  activeIndex,
  total,
  steps,
  onSelect,
  onHover,
}: {
  step: SystemDemoStep;
  activeIndex: number;
  total: number;
  steps: SystemDemoStep[];
  onSelect: (id: string) => void;
  onHover: (id: string) => void;
}) {
  const visualMockup = getWalkthroughVisual(step.id);

  return (
    <div className="flex flex-col bg-white p-6 md:min-h-[520px] md:p-8">
      <div
        key={step.id}
        className="animate-demo-fade flex flex-1 flex-col transition-all duration-300 ease-in-out"
      >
        <div className="grid lg:grid-cols-12 gap-6 items-center flex-1">
          {/* Left details side (Takes 7/12 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Title + icon */}
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 shadow-sm transition-all duration-300 ease-in-out">
                  <StepIcon id={step.id} className="h-5 w-5" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    Step {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>

              {/* Tools */}
              <div className="mt-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Tools used
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {step.tools.map((tool) => (
                    <li key={tool}>
                      <Badge className="border-gray-200 bg-gray-50 text-gray-800 text-[10px] font-semibold">
                        {tool}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes — primary business impact */}
              {step.outcomes.length > 0 ? (
                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/20 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                      Business outcome
                    </p>
                    <span className="text-[10px] font-medium text-gray-400">
                      Why this matters
                    </span>
                  </div>
                  <ul className="mt-4 grid gap-2.5">
                    {step.outcomes.map((outcome, index) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <OutcomeIcon index={index} />
                        </span>
                        <span className="pt-1.5">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {/* Mini flow */}
            <div className="mt-8 pt-4 border-t border-gray-100">
              <MiniWorkflow
                steps={steps}
                activeId={step.id}
                onSelect={onSelect}
                onHover={onHover}
              />
            </div>
          </div>
          
          {/* Right visual mockup side (Takes 5/12 columns) */}
          <div className="lg:col-span-5 flex items-center justify-center border-t border-gray-100 pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-gray-100 lg:pl-6 h-full min-h-[220px]">
            {visualMockup}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InteractiveSystemDemo({
  title = "How Your Business System Works",
  description = "A step-by-step breakdown of your complete workflow",
  steps = systemDemoSteps,
  tone = "default",
  spacing = "prominent",
  showSectionChrome = true,
  className,
  autoPlay = true,
  activeStepId,
  onStepChange,
}: InteractiveSystemDemoProps) {
  const [internalId, setInternalId] = useState(steps[0]?.id ?? "lead");
  const [paused, setPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const isControlled = activeStepId !== undefined;
  const activeId = activeStepId ?? internalId;
  const isPaused = paused || hoverPaused;
  const activeIndex = Math.max(
    0,
    steps.findIndex((step) => step.id === activeId),
  );
  const activeStep = steps[activeIndex] ?? steps[0];
  const headingId = "interactive-system-demo-heading";

  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;
  const onStepChangeRef = useRef(onStepChange);
  onStepChangeRef.current = onStepChange;

  function commitStep(id: string, source: SystemStepChangeSource) {
    if (!isControlled) {
      setInternalId(id);
    }
    onStepChangeRef.current?.(id, source);
  }

  useEffect(() => {
    setProgressKey((key) => key + 1);
  }, [activeId]);

  useEffect(() => {
    if (!autoPlay || isPaused || steps.length === 0) {
      return;
    }

    setProgressKey((key) => key + 1);

    const intervalId = setInterval(() => {
      const currentIndex = steps.findIndex(
        (step) => step.id === activeIdRef.current,
      );
      const nextIndex =
        currentIndex < 0 ? 0 : (currentIndex + 1) % steps.length;
      commitStep(steps[nextIndex].id, "autoplay");
    }, AUTO_PLAY_MS);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, isPaused, steps, cycleKey, isControlled]);

  function selectStep(id: string) {
    commitStep(id, "user");
    setCycleKey((key) => key + 1);
  }

  function hoverStep(id: string) {
    commitStep(id, "hover");
    setCycleKey((key) => key + 1);
  }

  const demo = (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md",
        !showSectionChrome && className,
      )}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      role="region"
      aria-label="Interactive system walkthrough"
    >
      <DemoToolbar
        steps={steps}
        activeIndex={activeIndex}
        paused={isPaused}
        autoPlayEnabled={autoPlay}
        progressKey={progressKey}
        onTogglePause={() => setPaused((value) => !value)}
        label="How Your Business System Works"
      />

      <div className="grid md:grid-cols-[minmax(260px,2fr)_minmax(0,3fr)]">
        <div className="border-b border-gray-200 md:border-b-0 md:border-r">
          <StepRail
            steps={steps}
            activeId={activeStep?.id ?? steps[0].id}
            activeIndex={activeIndex}
            onSelect={selectStep}
            onHover={hoverStep}
          />
        </div>

        <DetailPanel
          step={activeStep}
          activeIndex={activeIndex}
          total={steps.length}
          steps={steps}
          onSelect={selectStep}
          onHover={hoverStep}
        />
      </div>
    </div>
  );

  if (!showSectionChrome) {
    return demo;
  }

  return (
    <Section
      id="system-flow"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Walkthrough
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">
          {description}
        </p>
      </div>
      <div className="mt-10">{demo}</div>
    </Section>
  );
}
