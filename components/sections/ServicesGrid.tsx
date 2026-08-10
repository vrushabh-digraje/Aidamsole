import type { ReactNode } from "react";

import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { SectionIcons } from "@/components/ui/SectionIcons";

export type ServiceItem = {
  title: string;
  description: string;
  icon?: keyof typeof SectionIcons;
};

type ServicesGridProps = {
  title?: string;
  description?: string;
  items: ServiceItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const defaultIcons: (keyof typeof SectionIcons)[] = [
  "consultation",
  "implementation",
  "training",
  "support",
];

export function ServicesGrid({
  title = "Zoho consulting & implementation services",
  description = "End-to-end support — from discovery to go-live and ongoing help.",
  items,
  tone = "default",
  spacing = "default",
}: ServicesGridProps) {
  const headingId = "services-heading";

  return (
    <Section
      id="services"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Our services
        </p>
        <h2 id={headingId} className="mt-2 text-gray-900">
          {title}
        </h2>
        <p className="mt-3 text-base leading-snug text-gray-600">{description}</p>
      </div>

      <ul
        className={
          items.length >= 5
            ? "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            : "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        }
      >
        {items.map((item, index) => {
          const iconKey = item.icon ?? defaultIcons[index] ?? "consultation";
          const Icon = SectionIcons[iconKey] as (props: {
            className?: string;
          }) => ReactNode;

          return (
            <li
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-primary">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-snug text-gray-600">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
