import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Faq } from "@/components/sections/Faq";
import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { getPublishedIndustries } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/constants";

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
          
          {/* 1. 2-Column Intro Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center pb-16 border-b border-gray-100 mb-16">
            {/* Left Column: Title & Description */}
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Industries
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Zoho solutions by industry
              </h1>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                Industry-specific process models — start with how your sector runs,
                then configure Zoho to match.
              </p>
              
              <div className="mt-8">
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary/95 transition duration-300 no-underline hover:no-underline rounded-none"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Showcase Image (Sharp corners to match cards) */}
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-none border border-gray-200 shadow-xl ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl bg-gray-50">
              <Image
                src="/brand/industries-hero.jpg"
                alt="Zoho Analytics Dashboard representing Industry Metrics and KPI Funnels"
                fill
                priority
                className="object-cover rounded-none"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              {/* Tech gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-transparent pointer-events-none" />
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

          {/* 3. Grid of Industry Cards */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
