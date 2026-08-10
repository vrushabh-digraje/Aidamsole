import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingPageTemplate } from "@/components/templates/MarketingPageTemplate";
import { getPlatformBySlug } from "@/lib/data/platform";
import {
  generateMarketingMetadata,
  platformToMarketingPage,
} from "@/lib/marketing";
import {
  getPublishedPlatforms,
  isPublishedPlatform,
} from "@/lib/published";

type PlatformSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedPlatforms().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PlatformSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);
  if (!platform || !isPublishedPlatform(slug)) {
    return { title: "Platform" };
  }
  return generateMarketingMetadata(platformToMarketingPage(platform));
}

export default async function PlatformDetailPage({
  params,
}: PlatformSlugPageProps) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform || !isPublishedPlatform(slug)) {
    notFound();
  }

  const page = platformToMarketingPage(platform);
  return <MarketingPageTemplate page={page} />;
}
