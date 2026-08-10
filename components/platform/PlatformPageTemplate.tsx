import { MarketingPageTemplate } from "@/components/templates/MarketingPageTemplate";
import { platformToMarketingPage } from "@/lib/marketing";
import type { PlatformPageData } from "@/lib/data/platform";

type PlatformPageTemplateProps = {
  platform: PlatformPageData;
};

/** @deprecated Prefer MarketingPageTemplate + platformToMarketingPage */
export function PlatformPageTemplate({ platform }: PlatformPageTemplateProps) {
  return <MarketingPageTemplate page={platformToMarketingPage(platform)} />;
}
