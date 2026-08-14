import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTA } from "@/components/sections/CTA";
import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { CTAS, ROUTES } from "@/lib/constants";
import { getPublishedIndustries } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.caseStudies.title,
  description: STATIC_PAGES.caseStudies.description,
  path: STATIC_PAGES.caseStudies.path,
});

export default function CaseStudiesPage() {
  const industries = getPublishedIndustries();

  return (
    <>
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          {/* 2. Grid section title */}
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Explore Our Industry Blueprints
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Select your sector to view custom CRM flows, module mappings, and go-live workflows.
            </p>
          </div>

          {/* 3. Cards Deck Grid */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <li key={item.slug}>
                <DirectoryCard
                  href={`${ROUTES.industries}/${item.slug}`}
                  title={item.name}
                  description={item.hero.description}
                  icon={<DirectoryIcon name={item.slug} />}
                  ctaLabel="View system design"
                  tall
                />
              </li>
            ))}
          </ul>

          {/* 4. Footer Prompt */}
          <p className="mt-12 text-sm text-gray-500">
            Looking for a named client story?{" "}
            <Link
              href={ROUTES.contact}
              className="font-semibold text-primary no-underline hover:underline"
            >
              Ask us for a relevant walkthrough →
            </Link>
          </p>
        </div>
      </div>

      <CTA
        tone="dark"
        title="Book a free Zoho consultation"
        description="We’ll map the system design to how your team actually operates."
        cta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
      />
    </>
  );
}
