import { CTA } from "@/components/sections/CTA";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { IntegrationFlow } from "@/components/sections/IntegrationFlow";
import { OutcomeGrid } from "@/components/sections/OutcomeGrid";
import { StepsFlow } from "@/components/sections/StepsFlow";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { UseCaseFlow } from "@/components/sections/UseCaseFlow";
import type { PlatformPageData } from "@/lib/data/platform";

type PlatformPageTemplateProps = {
  platform: PlatformPageData;
};

export function PlatformPageTemplate({ platform }: PlatformPageTemplateProps) {
  return (
    <>
      <Hero
        tone="default"
        spacing="prominent"
        eyebrow={`Platform · ${platform.productName}`}
        title={platform.hero.headline}
        description={platform.hero.description}
        primaryCta={platform.hero.primaryCta}
        secondaryCta={platform.hero.secondaryCta}
        aside={
          <SystemFlow
            showSectionChrome={false}
            highlightId={platform.systemFlow.highlightId}
            nodes={platform.systemFlow.nodes}
          />
        }
      />

      <FeatureGrid
        tone="muted"
        spacing="default"
        title={platform.features.title}
        description={platform.features.description}
        items={platform.features.items}
      />

      <div id="platform-system">
        <SystemFlow
          tone="default"
          spacing="prominent"
          title={platform.systemFlow.title}
          description={platform.systemFlow.description}
          highlightId={platform.systemFlow.highlightId}
          nodes={platform.systemFlow.nodes}
        />
      </div>

      <StepsFlow
        tone="muted"
        spacing="default"
        title={platform.implementation.title}
        description={platform.implementation.description}
        items={platform.implementation.items}
      />

      <UseCaseFlow
        tone="default"
        spacing="default"
        title={platform.useCases.title}
        description={platform.useCases.description}
        items={platform.useCases.items}
      />

      <IntegrationFlow
        tone="muted"
        spacing="default"
        title={platform.integrations.title}
        description={platform.integrations.description}
        hub={platform.integrations.hub}
        connections={platform.integrations.connections}
      />

      <OutcomeGrid
        tone="default"
        spacing="compact"
        title={platform.outcomes.title}
        description={platform.outcomes.description}
        items={platform.outcomes.items}
      />

      <CTA
        tone="muted"
        spacing="default"
        title={platform.cta.title}
        description={platform.cta.description}
        cta={platform.cta.primary}
        secondaryCta={platform.cta.secondary}
      />
    </>
  );
}
