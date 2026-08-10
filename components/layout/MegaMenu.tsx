import Link from "next/link";
import type { ReactNode } from "react";

import type { MegaMenuPanel, NavItem } from "@/lib/navigation";
import { megaMenu } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  items?: MegaMenuPanel[];
  className?: string;
};

function MenuIcon({ name }: { name?: string }) {
  const icon = name ?? "default";

  return (
    <span
      aria-hidden="true"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[10px] font-semibold uppercase tracking-wide text-primary"
    >
      {icon.slice(0, 2)}
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
        "pointer-events-none invisible absolute left-1/2 top-full z-40 w-[min(100vw-2rem,48rem)] -translate-x-1/2 pt-2 opacity-0",
        "transition-[opacity,visibility] duration-150 ease-out delay-200",
        "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:delay-150",
        "group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:delay-150",
        className,
      )}
    >
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
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
    <div className="flex items-end justify-between gap-6 border-b border-gray-200 pb-4">
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
          {title}
        </p>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      <Link
        href={href}
        className="shrink-0 text-sm font-medium text-gray-900 no-underline transition duration-300 ease-in-out hover:text-primary hover:underline"
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
    <PanelShell labelledBy={labelledBy} className="max-w-xl">
      <PanelHeader
        title="Solutions"
        description="Systems for sales, delivery, finance, and leadership review."
        href={href}
      />
      <ul className="mt-4 grid gap-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-xl px-3 py-2.5 no-underline transition duration-300 ease-in-out hover:bg-gray-50 hover:no-underline hover:shadow-sm"
            >
              <MenuIcon name={item.icon} />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-gray-900">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="mt-0.5 block text-sm leading-snug text-gray-600">
                    {item.description}
                  </span>
                ) : null}
              </span>
            </Link>
          </li>
        ))}
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
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="grid h-full grid-cols-[auto_1fr] items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 no-underline transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-primary hover:bg-gray-50 hover:no-underline hover:shadow-md"
            >
              <MenuIcon name={item.icon} />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-gray-900">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="mt-0.5 block text-xs text-gray-600">
                    {item.description}
                  </span>
                ) : null}
              </span>
            </Link>
          </li>
        ))}
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
        className="inline-flex h-full items-center rounded-md border-b-2 border-transparent px-2 text-[13px] font-medium text-gray-600 no-underline transition duration-200 ease-out hover:bg-gray-50 hover:text-gray-900 hover:no-underline group-hover:border-primary group-hover:text-gray-900 group-focus-within:border-primary group-focus-within:text-gray-900"
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
        <GridPanel
          title="Industries"
          description="Industry process models across India and the UAE."
          items={panel.items ?? []}
          labelledBy={triggerId}
          href={panel.href}
          columns={4}
        />
      ) : null}

      {hasPanel && panel.type === "platform" ? (
        <GridPanel
          title="Zoho Platform"
          description="Module-level implementation across the Zoho stack."
          items={panel.items ?? []}
          labelledBy={triggerId}
          href={panel.href}
          columns={4}
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
