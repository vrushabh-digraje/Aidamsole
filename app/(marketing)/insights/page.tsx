import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/sections/CTA";
import { CTAS, ROUTES } from "@/lib/constants";
import { getPublishedInsights } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.insights.title,
  description: STATIC_PAGES.insights.description,
  path: STATIC_PAGES.insights.path,
});

export default function InsightsPage() {
  const items = getPublishedInsights();

  return (
    <>
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Insights
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Zoho implementation notes
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-snug text-gray-600">
            Practical writing on CRM adoption, operating design, and Zoho
            implementation patterns.
          </p>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <li key={item.slug}>
                <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-gray-900">
                    <Link
                      href={`${ROUTES.insights}/${item.slug}`}
                      className="no-underline hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-snug text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href={`${ROUTES.insights}/${item.slug}`}
                    className="mt-5 text-sm font-semibold text-primary no-underline hover:underline"
                  >
                    Read insight →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTA
        tone="muted"
        title="Want this applied to your team?"
        description="Book a consultation and we’ll map the pattern to your process."
        cta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
      />
    </>
  );
}
