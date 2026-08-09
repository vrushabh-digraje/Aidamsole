export type IndustryProblem = {
  title: string;
  description: string;
  icon: "leakage" | "pipeline" | "delay" | "payment" | "reporting";
};

export type IndustryModule = {
  name: string;
  role: string;
};

export type IndustryUseCase = {
  title: string;
  summary: string;
  steps: string[];
};

export type IndustryFlowNode = {
  id: string;
  label: string;
  caption: string;
  icon:
    | "lead"
    | "crm"
    | "deal"
    | "project"
    | "invoice"
    | "dashboard"
    | "pipeline"
    | "followup";
};

export type IndustryPageData = {
  slug: string;
  name: string;
  hero: {
    headline: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  problems: IndustryProblem[];
  systemFlow: {
    title: string;
    description: string;
    nodes: IndustryFlowNode[];
  };
  modules: {
    title: string;
    description: string;
    items: IndustryModule[];
  };
  useCases: {
    title: string;
    description: string;
    items: IndustryUseCase[];
  };
  cta: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
};

export const industries: IndustryPageData[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    hero: {
      headline: "Real estate sales, handover, and collections on one Zoho system",
      description:
        "Lead ownership, deal stages, project delays, and payment follow-ups structured for sales heads and promoters — with a leadership dashboard that replaces weekly spreadsheet rebuilds.",
      ctaLabel: "Book System Audit",
      ctaHref: "/contact",
    },
    problems: [
      {
        icon: "leakage",
        title: "Lead leakage across WhatsApp and brokers",
        description:
          "Portal, walk-in, and channel enquiries land in chats and personal sheets. The same buyer gets contacted twice — or not at all — because ownership is never enforced.",
      },
      {
        icon: "pipeline",
        title: "No visibility on deal stages",
        description:
          "Site visit, negotiation, and booking status live in sales memory. Managers cannot see which deals are stuck, overdue, or falsely marked warm.",
      },
      {
        icon: "delay",
        title: "Project delays not tracked",
        description:
          "After booking, handover tasks scatter across email and site teams. Slippage surfaces only when the customer escalates.",
      },
      {
        icon: "payment",
        title: "Payment follow-ups are manual",
        description:
          "Collections depend on someone remembering installment dates. Finance rebuilds payment status outside the sales record.",
      },
      {
        icon: "reporting",
        title: "No centralized reporting",
        description:
          "Leadership reviews pull conflicting numbers from CRM exports, Excel trackers, and broker updates. Decisions wait on reconciliation.",
      },
    ],
    systemFlow: {
      title: "Real estate operating flow",
      description:
        "From enquiry to leadership reporting — designed as one process before Zoho modules are configured.",
      nodes: [
        {
          id: "lead-capture",
          label: "Lead Capture",
          caption: "Portals, ads, brokers",
          icon: "lead",
        },
        {
          id: "crm",
          label: "CRM",
          caption: "Owner & first response",
          icon: "crm",
        },
        {
          id: "deal-pipeline",
          label: "Deal Pipeline",
          caption: "Visit to booking",
          icon: "deal",
        },
        {
          id: "project",
          label: "Project",
          caption: "Handover execution",
          icon: "project",
        },
        {
          id: "finance",
          label: "Finance",
          caption: "Invoices & collections",
          icon: "invoice",
        },
        {
          id: "dashboard",
          label: "Dashboard",
          caption: "Leadership review",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho module mapping",
      description:
        "Each app owns a job in the operating flow. Configuration follows process design — not a suite checklist.",
      items: [
        {
          name: "CRM",
          role: "Lead and sales tracking — ownership, site visits, deal stages, and broker source.",
        },
        {
          name: "Books",
          role: "Invoicing and payments — installment schedules tied to the booked unit.",
        },
        {
          name: "Projects",
          role: "Execution tracking — handover tasks, site dependencies, and delay visibility.",
        },
        {
          name: "Analytics",
          role: "Reporting dashboard — conversion, overdue visits, collections, and channel performance.",
        },
      ],
    },
    useCases: {
      title: "Real estate workflows after go-live",
      description:
        "Concrete paths from enquiry to invoice once ownership, stages, and handoffs are enforced.",
      items: [
        {
          title: "Meta Ads lead to invoice",
          summary:
            "Paid enquiry becomes an owned CRM record, moves through the sales pipeline, opens a handover project, and generates the booking invoice without spreadsheet rebuilds.",
          steps: [
            "Lead comes from Meta Ads",
            "Auto-enters Zoho CRM",
            "Assigned to sales owner",
            "Deal tracked through visit and negotiation",
            "Converted to booking",
            "Project created for handover",
            "Invoice generated in Books",
          ],
        },
        {
          title: "Broker channel accountability",
          summary:
            "Every broker enquiry carries source and owner so sales heads can review response time and conversion by channel in one dashboard.",
          steps: [
            "Broker shares buyer enquiry",
            "CRM record created with partner source",
            "Owner assignment and first-response SLA start",
            "Site visit logged as completed or overdue",
            "Conversion attributed to the channel",
            "Leadership reviews partner performance",
          ],
        },
        {
          title: "Booking to payment follow-up",
          summary:
            "Finance stops chasing status in chat. Installment reminders and collection visibility stay linked to the closed deal.",
          steps: [
            "Unit marked booked in CRM",
            "Payment schedule created in Books",
            "Due date reminders triggered",
            "Collection status visible to sales and finance",
            "Overdue installments appear on the dashboard",
          ],
        },
      ],
    },
    cta: {
      title: "Design a real estate operating system",
      description:
        "A System Audit of lead intake, deal stages, handover tracking, and payment follow-ups — followed by a Zoho system design for your team.",
      label: "Book System Audit",
      href: "/contact",
    },
  },
];

export function getIndustryBySlug(slug: string): IndustryPageData | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}

export function getAllIndustries(): IndustryPageData[] {
  return industries;
}
