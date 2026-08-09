import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { OutcomeGrid } from "@/components/sections/OutcomeGrid";
import { ProblemGrid } from "@/components/sections/ProblemGrid";
import { StepsFlow } from "@/components/sections/StepsFlow";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { UseCaseFlow } from "@/components/sections/UseCaseFlow";
import type { SolutionPageData } from "@/lib/data/solutions";

type SolutionPageTemplateProps = {
  solution: SolutionPageData;
};

export function SolutionPageTemplate({ solution }: SolutionPageTemplateProps) {
  return (
    <>
      <Hero
        tone="default"
        spacing="prominent"
        eyebrow={`Solution · ${solution.name}`}
        title={solution.hero.headline}
        description={solution.hero.description}
        primaryCta={solution.hero.primaryCta}
        secondaryCta={solution.hero.secondaryCta}
        aside={
          <SystemFlow
            showSectionChrome={false}
            nodes={solution.systemFlow.nodes}
          />
        }
      />

      <ProblemGrid
        tone="muted"
        spacing="default"
        title={solution.problems.title}
        description={solution.problems.description}
        items={solution.problems.items}
      />

      <div id="system-we-build">
        <SystemFlow
          tone="default"
          spacing="prominent"
          title={solution.systemFlow.title}
          description={solution.systemFlow.description}
          nodes={solution.systemFlow.nodes}
        />
      </div>

      <ModuleGrid
        tone="muted"
        spacing="compact"
        title={solution.modules.title}
        description={solution.modules.description}
        items={solution.modules.items}
      />

      <StepsFlow
        tone="default"
        spacing="default"
        title={solution.approach.title}
        description={solution.approach.description}
        items={solution.approach.items}
      />

      <UseCaseFlow
        tone="muted"
        spacing="default"
        title={solution.useCases.title}
        description={solution.useCases.description}
        items={solution.useCases.items}
      />

      <OutcomeGrid
        tone="default"
        spacing="default"
        title={solution.outcomes.title}
        description={solution.outcomes.description}
        items={solution.outcomes.items}
      />

      <CTA
        tone="muted"
        spacing="default"
        title={solution.cta.title}
        description={solution.cta.description}
        cta={solution.cta.primary}
        secondaryCta={solution.cta.secondary}
      />
    </>
  );
}
