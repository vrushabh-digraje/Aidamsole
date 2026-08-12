"use client";

import { useEffect, useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type SystemFlowNode = {
  id: string;
  label: string;
  caption: string;
  icon:
    | "lead"
    | "crm"
    | "deal"
    | "project"
    | "invoice"
    | "dashboard"
    | "pipeline"
    | "followup";
};

type SystemFlowProps = {
  title?: string;
  description?: string;
  nodes?: SystemFlowNode[];
  highlightId?: string;
  className?: string;
  showSectionChrome?: boolean;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  /** Large product visual for hero / authority layouts. */
  size?: "md" | "lg";
  /** Soft auto-traveling highlight across steps. */
  autoFlow?: boolean;
};

const defaultNodes: SystemFlowNode[] = [
  {
    id: "lead",
    label: "Lead Capture",
    caption: "Intake every enquiry",
    icon: "lead",
  },
  {
    id: "crm",
    label: "CRM",
    caption: "Assign ownership",
    icon: "crm",
  },
  {
    id: "deal",
    label: "Deal Pipeline",
    caption: "Stage and advance",
    icon: "deal",
  },
  {
    id: "project",
    label: "Project Execution",
    caption: "Deliver the work",
    icon: "project",
  },
  {
    id: "invoice",
    label: "Invoicing",
    caption: "Bill and collect",
    icon: "invoice",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    caption: "Review live data",
    icon: "dashboard",
  },
];

// Rich process details mapped to icon types
const flowDetails: Record<
  SystemFlowNode["icon"],
  {
    modules: string;
    rule: string;
    deliverable: string;
    details: string;
  }
> = {
  lead: {
    modules: "Zoho Forms, Facebook Ads Sync, Webhook Connectors",
    rule: "UTM tracking parameters mandatory for all entries.",
    deliverable: "Automated, centralized lead intake pipeline.",
    details: "All inbound calls, contact forms, and ad campaigns are piped into a single queue. Zero manual copy-pasting required."
  },
  crm: {
    modules: "Zoho CRM Core, Lead Assignment Workflows",
    rule: "Leads must be assigned to a regional sales rep within 5 minutes.",
    deliverable: "Dynamic territory-based assignment mapping.",
    details: "Leads are automatically routed based on region, deal size, or product category. Instant mobile notification triggered for owner."
  },
  pipeline: {
    modules: "Zoho CRM Deals, Layout Rules, Blueprint Gates",
    rule: "Mandatory qualification fields required before deal stage progression.",
    deliverable: "Structured sales stage-gate criteria.",
    details: "Reps must input deal requirements and budget validation before advancing deals from qualification to proposal."
  },
  followup: {
    modules: "Zoho CRM Tasks, Email Templates, Workflow Alerts",
    rule: "Every open deal must have a scheduled future task date.",
    deliverable: "Automated next-action rhythm reminders.",
    details: "System warns managers if a deal is in an active pipeline stage with no future scheduled tasks or follow-up activities."
  },
  deal: {
    modules: "Zoho CRM Quotes, Zoho Sign Integration",
    rule: "Proposal documents must be signed digitally via secure Zoho Sign.",
    deliverable: "Unified digital close-won workflow.",
    details: "Once the proposal is digitally signed, Zoho converts the deal to won, updates inventory counts, and alerts delivery teams."
  },
  project: {
    modules: "Zoho Projects, Custom Status Gates",
    rule: "Automatic project template deployment upon deal closure.",
    deliverable: "Structured delivery handoff process.",
    details: "Pulls scope-of-work parameters from the CRM deal to populate standard milestones, task assignments, and delivery boards."
  },
  invoice: {
    modules: "Zoho Books, Payment Gateway API",
    rule: "Automated invoice creation triggered on milestones or contract signatures.",
    deliverable: "Centralized account billing automation.",
    details: "Drafts and sends professional billing invoices to client emails automatically, appending active online checkout links."
  },
  dashboard: {
    modules: "Zoho Analytics",
    rule: "Real-time updates mapping conversions, target pipeline, and response times.",
    deliverable: "Executive sales & operations reporting suite.",
    details: "Pulls metrics dynamically across CRM, Projects, and Books. Zero manual spreadsheet assembly required for reviews."
  }
};

function FlowIcon({
  type,
  size = "md",
}: {
  type: SystemFlowNode["icon"];
  size?: "md" | "lg";
}) {
  const common =
    size === "lg" ? "h-7 w-7 stroke-[1.75]" : "h-6 w-6 stroke-[1.75]";

  switch (type) {
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
          <path
            d="M12 3v18M8 8h5a3 3 0 1 1 0 6H8a3 3 0 1 0 0 6h7"
            stroke="currentColor"
          />
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
    case "pipeline":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" />
          <circle cx="18" cy="12" r="2" stroke="currentColor" />
          <circle cx="15" cy="18" r="2" stroke="currentColor" />
        </svg>
      );
    case "followup":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path d="M12 7v5l3 2" stroke="currentColor" />
        </svg>
      );
  }
}

