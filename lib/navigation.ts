import { ROUTES } from "@/lib/constants";

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
};

function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const megaMenu: MegaMenuPanel[] = [
  {
    label: "Solutions",
    href: ROUTES.solutions,
    type: "solutions",
    items: [
      {
        label: "Sales System",
        href: `${ROUTES.solutions}/sales-system`,
        description: "Lead ownership, pipeline stages, and follow-up control.",
        icon: "sales",
      },
      {
        label: "Marketing Automation",
        href: `${ROUTES.solutions}/marketing-automation`,
        description: "Lead capture, nurture sequences, and campaign attribution.",
        icon: "marketing",
      },
      {
        label: "Delivery & Project System",
        href: `${ROUTES.solutions}/delivery-project-system`,
        description: "Sale-to-delivery handoffs with named owners and status.",
        icon: "delivery",
      },
      {
        label: "Finance & Operations",
        href: `${ROUTES.solutions}/finance-operations`,
        description: "Quotes, invoices, and collections tied to closed work.",
        icon: "finance",
      },
      {
        label: "Leadership Dashboard",
        href: `${ROUTES.solutions}/leadership-dashboard`,
        description: "Pipeline, delivery, and finance views for weekly reviews.",
        icon: "dashboard",
      },
    ],
  },
  {
    label: "Industries",
    href: ROUTES.industries,
    type: "industries",
    items: [
      "Real Estate",
      "Healthcare",
      "Manufacturing",
      "Education",
      "Retail",
      "IT Services",
      "Construction",
      "Interior Design",
    ].map((label) => ({
      label,
      href: `${ROUTES.industries}/${slugify(label)}`,
      icon: slugify(label),
    })),
  },
  {
    label: "Platform",
    href: ROUTES.platform,
    type: "platform",
    items: [
      "CRM",
      "Books",
      "Projects",
      "People",
      "Desk",
      "Analytics",
      "Creator",
      "Inventory",
    ].map((label) => ({
      label,
      href: `${ROUTES.platform}/${slugify(label)}`,
      description: `Zoho ${label}`,
      icon: slugify(label),
    })),
  },
  {
    label: "Case Studies",
    href: ROUTES.caseStudies,
    type: "link",
  },
  {
    label: "Insights",
    href: ROUTES.insights,
    type: "link",
  },
  {
    label: "About",
    href: ROUTES.about,
    type: "link",
  },
  {
    label: "Contact",
    href: ROUTES.contact,
    type: "link",
  },
];

export const mainNav: NavItem[] = megaMenu.map((item) => ({
  label: item.label,
  href: item.href,
}));

export const footerNav: NavItem[] = mainNav;

export const footerColumns = {
  solutions: megaMenu.find((item) => item.type === "solutions")?.items ?? [],
  industries: (
    megaMenu.find((item) => item.type === "industries")?.items ?? []
  ).slice(0, 6),
  platform: (megaMenu.find((item) => item.type === "platform")?.items ?? []).slice(
    0,
    6,
  ),
  company: [
    { label: "Case Studies", href: ROUTES.caseStudies },
    { label: "Insights", href: ROUTES.insights },
    { label: "About", href: ROUTES.about },
    { label: "Contact", href: ROUTES.contact },
  ],
} as const;

export const solutionSlugs = [
  "sales-system",
  "marketing-automation",
  "delivery-project-system",
  "finance-operations",
  "leadership-dashboard",
] as const;

export const industrySlugs = [
  "real-estate",
  "healthcare",
  "manufacturing",
  "education",
  "retail",
  "it-services",
  "construction",
  "interior-design",
] as const;

export const platformSlugs = [
  "crm",
  "books",
  "projects",
  "people",
  "desk",
  "analytics",
  "creator",
  "inventory",
] as const;
