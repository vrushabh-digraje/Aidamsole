import { MarketingPageTemplate } from "@/components/templates/MarketingPageTemplate";
import { industryToMarketingPage } from "@/lib/marketing";
import type { IndustryPageData } from "@/lib/data/industries";

type IndustryPageTemplateProps = {
  industry: IndustryPageData;
};

/** @deprecated Prefer MarketingPageTemplate + industryToMarketingPage */
export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  return <MarketingPageTemplate page={industryToMarketingPage(industry)} />;
}
