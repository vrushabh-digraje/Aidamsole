import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { SectionIcons } from "@/components/ui/SectionIcons";

type WhyZohoProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const benefits = [
  {
    title: "Seamless & automated workflows",
    description:
      "Automate lead capture to invoicing — less manual work, fewer errors, faster handoffs.",
    icon: "connected" as const,
  },
  {
    title: "Customer & lead management",
    description:
      "Track every enquiry in Zoho CRM with clear ownership, stages, and follow-up discipline.",
    icon: "people" as const,
  },
  {
    title: "Employee & HR control",
    description:
      "Zoho People brings leave, attendance, and team admin into one place your managers can trust.",
    icon: "building" as const,
  },
  {
    title: "Inventory & operations",
    description:
      "Connect stock, orders, and fulfillment so operations sees the same truth as sales.",
    icon: "process" as const,
  },
  {
    title: "Actionable analytics",
    description:
      "Leadership dashboards from live Zoho data — weekly reviews without spreadsheet rebuilds.",
    icon: "market" as const,
  },
  {
    title: "Time & cost efficiency",
    description:
      "One Zoho stack instead of scattered tools — lower license sprawl and clearer ROI.",
    icon: "check" as const,
  },
];

/**
 * Competitor-style “Why Zoho” benefit grid.
 */
export function WhyZoho({
  tone = "muted",
  spacing = "default",
}: WhyZohoProps) {
  const headingId = "why-zoho-heading";

  return (
    <Section
      id="why-zoho"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Why Zoho
        </p>
        <h2 id={headingId} className="mt-2 text-gray-900">
          Why businesses choose Zoho
        </h2>
        <p className="mt-3 text-base leading-snug text-gray-600">
          A connected suite for sales, finance, HR, and operations — configured
          around how your team already works.
        </p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => {
          const Icon = SectionIcons[item.icon];
          return (
            <li
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-snug text-gray-600">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
