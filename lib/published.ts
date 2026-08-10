import { getAllPlatforms, type PlatformPageData } from "@/lib/data/platform";
import { getAllSolutions, type SolutionPageData } from "@/lib/data/solutions";
import { getAllIndustries, type IndustryPageData } from "@/lib/data/industries";
import { insights, type Insight } from "@/lib/insights";
import { ROUTES } from "@/lib/constants";
import { STATIC_PAGES, absoluteUrl } from "@/lib/seo";

/**
 * SINGLE SOURCE OF TRUTH for live marketing routes.
 *
 * Nav, footer, hubs, detail pages, and sitemap MUST gate on these helpers.
 * Do not check data `published` flags in isolation — use isPublished* / getPublished*.
 */
export const PUBLISHED = {
  solutions: [
    "sales-system",
    "operations-system",
    "support-system",
    "finance-operations",
  ] as const,
  industries: [
    "retail-distribution",
    "manufacturing",
    "real-estate",
    "healthcare",
    "education",
    "service",
  ] as const,
  platform: [
    "crm",
    "books",
    "inventory",
    "projects",
    "people",
    "desk",
    "analytics",
    "creator",
    "campaigns",
  ] as const,
  insights: [
    "crm-mistakes-after-go-live",
    "handoffs-break-operations",
    "design-system-before-zoho",
    "zoho-crm-for-real-estate-follow-up",
    "reporting-leadership-cannot-trust",
    "whatsapp-excel-shadow-process",
    "how-ops-heads-evaluate-zoho-partner",
    "zoho-for-retail-distribution-visibility",
    "admissions-funnel-counsellor-ownership",
    "ticket-to-account-health",
  ] as const,
} as const;

export type PublishedSolutionSlug = (typeof PUBLISHED.solutions)[number];
export type PublishedIndustrySlug = (typeof PUBLISHED.industries)[number];
export type PublishedPlatformSlug = (typeof PUBLISHED.platform)[number];
export type PublishedInsightSlug = (typeof PUBLISHED.insights)[number];

export function isPublishedSolution(slug: string): boolean {
  return (PUBLISHED.solutions as readonly string[]).includes(slug);
}

export function isPublishedIndustry(slug: string): boolean {
  return (PUBLISHED.industries as readonly string[]).includes(slug);
}

export function isPublishedPlatform(slug: string): boolean {
  return (PUBLISHED.platform as readonly string[]).includes(slug);
}

export function isPublishedInsight(slug: string): boolean {
  return (PUBLISHED.insights as readonly string[]).includes(slug);
}

/** Generic slug check across solution / industry / platform. */
export function isPublished(
  kind: "solution" | "industry" | "platform" | "insight",
  slug: string,
): boolean {
  switch (kind) {
    case "solution":
      return isPublishedSolution(slug);
    case "industry":
      return isPublishedIndustry(slug);
    case "platform":
      return isPublishedPlatform(slug);
    case "insight":
      return isPublishedInsight(slug);
  }
}

export function getPublishedSolutions(): SolutionPageData[] {
  return getAllSolutions().filter((item) => isPublishedSolution(item.slug));
}

export function getPublishedIndustries(): IndustryPageData[] {
  return getAllIndustries().filter((item) => isPublishedIndustry(item.slug));
}

export function getPublishedPlatforms(): PlatformPageData[] {
  return getAllPlatforms().filter((item) => isPublishedPlatform(item.slug));
}

export function getPublishedInsights(): Insight[] {
  return insights.filter((item) => isPublishedInsight(item.slug));
}

export function solutionPath(slug: PublishedSolutionSlug) {
  return `${ROUTES.solutions}/${slug}` as const;
}

export function industryPath(slug: PublishedIndustrySlug) {
  return `${ROUTES.industries}/${slug}` as const;
}

export function platformPath(slug: PublishedPlatformSlug) {
  return `${ROUTES.platform}/${slug}` as const;
}

export function insightPath(slug: PublishedInsightSlug) {
  return `${ROUTES.insights}/${slug}` as const;
}

export const LIVE_ROUTES = {
  home: ROUTES.home,
  contact: ROUTES.contact,
  about: ROUTES.about,
  caseStudies: ROUTES.caseStudies,
  insights: ROUTES.insights,
  approach: ROUTES.approach,
  privacy: ROUTES.privacy,
  terms: ROUTES.terms,
  solutions: ROUTES.solutions,
  industries: ROUTES.industries,
  platform: ROUTES.platform,
  salesSystem: solutionPath("sales-system"),
  operationsSystem: solutionPath("operations-system"),
  supportSystem: solutionPath("support-system"),
  financeOperations: solutionPath("finance-operations"),
  retailDistribution: industryPath("retail-distribution"),
  manufacturing: industryPath("manufacturing"),
  realEstate: industryPath("real-estate"),
  healthcare: industryPath("healthcare"),
  education: industryPath("education"),
  service: industryPath("service"),
  crm: platformPath("crm"),
  books: platformPath("books"),
  inventory: platformPath("inventory"),
  projects: platformPath("projects"),
  people: platformPath("people"),
  desk: platformPath("desk"),
  analytics: platformPath("analytics"),
  creator: platformPath("creator"),
  campaigns: platformPath("campaigns"),
} as const;

export type SitemapEntry = {
  url: string;
  lastModified?: Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

/** All indexable URLs for sitemap — published registry only. */
export function getPublishedSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  for (const page of Object.values(STATIC_PAGES)) {
    if (!page.published) continue;
    entries.push({
      url: absoluteUrl(page.path),
      changeFrequency: page.path === "/" ? "weekly" : "monthly",
      priority: page.path === "/" ? 1 : 0.7,
    });
  }

  for (const solution of getPublishedSolutions()) {
    entries.push({
      url: absoluteUrl(`${ROUTES.solutions}/${solution.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const industry of getPublishedIndustries()) {
    entries.push({
      url: absoluteUrl(`${ROUTES.industries}/${industry.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const platform of getPublishedPlatforms()) {
    entries.push({
      url: absoluteUrl(`${ROUTES.platform}/${platform.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const insight of getPublishedInsights()) {
    entries.push({
      url: absoluteUrl(`${ROUTES.insights}/${insight.slug}`),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
