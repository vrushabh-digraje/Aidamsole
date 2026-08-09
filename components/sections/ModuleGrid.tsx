import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
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
    ["projects", "creator", "desk", "cliq", "operations", "people"].includes(key)
  ) {
    return "Operations";
  }
  if (["analytics", "reports", "dashboard"].includes(key)) {
    return "Intelligence";
  }
  return "Operations";
}

function ModuleIcon({ name }: { name: string }) {
  const common = "h-5 w-5 stroke-[1.75] text-primary";
  const key = name.trim().toLowerCase();

  switch (key) {
    case "crm":
    case "bigin":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
          <path d="M3 10h18M8 4v16" stroke="currentColor" />
        </svg>
      );
    case "books":
    case "finance":
    case "expense":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"
            stroke="currentColor"
          />
          <path d="M8 10h5M8 14h3" stroke="currentColor" />
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
    case "analytics":
    case "reports":
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 19V5M4 19h16" stroke="currentColor" />
          <path d="M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" />
        </svg>
      );
    case "creator":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5L12 3z"
            stroke="currentColor"
          />
          <path d="M18 15l.9 2.6L21 18l-2.1.6L18 21l-.9-2.4L15 18l2.1-.4L18 15z" stroke="currentColor" />
        </svg>
      );
    case "salesiq":
    case "campaigns":
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
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
          <path d="M8 12h8M12 8v8" stroke="currentColor" />
        </svg>
      );
  }
}

function ModuleCard({ item }: { item: ModuleGridItem }) {
  return (
    <Card
      as="li"
      interactive
      className="flex h-full flex-col items-start p-6"
    >
      <div className="flex w-full items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
          <ModuleIcon name={item.name} />
        </span>
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-600">
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
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
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

              <ul
                className={cn(
                  "grid gap-6",
                  groupItems.length === 1
                    ? "md:grid-cols-2 lg:grid-cols-3"
                    : "md:grid-cols-2 lg:grid-cols-3",
                )}
              >
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
