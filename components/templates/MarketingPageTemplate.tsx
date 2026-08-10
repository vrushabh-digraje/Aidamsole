import { CTA } from "@/components/sections/CTA";
import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { Faq } from "@/components/sections/Faq";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { OutcomeGrid } from "@/components/sections/OutcomeGrid";
import { PartnerTrust } from "@/components/sections/PartnerTrust";
import { ProblemGrid } from "@/components/sections/ProblemGrid";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { UseCaseFlow } from "@/components/sections/UseCaseFlow";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import type { MarketingPage } from "@/lib/marketing/types";

type MarketingPageTemplateProps = {
  page: MarketingPage;
};

/**
 * Locked section order for all marketing detail pages (not homepage):
 * 1 Hero → 2 Trust → 3 Problem → 4 System → 5 Modules/Features → 6 Proof → 7 FAQ → 8 CTA
 *
 * Duplicates removed: StepsFlow + IntegrationFlow (method lives on /approach).
 * Use cases render under Proof as working examples.
 */
export function MarketingPageTemplate({ page }: MarketingPageTemplateProps) {
  const { hero, sections, cta } = page;
  const systemNodes = sections.system?.nodes;
  const showTrust = page.showTrust !== false;
  const hasProof =
    Boolean(sections.useCases?.items?.length) ||
    Boolean(sections.proof?.items?.length) ||
    page.kind === "industry";

  const systemBlock = sections.system ? (
    <SystemFlow
      tone="default"
      spacing="prominent"
      title={sections.system.title}
      description={sections.system.description}
      highlightId={sections.system.highlightId}
      nodes={sections.system.nodes}
    />
  ) : null;

  return (
    <>
      {sections.faq?.items?.length ? (
        <FaqJsonLd items={sections.faq.items} />
      ) : null}

      {/* 1. Hero */}
      <Hero
        tone="default"
        spacing="prominent"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        description={hero.subtext}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        aside={
          hero.showSystemAside && systemNodes?.length ? (
            <SystemFlow
              showSectionChrome={false}
              highlightId={sections.system?.highlightId}
              nodes={systemNodes}
            />
          ) : undefined
        }
      />

      {/* 2. Trust (optional) */}
      {showTrust ? <PartnerTrust tone="muted" spacing="compact" /> : null}

      {/* 3. Problem */}
      {sections.problem ? (
        <ProblemGrid
          tone="muted"
          spacing="default"
          title={sections.problem.title}
          description={sections.problem.description}
          items={sections.problem.items}
        />
      ) : null}

      {/* 4. System / Solution Flow */}
      {sections.system ? (
        sections.system.anchorId ? (
          <div id={sections.system.anchorId}>{systemBlock}</div>
        ) : (
          systemBlock
        )
      ) : null}

      {/* 5. Modules / Features */}
      {sections.features ? (
        <FeatureGrid
          tone="muted"
          spacing="default"
          title={sections.features.title}
          description={sections.features.description}
          items={sections.features.items}
        />
      ) : null}
      {sections.modules ? (
        <ModuleGrid
          tone={sections.features ? "default" : "muted"}
          spacing="compact"
          title={sections.modules.title}
          description={sections.modules.description}
          items={sections.modules.items}
          grouped={sections.modules.grouped ?? false}
        />
      ) : null}

      {/* 6. Proof (examples + outcomes + industry case teaser) */}
      {hasProof ? (
        <>
          {sections.useCases ? (
            <UseCaseFlow
              tone="muted"
              spacing="default"
              title={sections.useCases.title}
              description={sections.useCases.description}
              items={sections.useCases.items}
            />
          ) : null}
          {sections.proof ? (
            <OutcomeGrid
              tone="default"
              spacing="default"
              title={sections.proof.title}
              description={sections.proof.description}
              items={sections.proof.items}
            />
          ) : null}
          {page.kind === "industry" ? (
            <CaseStudyTeaser tone="muted" spacing="default" />
          ) : null}
        </>
      ) : null}

      {/* 7. FAQ */}
      {sections.faq?.items?.length ? (
        <Faq
          tone="muted"
          spacing="default"
          title={sections.faq.title ?? "Frequently asked questions"}
          description={sections.faq.description}
          items={sections.faq.items}
        />
      ) : null}

      {/* 8. CTA */}
      <CTA
        tone="muted"
        spacing="default"
        title={cta.title}
        description={cta.description}
        cta={cta.primary}
        secondaryCta={cta.secondary}
      />
    </>
  );
}
