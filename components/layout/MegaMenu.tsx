import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { MegaMenuPanel, NavItem } from "@/lib/navigation";
import { megaMenu } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  items?: MegaMenuPanel[];
  className?: string;
};

const iconThemePresets: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    activeBg: string;
    image?: string;
    gradient?: string;
    opacity?: string;
  }
> = {
  // Solutions
  "sales-system": {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
    activeBg: "group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
    image: "/brand/solution-sales.jpg",
    gradient: "from-amber-950/90 via-amber-950/70 to-slate-950/30"
  },
  "operations-system": {
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-600",
    activeBg: "group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500",
    image: "/brand/solution-operations.jpg",
    gradient: "from-sky-950/90 via-sky-950/70 to-slate-950/30"
  },
  "support-system": {
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-600",
    activeBg: "group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
    image: "/brand/solution-support.jpg",
    gradient: "from-rose-950/90 via-rose-950/70 to-slate-950/30"
  },
  "finance-operations": {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-650",
    activeBg: "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
    image: "/brand/solution-finance.jpg",
    gradient: "from-emerald-950/90 via-emerald-950/70 to-slate-950/30"
  },
  
  // Platform
  "crm": {
    bg: "bg-[#E42527]/5",
    border: "border-[#E42527]/20",
    text: "text-[#E42527]",
    activeBg: "group-hover:bg-[#E42527] group-hover:text-white group-hover:border-[#E42527]",
    image: "/brand/solution-sales.jpg",
    gradient: "from-red-950/90 via-red-950/70 to-slate-950/30"
  },
  "books": {
    bg: "bg-emerald-50",
    border: "border-emerald-150",
    text: "text-emerald-650",
    activeBg: "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
    image: "/brand/solution-finance.jpg",
    gradient: "from-emerald-950/90 via-emerald-950/70 to-slate-950/30"
  },
  "inventory": {
    bg: "bg-amber-50",
    border: "border-amber-150",
    text: "text-amber-650",
    activeBg: "group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
    image: "/brand/solution-operations.jpg",
    gradient: "from-amber-950/90 via-amber-950/70 to-slate-950/30"
  },
  "projects": {
    bg: "bg-blue-50",
    border: "border-blue-150",
    text: "text-blue-650",
    activeBg: "group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
    image: "/brand/platform-projects.jpg",
    gradient: "from-blue-950/90 via-blue-950/70 to-slate-950/30"
  },
  "people": {
    bg: "bg-yellow-50",
    border: "border-yellow-150",
    text: "text-yellow-650",
    activeBg: "group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500",
    image: "/brand/platform-people.jpg",
    gradient: "from-slate-950/95 via-slate-950/90 to-yellow-950/40",
    opacity: "group-hover:opacity-20" // Reduce opacity for the light-themed Zoho People mockup
  },
  "desk": {
    bg: "bg-rose-50",
    border: "border-rose-150",
    text: "text-rose-650",
    activeBg: "group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
    image: "/brand/solution-support.jpg",
    gradient: "from-rose-950/90 via-rose-950/70 to-slate-950/30"
  },
  "analytics": {
    bg: "bg-cyan-50",
    border: "border-cyan-150",
    text: "text-cyan-650",
    activeBg: "group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500",
    image: "/brand/platform-analytics.jpg",
    gradient: "from-cyan-950/90 via-cyan-950/70 to-slate-950/30"
  },
  "creator": {
    bg: "bg-orange-50",
    border: "border-orange-150",
    text: "text-orange-650",
    activeBg: "group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500",
    image: "/brand/platform-creator.jpg",
    gradient: "from-orange-950/90 via-orange-950/70 to-slate-950/30"
  },
  "campaigns": {
    bg: "bg-purple-50",
    border: "border-purple-150",
    text: "text-purple-650",
    activeBg: "group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500",
    image: "/brand/platform-campaigns.jpg",
    gradient: "from-purple-950/90 via-purple-950/70 to-slate-950/30"
  },

  // Industries
  "retail-distribution": {
    bg: "bg-amber-50",
    border: "border-amber-150",
    text: "text-amber-600",
    activeBg: "group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
    image: "/brand/case-study-retail.jpg",
    gradient: "from-amber-950/90 via-amber-950/70 to-slate-950/30"
  },
  "real-estate": {
    bg: "bg-sky-50",
    border: "border-sky-150",
    text: "text-sky-600",
    activeBg: "group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500",
    image: "/brand/case-study-real-estate.jpg",
    gradient: "from-sky-950/90 via-sky-950/70 to-slate-950/30"
  },
  "manufacturing": {
    bg: "bg-emerald-50",
    border: "border-emerald-150",
    text: "text-emerald-650",
    activeBg: "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
    image: "/brand/case-study-manufacturing.jpg",
    gradient: "from-emerald-950/90 via-emerald-950/70 to-slate-950/30"
  },
  "healthcare": {
    bg: "bg-rose-50",
    border: "border-rose-150",
    text: "text-rose-600",
    activeBg: "group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
    image: "/brand/case-study-healthcare.jpg",
    gradient: "from-rose-950/90 via-rose-950/70 to-slate-950/30"
  },
  "education": {
    bg: "bg-indigo-50",
    border: "border-indigo-150",
    text: "text-indigo-600",
    activeBg: "group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500",
    image: "/brand/case-study-education.jpg",
    gradient: "from-indigo-950/90 via-indigo-950/70 to-slate-950/30"
  },
  "service": {
    bg: "bg-teal-50",
    border: "border-teal-150",
    text: "text-teal-650",
    activeBg: "group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500",
    image: "/brand/case-study-service.jpg",
    gradient: "from-teal-950/90 via-teal-950/70 to-slate-950/30"
  },
};

