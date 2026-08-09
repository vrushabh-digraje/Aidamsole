import type { SystemFlowNode } from "@/components/sections/SystemFlow";
import type { FeatureGridItem } from "@/components/sections/FeatureGrid";
import type { IntegrationFlowConnection } from "@/components/sections/IntegrationFlow";
import type { StepsFlowItem } from "@/components/sections/StepsFlow";
import type { UseCaseFlowItem } from "@/components/sections/UseCaseFlow";
import type { OutcomeGridItem } from "@/components/sections/OutcomeGrid";

export type PlatformPageData = {
  slug: string;
  name: string;
  productName: string;
  hero: {
    headline: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  systemFlow: {
    title: string;
    description: string;
    highlightId: string;
    nodes: SystemFlowNode[];
  };
  features: {
    title: string;
    description: string;
    items: FeatureGridItem[];
  };
  implementation: {
    title: string;
    description: string;
    items: StepsFlowItem[];
  };
  useCases: {
    title: string;
    description: string;
    items: UseCaseFlowItem[];
  };
  integrations: {
    title: string;
    description: string;
    hub: { name: string; role: string };
    connections: IntegrationFlowConnection[];
  };
  outcomes: {
    title: string;
    description: string;
    items: OutcomeGridItem[];
  };
  cta: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
};

export const platforms: PlatformPageData[] = [
  {
    slug: "crm",
    name: "CRM",
    productName: "Zoho CRM",
    hero: {
      headline: "Zoho CRM configured as the sales system of record",
      description:
        "Modules, stages, automation, and reporting designed to match how your company sells. CEOs and sales heads get ownership, pipeline status, and forecast data they can review every week.",
      primaryCta: { label: "Book CRM Setup Audit", href: "/contact" },
      secondaryCta: { label: "View CRM System", href: "#platform-system" },
    },
    systemFlow: {
      title: "CRM in the operating flow",
      description:
        "CRM is the ownership layer between enquiry capture and delivery. Assignment, pipeline, follow-ups, and close are designed around this hub.",
      highlightId: "crm",
      nodes: [
        {
          id: "lead",
          label: "Lead",
          caption: "Capture every enquiry",
          icon: "lead",
        },
        {
          id: "crm",
          label: "CRM",
          caption: "Own, stage, enforce",
          icon: "crm",
        },
        {
          id: "pipeline",
          label: "Pipeline",
          caption: "Exit criteria per stage",
          icon: "pipeline",
        },
        {
          id: "followups",
          label: "Follow-ups",
          caption: "Next-action discipline",
          icon: "followup",
        },
        {
          id: "deal",
          label: "Deal",
          caption: "Close with context",
          icon: "deal",
        },
        {
          id: "reporting",
          label: "Reporting",
          caption: "Leadership visibility",
          icon: "dashboard",
        },
      ],
    },
    features: {
      title: "Business jobs Zoho CRM performs",
      description:
        "Operating responsibilities CRM must carry once configured around your sales process — not a product feature list.",
      items: [
        {
          icon: "track",
          title: "Tracks every lead from source to closure",
          description:
            "Web, ads, partners, and referrals enter with source, owner, and status — nothing stays only in WhatsApp or a personal sheet.",
        },
        {
          icon: "followup",
          title: "Enforces follow-up cadence",
          description:
            "Activities, reminders, and overdue queues define the next action. Warm leads do not cool because someone forgot to call.",
        },
        {
          icon: "pipeline",
          title: "Exposes pipeline stage health",
          description:
            "Sales heads see aging and false progression in one view — without rebuilding the pipeline before every review.",
        },
        {
          icon: "forecast",
          title: "Produces forecast from live pipeline",
          description:
            "Weighted pipeline and conversion data come from the same system reps work in — forecast meetings stop reconciling spreadsheets.",
        },
      ],
    },
    implementation: {
      title: "CRM implementation method",
      description:
        "Sales operating rules are designed first. Zoho CRM is configured to enforce them second.",
      items: [
        {
          number: "01",
          title: "Requirement mapping",
          description:
            "Document intake channels, owners, handoffs, and where deals currently die.",
        },
        {
          number: "02",
          title: "Pipeline design",
          description:
            "Define stages, exit criteria, required fields, and what qualified means for the business.",
        },
        {
          number: "03",
          title: "Automation setup",
          description:
            "Build assignment rules, follow-up reminders, and stage triggers that remove chase work.",
        },
        {
          number: "04",
          title: "Role-based access",
          description:
            "Layouts and permissions for reps, managers, and leadership that match how they work.",
        },
        {
          number: "05",
          title: "Reporting dashboards",
          description:
            "Pipeline, aging, conversion, and forecast views so weekly reviews run from the system.",
        },
      ],
    },
    useCases: {
      title: "CRM workflows after go-live",
      description:
        "Concrete paths from ad capture to conversion reporting once ownership and stages are enforced.",
      items: [
        {
          title: "Meta Ads lead to conversion reporting",
          summary:
            "A paid lead is captured, owned, worked through enforced follow-ups, moved through deal stages, and lands in leadership reporting without spreadsheet reconstruction.",
          steps: [
            "Meta Ads lead arrives",
            "Auto-captured into Zoho CRM",
            "Assigned to sales owner",
            "Follow-up reminders fired",
            "Deal stage tracked",
            "Closed-won recorded",
            "Conversion reporting updated",
          ],
        },
        {
          title: "Website enquiry with SLA ownership",
          summary:
            "First-response accountability is system-enforced. Managers see late responses before the lead is lost to a competitor.",
          steps: [
            "Form submission captured",
            "Duplicate check runs",
            "Owner assigned by rule",
            "First-response SLA starts",
            "Overdue queue alerts manager",
            "Next action logged before stage move",
          ],
        },
        {
          title: "Weekly pipeline operating rhythm",
          summary:
            "Sales heads stop asking for updates in chat. The CRM becomes the single source for stage reviews and coaching.",
          steps: [
            "Reps update stage and next action",
            "Exit criteria block empty progression",
            "Aging and stuck deals surface",
            "Manager reviews by owner",
            "Forecast confidence discussed from live data",
          ],
        },
      ],
    },
    integrations: {
      title: "CRM connections across the Zoho stack",
      description:
        "Commercial context must flow into finance, delivery, nurture, and analytics — without retyping the deal in chat.",
      hub: {
        name: "CRM",
        role: "System of record for leads, ownership, pipeline stages, and closed-won context.",
      },
      connections: [
        {
          name: "Books",
          role: "Quotes, invoices, and payment status linked to the won opportunity.",
        },
        {
          name: "Projects",
          role: "Delivery kickoff inherits scope and commercial context from close-won.",
        },
        {
          name: "Campaigns",
          role: "Nurture sequences for stalled and cold opportunities tied to CRM stage.",
        },
        {
          name: "Analytics",
          role: "Pipeline, conversion, leakage, and forecast dashboards on live CRM data.",
        },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description:
        "Success is not CRM configured. Success is control over revenue work.",
      items: [
        {
          title: "Owner and stage visibility",
          description:
            "Every open lead and deal has an owner, stage, and next action without chasing updates.",
        },
        {
          title: "Lower lead leakage",
          description:
            "Capture, assignment, and follow-up rules stop enquiries from dying in WhatsApp and Excel.",
        },
        {
          title: "Source-to-close tracking",
          description:
            "Stage conversion becomes measurable, so coaching targets real bottlenecks.",
        },
        {
          title: "Reviews from system data",
          description:
            "Forecasts and operating reviews run from Analytics wired to CRM — not reconstructed sheets.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho CRM as a sales operating system",
      description:
        "A CRM Setup Audit of intake, pipeline design, automation, access, and reporting — followed by a clear implementation path.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
];

export function getPlatformBySlug(slug: string): PlatformPageData | undefined {
  return platforms.find((platform) => platform.slug === slug);
}

export function getPlatformSlugs(): string[] {
  return platforms.map((platform) => platform.slug);
}

export function getAllPlatforms(): PlatformPageData[] {
  return platforms;
}
