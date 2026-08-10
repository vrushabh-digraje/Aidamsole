import type { Metadata } from "next";

import type { MarketingPage } from "@/lib/marketing/types";
import { buildPageMetadata } from "@/lib/seo";

/** Metadata for any MarketingPage — one helper for all detail/landing routes. */
export function generateMarketingMetadata(page: MarketingPage): Metadata {
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    noIndex: !page.published,
  });
}
