import Link from "next/link";

import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
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

function ModuleCard({ item }: { item: ModuleGridItem }) {
  return (
    <Card
      as="li"
      interactive
      className="flex h-full flex-col items-start p-6"
    >
      <Link
        href={zohoAppHref(item.name)}
        className="flex h-full w-full flex-col items-start no-underline hover:no-underline"
      >
        <div className="flex w-full items-start justify-between gap-3">
          <ZohoAppIcon name={item.name} size="md" />
          <span className="rounded-md bg-primary-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
            Zoho
          </span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-primary">
          Zoho {item.name}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-gray-900">
          {item.name}
        </h3>
        <p className="mt-3 text-sm leading-snug text-gray-600">{item.role}</p>
        <span className="mt-4 text-sm font-semibold text-primary">
          View app →
        </span>
      </Link>
    </Card>
  );
}

export function ModuleGrid({
  title,
  description,
  items,
  tone = "default",
  spacing = "compact",
  grouped = true,
}: ModuleGridProps) {
  const headingId = "module-grid-heading";

  const groups = GROUP_ORDER.map((group) => ({
    group,
    meta: GROUP_META[group],
    items: items.filter(
      (item) => resolveGroup(item.name, item.group) === group,
    ),
  })).filter((entry) => entry.items.length > 0);

  return (
    <Section
      id="modules"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Zoho platform
        </p>
        <h2 id={headingId} className="mt-2 text-gray-900">
          {title}
        </h2>
        <p className="mt-3 text-base leading-snug text-gray-600">{description}</p>
      </div>

      {grouped ? (
        <div className="mt-10 space-y-10">
          {groups.map(({ group, meta, items: groupItems }) => (
            <div key={group}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Ecosystem
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
                    {meta.label}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{meta.blurb}</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
                  {groupItems.length}{" "}
                  {groupItems.length === 1 ? "module" : "modules"}
                </span>
              </div>

              <ul className={cn("grid gap-6", "md:grid-cols-2 lg:grid-cols-3")}>
                {groupItems.map((item) => (
                  <ModuleCard key={item.name} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ModuleCard key={item.name} item={item} />
          ))}
        </ul>
      )}
    </Section>
  );
}
