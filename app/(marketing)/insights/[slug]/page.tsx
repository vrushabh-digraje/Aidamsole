import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTA } from "@/components/sections/CTA";
import { CTAS, ROUTES } from "@/lib/constants";
import { getInsightBySlug } from "@/lib/insights";
import {
  getPublishedInsights,
  isPublishedInsight,
} from "@/lib/published";
import { buildPageMetadata } from "@/lib/seo";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedInsights().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight || !isPublishedInsight(slug)) {
    return { title: "Insight" };
  }
  return buildPageMetadata({
    title: insight.title,
    description: insight.description,
    path: `${ROUTES.insights}/${insight.slug}`,
  });
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight || !isPublishedInsight(slug)) notFound();

  return (
    <>
      <article className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {insight.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {insight.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {insight.intro}
          </p>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">Problem</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              {insight.problem}
            </p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900">Analysis</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              {insight.analysis}
            </p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              {insight.conclusion}
            </p>
          </section>

          <p className="mt-12 text-sm">
            <Link
              href={ROUTES.insights}
              className="font-semibold text-primary no-underline hover:underline"
            >
              ← All insights
            </Link>
          </p>
        </div>
      </article>

      <CTA
        tone="dark"
        title="Apply this to your Zoho rollout"
        description="Book a free consultation — we’ll map the operating fix before configuration."
        cta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
      />
    </>
  );
}
