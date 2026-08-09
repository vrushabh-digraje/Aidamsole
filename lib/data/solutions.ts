import type { IndustryFlowNode } from "@/lib/data/industries";

export type SolutionProblem = {
  title: string;
  description: string;
  icon:
    | "leakage"
    | "pipeline"
    | "delay"
    | "payment"
    | "reporting"
    | "accountability";
};

export type SolutionModule = {
  name: string;
  role: string;
};

export type SolutionStep = {
  number: string;
  title: string;
  description: string;
};

export type SolutionUseCase = {
  title: string;
  summary: string;
  steps: string[];
};

export type SolutionOutcome = {
  title: string;
  description: string;
};

export type SolutionPageData = {
  slug: string;
  name: string;
  hero: {
    headline: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  problems: {
    title: string;
    description: string;
    items: SolutionProblem[];
  };
  systemFlow: {
    title: string;
    description: string;
    nodes: IndustryFlowNode[];
  };
  modules: {
    title: string;
    description: string;
    items: SolutionModule[];
  };
  approach: {
    title: string;
    description: string;
    items: SolutionStep[];
  };
  useCases: {
    title: string;
    description: string;
    items: SolutionUseCase[];
  };
  outcomes: {
    title: string;
    description: string;
    items: SolutionOutcome[];
  };
  cta: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
};

export const solutions: SolutionPageData[] = [
  {
    slug: "sales-system",
    name: "Sales System",
    hero: {
      headline: "Structured CRM System for Sales Ownership and Pipeline Control",
      description:
        "Deals are lost when intake, stages, and follow-ups are not standardized. We design a CRM system that enforces ownership, next actions, and forecast data CEOs and sales heads can review weekly.",
      primaryCta: { label: "Book System Audit", href: "/contact" },
      secondaryCta: { label: "View Sales System", href: "#system-we-build" },
    },
    problems: {
      title: "Where sales process breaks",
      description:
        "These failures show up in missed targets before anyone blames the CRM. The process is undefined — the tool only exposes it.",
      items: [
        {
          icon: "leakage",
          title: "Leads scattered across WhatsApp, calls, and Excel",
          description:
            "Enquiries arrive from ads, referrals, and partners, then disappear into personal chats and sheets. No single owner, no first-response SLA.",
        },
        {
          icon: "pipeline",
          title: "No pipeline visibility",
          description:
            "Managers cannot see which deals are stuck, which stages are fake, or which reps are sitting on unqualified opportunities.",
        },
        {
          icon: "delay",
          title: "Follow-ups missed",
          description:
            "Next actions live in memory and chat reminders. Warm leads cool off because no system enforces the follow-up cadence.",
        },
        {
          icon: "accountability",
          title: "No accountability for the sales team",
          description:
            "Activity, aging, and conversion cannot be reviewed by owner. Coaching becomes opinion instead of operating data.",
        },
        {
          icon: "reporting",
          title: "No forecasting",
          description:
            "Leadership asks for a number and gets three versions. Forecast meetings become spreadsheet reconciliation sessions.",
        },
      ],
    },
    systemFlow: {
      title: "Sales system flow",
      description:
        "From enquiry capture to leadership reporting — designed as an operating path before Zoho is configured.",
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
          caption: "Assign ownership",
          icon: "crm",
        },
        {
          id: "pipeline",
          label: "Pipeline",
          caption: "Stage with exit rules",
          icon: "pipeline",
        },
        {
          id: "followups",
          label: "Follow-ups",
          caption: "Enforce next actions",
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
          caption: "Weekly operating view",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho modules in the sales system",
      description:
        "Each app owns a defined job. Configuration follows your sales process — not a default product checklist.",
      items: [
        {
          name: "CRM",
          role: "Pipeline and lead tracking — ownership, stages, activities, and deal health.",
        },
        {
          name: "Campaigns",
          role: "Email automation for nurture sequences on cold and stalled opportunities.",
        },
        {
          name: "SalesIQ",
          role: "Website and chat lead capture tied directly into CRM ownership.",
        },
        {
          name: "Analytics",
          role: "Reporting for conversion, aging, owner performance, and forecast views.",
        },
      ],
    },
    approach: {
      title: "Implementation method",
      description:
        "Design the sales operating rules first. Configure Zoho to enforce them second.",
      items: [
        {
          number: "01",
          title: "Business Process Mapping",
          description:
            "Document how leads move today — including Excel, WhatsApp, and skipped stages.",
        },
        {
          number: "02",
          title: "System Design",
          description:
            "Define ownership, stage exits, required fields, SLAs, and leadership metrics.",
        },
        {
          number: "03",
          title: "Zoho Configuration",
          description:
            "Build CRM, automation, and integrations so the designed process is the default path.",
        },
        {
          number: "04",
          title: "Team Training",
          description:
            "Train sales and managers on the operating rhythm — ownership, stages, and reviews.",
        },
        {
          number: "05",
          title: "Stabilization",
          description:
            "Tighten adoption, reporting, and handoffs until weekly reviews run from the system.",
        },
      ],
    },
    useCases: {
      title: "Sales workflows after go-live",
      description:
        "Concrete paths the team runs once ownership, stages, and reporting are enforced.",
      items: [
        {
          title: "Website lead to closed deal",
          summary:
            "A website enquiry becomes an owned CRM record, moves through enforced follow-ups, and updates leadership dashboards when the deal closes.",
          steps: [
            "Lead comes from website",
            "Auto-enters Zoho CRM",
            "Assigned to sales owner",
            "Follow-ups scheduled",
            "Deal tracked through pipeline",
            "Closed-won recorded",
            "Dashboard updated",
          ],
        },
        {
          title: "Missed follow-up recovery",
          summary:
            "Overdue activities surface to the sales head before the lead goes cold — accountability without chasing chat screenshots.",
          steps: [
            "Follow-up due date passes",
            "CRM flags overdue activity",
            "Owner receives reminder",
            "Sales head sees aging queue",
            "Next action logged",
            "Deal health restored",
          ],
        },
        {
          title: "Forecast from live pipeline",
          summary:
            "Leadership stops rebuilding forecasts in Excel. Weighted pipeline and stage health come from the same system sales works in.",
          steps: [
            "Reps update stage and next action",
            "Exit criteria block fake progression",
            "Analytics calculates forecast views",
            "Manager reviews by owner and stage",
            "CEO sees one trusted number",
          ],
        },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description:
        "Success is not CRM go-live. Success is control over revenue work.",
      items: [
        {
          title: "Owner and stage visibility",
          description:
            "Every open lead and deal has an owner, stage, and next action visible to managers.",
        },
        {
          title: "Lower lead leakage",
          description:
            "Capture and assignment rules stop enquiries from dying in WhatsApp and spreadsheets.",
        },
        {
          title: "Fewer stalled opportunities",
          description:
            "Follow-up cadence and stage exits reduce late responses and fake pipeline.",
        },
        {
          title: "Forecast from live pipeline",
          description:
            "Weekly reviews and forecasts run from Zoho Analytics — not reconstructed sheets.",
        },
      ],
    },
    cta: {
      title: "Design a sales system leadership can run",
      description:
        "A System Audit of lead intake, pipeline stages, follow-ups, and reporting — followed by a clear Zoho sales system design.",
      primary: { label: "Book System Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
];

export function getSolutionBySlug(slug: string): SolutionPageData | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}

export function getAllSolutions(): SolutionPageData[] {
  return solutions;
}
