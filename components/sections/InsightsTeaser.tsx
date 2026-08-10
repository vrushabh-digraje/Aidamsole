import Link from "next/link";

import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { ROUTES } from "@/lib/constants";
import { getPublishedInsights } from "@/lib/published";

type InsightsTeaserProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  limit?: number;
};

export function InsightsTeaser({
  tone = "default",
  spacing = "default",
  limit = 3,
}: InsightsTeaserProps) {
  const headingId = "insights-teaser-heading";
  const items = getPublishedInsights().slice(0, limit);

  return (
    <Section
      id="insights"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Insights
          </p>
          <h2 id={headingId} className="mt-2 text-gray-900">
            More insights, more value
          </h2>
          <p className="mt-3 text-base leading-snug text-gray-600">
            Practical notes on Zoho implementation, CRM adoption, and operating
            design.
          </p>
        </div>
        <Link
          href={ROUTES.insights}
          className="text-sm font-semibold text-primary no-underline hover:underline"
        >
          View all insights →
        </Link>
      </div>

      <ul className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.slug}>
            <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {item.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-snug text-gray-600">
                {item.description}
              </p>
              <Link
                href={`${ROUTES.insights}/${item.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-primary no-underline hover:underline"
              >
                Read insight →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
