import type { IndustryPageData } from "@/lib/data/industries";
import type { SolutionPageData } from "@/lib/data/solutions";
import type { PlatformPageData } from "@/lib/data/platform";
import type { MarketingFaqItem, MarketingPage } from "@/lib/marketing/types";
import {
  isPublishedIndustry,
  isPublishedPlatform,
  isPublishedSolution,
} from "@/lib/published";
import { ROUTES } from "@/lib/constants";

function industryFaqs(slug: string, name: string): MarketingFaqItem[] {
  if (slug === "retail-distribution") {
    return [
      {
        question: "Do you only configure Zoho CRM for distributors?",
        answer:
          "No. Retail and distribution work usually needs CRM plus Inventory and Books so order status, stock, and collections share one operating model — not three spreadsheets.",
      },
      {
        question: "How do you handle dealer and WhatsApp enquiries?",
        answer:
          "We map intake and ownership first: every dealer or retailer enquiry gets an owner, stage, and next action in Zoho before chat becomes the system of record.",
      },
      {
        question: "What does a System Audit cover?",
        answer:
          "Enquiry intake, order stages after confirmation, stock handoffs, and collections visibility — then a clear Zoho system design for your team.",
      },
    ];
  }
  if (slug === "manufacturing") {
    return [
      {
        question: "Is this an ERP replacement?",
        answer:
          "No. We design enquiry-to-delivery control on Zoho — ownership, milestones, and collections — without forcing a full ERP program.",
      },
      {
        question: "Can sales see production status?",
        answer:
          "Yes. After process design, confirmed orders open delivery milestones so sales updates come from the system instead of shop-floor chats.",
      },
      {
        question: "What do we start with?",
        answer:
          "A System Audit of RFQ intake, order confirmation, production handoffs, and invoice timing.",
      },
    ];
  }
  return [
    {
      question: `Is this Zoho setup specific to ${name}?`,
      answer: `Yes. We start from how ${name} teams actually run — ownership, stages, and handoffs — then configure Zoho to enforce that process.`,
    },
    {
      question: "What is a System Audit?",
      answer:
        "A working session on your current process and gaps, followed by a Zoho system design — not a product demo theater.",
    },
    {
      question: "Do you train the team after go-live?",
      answer:
        "Yes. Training and stabilization are part of making the system the default path, not an unused login.",
    },
  ];
}

function solutionFaqs(name: string): MarketingFaqItem[] {
  return [
    {
      question: `What is included in the ${name}?`,
      answer:
        "Process design first — ownership, stages, and handoffs — then Zoho configuration, training, and stabilization so the team can run weekly reviews from the system.",
    },
    {
      question: "Is this only for retail and distribution?",
      answer:
        "Our primary focus is retail and distribution. The same operating-system approach also fits manufacturing and other mid-market teams with similar handoff pain.",
    },
    {
      question: "How do we start?",
      answer:
        "Book a System Audit. We map the broken path (often WhatsApp and Excel), then design the Zoho system that replaces it.",
    },
  ];
}

function platformFaqs(productName: string): MarketingFaqItem[] {
  return [
    {
      question: `Do you only turn on ${productName}?`,
      answer: `No. We configure ${productName} as part of an operating flow — usually with CRM and connected apps so data does not restart in chat or sheets.`,
    },
    {
      question: "Who is this for?",
      answer:
        "Mid-sized teams in India and the GCC — especially retail, distribution, and manufacturing — that need ownership and visibility, not another unused module.",
    },
    {
      question: "What happens in the setup audit?",
      answer:
        "We map the jobs this app must own, where it connects to CRM or Books, and what leadership needs to review weekly.",
    },
  ];
}

