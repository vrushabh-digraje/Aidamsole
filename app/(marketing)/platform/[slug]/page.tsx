import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PlatformPageTemplate } from "@/components/platform/PlatformPageTemplate";
import { getPlatformBySlug, getPlatformSlugs } from "@/lib/data/platform";

type PlatformSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPlatformSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PlatformSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    return { title: "Platform" };
  }

  return {
    title: platform.productName,
    description: platform.hero.description,
  };
}

export default async function PlatformDetailPage({
  params,
}: PlatformSlugPageProps) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    notFound();
  }

  return <PlatformPageTemplate platform={platform} />;
}
