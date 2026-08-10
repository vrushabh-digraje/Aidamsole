"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { SectionIcons } from "@/components/ui/SectionIcons";
import { ROUTES } from "@/lib/constants";
import { getPublishedIndustries } from "@/lib/published";
import { cn } from "@/lib/utils";

type CaseStudyTeaserProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const industryVisuals: Record<
  string,
  { image?: string; imageAlt?: string; accent: string; module: string }
> = {
  "retail-distribution": {
    accent: "from-amber-700/80 via-amber-900/30",
    module: "CRM + Inventory + Books",
  },
  manufacturing: {
    accent: "from-emerald-700/80 via-emerald-900/30",
    module: "CRM + Projects + Books",
  },
  "real-estate": {
    image: "/brand/case-study-real-estate.jpg",
    imageAlt: "Zoho CRM pipeline dashboard for real estate operations",
    accent: "from-sky-700/70 via-sky-900/20",
    module: "Zoho CRM",
  },
};

export function CaseStudyTeaser({
  tone = "default",
  spacing = "default",
}: CaseStudyTeaserProps) {
  const headingId = "case-study-teaser-heading";
  const tablistId = useId();
  const studies = getPublishedIndustries();
  const [active, setActive] = useState(0);
  const study = studies[active] ?? studies[0];

  if (!study) return null;

  const visual = industryVisuals[study.slug] ?? {
    accent: "from-primary/80 via-primary/30",
    module: "Zoho CRM",
  };

  const go = (next: number) => {
    const length = studies.length;
    setActive(((next % length) + length) % length);
  };

  return (
    <Section
      id="case-studies"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Industry systems
          </p>
          <h2 id={headingId} className="mt-2 text-gray-900">
            How we structure Zoho by industry
          </h2>
          <p className="mt-3 text-base leading-snug text-gray-600">
            Published system designs — process first, then Zoho configuration.
            Named client results are shared only with permission.
          </p>
        </div>
        <Link
          href={ROUTES.caseStudies}
          className="text-sm font-semibold text-primary no-underline hover:underline"
        >
          View all case studies →
        </Link>
      </div>

      {studies.length > 1 ? (
        <div
          role="tablist"
          aria-label="Industry system designs"
          id={tablistId}
          className="mb-5 flex gap-2 overflow-x-auto pb-1"
        >
          {studies.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`case-panel-${item.slug}`}
                id={`case-tab-${item.slug}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={cn(
                  "shrink-0 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
                  selected
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:text-primary",
                )}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        role="tabpanel"
        id={`case-panel-${study.slug}`}
        aria-labelledby={`case-tab-${study.slug}`}
        className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[240px] overflow-hidden bg-primary-muted lg:min-h-full">
            {visual.image ? (
              <Image
                src={visual.image}
                alt={visual.imageAlt ?? study.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-md">
                  <DirectoryIcon name={study.slug} className="h-8 w-8" />
                </span>
                <p className="text-lg font-semibold text-primary">{study.name}</p>
                <p className="max-w-xs text-sm text-gray-600">{visual.module}</p>
              </div>
            )}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t to-transparent",
                visual.accent,
              )}
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-primary shadow-sm">
              {study.name} · {visual.module}
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              {study.hero.headline}
            </h3>
            <p className="mt-4 text-base leading-snug text-gray-600">
              {study.hero.description}
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              {study.problems.slice(0, 3).map((row) => (
                <div key={row.title}>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <SectionIcons.check className="h-3.5 w-3.5 text-primary" />
                    Focus
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-gray-700">
                    {row.title}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`${ROUTES.industries}/${study.slug}`}>
                View {study.name} system
              </Button>
              <Link
                href={ROUTES.contact}
                className="text-sm font-semibold text-primary no-underline hover:underline"
              >
                Book a free consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {studies.length > 1 ? (
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-500" aria-live="polite">
            {active + 1} / {studies.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous industry system"
              onClick={() => go(active - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors hover:border-primary hover:text-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next industry system"
              onClick={() => go(active + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors hover:border-primary hover:text-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
