"use client";

import { useState, type ReactNode } from "react";

import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type CRMView = "dashboard" | "leads" | "deals";

type PipelineCard = {
  id: string;
  name: string;
  company: string;
  value: string;
};

type PipelineStage = {
  id: string;
  title: string;
  cards: PipelineCard[];
};

type LeadRow = {
  id: string;
  name: string;
  company: string;
  source: string;
  status: "New" | "Contacted" | "Qualified";
  owner: string;
};

type StatCard = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "flat";
};

const primaryTabs: { id: CRMView; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "leads", label: "Leads" },
  { id: "deals", label: "Deals" },
];

const moduleNav = [
  { id: "dashboard", label: "Dashboard", interactive: true },
  { id: "leads", label: "Leads", interactive: true },
  { id: "deals", label: "Deals", interactive: true },
  { id: "projects", label: "Projects", interactive: false },
  { id: "finance", label: "Finance", interactive: false },
] as const;

const stats: StatCard[] = [
  {
    id: "leads",
    label: "Total Leads",
    value: "248",
    delta: "+18 this week",
    trend: "up",
  },
  {
    id: "deals",
    label: "Active Deals",
    value: "36",
    delta: "₹1.2 Cr pipeline",
    trend: "flat",
  },
  {
    id: "revenue",
    label: "Revenue",
    value: "₹84.5 L",
    delta: "+12% vs last month",
    trend: "up",
  },
];

const leads: LeadRow[] = [
  {
    id: "l1",
    name: "Rahul Sharma",
    company: "ABC Developers",
    source: "Website",
    status: "New",
    owner: "Sales Admin",
  },
  {
    id: "l2",
    name: "Priya Mehta",
    company: "Skyline Estates",
    source: "Meta Ads",
    status: "Contacted",
    owner: "Ankit R.",
  },
  {
    id: "l3",
    name: "Amit Verma",
    company: "Horizon Builders",
    source: "WhatsApp",
    status: "Qualified",
    owner: "Sales Admin",
  },
  {
    id: "l4",
    name: "Sneha Kapoor",
    company: "Urban Spaces",
    source: "Referral",
    status: "Contacted",
    owner: "Neha J.",
  },
  {
    id: "l5",
    name: "Vikram Singh",
    company: "Metro Homes",
    source: "Website",
    status: "New",
    owner: "Ankit R.",
  },
];

const pipelineStages: PipelineStage[] = [
  {
    id: "new",
    title: "New Leads",
    cards: [
      {
        id: "n1",
        name: "Rahul Sharma",
        company: "ABC Developers",
        value: "₹12,00,000",
      },
      {
        id: "n2",
        name: "Priya Mehta",
        company: "Skyline Estates",
        value: "₹8,50,000",
      },
    ],
  },
  {
    id: "contacted",
    title: "Contacted",
    cards: [
      {
        id: "c1",
        name: "Amit Verma",
        company: "Horizon Builders",
        value: "₹18,00,000",
      },
      {
        id: "c2",
        name: "Sneha Kapoor",
        company: "Urban Spaces",
        value: "₹6,75,000",
      },
    ],
  },
  {
    id: "qualified",
    title: "Qualified",
    cards: [
      {
        id: "q1",
        name: "Vikram Singh",
        company: "Metro Homes",
        value: "₹22,00,000",
      },
    ],
  },
  {
    id: "proposal",
    title: "Proposal Sent",
    cards: [
      {
        id: "p1",
        name: "Neha Joshi",
        company: "Greenfield Realty",
        value: "₹15,40,000",
      },
      {
        id: "p2",
        name: "Karan Patel",
        company: "Lotus Infrastructure",
        value: "₹9,25,000",
      },
    ],
  },
  {
    id: "closed",
    title: "Closed",
    cards: [
      {
        id: "cl1",
        name: "Ananya Reddy",
        company: "Prime Developers",
        value: "₹27,50,000",
      },
    ],
  },
];

const viewMeta: Record<
  CRMView,
  { title: string; subtitle: string; action: string }
> = {
  dashboard: {
    title: "Operations overview",
    subtitle: "Leads, pipeline, and revenue in one control view",
    action: "Export report",
  },
  leads: {
    title: "Lead inbox",
    subtitle: "Capture, assign, and follow up without leakage",
    action: "New lead",
  },
  deals: {
    title: "Deal pipeline",
    subtitle: "Stage-by-stage visibility from inquiry to close",
    action: "New deal",
  },
};

