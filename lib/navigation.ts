import {
  LIVE_ROUTES,
  getPublishedIndustries,
  getPublishedPlatforms,
  getPublishedSolutions,
} from "@/lib/published";
import { ROUTES } from "@/lib/constants";
import { STATIC_PAGES } from "@/lib/seo";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type MegaMenuPanel = {
  label: string;
  href: string;
  type: "solutions" | "industries" | "platform" | "link";
  items?: NavItem[];
  showViewAll?: boolean;
};

/** Nav items from published.ts registry only. */
export function publishedSolutionItems(): NavItem[] {
  return getPublishedSolutions().map((item) => ({
    label: item.name,
    href: `${ROUTES.solutions}/${item.slug}`,
    description: item.seo?.description ?? item.hero.description,
    icon: item.slug,
  }));
}

export function publishedIndustryItems(): NavItem[] {
  return getPublishedIndustries().map((item) => ({
    label: item.name,
    href: `${ROUTES.industries}/${item.slug}`,
    description: item.seo?.description ?? item.hero.description,
    icon: item.slug,
  }));
}

export function publishedPlatformItems(): NavItem[] {
  return getPublishedPlatforms().map((item) => ({
    label: item.productName,
    href: `${ROUTES.platform}/${item.slug}`,
    description: item.seo?.description ?? item.hero.description,
    icon: item.slug,
  }));
}

/** Primary nav — published routes only (published.ts SSOT). */
export const megaMenu: MegaMenuPanel[] = (
  [
    {
      label: "Solutions",
      href: LIVE_ROUTES.solutions,
      type: "solutions" as const,
      showViewAll: STATIC_PAGES.solutionsHub.published,
      items: publishedSolutionItems(),
    },
    {
      label: "Industries",
      href: LIVE_ROUTES.industries,
      type: "industries" as const,
      showViewAll: STATIC_PAGES.industriesHub.published,
      items: publishedIndustryItems(),
    },
    {
      label: "Platform",
      href: LIVE_ROUTES.platform,
      type: "platform" as const,
      showViewAll: STATIC_PAGES.platformHub.published,
      items: publishedPlatformItems(),
    },
    {
      label: "Case Studies",
      href: LIVE_ROUTES.caseStudies,
      type: "link" as const,
    },
    {
      label: "Insights",
      href: LIVE_ROUTES.insights,
      type: "link" as const,
    },
    {
      label: "About",
      href: LIVE_ROUTES.about,
      type: "link" as const,
    },
    {
      label: "Approach",
      href: LIVE_ROUTES.approach,
      type: "link" as const,
    },
    {
      label: "Contact",
      href: LIVE_ROUTES.contact,
      type: "link" as const,
    },
  ] satisfies MegaMenuPanel[]
).filter((panel) => {
  if (panel.type === "link") {
    if (panel.href === ROUTES.caseStudies) return STATIC_PAGES.caseStudies.published;
    if (panel.href === ROUTES.insights) return STATIC_PAGES.insights.published;
    if (panel.href === ROUTES.about) return STATIC_PAGES.about.published;
    if (panel.href === ROUTES.approach) return STATIC_PAGES.approach.published;
    if (panel.href === ROUTES.contact) return STATIC_PAGES.contact.published;
    return true;
  }
  return Boolean(panel.items?.length);
});

export const mainNav: NavItem[] = megaMenu.map((item) => ({
  label: item.label,
  href: item.href,
}));

export const footerNav: NavItem[] = mainNav;

/** Footer columns — same published registry as mega menu. */
export const footerColumns = {
  solutions: publishedSolutionItems(),
  industries: publishedIndustryItems(),
  platform: publishedPlatformItems(),
  company: [
    ...(STATIC_PAGES.about.published
      ? [{ label: "About", href: ROUTES.about }]
      : []),
    ...(STATIC_PAGES.approach.published
      ? [{ label: "Approach", href: ROUTES.approach }]
      : []),
    ...(STATIC_PAGES.caseStudies.published
      ? [{ label: "Case Studies", href: ROUTES.caseStudies }]
      : []),
    ...(STATIC_PAGES.insights.published
      ? [{ label: "Insights", href: ROUTES.insights }]
      : []),
    ...(STATIC_PAGES.contact.published
      ? [{ label: "Contact", href: ROUTES.contact }]
      : []),
    ...(STATIC_PAGES.privacy.published
      ? [{ label: "Privacy", href: ROUTES.privacy }]
      : []),
    ...(STATIC_PAGES.terms.published
      ? [{ label: "Terms", href: ROUTES.terms }]
      : []),
  ],
} as const;
