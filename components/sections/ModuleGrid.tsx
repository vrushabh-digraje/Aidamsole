"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { ZohoAppIcon, zohoAppHref } from "@/components/ui/ZohoAppIcon";
import { cn } from "@/lib/utils";

export type ModuleGroup =
  | "Sales"
  | "Finance"
  | "Operations"
  | "Intelligence";

export type ModuleGridItem = {
  name: string;
  role: string;
  group?: ModuleGroup;
};

type ModuleGridProps = {
  title: string;
  description: string;
  items: ModuleGridItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
  /** Render modules under ecosystem groups (default true). */
  grouped?: boolean;
};

const GROUP_ORDER: ModuleGroup[] = [
  "Sales",
  "Finance",
  "Operations",
  "Intelligence",
];

const GROUP_META: Record<ModuleGroup, { label: string; blurb: string }> = {
  Sales: {
    label: "Sales",
    blurb: "Capture, own, and advance every opportunity",
  },
  Finance: {
    label: "Finance",
    blurb: "Invoicing, spend, and collections control",
  },
  Operations: {
    label: "Operations",
    blurb: "Delivery execution and process extensions",
  },
  Intelligence: {
    label: "Intelligence",
    blurb: "Reporting and leadership visibility",
  },
};

const recommendations = [
  {
    id: "sales-leads",
    label: "Trace lead follow-ups",
    recommendation: "We recommend starting with Zoho CRM configured with custom lead assignment rules, stage exits, and automated email nurtures.",
    highlightApps: ["crm"]
  },
  {
    id: "billing-delays",
    label: "Eliminate billing delays",
    recommendation: "We recommend Zoho Books integrated with payment gateways and automated invoice email reminders to keep collections fluid.",
    highlightApps: ["books"]
  },
  {
    id: "stock-levels",
    label: "Sync stock across locations",
    recommendation: "We recommend Zoho Inventory connected to your CRM and warehouse terminals to trace order fulfillments automatically.",
    highlightApps: ["inventory"]
  },
  {
    id: "project-tasks",
    label: "Track contractor tasks",
    recommendation: "We recommend Zoho Projects with blueprint workflows so that construction or delivery stages exit only when checklists are completed.",
    highlightApps: ["projects"]
  },
  {
    id: "reports",
    label: "Consolidate leadership reports",
    recommendation: "We recommend Zoho Analytics connected to your CRM and Books, giving leadership unified dashboards without weekly sheet rebuilds.",
    highlightApps: ["analytics"]
  }
];

function resolveGroup(name: string, explicit?: ModuleGroup): ModuleGroup {
  if (explicit) return explicit;
  const key = name.trim().toLowerCase();
  if (["crm", "salesiq", "campaigns", "bigin"].includes(key)) return "Sales";
  if (["books", "invoice", "finance", "expense"].includes(key)) return "Finance";
  if (
    [
      "projects",
      "creator",
      "desk",
      "cliq",
      "operations",
      "people",
      "inventory",
    ].includes(key)
  ) {
    return "Operations";
  }
  if (["analytics", "reports", "dashboard"].includes(key)) {
    return "Intelligence";
  }
  return "Operations";
}