function FlowConnector({
  large,
  orientation = "horizontal",
  active,
  delayMs = 0,
}: {
  large?: boolean;
  orientation?: "horizontal" | "vertical";
  active?: boolean;
  delayMs?: number;
}) {
  if (orientation === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "flow-connector relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 ease-in-out",
          active ? "text-blue-700" : "text-primary/70",
          "group-hover/flow:text-blue-700",
          large ? "py-4" : "py-3",
        )}
      >
        <span
          className={cn(
            "flow-connector-line w-px transition-colors duration-300 ease-in-out",
            active
              ? "bg-blue-600"
              : "bg-gray-300 group-hover/flow:bg-blue-500",
            large ? "h-5" : "h-4",
          )}
        />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={cn(
            "animate-flow-arrow-y",
            large ? "h-5 w-5" : "h-4 w-4",
          )}
          style={{ animationDelay: `${delayMs}ms` }}
        >
          <path
            d="M5 12h12M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.75"
          />
        </svg>
        <span
          className={cn(
            "flow-connector-line w-px transition-colors duration-300 ease-in-out",
            active ? "bg-blue-600" : "bg-gray-300 group-hover/flow:bg-blue-500",
            large ? "h-5" : "h-4",
          )}
        />
        <span
          className="pointer-events-none absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500/70 blur-[1px] animate-flow-travel-y"
          style={{ animationDelay: `${delayMs}ms` }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flow-connector relative flex shrink-0 items-center justify-center overflow-hidden transition-colors duration-300 ease-in-out",
        active ? "text-blue-700" : "text-primary/70",
        "group-hover/flow:text-blue-700",
        large ? "px-3 lg:px-5" : "px-2 lg:px-3",
      )}
    >
      <span
        className={cn(
          "flow-connector-line h-px transition-colors duration-300 ease-in-out",
          active ? "bg-blue-600" : "bg-gray-300 group-hover/flow:bg-blue-500",
          large ? "w-6 lg:w-10" : "w-5 lg:w-7",
        )}
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={cn(
          "shrink-0 animate-flow-arrow-x",
          large ? "h-5 w-5" : "h-4 w-4",
        )}
        style={{ animationDelay: `${delayMs}ms` }}
      >
        <path
          d="M5 12h12M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
      <span
        className={cn(
          "flow-connector-line h-px transition-colors duration-300 ease-in-out",
          active ? "bg-blue-600" : "bg-gray-300 group-hover/flow:bg-blue-500",
          large ? "w-6 lg:w-10" : "w-5 lg:w-7",
        )}
      />
      <span
        className="pointer-events-none absolute top-1/2 left-0 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-500/70 blur-[1px] animate-flow-travel-x"
        style={{ animationDelay: `${delayMs}ms` }}
      />
    </div>
  );
}

