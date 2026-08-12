import type { Metadata } from "next";

import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { CTA } from "@/components/sections/CTA";
import { ConnectedSystemExperience } from "@/components/sections/ConnectedSystemExperience";
import { Faq } from "@/components/sections/Faq";
import { Grid } from "@/components/sections/Grid";
import { Hero } from "@/components/sections/Hero";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { PartnerTrust } from "@/components/sections/PartnerTrust";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Stats, homepageStats } from "@/components/sections/Stats";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { InteractiveHeroAside } from "@/components/sections/InteractiveHeroAside";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trust } from "@/components/sections/Trust";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { WhyZoho } from "@/components/sections/WhyZoho";
import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { IndustryHub } from "@/components/sections/IndustryHub";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { CTAS } from "@/lib/constants";
import {
  getPublishedIndustries,
  getPublishedPlatforms,
} from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.home.title,
  description: STATIC_PAGES.home.description,
  path: STATIC_PAGES.home.path,
});

const services = [
  {
    title: "Consultation",
    description:
      "We map your current process — sales, operations, and finance — and define the right Zoho setup.",
    icon: "consultation" as const,
  },
  {
    title: "Implementation",
    description:
      "CRM and connected Zoho apps configured to your workflows, ownership rules, and reporting needs.",
    icon: "implementation" as const,
  },
  {
    title: "Integration",
    description:
      "Connect Zoho with WhatsApp, portals, accounting, and existing tools so data stays in one place.",
    icon: "connected" as const,
  },
  {
    title: "Training",
    description:
      "Role-based training so your team adopts the system from day one — not another unused login.",
    icon: "training" as const,
  },
  {
    title: "Support",
    description:
      "Ongoing help for enhancements, troubleshooting, and optimization as your business grows.",
    icon: "support" as const,
  },
];

const faqs = [
  {
    question: "What does a Zoho partner do?",
    answer:
      "A Zoho partner helps you choose the right Zoho apps, configure them to your process, migrate data, train your team, and support you after go-live — so Zoho becomes a working system, not just licenses.",
  },
  {
    question: "How long does Zoho implementation take?",
    answer:
      "Most mid-sized CRM or focused system builds take a few weeks, depending on scope, data migration, and integrations. After a free consultation we share a clear timeline and phase plan.",
  },
  {
    question: "Can you migrate our data from Excel or another CRM?",
    answer:
      "Yes. We plan migration carefully — clean fields, map ownership, and reduce duplicates — so your team starts with usable data, not a messy import.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes. We train users and admins on the workflows you will actually run, and we stay available for support, enhancements, and optimization after go-live.",
  },
  {
    question: "What happens in a free consultation?",
    answer:
      "In about 30 minutes we review how leads, handoffs, and reporting work today, identify gaps, and outline the Zoho approach that fits your business — with no obligation.",
  },
];

export default function HomePage() {
  const industries = getPublishedIndustries();
  const platformRoles: Record<string, string> = {
    crm: "Lead ownership, pipeline, and sales follow-up.",
    books: "Invoicing, payments, and collections control.",
    inventory: "Stock visibility and order fulfillment handoffs.",
    projects: "Delivery execution after deal closure.",
    people: "HR processes and team administration.",
    desk: "Ticket ownership, queues, and SLA control.",
    analytics: "Leadership dashboards and live KPIs.",
    creator: "Custom apps for unique business workflows.",
    campaigns: "CRM-backed nurture and follow-up sequences.",
  };
  const zohoApps = getPublishedPlatforms().map((item) => ({
    name: item.name,
    role: platformRoles[item.slug] ?? item.hero.description,
  }));

  return (
    <>
      <FaqJsonLd items={faqs} />
      <Hero
        variant="authority"
        eyebrow="Zoho Authorized Partner · India & GCC"
        title="Zoho Partner for Retail & Distribution Teams"
        description="We help mid-sized retail and distribution businesses implement Zoho CRM and connected apps — so sales, stock, and finance run as one system."
        primaryCta={CTAS.primary}
        secondaryCta={CTAS.viewDemo}
        aside={<InteractiveHeroAside />}
      />

      <PartnerTrust tone="muted" spacing="compact" />

      <Stats
        tone="default"
        spacing="compact"
        items={homepageStats}
        title="What we stand on"
        description="Partner credentials and market focus — not invented volume metrics."
      />

      <Trust
        tone="muted"
        spacing="compact"
        title="Teams we design systems for"
        description="Illustrative client marks for layout — swap in approved logos when cleared."
        showTestimonial={true}
      />

      <ServicesGrid tone="default" spacing="default" items={services} />

      <WhyZoho tone="muted" spacing="default" />

      <ModuleGrid
        tone="default"
        spacing="default"
        title="Essential Zoho apps we implement"
        description="The core tools we configure most often for mid-sized teams."
        items={zohoApps}
        grouped={false}
      />

      <IndustryHub
        title="Zoho solutions by industry"
        description="Published industry models — start with how your sector runs."
        items={industries.map((item) => ({
          slug: item.slug,
          name: item.name,
          description: item.hero.description,
        }))}
      />

      <WhyChoose tone="default" spacing="default" />

      <ConnectedSystemExperience />

      <Testimonials tone="muted" spacing="default" />

      <CaseStudyTeaser tone="default" spacing="default" />

      <InsightsTeaser tone="muted" spacing="default" limit={3} />

      <Faq tone="default" spacing="default" items={faqs} />

      <CTA
        tone="dark"
        spacing="default"
        title="Book a free Zoho consultation"
        description="Tell us how your retail, distribution, or mid-market team runs today. We’ll map the right Zoho approach — implementation, training, and support included in the plan."
        cta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
        tertiaryCta={CTAS.industryUseCase}
      />
    </>
  );
}
