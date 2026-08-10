import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingPageTemplate } from "@/components/templates/MarketingPageTemplate";
import { getIndustryBySlug } from "@/lib/data/industries";
import {
  generateMarketingMetadata,
  industryToMarketingPage,
} from "@/lib/marketing";
import {
  getPublishedIndustries,
  isPublishedIndustry,
} from "@/lib/published";

type IndustrySlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedIndustries().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: IndustrySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry || !isPublishedIndustry(slug)) {
    return { title: "Industry" };
  }
  return generateMarketingMetadata(industryToMarketingPage(industry));
}

export default async function IndustryDetailPage({
  params,
}: IndustrySlugPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry || !isPublishedIndustry(slug)) {
    notFound();
  }

  const page = industryToMarketingPage(industry);
  return <MarketingPageTemplate page={page} />;
}