function MenuIcon({ name }: { name?: string }) {
  const iconKey = name?.trim().toLowerCase() ?? "default";
  const theme = iconThemePresets[iconKey] ?? {
    bg: "bg-gray-50",
    border: "border-gray-200",
    text: "text-blue-600",
    activeBg: "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
  };

  const letters = iconKey === "retail-distribution" 
    ? "RD" 
    : iconKey === "real-estate" 
      ? "RE" 
      : iconKey.slice(0, 2);

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-[9px] font-extrabold uppercase tracking-wider transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
        theme.bg,
        theme.border,
        theme.text,
        theme.activeBg
      )}
    >
      {letters}
    </span>
  );
}

function PanelShell({
  children,
  className,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  labelledBy: string;
}) {
  return (
    <div
      role="region"
      aria-labelledby={labelledBy}
      className={cn(
        "pointer-events-none invisible absolute left-1/2 top-full z-45 w-[min(100vw-2rem,56rem)] -translate-x-1/2 pt-2 opacity-0",
        "transition-all duration-300 ease-in-out delay-150 translate-y-2 scale-98",
        "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:delay-100 group-hover:translate-y-0 group-hover:scale-100",
        "group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:delay-100 group-focus-within:translate-y-0 group-focus-within:scale-100",
        className,
      )}
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl ring-1 ring-black/5">
        {children}
      </div>
    </div>
  );
}

function PanelHeader({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-gray-100 pb-4">
      <div className="max-w-md">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
          {title}
        </p>
        <p className="mt-1 text-xs text-gray-500 font-semibold">{description}</p>
      </div>
      <Link
        href={href}
        className="shrink-0 text-xs font-bold text-gray-500 no-underline transition duration-300 ease-in-out hover:text-blue-600 hover:underline"
      >
        View all
      </Link>
    </div>
  );
}

