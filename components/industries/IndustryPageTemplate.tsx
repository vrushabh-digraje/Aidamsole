import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { ProblemGrid } from "@/components/sections/ProblemGrid";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { UseCaseFlow } from "@/components/sections/UseCaseFlow";
import type { IndustryPageData } from "@/lib/data/industries";

type IndustryPageTemplateProps = {
  industry: IndustryPageData;
};

export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  return (
    <>
      <Hero
        tone="default"
        spacing="prominent"
        eyebrow={`Industry · ${industry.name}`}
        title={industry.hero.headline}
        description={industry.hero.description}
        primaryCta={{
          href: industry.hero.ctaHref,
          label: industry.hero.ctaLabel,
        }}
        secondaryCta={{
          href: "/industries",
          label: "All Industries",
        }}
        aside={
          <SystemFlow
            showSectionChrome={false}
            nodes={industry.systemFlow.nodes}
          />
        }
      />

      <ProblemGrid
        tone="muted"
        spacing="default"
        title={`${industry.name} operating failures`}
        description="Process gaps sales heads and promoters see before any discussion of Zoho modules."
        items={industry.problems}
      />

      <SystemFlow
        tone="default"
        spacing="prominent"
        title={industry.systemFlow.title}
        description={industry.systemFlow.description}
        nodes={industry.systemFlow.nodes}
      />

      <ModuleGrid
        tone="muted"
        spacing="compact"
        title={industry.modules.title}
        description={industry.modules.description}
        items={industry.modules.items}
      />

      <UseCaseFlow
        tone="default"
        spacing="default"
        title={industry.useCases.title}
        description={industry.useCases.description}
        items={industry.useCases.items}
      />

      <CTA
        tone="muted"
        spacing="default"
        title={industry.cta.title}
        description={industry.cta.description}
        cta={{ href: industry.cta.href, label: industry.cta.label }}
      />
    </>
  );
}
