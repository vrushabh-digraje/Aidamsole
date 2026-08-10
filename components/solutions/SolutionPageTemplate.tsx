import { MarketingPageTemplate } from "@/components/templates/MarketingPageTemplate";
import { solutionToMarketingPage } from "@/lib/marketing";
import type { SolutionPageData } from "@/lib/data/solutions";

type SolutionPageTemplateProps = {
  solution: SolutionPageData;
};

/** @deprecated Prefer MarketingPageTemplate + solutionToMarketingPage */
export function SolutionPageTemplate({ solution }: SolutionPageTemplateProps) {
  return <MarketingPageTemplate page={solutionToMarketingPage(solution)} />;
}