function FlowNode({
  node,
  index,
  highlighted,
  isSelected,
  onClick,
  onMouseEnter,
  size = "md",
}: {
  node: SystemFlowNode;
  index: number;
  highlighted?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  size?: "md" | "lg";
}) {
  const large = size === "lg";
  const step = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        "group/node flex w-full flex-col items-center text-center focus:outline-none",
        large ? "min-w-0" : "min-w-0 sm:min-w-[96px]",
      )}
    >
      <p
        className={cn(
          "font-semibold tracking-[0.16em] transition-colors duration-300 ease-in-out text-[11px]",
          isSelected || highlighted
            ? "text-primary font-bold"
            : "text-gray-400 group-hover/node:text-primary",
        )}
      >
        {step}
      </p>

      {/* Sharp Node Container (no border radius) */}
      <div
        className={cn(
          "flow-node-card mt-3 flex items-center justify-center rounded-none border text-primary",
          "transition duration-200 ease-in-out bg-white shadow-sm",
          large ? "h-[4.5rem] w-[4.5rem]" : "h-14 w-14",
          isSelected
            ? "border-primary ring-2 ring-primary/10 bg-blue-50/10"
            : highlighted
              ? "border-primary shadow-sm"
              : "border-gray-200 hover:border-primary/50 hover:bg-gray-50/50",
        )}
      >
        <FlowIcon type={node.icon} size={size} />
      </div>

      <h3
        className={cn(
          "mt-3 font-extrabold text-gray-900 transition-colors duration-300 ease-in-out leading-tight",
          "group-hover/node:text-primary text-xs",
          large ? "max-w-[7.5rem] text-sm" : "max-w-[8.5rem]",
        )}
      >
        {node.label}
      </h3>

      <p
        className={cn(
          "mt-1.5 leading-snug text-gray-500 font-semibold select-none",
          large ? "max-w-[8rem] text-xs" : "max-w-[8.5rem] text-[10px]",
        )}
      >
        {node.caption}
      </p>
    </button>
  );
}

