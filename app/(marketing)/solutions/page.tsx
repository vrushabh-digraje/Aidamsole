import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Faq } from "@/components/sections/Faq";
import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { getPublishedSolutions } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.solutionsHub.title,
  description: STATIC_PAGES.solutionsHub.description,
  path: STATIC_PAGES.solutionsHub.path,
});

const faqs = [
  {
    question: "What is a Zoho “solution system”?",
    answer:
      "A designed operating path for a function — sales, operations, support, or finance — with ownership, stages, Zoho modules, and weekly review metrics. It is not a generic product bundle.",
  },
  {
    question: "Which solution should I start with?",
    answer:
      "Most mid-sized teams start with Sales System if lead leakage is the pain, or Operations / Finance if order and collections visibility is broken. A System Audit clarifies the sequence.",
  },
  {
    question: "Can solutions share the same Zoho apps?",
    answer:
      "Yes. CRM, Books, Desk, and Analytics often appear across solutions. The difference is the process design each solution enforces.",
  },
] as const;

export default function SolutionsIndexPage() {
  const items = getPublishedSolutions();

  return (
    <>
      <FaqJsonLd items={faqs} />

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          
          {/* 1. 2-Column Intro Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center pb-16 border-b border-gray-100 mb-16">
            {/* Left Column: Title & Description */}
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Solutions
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Zoho operating systems by function
              </h1>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                Solution designs Aidamsole implements most often — process first, then
                Zoho configuration.
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
                src="/brand/solutions-hero.jpg"
                alt="Corporate Functional Solutions Dashboard (Sales, Projects, Invoices, Support)"
                fill
                priority
                className="object-cover"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              {/* Tech gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* 2. Grid section title */}
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Explore Our Functional Blueprints
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Select a system to view process requirements, app architecture, and implementation milestones.
            </p>
          </div>

          {/* 3. Cards Deck Grid */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.slug}>
                <DirectoryCard
                  href={`/solutions/${item.slug}`}
                  title={item.name}
                  description={item.hero.description}
                  icon={<DirectoryIcon name={item.slug} />}
                  ctaLabel="View solution"
                  tall
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Faq
        tone="muted"
        spacing="default"
        title="Solution questions"
        description="How functional systems relate to Zoho apps."
        items={[...faqs]}
      />
    </>
  );
}
