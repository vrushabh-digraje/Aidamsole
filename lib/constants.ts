export const SITE = {
  name: "Aidamsole",
  legalName: "Aidamsole Agile Services Pvt Ltd",
  description:
    "Zoho Authorized Partner for retail & distribution and mid-sized businesses across India & GCC. Zoho CRM implementation, consulting, training, and support.",
  tagline: "Zoho Authorized Partner",
  email: "sales@aidamsole.com",
  /** WhatsApp (India) — digits only with country code */
  whatsapp: "919356917424",
  phones: {
    india: {
      display: "093569 17424",
      tel: "+919356917424",
    },
    uae: {
      display: "+971 56 830 9866",
      tel: "+971568309866",
    },
  },
  addresses: {
    india: {
      label: "India",
      lines: [
        "1st Floor, Madhuban Complex",
        "Office no. 103, 104, near Maxcare Hospital",
        "Manchar, Maharashtra 410503",
      ],
      short: "Manchar, Maharashtra, India",
    },
    uae: {
      label: "UAE",
      lines: [
        "C1 - 1F - SF7618",
        "Ajman Free Zone C1 Building",
        "Ajman, UAE",
      ],
      short: "Ajman Free Zone, UAE",
    },
  },
  /** Google Maps / listing share link */
  mapsUrl: "https://share.google/LcLUjuaui2ukUIiFh",
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
  privacy: "/privacy",
  terms: "/terms",
  approach: "/approach",
} as const;

export const PRIMARY_CTA = {
  label: "Book Free Consultation",
  href: ROUTES.contact,
} as const;

function whatsappHref(message?: string) {
  const text = encodeURIComponent(
    message ?? "Hi Aidamsole — I’d like a free Zoho consultation.",
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

/** Homepage / journey CTA vocabulary */
export const CTAS = {
  primary: PRIMARY_CTA,
  viewDemo: {
    label: "View Demo",
    href: "#system-flow",
  },
  exploreSolutions: {
    label: "Explore Sales System",
    href: `${ROUTES.solutions}/sales-system`,
  },
  explorePlatform: {
    label: "Explore Zoho CRM",
    href: `${ROUTES.platform}/crm`,
  },
  industryUseCase: {
    label: "See Retail & Distribution system",
    href: `${ROUTES.industries}/retail-distribution`,
  },
  realEstateUseCase: {
    label: "See Real Estate system",
    href: `${ROUTES.industries}/real-estate`,
  },
  whatsapp: {
    label: "WhatsApp us",
    href: whatsappHref(),
  },
} as const;
