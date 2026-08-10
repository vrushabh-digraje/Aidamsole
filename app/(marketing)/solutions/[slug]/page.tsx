import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingPageTemplate } from "@/components/templates/MarketingPageTemplate";
import { getSolutionBySlug } from "@/lib/data/solutions";
import {
  generateMarketingMetadata,
  solutionToMarketingPage,
} from "@/lib/marketing";
import {
  getPublishedSolutions,
  isPublishedSolution,
} from "@/lib/published";

type SolutionsSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedSolutions().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: SolutionsSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution || !isPublishedSolution(slug)) {
    return { title: "Solution" };
  }
  return generateMarketingMetadata(solutionToMarketingPage(solution));
}

export default async function SolutionDetailPage({
  params,
}: SolutionsSlugPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution || !isPublishedSolution(slug)) {
    notFound();
  }

  const page = solutionToMarketingPage(solution);
  return <MarketingPageTemplate page={page} />;
}
