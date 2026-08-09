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
            active || false
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
  pathActive,
  autoActive,
  size = "md",
}: {
  node: SystemFlowNode;
  index: number;
  highlighted?: boolean;
  pathActive?: boolean;
  autoActive?: boolean;
  size?: "md" | "lg";
}) {
  const large = size === "lg";
  const step = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "group/node flex w-full flex-col items-center text-center",
        large ? "min-w-0" : "min-w-[104px] md:min-w-[112px]",
      )}
    >
      <p
        className={cn(
          "font-semibold tracking-[0.16em] transition-colors duration-300 ease-in-out",
          pathActive || autoActive || highlighted
            ? "text-blue-700"
            : "text-primary group-hover/flow:text-blue-700",
          large ? "text-xs" : "text-[11px]",
        )}
      >
        {step}
      </p>

      <div
        className={cn(
          "flow-node-card mt-3 flex items-center justify-center rounded-2xl border bg-white text-primary",
          "transition-all duration-300 ease-in-out",
          "hover:scale-105 hover:border-blue-600/50 hover:shadow-lg",
          "group-hover/node:scale-105 group-hover/node:shadow-lg",
          "group-hover/flow:border-blue-500/40 group-hover/flow:shadow-md group-hover/flow:ring-2 group-hover/flow:ring-blue-500/10",
          large ? "h-[4.5rem] w-[4.5rem]" : "h-14 w-14",
          highlighted || autoActive
            ? "scale-105 border-blue-700 shadow-lg ring-2 ring-blue-600/20 animate-flow-node"
            : pathActive
              ? "border-blue-500/50 shadow-md"
              : "border-gray-200 shadow-sm",
        )}
      >
        <FlowIcon type={node.icon} size={size} />
      </div>

      <h3
        className={cn(
          "mt-3 font-semibold text-gray-900 transition-colors duration-300 ease-in-out",
          "group-hover/node:text-blue-700",
          large ? "max-w-[7.5rem] text-base leading-snug" : "text-sm",
        )}
      >
        {node.label}
      </h3>

      <p
        className={cn(
          "mt-1 leading-snug text-gray-600",
          large ? "max-w-[8rem] text-sm" : "max-w-[8.5rem] text-xs",
        )}
      >
        {node.caption}
      </p>
    </article>
  );
}

function ProductFlow({
  nodes,
  highlightId,
  size,
  autoFlow = true,
}: {
  nodes: SystemFlowNode[];
  highlightId?: string;
  size: "md" | "lg";
  autoFlow?: boolean;
}) {
  const large = size === "lg";
  const [pathHover, setPathHover] = useState(false);
  const [autoIndex, setAutoIndex] = useState(0);

  useEffect(() => {
    if (!autoFlow || nodes.length === 0 || pathHover) return;
    const id = window.setInterval(() => {
      setAutoIndex((current) => (current + 1) % nodes.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [autoFlow, nodes.length, pathHover]);

  const sharedProps = {
    onMouseEnter: () => setPathHover(true),
    onMouseLeave: () => setPathHover(false),
  };

  if (large) {
    const rows = [nodes.slice(0, 3), nodes.slice(3, 6)];

    return (
      <div
        className="group/flow flex h-full w-full flex-col items-center justify-center"
        role="list"
        aria-label="System workflow"
        {...sharedProps}
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
                        pathActive={pathHover}
                        autoActive={autoFlow && !pathHover && autoIndex === globalIndex}
                        highlighted={Boolean(
                          highlightId && node.id === highlightId,
                        )}
                      />
                    </div>
                    {index < row.length - 1 ? (
                      <FlowConnector
                        large
                        orientation="horizontal"
                        active={
                          pathHover ||
                          (autoFlow &&
                            !pathHover &&
                            autoIndex > globalIndex)
                        }
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
                  active={pathHover || (autoFlow && !pathHover && autoIndex >= 3)}
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
      {...sharedProps}
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
            pathActive={pathHover}
            autoActive={autoFlow && !pathHover && autoIndex === index}
            highlighted={Boolean(highlightId && node.id === highlightId)}
          />
          {index < nodes.length - 1 ? (
            <>
              <div className="md:hidden">
                <FlowConnector
                  orientation="vertical"
                  active={
                    pathHover || (autoFlow && !pathHover && autoIndex > index)
                  }
                  delayMs={index * 180}
                />
              </div>
              <div className="hidden md:block">
                <FlowConnector
                  orientation="horizontal"
                  active={
                    pathHover || (autoFlow && !pathHover && autoIndex > index)
                  }
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

  const flow = (
    <div
      className={cn(
        "w-full rounded-2xl border border-gray-200 bg-gray-50 shadow-sm",
        large
          ? "border-gray-200/90 bg-white px-6 py-10 shadow-none md:px-8 md:py-12 lg:min-h-[460px] lg:px-10 lg:py-14"
          : "px-5 py-8 md:px-8 md:py-10",
        !showSectionChrome && className,
      )}
    >
      <ProductFlow
        nodes={nodes}
        highlightId={highlightId}
        size={size}
        autoFlow={autoFlow}
      />
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