function ProductFlow({
  nodes,
  selectedIndex,
  onSelectIndex,
  highlightId,
  size,
  autoFlow,
}: {
  nodes: SystemFlowNode[];
  selectedIndex: number;
  onSelectIndex: (idx: number) => void;
  highlightId?: string;
  size: "md" | "lg";
  autoFlow?: boolean;
}) {
  const large = size === "lg";

  if (large) {
    const rows = [nodes.slice(0, 3), nodes.slice(3, 6)];

    return (
      <div
        className="group/flow flex h-full w-full flex-col items-center justify-center"
        role="list"
        aria-label="System workflow"
      >
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="w-full">
            <div className="flex items-center justify-center">
              {row.map((node, index) => {
                const globalIndex = rowIndex * 3 + index;
                return (
                  <div
                    key={node.id}
                    role="listitem"
                    className="flex items-center"
                  >
                    <div className="px-2 sm:px-3">
                      <FlowNode
                        node={node}
                        index={globalIndex}
                        size={size}
                        isSelected={selectedIndex === globalIndex}
                        onClick={() => onSelectIndex(globalIndex)}
                        onMouseEnter={() => onSelectIndex(globalIndex)}
                        highlighted={Boolean(
                          highlightId && node.id === highlightId,
                        )}
                      />
                    </div>
                    {index < row.length - 1 ? (
                      <FlowConnector
                        large
                        orientation="horizontal"
                        active={selectedIndex >= globalIndex}
                        delayMs={globalIndex * 180}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
            {rowIndex === 0 && rows[1]?.length ? (
              <div className="flex justify-center">
                <FlowConnector
                  large
                  orientation="vertical"
                  active={selectedIndex >= 2}
                  delayMs={600}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="group/flow flex flex-col items-center justify-center md:mx-auto md:w-max md:flex-row md:items-center"
      role="list"
      aria-label="System workflow"
    >
      {nodes.map((node, index) => (
        <div
          key={node.id}
          role="listitem"
          className="flex flex-col items-center md:flex-row md:items-center"
        >
          <FlowNode
            node={node}
            index={index}
            size={size}
            isSelected={selectedIndex === index}
            onClick={() => onSelectIndex(index)}
            onMouseEnter={() => onSelectIndex(index)}
            highlighted={Boolean(highlightId && node.id === highlightId)}
          />
          {index < nodes.length - 1 ? (
            <>
              <div className="md:hidden">
                <FlowConnector
                  orientation="vertical"
                  active={selectedIndex >= index}
                  delayMs={index * 180}
                />
              </div>
              <div className="hidden md:block">
                <FlowConnector
                  orientation="horizontal"
                  active={selectedIndex >= index}
                  delayMs={index * 180}
                />
              </div>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function SystemFlow({
  title = "One System. Complete Visibility.",
  description = "From lead to revenue — everything tracked, automated, and visible.",
  nodes = defaultNodes,
  highlightId,
  className,
  showSectionChrome = true,
  tone = "default",
  spacing = "prominent",
  size = "md",
  autoFlow = true,
}: SystemFlowProps) {
  const headingId = "system-flow-heading";
  const large = size === "lg";
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto Flow sequence loop when not hovered
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoFlow || nodes.length === 0 || isHovered) return;
    const interval = window.setInterval(() => {
      setSelectedIndex((current) => (current + 1) % nodes.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [autoFlow, nodes.length, isHovered]);

  const activeNode = nodes[selectedIndex] || nodes[0];
  const activeDetails = flowDetails[activeNode.icon] ?? {
    modules: "Zoho Suite",
    rule: "Standard operating process logic.",
    deliverable: "Workflow automation module.",
    details: "Configured around specific department process guidelines."
  };

  const flow = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "w-full overflow-hidden rounded-none border border-gray-200 bg-white",
        large
          ? "px-4 py-6 shadow-md sm:px-6 sm:py-8 md:px-8 md:py-9"
          : "px-5 py-8 shadow-md md:px-8 md:py-10",
        !showSectionChrome && className,
      )}
    >
      {/* Step Sequence Board */}
      <ProductFlow
        nodes={nodes}
        selectedIndex={selectedIndex}
        onSelectIndex={setSelectedIndex}
        highlightId={highlightId}
        size={size}
        autoFlow={autoFlow}
      />

      {/* Interactive Detail Walkthrough Box (Sharp light layout) */}
      <div className="mt-10 border-t border-gray-150 pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 text-left relative">
        {/* Left colored bar selector */}
        <div className="absolute top-8 left-0 bottom-0 w-1 bg-primary hidden md:block" />
        
        {/* Step Metadata Left Column */}
        <div className="md:col-span-4 md:pl-4">
          <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 border border-blue-100 rounded-none">
            STAGE {String(selectedIndex + 1).padStart(2, "0")} DELIVERABLE
          </span>
          <h4 className="text-base font-extrabold text-gray-900 mt-2.5">
            {activeNode.label}
          </h4>
          <p className="mt-1 text-xs font-semibold text-gray-500">
            {activeDetails.deliverable}
          </p>
        </div>

        {/* Details & Config Rules Right Column */}
        <div className="md:col-span-8 flex flex-col justify-between">
          <p className="text-xs leading-relaxed text-gray-600">
            {activeDetails.details}
          </p>

          {/* Config details grid */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 border border-gray-150 rounded-none text-[10px]">
            <div>
              <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                Active Modules
              </span>
              <span className="font-bold text-gray-700">{activeDetails.modules}</span>
            </div>
            <div>
              <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                Enforced Validation Rule
              </span>
              <span className="font-bold text-primary">{activeDetails.rule}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

  if (!showSectionChrome) {
    return flow;
  }

  return (
    <Section
      id="system-flow"
      ariaLabelledby={headingId}
      className={className}
      tone={tone}
      spacing={spacing}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>
      <div className="mt-12">{flow}</div>
    </Section>
  );
}
