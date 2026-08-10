import type { MetadataRoute } from "next";

import { getPublishedSitemapEntries } from "@/lib/published";

/**
 * Sitemap — published.ts only.
 * Static pages + getPublishedSolutions/Industries/Platforms/Insights.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return getPublishedSitemapEntries().map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified ?? new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