function getAppVisualMockup(name: string) {
  const key = name.trim().toLowerCase();
  switch (key) {
    case "crm":
      return (
        <div className="mt-4 p-3 bg-red-50/35 rounded-none border border-red-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-red-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-red-700">
            <span>PIPELINE: PROPOSAL</span>
            <span>75%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-150 rounded-none overflow-hidden mt-1.5">
            <div className="h-full bg-red-500 rounded-none" style={{ width: '75%' }}></div>
          </div>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-2 font-semibold">
            <span>Owner: Agent A</span>
            <span className="font-extrabold text-gray-800">₹2,40,000</span>
          </div>
        </div>
      );
    case "books":
      return (
        <div className="mt-4 p-3 bg-emerald-50/30 rounded-none border border-emerald-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-emerald-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-emerald-700">
            <span>INVOICE SENT</span>
            <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-none font-extrabold">PAID</span>
          </div>
          <p className="text-[10px] font-extrabold text-gray-800 mt-1">Inv #INV-2026-089</p>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1 font-semibold">
            <span>Due: 15-Aug</span>
            <span className="font-extrabold text-gray-800">₹1,85,000</span>
          </div>
        </div>
      );
    case "inventory":
      return (
        <div className="mt-4 p-3 bg-blue-50/30 rounded-none border border-blue-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-blue-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-blue-700">
            <span>STOCK VISIBILITY</span>
            <span className="text-[8px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-none font-extrabold">REORDER</span>
          </div>
          <p className="text-[10px] font-extrabold text-gray-800 mt-1">SKU: BOX-DISP-M</p>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1 font-semibold">
            <span>Delhi Whse: 1,200</span>
            <span className="font-extrabold text-rose-600">Dubai: 12 (Low)</span>
          </div>
        </div>
      );
    case "projects":
      return (
        <div className="mt-4 p-3 bg-indigo-50/30 rounded-none border border-indigo-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-indigo-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-indigo-700">
            <span>TASK BOARD</span>
            <span>80%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-150 rounded-none overflow-hidden mt-1.5">
            <div className="h-full bg-indigo-500 rounded-none" style={{ width: '80%' }}></div>
          </div>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-2 font-semibold">
            <span>8/10 Tasks Completed</span>
            <span className="font-extrabold text-gray-800">Phase 1</span>
          </div>
        </div>
      );
    case "analytics":
      return (
        <div className="mt-4 p-3 bg-sky-50/30 rounded-none border border-sky-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-sky-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-sky-700">
            <span>REVENUE KPI DIAL</span>
            <span className="text-emerald-600 font-extrabold">+45% YoY</span>
          </div>
          <div className="flex items-end justify-between h-6 gap-1 pt-1">
            <div className="w-full bg-sky-200 h-[30%] rounded-none"></div>
            <div className="w-full bg-sky-300 h-[60%] rounded-none"></div>
            <div className="w-full bg-sky-500 h-[90%] rounded-none animate-pulse"></div>
          </div>
          <div className="text-[8px] text-gray-400 mt-1 text-center font-extrabold">Monthly Sales Analytics</div>
        </div>
      );
    case "creator":
      return (
        <div className="mt-4 p-3 bg-purple-50/30 rounded-none border border-purple-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-purple-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-purple-700">
            <span>CUSTOM LEAD FORM</span>
            <span>ACTIVE</span>
          </div>
          <div className="flex gap-2 items-center mt-2.5">
            <div className="h-5 flex-1 rounded-none bg-gray-50 border border-gray-200 text-[9px] text-gray-400 flex items-center pl-2">Karan Sharma...</div>
            <div className="h-5 px-3 rounded-none bg-purple-650 text-[9px] font-extrabold text-white flex items-center justify-center shadow-sm">Submit</div>
          </div>
        </div>
      );
    case "people":
      return (
        <div className="mt-4 p-3 bg-rose-50/30 rounded-none border border-rose-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-rose-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-rose-700">
            <span>ATTENDANCE STATUS</span>
            <span>IN OFFICE</span>
          </div>
          <p className="text-[10px] font-extrabold text-gray-800 mt-1">Rahul Verma · 09:00 AM</p>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1 font-semibold">
            <span>Leave Balance: 14d</span>
            <span className="text-emerald-600 font-extrabold">On Time</span>
          </div>
        </div>
      );
    case "desk":
      return (
        <div className="mt-4 p-3 bg-violet-50/30 rounded-none border border-violet-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-violet-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-violet-700">
            <span>SUPPORT TICKET</span>
            <span className="text-[8px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-none font-extrabold">OPEN</span>
          </div>
          <p className="text-[10px] font-extrabold text-gray-800 mt-1">#8914: Invoice Re-sync</p>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1 font-semibold">
            <span>SLA Response: 15m</span>
            <span className="font-extrabold text-violet-600">Assigned</span>
          </div>
        </div>
      );
    case "campaigns":
      return (
        <div className="mt-4 p-3 bg-amber-50/30 rounded-none border border-amber-100 flex flex-col justify-between h-20 transition-all duration-300 group-hover:bg-amber-50/60">
          <div className="flex justify-between items-center text-[9px] font-extrabold text-amber-700">
            <span>CAMPAIGN NURTURE</span>
            <span>RUNNING</span>
          </div>
          <p className="text-[10px] font-extrabold text-gray-800 mt-1">Nurture Flow Sequence</p>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1 font-semibold">
            <span>Sent: 2,450 emails</span>
            <span className="text-emerald-600 font-extrabold">Open: 42%</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function ModuleCard({ item, isHighlighted }: { item: ModuleGridItem; isHighlighted: boolean }) {
  const nameKey = item.name.trim().toLowerCase();
  
  // Custom brand colors
  let cardBorderHover = "hover:border-blue-200";
  let topStripColor = "bg-blue-600";
  if (nameKey === "crm") {
    cardBorderHover = "hover:border-red-200";
    topStripColor = "bg-red-650";
  } else if (nameKey === "books") {
    cardBorderHover = "hover:border-emerald-200";
    topStripColor = "bg-emerald-600";
  } else if (nameKey === "inventory") {
    cardBorderHover = "hover:border-blue-200";
    topStripColor = "bg-blue-600";
  } else if (nameKey === "projects") {
    cardBorderHover = "hover:border-indigo-200";
    topStripColor = "bg-indigo-650";
  } else if (nameKey === "analytics") {
    cardBorderHover = "hover:border-sky-200";
    topStripColor = "bg-sky-650";
  } else if (nameKey === "creator") {
    cardBorderHover = "hover:border-purple-200";
    topStripColor = "bg-purple-650";
  } else if (nameKey === "people") {
    cardBorderHover = "hover:border-rose-200";
    topStripColor = "bg-rose-650";
  } else if (nameKey === "desk") {
    cardBorderHover = "hover:border-violet-200";
    topStripColor = "bg-violet-650";
  } else if (nameKey === "campaigns") {
    cardBorderHover = "hover:border-amber-200";
    topStripColor = "bg-amber-650";
  }

  return (
    <li
      className={cn(
        "group relative flex flex-col justify-between rounded-none border bg-white p-5 shadow-sm transition-all duration-300 overflow-hidden",
        isHighlighted
          ? "border-primary ring-2 ring-primary/15 scale-[1.02] shadow-md z-10"
          : "border-gray-200 hover:-translate-y-1 hover:shadow-md",
        !isHighlighted && cardBorderHover
      )}
    >
      {/* Top Brand Strip */}
      <div className={cn("absolute left-0 right-0 top-0 h-1 shrink-0", topStripColor)} />

      <Link
        href={zohoAppHref(item.name)}
        className="flex h-full w-full flex-col justify-between no-underline hover:no-underline pt-1.5"
      >
        <div>
          <div className="flex w-full items-start justify-between gap-3">
            <ZohoAppIcon name={item.name} size="md" />
            <span className="rounded-none bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-blue-700 border border-blue-100">
              Zoho
            </span>
          </div>

          <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-primary transition-colors">
            Zoho {item.name}
          </p>
          <h3 className="mt-0.5 text-base font-extrabold tracking-tight text-gray-900">
            {item.name}
          </h3>
          <p className="mt-2 text-xs leading-snug text-gray-500 font-semibold">{item.role}</p>
        </div>

        <div>
          {/* Related App Illustration Mockup */}
          {getAppVisualMockup(item.name)}

          <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-primary group-hover:text-primary/80">
            <span>View app →</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

const categories = [
  { id: "all", name: "All Modules" },
  { id: "Sales", name: "Sales" },
  { id: "Finance", name: "Finance" },
  { id: "Operations", name: "Operations" },
  { id: "Intelligence", name: "Intelligence" },
];

export function ModuleGrid({
  title,
  description,
  items,
  tone = "default",
  spacing = "compact",
  grouped = true,
}: ModuleGridProps) {
  const headingId = "module-grid-heading";
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProblemId, setActiveProblemId] = useState<string | null>(null);
  const [highlightedApps, setHighlightedApps] = useState<string[]>([]);

  const groups = GROUP_ORDER.map((group) => ({
    group,
    meta: GROUP_META[group],
    items: items.filter(
      (item) => resolveGroup(item.name, item.group) === group,
    ),
  })).filter((entry) => entry.items.length > 0);

  // Filter items in flat mode
  const filteredItems = activeCategory === "all"
    ? items
    : items.filter(item => resolveGroup(item.name, item.group) === activeCategory);

  const handleRecommendationClick = (probId: string, apps: string[]) => {
    if (activeProblemId === probId) {
      setActiveProblemId(null);
      setHighlightedApps([]);
    } else {
      setActiveProblemId(probId);
      setHighlightedApps(apps);
    }
  };

  const selectedRec = recommendations.find(rec => rec.id === activeProblemId);

  return (
    <Section
      id="modules"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          Zoho platform
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">{description}</p>
      </div>

      {/* Interactive Bottleneck Finder Widget (Sharp geometry, light theme) */}
      <div className="mt-8 max-w-3xl mx-auto rounded-none border border-gray-200 bg-white p-5 shadow-sm text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
          Identify your team's bottleneck to find the recommended module:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {recommendations.map((rec) => {
            const isSelected = rec.id === activeProblemId;
            return (
              <button
                key={rec.id}
                onClick={() => handleRecommendationClick(rec.id, rec.highlightApps)}
                className={cn(
                  "rounded-none px-3 py-1.5 text-xs font-semibold transition-all duration-200 shadow-sm border",
                  isSelected
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                )}
              >
                {rec.label}
              </button>
            );
          })}
        </div>

        {selectedRec && (
          <div className="mt-5 p-4 bg-blue-50 border border-blue-150 text-xs font-bold text-primary leading-relaxed max-w-xl mx-auto rounded-none text-left relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            <p className="uppercase text-[8px] tracking-wider text-gray-400 mb-1 pl-1">Recommended Solution</p>
            <p className="pl-1 text-gray-700">{selectedRec.recommendation}</p>
          </div>
        )}
      </div>

      {/* Category Pills (Flat view categories - Sharp tabs design) */}
      {!grouped && (
        <div className="mt-10 flex flex-wrap justify-center gap-1 border-b border-gray-150 pb-0">
          {categories.map((cat) => {
            const isSelected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveProblemId(null);
                  setHighlightedApps([]);
                }}
                className={cn(
                  "px-4 py-2.5 text-xs font-extrabold transition-all duration-200 border-b-2 focus:outline-none -mb-px",
                  isSelected
                    ? "border-primary text-primary bg-blue-50/20"
                    : "border-transparent text-gray-400 hover:text-gray-900"
                )}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      )}

      {grouped ? (
        <div className="mt-10 space-y-12">
          {groups.map(({ group, meta, items: groupItems }) => (
            <div key={group}>
              {/* Category Group Header */}
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400">
                    Ecosystem
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold tracking-tight text-gray-900">
                    {meta.label}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 font-semibold">{meta.blurb}</p>
                </div>
                <span className="rounded-none bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-bold text-primary">
                  {groupItems.length}{" "}
                  {groupItems.length === 1 ? "module" : "modules"}
                </span>
              </div>

              {/* Grid content */}
              <ul className={cn("grid gap-6", "md:grid-cols-2 lg:grid-cols-3")}>
                {groupItems.map((item) => {
                  const isHighlighted = highlightedApps.includes(item.name.trim().toLowerCase());
                  return (
                    <ModuleCard key={item.name} item={item} isHighlighted={isHighlighted} />
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isHighlighted = highlightedApps.includes(item.name.trim().toLowerCase());
            return (
              <ModuleCard key={item.name} item={item} isHighlighted={isHighlighted} />
            );
          })}
        </ul>
      )}
    </Section>
  );
}
