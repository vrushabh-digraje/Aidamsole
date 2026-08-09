import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug, getSolutionSlugs } from "@/lib/data/solutions";

type SolutionsSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SolutionsSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solution" };
  }

  return {
    title: solution.name,
    description: solution.hero.description,
  };
}

export default async function SolutionDetailPage({
  params,
}: SolutionsSlugPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
