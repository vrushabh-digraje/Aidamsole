import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { getPublishedPlatforms } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.platformHub.title,
  description: STATIC_PAGES.platformHub.description,
  path: STATIC_PAGES.platformHub.path,
});

export default function PlatformIndexPage() {
  const items = getPublishedPlatforms();

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        
        {/* 1. 2-Column Intro Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center pb-16 border-b border-gray-100 mb-16">
          {/* Left Column: Title & Description */}
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Platform
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Zoho apps we implement
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Module-level implementation across the Zoho stack — configured around
              how your team operates.
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
              src="/brand/platform-hero.jpg"
              alt="Zoho Analytics Sales & Operations Control Dashboard Overview"
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
            Explore Supported Applications
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Select a Zoho application below to view specific custom modules, integrations, and reports we support.
          </p>
        </div>

        {/* 3. Grid of Platform Cards */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug}>
              <DirectoryCard
                href={`/platform/${item.slug}`}
                title={item.productName}
                description={item.hero.description}
                icon={<DirectoryIcon name={item.slug} />}
                ctaLabel="View platform"
                tall
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
