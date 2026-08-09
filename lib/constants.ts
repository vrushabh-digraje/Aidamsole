export const SITE = {
  name: "Aidamsole",
  legalName: "Aidamsole Agile Services Pvt Ltd",
  description:
    "Zoho system design and implementation for mid-market companies across India and the UAE — sales, operations, and finance on one operating model.",
  tagline: "Zoho Authorized Partner",
  email: "contact@aidamsole.com",
  addresses: {
    india: "Ahmedabad, India",
    uae: "Dubai, UAE",
  },
} as const;

export const ROUTES = {
  home: "/",
  solutions: "/solutions",
  industries: "/industries",
  platform: "/platform",
  caseStudies: "/case-studies",
  insights: "/insights",
  about: "/about",
  contact: "/contact",
} as const;

export const PRIMARY_CTA = {
  label: "Book System Audit",
  href: ROUTES.contact,
} as const;

/** Homepage / journey CTA vocabulary */
export const CTAS = {
  primary: PRIMARY_CTA,
  viewDemo: {
    label: "View Demo",
    href: "#system-flow",
  },
  exploreSolutions: {
    label: "Explore Solutions",
    href: ROUTES.solutions,
  },
  industryUseCase: {
    label: "See Industry Use Case",
    href: `${ROUTES.industries}/real-estate`,
  },
} as const;
