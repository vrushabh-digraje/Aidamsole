import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { OutcomeGrid } from "@/components/sections/OutcomeGrid";
import { StepsFlow } from "@/components/sections/StepsFlow";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { CTAS } from "@/lib/constants";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.approach.title,
  description: STATIC_PAGES.approach.description,
  path: STATIC_PAGES.approach.path,
});

const steps = [
  {
    number: "01",
    title: "Business Process Mapping",
    description:
      "Document how work moves today — including Excel, WhatsApp, and skipped stages — before touching Zoho admin.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Define ownership, stage exits, required fields, SLAs, and the few metrics leadership will trust weekly.",
  },
  {
    number: "03",
    title: "Zoho Configuration",
    description:
      "Build CRM and connected apps so the designed process is the default path — not optional decoration.",
  },
  {
    number: "04",
    title: "Team Training",
    description:
      "Train managers and teams on the operating rhythm: ownership, next actions, and reviews from the system.",
  },
  {
    number: "05",
    title: "Stabilization",
    description:
      "Tighten adoption, reporting, and handoffs until weekly reviews run from Zoho — and shadow trackers shrink.",
  },
];

const outcomes = [
  {
    title: "Process before software",
    description:
      "Configuration follows written operating rules — not a module checklist.",
  },
  {
    title: "Leadership can review from Zoho",
    description:
      "Fewer spreadsheet rebuilds; definitions stable enough to decide.",
  },
  {
    title: "Handoffs have owners",
    description:
      "Sales-to-delivery and support transitions stop living only in chat.",
  },
  {
    title: "Adoption is part of done",
    description:
      "Go-live is the start of stabilization — not the end of the engagement.",
  },
];

const faqs = [
  {
    question: "Why not start in Zoho admin?",
    answer:
      "Starting in admin encodes today’s confusion. Mapping owners and stage exits first means less configuration and higher adoption.",
  },
  {
    question: "How long does this approach take?",
    answer:
      "Timeline depends on scope and team readiness. The System Audit clarifies the path before we commit to a build plan — we do not invent a fixed week count without seeing your process.",
  },
  {
    question: "Do you only implement Zoho CRM?",
    answer:
      "CRM is often the core, but we configure connected apps — Books, Inventory, Projects, Desk, Analytics, Creator, Campaigns — when the operating design needs them.",
  },
] as const;

export default function ApproachPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />

      <Hero
        tone="default"
        spacing="prominent"
        eyebrow="Approach"
        title="Process first. Zoho second. Adoption always."
        description="Aidamsole designs the operating system your team can run weekly — then configures Zoho to enforce it. Configuration without ownership rules is how implementations fail after go-live."
        primaryCta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
      />

      <StepsFlow
        tone="muted"
        spacing="default"
        title="How engagement works"
        description="The same method we use across industries and Zoho apps."
        items={steps}
      />

      <OutcomeGrid
        tone="default"
        spacing="default"
        title="What “done” means"
        description="Success is control over work — not licenses turned on."
        items={outcomes}
      />

      <Faq
        tone="muted"
        spacing="default"
        title="Approach questions"
        description="How we work with mid-sized teams in India and the GCC."
        items={[...faqs]}
      />

      <CTA
        tone="dark"
        spacing="default"
        title="Start with a System Audit"
        description="We’ll map how sales, operations, and finance run today — then design the Zoho path that fits."
        cta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
      />
    </>
  );
}