type CRMPreviewDemoProps = {
  title?: string;
  description?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  showSectionChrome?: boolean;
  className?: string;
  activeView?: CRMView;
  onViewChange?: (view: CRMView) => void;
  highlightPipeline?: boolean;
  syncLabel?: string | null;
};

function NavIcon({ id }: { id: string }) {
  const common = "h-4 w-4 stroke-[1.75]";

  switch (id) {
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3" y="3" width="7" height="9" rx="1" stroke="currentColor" />
          <rect x="14" y="3" width="7" height="5" rx="1" stroke="currentColor" />
          <rect x="14" y="12" width="7" height="9" rx="1" stroke="currentColor" />
          <rect x="3" y="16" width="7" height="5" rx="1" stroke="currentColor" />
        </svg>
      );
    case "leads":
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
    case "deals":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" />
          <circle cx="18" cy="12" r="2" stroke="currentColor" />
          <circle cx="15" cy="18" r="2" stroke="currentColor" />
        </svg>
      );
    case "projects":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M9 11l3 3L22 4" stroke="currentColor" />
          <path
            d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            stroke="currentColor"
          />
        </svg>
      );
    case "finance":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"
            stroke="currentColor"
          />
          <path d="M8 10h5M8 14h3" stroke="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-[10px] font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white"
    >
      {initials}
    </span>
  );
}

function DealCard({ card }: { card: PipelineCard }) {
  return (
    <article className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-3.5 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="truncate text-sm font-semibold tracking-tight text-gray-900">
            {card.name}
          </h4>
          <p className="mt-0.5 truncate text-xs text-gray-600">{card.company}</p>
        </div>
        <Initials name={card.name} />
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2.5">
        <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
          Deal value
        </span>
        <span className="text-sm font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-secondary">
          {card.value}
        </span>
      </div>
    </article>
  );
}

