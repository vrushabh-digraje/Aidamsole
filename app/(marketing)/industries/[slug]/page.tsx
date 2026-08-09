import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import {
  getIndustryBySlug,
  getIndustrySlugs,
} from "@/lib/data/industries";

type IndustrySlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustrySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry" };
  }

  return {
    title: `${industry.name} Systems`,
    description: industry.hero.description,
  };
}

export default async function IndustryDetailPage({
  params,
}: IndustrySlugPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
