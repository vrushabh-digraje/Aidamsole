import type { SystemFlowNode } from "@/components/sections/SystemFlow";
import type { ProblemGridItem } from "@/components/sections/ProblemGrid";
import type { ModuleGridItem } from "@/components/sections/ModuleGrid";
import type { OutcomeGridItem } from "@/components/sections/OutcomeGrid";
import type { StepsFlowItem } from "@/components/sections/StepsFlow";
import type { UseCaseFlowItem } from "@/components/sections/UseCaseFlow";
import type { FeatureGridItem } from "@/components/sections/FeatureGrid";
import type { IntegrationFlowConnection } from "@/components/sections/IntegrationFlow";

/**
 * Unified marketing page schema.
 * Industry, solution, platform, SEO, and landing pages all normalize to this shape.
 */
export type MarketingPageKind =
  | "industry"
  | "solution"
  | "platform"
  | "seo"
  | "landing";

export type MarketingCta = {
  label: string;
  href: string;
};

export type MarketingFaqItem = {
  question: string;
  answer: string;
};

export type MarketingPage = {
  slug: string;
  kind: MarketingPageKind;
  /** Browser / OG title */
  title: string;
  /** Meta + social description */
  description: string;
  /** Canonical path e.g. /industries/retail-distribution */
  path: string;
  /** Derived from lib/published.ts — not a parallel publish flag */
  published: boolean;
  /** Show PartnerTrust strip after hero (default true on marketing detail pages) */
  showTrust?: boolean;

  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
    primaryCta: MarketingCta;
    secondaryCta?: MarketingCta;
    /** Show system flow in hero aside when system section exists */
    showSystemAside?: boolean;
  };

  sections: {
    problem?: {
      title: string;
      description: string;
      items: ProblemGridItem[];
    };
    /** Platform app jobs — renders in Modules/Features slot (after System) */
    features?: {
      title: string;
      description: string;
      items: FeatureGridItem[];
    };
    system?: {
      title: string;
      description: string;
      nodes: SystemFlowNode[];
      highlightId?: string;
      anchorId?: string;
    };
    modules?: {
      title: string;
      description: string;
      items: ModuleGridItem[];
      grouped?: boolean;
    };
    steps?: {
      title: string;
      description: string;
      items: StepsFlowItem[];
    };
    useCases?: {
      title: string;
      description: string;
      items: UseCaseFlowItem[];
    };
    integrations?: {
      title: string;
      description: string;
      hub: { name: string; role: string };
      connections: IntegrationFlowConnection[];
    };
    /** Outcomes / social proof / results */
    proof?: {
      title: string;
      description: string;
      items: OutcomeGridItem[];
    };
    faq?: {
      title?: string;
      description?: string;
      items: MarketingFaqItem[];
    };
  };

  cta: {
    title: string;
    description: string;
    primary: MarketingCta;
    secondary?: MarketingCta;
  };
};
