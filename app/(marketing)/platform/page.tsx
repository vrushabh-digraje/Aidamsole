import type { Metadata } from "next";

import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { getPublishedPlatforms } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

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
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Platform
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Zoho apps we implement
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-snug text-gray-600">
          Module-level implementation across the Zoho stack — configured around
          how your team operates.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