function PipelineColumn({
  stage,
  emphasize,
}: {
  stage: PipelineStage;
  emphasize?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex w-[232px] shrink-0 flex-col rounded-lg border bg-gray-50/90 transition-all duration-300 ease-in-out",
        emphasize
          ? "border-primary/30 shadow-md"
          : "border-gray-200 hover:shadow-sm",
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-gray-200 px-3 py-2.5">
        <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-700">
          {stage.title}
        </h3>
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-white px-1.5 text-[11px] font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200">
          {stage.cards.length}
        </span>
      </div>
      <div className="flex flex-col gap-2.5 p-2.5">
        {stage.cards.map((card) => (
          <DealCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

function StatCards({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-3",
        compact ? "grid-cols-3" : "sm:grid-cols-3",
      )}
    >
      {stats.map((stat) => (
        <article
          key={stat.id}
          className={cn(
            "group cursor-default rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md",
            compact ? "p-3" : "p-4",
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 sm:text-xs">
            {stat.label}
          </p>
          <p
            className={cn(
              "mt-1.5 font-bold tracking-tight text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-primary",
              compact ? "text-lg sm:text-xl" : "text-2xl",
            )}
          >
            {stat.value}
          </p>
          <p
            className={cn(
              "mt-1 text-[11px] font-medium sm:text-xs",
              stat.trend === "up" ? "text-primary" : "text-gray-600",
            )}
          >
            {stat.delta}
          </p>
        </article>
      ))}
    </div>
  );
}

function DashboardView() {
  const stageSummary = pipelineStages.map((stage) => ({
    title: stage.title,
    count: stage.cards.length,
  }));

  return (
    <div className="space-y-4">
      <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr]">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">
              Pipeline mix
            </p>
            <span className="text-[11px] font-medium text-gray-500">
              Open stages
            </span>
          </div>
          <ul className="mt-4 space-y-3">
            {stageSummary.map((stage) => (
              <li key={stage.title}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-gray-700">{stage.title}</span>
                  <span className="font-semibold text-gray-900">{stage.count}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500 ease-in-out"
                    style={{ width: `${Math.max(12, stage.count * 28)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">
            Recent activity
          </p>
          <ul className="mt-4 space-y-3">
            {[
              { time: "2m", text: "Rahul Sharma added to New Leads" },
              { time: "18m", text: "Proposal sent — Greenfield Realty" },
              { time: "1h", text: "Ananya Reddy marked Closed Won" },
              { time: "3h", text: "2 website leads assigned to Ankit R." },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-start justify-between gap-3 text-sm text-gray-700"
              >
                <span className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item.text}
                </span>
                <span className="shrink-0 text-[11px] font-medium text-gray-400">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function statusStyles(status: LeadRow["status"]) {
  switch (status) {
    case "New":
      return "bg-primary/10 text-primary";
    case "Contacted":
      return "bg-secondary/10 text-secondary";
    case "Qualified":
      return "bg-gray-100 text-gray-700";
  }
}

function LeadsView() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
        <p className="text-xs font-semibold text-gray-700">
          All leads · last 30 days
        </p>
        <div className="flex gap-1.5">
          <span className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-600">
            Filter
          </span>
          <span className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-600">
            Sort
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr_0.8fr_0.8fr] gap-2 border-b border-gray-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 max-sm:grid-cols-[1.2fr_0.8fr]">
        <span>Lead</span>
        <span className="max-sm:hidden">Source</span>
        <span>Status</span>
        <span className="max-sm:hidden">Owner</span>
      </div>
      <ul>
        {leads.map((lead) => (
          <li
            key={lead.id}
            className="group grid cursor-pointer grid-cols-[1.2fr_1fr_0.8fr_0.8fr] items-center gap-2 border-b border-gray-100 px-4 py-3 transition-all duration-300 ease-in-out last:border-b-0 hover:bg-primary/[0.03] max-sm:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="flex min-w-0 items-center gap-2.5">
              <Initials name={lead.name} />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-primary">
                  {lead.name}
                </p>
                <p className="truncate text-xs text-gray-600">{lead.company}</p>
              </div>
            </div>
            <span className="truncate text-sm text-gray-600 max-sm:hidden">
              {lead.source}
            </span>
            <span
              className={cn(
                "inline-flex w-fit rounded-md px-2 py-0.5 text-[11px] font-semibold",
                statusStyles(lead.status),
              )}
            >
              {lead.status}
            </span>
            <span className="truncate text-sm text-gray-600 max-sm:hidden">
              {lead.owner}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DealsView({ highlight }: { highlight?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300 ease-in-out",
        highlight && "bg-primary/[0.03] p-2 ring-2 ring-primary/25",
      )}
    >
      {highlight ? (
        <p className="mb-2 px-1 text-xs font-semibold text-primary">
          Pipeline highlighted from system walkthrough
        </p>
      ) : null}
      <div className="overflow-x-auto pb-1">
        <div className="flex min-w-max gap-3">
          {pipelineStages.map((stage) => (
            <PipelineColumn
              key={stage.id}
              stage={stage}
              emphasize={highlight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductTabs({
  activeView,
  onChange,
}: {
  activeView: CRMView;
  onChange: (view: CRMView) => void;
}) {
  return (
    <div
      className="flex gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1"
      role="tablist"
      aria-label="CRM modules"
    >
      {primaryTabs.map((tab) => {
        const selected = activeView === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(tab.id)}
            className={cn(
              "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition-all duration-300 ease-in-out sm:text-sm",
              selected
                ? "bg-white text-primary shadow-sm"
                : "text-gray-600 hover:bg-white/70 hover:text-primary",
            )}
          >
            <NavIcon id={tab.id} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function ProductFrame({
  children,
  className,
  emphasized,
}: {
  children: ReactNode;
  className?: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={cn(
        "group/frame rounded-2xl bg-gray-100 p-4 transition duration-300 ease-in-out hover:scale-[1.01] sm:p-6",
        emphasized && "ring-2 ring-primary/15",
        className,
      )}
    >
      {/* Browser bar */}
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <p className="text-xs font-semibold tracking-wide text-gray-600">
            Live System Preview
          </p>
        </div>
        <span className="hidden rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-500 shadow-sm sm:inline">
          app.aidamsole.com/crm
        </span>
      </div>

      {/* Product window */}
      <div className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 ease-in-out group-hover/frame:shadow-xl">
        {children}
      </div>
    </div>
  );
}

function CRMShell({
  className,
  activeView: controlledView,
  onViewChange,
  highlightPipeline = false,
  syncLabel,
}: {
  className?: string;
  activeView?: CRMView;
  onViewChange?: (view: CRMView) => void;
  highlightPipeline?: boolean;
  syncLabel?: string | null;
}) {
  const [internalView, setInternalView] = useState<CRMView>("deals");
  const activeView = controlledView ?? internalView;

  function setActiveView(view: CRMView) {
    if (controlledView === undefined) {
      setInternalView(view);
    }
    onViewChange?.(view);
  }

  const meta = viewMeta[activeView];
  const openDeals = pipelineStages.reduce(
    (sum, stage) => sum + stage.cards.length,
    0,
  );

  return (
    <ProductFrame
      className={className}
      emphasized={highlightPipeline || Boolean(syncLabel)}
    >
      <div role="region" aria-label="CRM product preview">
      {/* App chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-2.5 md:px-5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[10px] font-bold text-white">
            CRM
          </span>
          <div>
            <p className="text-xs font-semibold text-gray-900">
              Aidamsole CRM
            </p>
            <p className="text-[11px] text-gray-500">Working product preview</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {syncLabel ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Synced · {syncLabel}
            </span>
          ) : (
            <span className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-600">
              Demo mode
            </span>
          )}
        </div>
      </div>

      <div className="flex min-h-[520px] md:min-h-[560px]">
        {/* Module sidebar */}
        <aside className="hidden w-[188px] shrink-0 flex-col border-r border-gray-200 bg-[#F8FAFC] lg:flex">
          <div className="border-b border-gray-200 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              Modules
            </p>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="CRM modules">
            {moduleNav.map((item) => {
              const isActive =
                item.interactive && item.id === activeView;

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={!item.interactive}
                  onClick={() => {
                    if (item.interactive) {
                      setActiveView(item.id as CRMView);
                    }
                  }}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-300 ease-in-out",
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : item.interactive
                        ? "cursor-pointer text-gray-600 hover:bg-white hover:text-primary hover:shadow-sm"
                        : "cursor-default text-gray-400",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <NavIcon id={item.id} />
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="border-t border-gray-200 p-3">
            <p className="text-[11px] leading-snug text-gray-500">
              Click Dashboard, Leads, or Deals — mirrors the system walkthrough.
            </p>
          </div>
        </aside>

        {/* Main product surface */}
        <div className="flex min-w-0 flex-1 flex-col bg-white">
          {/* Topbar */}
          <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3 md:px-5">
            <div className="relative min-w-0 flex-1 max-w-md">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" />
                  <path d="M20 20l-3-3" stroke="currentColor" />
                </svg>
              </span>
              <input
                type="search"
                readOnly
                tabIndex={-1}
                placeholder="Search leads, deals, accounts…"
                className="w-full cursor-default rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                aria-label="Search (demo only)"
              />
            </div>

            <div className="flex items-center gap-2.5">
              <span className="hidden rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-600 shadow-sm sm:inline">
                Filters
              </span>
              <div className="hidden text-right sm:block">
                <p className="text-xs font-semibold text-gray-900">Sales Admin</p>
                <p className="text-[11px] text-gray-500">Online</p>
              </div>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white shadow-sm"
                aria-hidden="true"
              >
                SA
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 px-4 py-4 md:px-5 md:py-5">
            {/* Primary tabs — always visible */}
            <ProductTabs activeView={activeView} onChange={setActiveView} />

            {/* Stats strip — product KPI bar */}
            <StatCards compact />

            {/* View header + fake CTA */}
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div key={`title-${activeView}`} className="animate-demo-fade">
                <h3 className="text-base font-bold tracking-tight text-gray-900 md:text-lg">
                  {meta.title}
                </h3>
                <p className="mt-0.5 text-xs text-gray-600 md:text-sm">
                  {meta.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {activeView === "deals" ? (
                  <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
                    {openDeals} open
                  </span>
                ) : null}
                {activeView === "leads" ? (
                  <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
                    {leads.length} records
                  </span>
                ) : null}
                <span className="cursor-default rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                  {meta.action}
                </span>
              </div>
            </div>

            {/* View stage */}
            <div className="min-h-0 flex-1 overflow-hidden">
              <div key={activeView} className="animate-demo-fade h-full">
                {activeView === "dashboard" ? <DashboardView /> : null}
                {activeView === "leads" ? <LeadsView /> : null}
                {activeView === "deals" ? (
                  <DealsView highlight={highlightPipeline} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </ProductFrame>
  );
}

export function CRMPreviewDemo({
  title = "Your CRM. Working Like a Product.",
  description = "Dashboard, leads, and pipeline — the same system the walkthrough describes.",
  tone = "muted",
  spacing = "prominent",
  showSectionChrome = true,
  className,
  activeView,
  onViewChange,
  highlightPipeline,
  syncLabel,
}: CRMPreviewDemoProps) {
  const headingId = "crm-preview-demo-heading";

  if (!showSectionChrome) {
    return (
      <CRMShell
        className={className}
        activeView={activeView}
        onViewChange={onViewChange}
        highlightPipeline={highlightPipeline}
        syncLabel={syncLabel}
      />
    );
  }

  return (
    <Section
      id="crm-preview"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={className}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>
      <div className="mt-10">
        <CRMShell
          activeView={activeView}
          onViewChange={onViewChange}
          highlightPipeline={highlightPipeline}
          syncLabel={syncLabel}
        />
      </div>
    </Section>
  );
}
