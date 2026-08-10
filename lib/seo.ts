import { ROUTES, SITE } from "@/lib/constants";

/** Canonical production origin for metadata, sitemap, and JSON-LD. */
export const SITE_URL = "https://aidamsole.com" as const;

export const siteConfig = {
  name: SITE.name,
  legalName: SITE.legalName,
  description: SITE.description,
  url: SITE_URL,
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageSeo) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website" as const,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** Static marketing pages with published + SEO. */
export const STATIC_PAGES = {
  home: {
    published: true,
    path: ROUTES.home,
    title: "Zoho Partner for Retail & Distribution | Aidamsole",
    description:
      "Zoho Authorized Partner for retail and distribution teams across India & GCC. CRM, inventory, and operations on one connected Zoho system.",
  },
  contact: {
    published: true,
    path: ROUTES.contact,
    title: "Contact | Book a Zoho Consultation",
    description:
      "Book a free Zoho consultation with Aidamsole. Offices in Manchar, Maharashtra and Ajman Free Zone, UAE.",
  },
  about: {
    published: true,
    path: ROUTES.about,
    title: "About Aidamsole | Zoho Authorized Partner",
    description:
      "Aidamsole Agile Services is a Zoho Authorized Partner helping mid-sized businesses implement Zoho across India and the GCC.",
  },
  caseStudies: {
    published: true,
    path: ROUTES.caseStudies,
    title: "Case Studies | Zoho System Designs",
    description:
      "Industry Zoho system designs from Aidamsole — process-first implementations for growing businesses.",
  },
  insights: {
    published: true,
    path: ROUTES.insights,
    title: "Insights | Zoho Implementation Notes",
    description:
      "Practical notes on Zoho CRM, operating design, and implementation patterns from Aidamsole.",
  },
  solutionsHub: {
    published: true,
    path: ROUTES.solutions,
    title: "Zoho Solutions | Sales, Ops, Support & Finance",
    description:
      "Zoho solution systems Aidamsole designs for sales ownership, operations, support SLAs, and finance collections.",
  },
  industriesHub: {
    published: true,
    path: ROUTES.industries,
    title: "Zoho by Industry | Retail, Healthcare & More",
    description:
      "Industry-specific Zoho process models for retail, manufacturing, real estate, healthcare, education, and service businesses.",
  },
  platformHub: {
    published: true,
    path: ROUTES.platform,
    title: "Zoho Platform | CRM & Connected Apps",
    description:
      "Zoho apps Aidamsole implements — CRM and connected modules configured around your operating process.",
  },
  privacy: {
    published: true,
    path: ROUTES.privacy,
    title: "Privacy Policy | Aidamsole",
    description:
      "How Aidamsole Agile Services collects and uses information from website enquiries and consultations.",
  },
  terms: {
    published: true,
    path: ROUTES.terms,
    title: "Terms of Use | Aidamsole",
    description:
      "Terms governing use of the Aidamsole website and related consultation enquiries.",
  },
  approach: {
    published: true,
    path: ROUTES.approach,
    title: "Our Approach | Process Before Zoho Configuration",
    description:
      "How Aidamsole designs Zoho systems — process mapping, system design, configuration, training, and stabilization.",
  },
} as const;