function SolutionsPanel({
  items,
  labelledBy,
  href,
}: {
  items: NavItem[];
  labelledBy: string;
  href: string;
}) {
  return (
    <PanelShell labelledBy={labelledBy} className="max-w-4xl">
      <PanelHeader
        title="Solutions"
        description="Systems for sales, delivery, finance, and leadership review."
        href={href}
      />
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {items.map((item) => {
          let cardStyle = "border-gray-200 bg-white hover:border-blue-300 hover:shadow-blue-500/5";
          let titleColor = "group-hover:text-blue-600";
          let hoverBorder = "hover:border-blue-400";
          
          const theme = iconThemePresets[item.icon ?? ""] ?? {
            bg: "bg-gray-50",
            border: "border-gray-200",
            text: "text-blue-600",
            activeBg: "group-hover:bg-blue-600 group-hover:text-white"
          };

          if (item.icon === "sales-system") {
            cardStyle = "border-amber-200 bg-amber-50/20";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-amber-400";
          } else if (item.icon === "operations-system") {
            cardStyle = "border-sky-200 bg-sky-50/20";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-sky-400";
          } else if (item.icon === "support-system") {
            cardStyle = "border-rose-200 bg-rose-50/20";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-rose-400";
          } else if (item.icon === "finance-operations") {
            cardStyle = "border-emerald-200 bg-emerald-50/20";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-emerald-400";
          }

          return (
            <li key={item.href} className="h-full">
              <Link
                href={item.href}
                className={cn(
                  "group block rounded-2xl border p-4 h-full no-underline transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl relative overflow-hidden bg-slate-950",
                  cardStyle,
                  hoverBorder
                )}
              >
                {/* Background solution image overlay */}
                {theme.image && (
                  <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-35">
                    <Image
                      src={theme.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      sizes="250px"
                    />
                    <div className={cn("absolute inset-0 bg-gradient-to-tr mix-blend-multiply opacity-95", theme.gradient)} />
                  </div>
                )}

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MenuIcon name={item.icon} />
                        <span className={cn("block text-xs font-bold text-gray-900 transition-colors duration-300", titleColor)}>
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-extrabold text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">
                        →
                      </span>
                    </div>
                    {item.description ? (
                      <p className="mt-2.5 text-[11px] leading-relaxed text-gray-500 font-medium transition-colors duration-300 group-hover:text-gray-355">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </PanelShell>
  );
}

function IndustriesPanel({
  items,
  labelledBy,
  href,
}: {
  items: NavItem[];
  labelledBy: string;
  href: string;
}) {
  return (
    <PanelShell labelledBy={labelledBy} className="max-w-4xl">
      <PanelHeader 
        title="Industries" 
        description="Industry process models across India and the UAE." 
        href={href} 
      />
      <ul className="mt-4 grid grid-cols-3 gap-4">
        {items.map((item) => {
          const theme = iconThemePresets[item.icon ?? ""] ?? {
            border: "border-gray-200",
            text: "text-blue-600",
            image: "/brand/hero-pattern.jpg",
            gradient: "from-slate-900 via-slate-900/60 to-transparent"
          };

          return (
            <li key={item.href} className="h-full">
              <Link
                href={item.href}
                className={cn(
                  "group block rounded-2xl border p-4 h-full no-underline transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl relative overflow-hidden bg-slate-950",
                  theme.border.replace("border-", "hover:border-")
                )}
              >
                {/* Background industry image overlay */}
                {theme.image && (
                  <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30">
                    <Image
                      src={theme.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      sizes="250px"
                    />
                    <div className={cn("absolute inset-0 bg-gradient-to-tr mix-blend-multiply opacity-90", theme.gradient)} />
                  </div>
                )}

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <MenuIcon name={item.icon} />
                        <span className="block text-[11px] font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-extrabold text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">
                        →
                      </span>
                    </div>
                    {item.description ? (
                      <p className="mt-3 text-[10px] leading-relaxed text-gray-500 font-medium transition-colors duration-300 group-hover:text-gray-300">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </PanelShell>
  );
}

function PlatformPanel({
  items,
  labelledBy,
  href,
}: {
  items: NavItem[];
  labelledBy: string;
  href: string;
}) {
  return (
    <PanelShell labelledBy={labelledBy} className="max-w-4xl">
      <PanelHeader
        title="Zoho Platform"
        description="Module-level implementation across the Zoho stack."
        href={href}
      />
      <ul className="mt-4 grid grid-cols-3 gap-4">
        {items.map((item) => {
          let cardStyle = "border-gray-200 bg-white hover:shadow-gray-500/5";
          let titleColor = "group-hover:text-blue-600";
          let hoverBorder = "hover:border-blue-400";
          
          const theme = iconThemePresets[item.icon ?? ""] ?? {
            bg: "bg-gray-50",
            border: "border-gray-200",
            text: "text-blue-600",
            activeBg: "group-hover:bg-blue-600 group-hover:text-white",
            opacity: "group-hover:opacity-35"
          };

          const appKey = item.icon?.trim().toLowerCase() ?? "";
          if (appKey === "crm") {
            cardStyle = "border-red-200 bg-red-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-[#E42527]";
          } else if (appKey === "books") {
            cardStyle = "border-emerald-200 bg-emerald-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-emerald-500";
          } else if (appKey === "inventory") {
            cardStyle = "border-amber-200 bg-amber-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-amber-500";
          } else if (appKey === "projects") {
            cardStyle = "border-blue-200 bg-blue-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-blue-500";
          } else if (appKey === "people") {
            cardStyle = "border-yellow-250 bg-yellow-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-yellow-500";
          } else if (appKey === "desk") {
            cardStyle = "border-rose-200 bg-rose-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-rose-500";
          } else if (appKey === "analytics") {
            cardStyle = "border-cyan-200 bg-cyan-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-cyan-500";
          } else if (appKey === "creator") {
            cardStyle = "border-orange-200 bg-orange-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-orange-500";
          } else if (appKey === "campaigns") {
            cardStyle = "border-purple-200 bg-purple-50/10";
            titleColor = "group-hover:text-white";
            hoverBorder = "hover:border-purple-500";
          }

          const imgOpacity = theme.opacity ?? "group-hover:opacity-35";

          return (
            <li key={item.href} className="h-full">
              <Link
                href={item.href}
                className={cn(
                  "group block rounded-2xl border p-4 h-full no-underline transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl relative overflow-hidden bg-slate-950",
                  cardStyle,
                  hoverBorder
                )}
              >
                {/* Background platform image overlay */}
                {theme.image && (
                  <div className={cn("absolute inset-0 z-0 opacity-0 transition-opacity duration-500", imgOpacity)}>
                    <Image
                      src={theme.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      sizes="250px"
                    />
                    <div className={cn("absolute inset-0 bg-gradient-to-tr mix-blend-multiply opacity-95", theme.gradient)} />
                  </div>
                )}

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <MenuIcon name={item.icon} />
                        <span className={cn("block text-xs font-bold text-gray-900 transition-colors duration-300", titleColor)}>
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-extrabold text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">
                        →
                      </span>
                    </div>
                    {item.description ? (
                      <p className="mt-2.5 text-[10px] leading-relaxed text-gray-500 font-medium transition-colors duration-300 group-hover:text-gray-350">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </PanelShell>
  );
}

function GridPanel({
  title,
  description,
  items,
  labelledBy,
  href,
  columns = 4,
}: {
  title: string;
  description: string;
  items: NavItem[];
  labelledBy: string;
  href: string;
  columns?: 3 | 4;
}) {
  return (
    <PanelShell
      labelledBy={labelledBy}
      className={columns === 4 ? "max-w-3xl" : "max-w-2xl"}
    >
      <PanelHeader title={title} description={description} href={href} />
      <ul
        className={cn(
          "mt-4 grid gap-2",
          columns === 4
            ? "grid-cols-2 sm:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3",
        )}
      >
        {items.map((item) => {
          const theme = iconThemePresets[item.icon ?? ""] ?? { border: "hover:border-blue-200" };
          
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group grid h-full grid-cols-[auto_1fr] items-center gap-3 rounded-xl border border-gray-150 px-3 py-3 no-underline transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-gray-50/50 hover:no-underline hover:shadow-md",
                  theme.border.replace("border-", "hover:border-")
                )}
              >
                <MenuIcon name={item.icon} />
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-350">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-0.5 block text-[10px] text-gray-400 font-medium">
                      {item.description}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </PanelShell>
  );
}

function MegaMenuItem({ panel }: { panel: MegaMenuPanel }) {
  const triggerId = `megamenu-${panel.label.toLowerCase().replace(/\s+/g, "-")}`;
  const hasPanel = panel.type !== "link" && Boolean(panel.items?.length);

  return (
    <div className="group relative flex h-11 items-center">
      <Link
        id={triggerId}
        href={panel.href}
        className="inline-flex h-full items-center border-b-2 border-transparent px-2.5 text-xs font-semibold text-gray-600 no-underline transition duration-200 ease-out hover:bg-gray-50/50 hover:text-gray-900 hover:no-underline group-hover:border-blue-600 group-hover:text-gray-900 group-focus-within:border-blue-600 group-focus-within:text-gray-900"
      >
        {panel.label}
      </Link>

      {hasPanel && panel.type === "solutions" ? (
        <SolutionsPanel
          items={panel.items ?? []}
          labelledBy={triggerId}
          href={panel.href}
        />
      ) : null}

      {hasPanel && panel.type === "industries" ? (
        <IndustriesPanel
          items={panel.items ?? []}
          labelledBy={triggerId}
          href={panel.href}
        />
      ) : null}

      {hasPanel && panel.type === "platform" ? (
        <PlatformPanel
          items={panel.items ?? []}
          labelledBy={triggerId}
          href={panel.href}
        />
      ) : null}
    </div>
  );
}

export function MegaMenu({ items = megaMenu, className }: MegaMenuProps) {
  const primaryItems = items.filter((item) =>
    ["solutions", "industries", "platform", "link"].includes(item.type),
  );

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "hidden items-center justify-end gap-0.5 xl:flex",
        className,
      )}
    >
      {primaryItems.map((panel) => (
        <MegaMenuItem key={panel.label} panel={panel} />
      ))}
    </nav>
  );
}
