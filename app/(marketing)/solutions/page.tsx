import type { Metadata } from "next";

import { Faq } from "@/components/sections/Faq";
import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { getPublishedSolutions } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Solutions
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Zoho operating systems by function
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-snug text-gray-600">
            Solution designs Aidamsole implements most often — process first, then
            Zoho configuration.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
