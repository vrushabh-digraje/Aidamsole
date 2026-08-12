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
          
          {/* 1. 2-Column Intro Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center pb-16 border-b border-gray-100 mb-16">
            {/* Left Column: Title & Description */}
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Case studies
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Industry system designs
              </h1>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                Process-first Zoho models by industry. Named client metrics will be
                published here as they are cleared for sharing — until then, explore
                the system designs we implement.
              </p>
              
              <div className="mt-8">
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center justify-center rounded-none bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary/95 transition duration-300 no-underline hover:no-underline"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Showcase Image */}
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-none border border-gray-200 shadow-2xl ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl">
              <Image
                src="/brand/case-studies-hero.jpg"
                alt="Global Performance & Success Analytics Dashboard"
                fill
                priority
                className="object-cover"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              {/* Subtle tech gradient overlay to match our styling stack */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

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