/** Normalize industry data → unified MarketingPage. */
export function industryToMarketingPage(
  industry: IndustryPageData,
): MarketingPage {
  return {
    slug: industry.slug,
    kind: "industry",
    title: industry.seo?.title ?? `${industry.name} Systems`,
    description: industry.seo?.description ?? industry.hero.description,
    path: `${ROUTES.industries}/${industry.slug}`,
    published: isPublishedIndustry(industry.slug),
    showTrust: true,
    hero: {
      eyebrow: `Industry · ${industry.name}`,
      headline: industry.hero.headline,
      subtext: industry.hero.description,
      primaryCta: {
        label: industry.hero.ctaLabel,
        href: industry.hero.ctaHref,
      },
      secondaryCta: {
        label: "Book System Audit",
        href: ROUTES.contact,
      },
      showSystemAside: true,
    },
    sections: {
      problem: {
        title: `${industry.name} operating failures`,
        description:
          industry.slug === "retail-distribution"
            ? "Gaps distributors feel every week — before any talk of Zoho modules."
            : industry.slug === "manufacturing"
              ? "Gaps manufacturing sales and ops feel before any talk of Zoho modules."
              : "Process gaps operators see before any discussion of Zoho modules.",
        items: industry.problems,
      },
      system: {
        title: industry.systemFlow.title,
        description: industry.systemFlow.description,
        nodes: industry.systemFlow.nodes,
      },
      modules: {
        title: industry.modules.title,
        description: industry.modules.description,
        items: industry.modules.items,
        grouped: false,
      },
      useCases: {
        title: industry.useCases.title,
        description: industry.useCases.description,
        items: industry.useCases.items,
      },
      faq: {
        title: "Questions before you book",
        description: `Straight answers on Zoho for ${industry.name}.`,
        items: industryFaqs(industry.slug, industry.name),
      },
    },
    cta: {
      title: industry.cta.title,
      description: industry.cta.description,
      primary: { label: industry.cta.label, href: industry.cta.href },
    },
  };
}

/** Normalize solution data → unified MarketingPage. */
export function solutionToMarketingPage(
  solution: SolutionPageData,
): MarketingPage {
  return {
    slug: solution.slug,
    kind: "solution",
    title: solution.seo?.title ?? solution.name,
    description: solution.seo?.description ?? solution.hero.description,
    path: `${ROUTES.solutions}/${solution.slug}`,
    published: isPublishedSolution(solution.slug),
    showTrust: true,
    hero: {
      eyebrow: `Solution · ${solution.name}`,
      headline: solution.hero.headline,
      subtext: solution.hero.description,
      primaryCta: solution.hero.primaryCta,
      secondaryCta: solution.hero.secondaryCta,
      showSystemAside: true,
    },
    sections: {
      problem: {
        title: solution.problems.title,
        description: solution.problems.description,
        items: solution.problems.items,
      },
      system: {
        title: solution.systemFlow.title,
        description: solution.systemFlow.description,
        nodes: solution.systemFlow.nodes,
        anchorId: "system-we-build",
      },
      modules: {
        title: solution.modules.title,
        description: solution.modules.description,
        items: solution.modules.items,
        grouped: false,
      },
      useCases: {
        title: solution.useCases.title,
        description: solution.useCases.description,
        items: solution.useCases.items,
      },
      proof: {
        title: solution.outcomes.title,
        description: solution.outcomes.description,
        items: solution.outcomes.items,
      },
      faq: {
        title: "Questions before you book",
        description: "How this operating system is scoped and delivered.",
        items: solutionFaqs(solution.name),
      },
    },
    cta: {
      title: solution.cta.title,
      description: solution.cta.description,
      primary: solution.cta.primary,
      secondary: solution.cta.secondary,
    },
  };
}

/** Normalize platform data → unified MarketingPage. */
export function platformToMarketingPage(
  platform: PlatformPageData,
): MarketingPage {
  return {
    slug: platform.slug,
    kind: "platform",
    title: platform.seo?.title ?? platform.productName,
    description: platform.seo?.description ?? platform.hero.description,
    path: `${ROUTES.platform}/${platform.slug}`,
    published: isPublishedPlatform(platform.slug),
    showTrust: true,
    hero: {
      eyebrow: `Platform · ${platform.productName}`,
      headline: platform.hero.headline,
      subtext: platform.hero.description,
      primaryCta: platform.hero.primaryCta,
      secondaryCta: platform.hero.secondaryCta,
      showSystemAside: true,
    },
    sections: {
      problem: undefined,
      features: {
        title: platform.features.title,
        description: platform.features.description,
        items: platform.features.items,
      },
      system: {
        title: platform.systemFlow.title,
        description: platform.systemFlow.description,
        nodes: platform.systemFlow.nodes,
        highlightId: platform.systemFlow.highlightId,
        anchorId: "platform-system",
      },
      useCases: {
        title: platform.useCases.title,
        description: platform.useCases.description,
        items: platform.useCases.items,
      },
      proof: {
        title: platform.outcomes.title,
        description: platform.outcomes.description,
        items: platform.outcomes.items,
      },
      faq: {
        title: "Questions before you book",
        description: `How we implement ${platform.productName} as part of an operating system.`,
        items: platformFaqs(platform.productName),
      },
    },
    cta: {
      title: platform.cta.title,
      description: platform.cta.description,
      primary: platform.cta.primary,
      secondary: platform.cta.secondary,
    },
  };
}
