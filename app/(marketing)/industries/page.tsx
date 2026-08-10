import type { Metadata } from "next";

import { Faq } from "@/components/sections/Faq";
import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { getPublishedIndustries } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.industriesHub.title,
  description: STATIC_PAGES.industriesHub.description,
  path: STATIC_PAGES.industriesHub.path,
});

const faqs = [
  {
    question: "Which industries do you focus on?",
    answer:
      "Published models cover retail & distribution, manufacturing, real estate, healthcare, education, and service businesses — with process designs tailored to how each sector actually runs.",
  },
  {
    question: "Do you only sell Zoho licenses by industry?",
    answer:
      "No. Industry pages describe operating failures and system designs. Zoho apps are configured after the process is clear — not as a product checklist.",
  },
  {
    question: "What if my industry is not listed?",
    answer:
      "Book a System Audit. If your operating pattern is close to a published model, we adapt it; if not, we map your flow before recommending modules.",
  },
] as const;

export default function IndustriesIndexPage() {
  const items = getPublishedIndustries();

  return (
    <>
      <FaqJsonLd items={faqs} />

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Industries
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Zoho solutions by industry
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-snug text-gray-600">
            Industry-specific process models — start with how your sector runs,
            then configure Zoho to match.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.slug}>
                <DirectoryCard
                  href={`/industries/${item.slug}`}
                  title={item.name}
                  description={item.hero.description}
                  icon={<DirectoryIcon name={item.slug} />}
                  ctaLabel="View industry"
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
        title="Industry questions"
        description="How to choose a sector model before configuration."
        items={[...faqs]}
      />
    </>
  );
}
