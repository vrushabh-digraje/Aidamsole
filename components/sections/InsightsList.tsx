import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { insights } from "@/lib/insights";

type InsightsListProps = {
  title?: string;
  description?: string;
  limit?: number;
  showHeader?: boolean;
};

export function InsightsList({
  title = "Insights",
  description = "Notes on CRM process failures, operating gaps, system design, and Zoho implementation patterns.",
  limit,
  showHeader = true,
}: InsightsListProps) {
  const headingId = "insights-heading";
  const items = typeof limit === "number" ? insights.slice(0, limit) : insights;

  return (
    <Section ariaLabelledby={showHeader ? headingId : undefined}>
      {showHeader ? (
        <div className="section-copy">
          <h2 id={headingId}>{title}</h2>
          {description ? <p className="section-lede body-clamp">{description}</p> : null}
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((insight) => (
          <article
            key={insight.slug}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-primary">{insight.category}</p>
            <h3 className="mt-3">
              <Link
                href={`/insights/${insight.slug}`}
                className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {insight.title}
              </Link>
            </h3>
            <p className="mt-3">{insight.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
