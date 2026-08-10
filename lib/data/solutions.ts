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
  published: boolean;
  seo?: {
    title: string;
    description: string;
  };
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
    published: true,
    seo: {
      title: "Zoho Sales System",
      description:
        "Structured Zoho CRM sales system for ownership, pipeline control, and follow-up discipline.",
    },
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
  {
    slug: "operations-system",
    name: "Operations System",
    published: true,
    seo: {
      title: "Zoho Operations System | Orders & Inventory",
      description:
        "Zoho operations system for order status, inventory handoffs, and fulfillment visibility — process first, then configuration.",
    },
    hero: {
      headline: "Order, stock, and fulfillment control on one Zoho system",
      description:
        "Quotes stop disappearing after confirmation. Order stages, stock handoffs, and dispatch status stay visible so operations and sales stop chasing WhatsApp updates.",
      primaryCta: { label: "Book System Audit", href: "/contact" },
      secondaryCta: { label: "View Operations System", href: "#system-we-build" },
    },
    problems: {
      title: "Where operations break",
      description:
        "These failures show up as late dispatches and angry dealers before anyone blames the tools.",
      items: [
        {
          icon: "leakage",
          title: "Confirmed orders leave the sales record",
          description:
            "Once a quote is accepted, execution details live in sheets and chats. Nobody owns the next operational step.",
        },
        {
          icon: "pipeline",
          title: "Stock and order status disagree",
          description:
            "Sales promises availability operations cannot see. Over-commits and stockouts appear only at dispatch.",
        },
        {
          icon: "delay",
          title: "Fulfillment aging is invisible",
          description:
            "Managers cannot see which orders are stuck between packing, transport, and delivery confirmation.",
        },
        {
          icon: "accountability",
          title: "No named owner after confirmation",
          description:
            "Handoffs between sales, warehouse, and logistics have no enforced owner or SLA.",
        },
        {
          icon: "reporting",
          title: "Leadership rebuilds OTIF from Excel",
          description:
            "Weekly reviews reconcile conflicting order and stock exports instead of running from one system.",
        },
      ],
    },
    systemFlow: {
      title: "Operations system flow",
      description:
        "From confirmed demand to fulfillment reporting — designed before Zoho apps are configured.",
      nodes: [
        {
          id: "lead",
          label: "Order",
          caption: "Confirmed demand",
          icon: "deal",
        },
        {
          id: "crm",
          label: "CRM",
          caption: "Commercial context",
          icon: "crm",
        },
        {
          id: "pipeline",
          label: "Inventory",
          caption: "Stock check",
          icon: "pipeline",
        },
        {
          id: "followups",
          label: "Fulfill",
          caption: "Pick & dispatch",
          icon: "project",
        },
        {
          id: "deal",
          label: "Invoice",
          caption: "Books handoff",
          icon: "invoice",
        },
        {
          id: "reporting",
          label: "Reporting",
          caption: "OTIF & aging",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho modules in the operations system",
      description:
        "Each app owns a defined job across order-to-fulfillment.",
      items: [
        {
          name: "CRM",
          role: "Order confirmation context, customer terms, and commercial owner.",
        },
        {
          name: "Inventory",
          role: "Stock levels, reservations, and warehouse movement against demand.",
        },
        {
          name: "Books",
          role: "Invoices and credit notes tied to dispatched orders.",
        },
        {
          name: "Analytics",
          role: "Fulfillment aging, fill rate, and exception dashboards.",
        },
      ],
    },
    approach: {
      title: "Implementation method",
      description:
        "Design the operating rules first. Configure Zoho to enforce them second.",
      items: [
        {
          number: "01",
          title: "Business Process Mapping",
          description:
            "Document how orders move today — including Excel, WhatsApp, and skipped stages.",
        },
        {
          number: "02",
          title: "System Design",
          description:
            "Define ownership, stock rules, dispatch stages, SLAs, and leadership metrics.",
        },
        {
          number: "03",
          title: "Zoho Configuration",
          description:
            "Build CRM, Inventory, Books, and integrations so the designed process is the default path.",
        },
        {
          number: "04",
          title: "Team Training",
          description:
            "Train sales, warehouse, and ops leads on order stages and exception handling.",
        },
        {
          number: "05",
          title: "Stabilization",
          description:
            "Tighten adoption and reporting until weekly ops reviews run from the system.",
        },
      ],
    },
    useCases: {
      title: "Operations workflows after go-live",
      description:
        "Concrete paths once order stages, stock checks, and dispatch ownership are enforced.",
      items: [
        {
          title: "Confirmed order to dispatch",
          summary:
            "Accepted demand becomes a staged fulfillment record with stock check and named dispatch owner.",
          steps: [
            "Order confirmed in CRM",
            "Stock reserved in Inventory",
            "Pick list released",
            "Dispatch status updated",
            "Invoice triggered in Books",
          ],
        },
        {
          title: "Stock exception early flag",
          summary:
            "Shortages surface before the customer asks why the truck never left.",
          steps: [
            "Reservation fails on SKU",
            "Exception assigned to ops owner",
            "Sales sees blocked status",
            "Recovery or partial ship decided",
          ],
        },
        {
          title: "OTIF from live orders",
          summary:
            "Leadership stops rebuilding on-time metrics from warehouse sheets.",
          steps: [
            "Dispatch and delivery dates logged",
            "Analytics calculates aging and OTIF",
            "Exceptions reviewed weekly",
            "One trusted ops number",
          ],
        },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description:
        "Success is not Inventory go-live. Success is control over fulfillment work.",
      items: [
        {
          title: "Order stage visibility",
          description:
            "Every confirmed order has a stage, owner, and next action visible to ops and sales.",
        },
        {
          title: "Fewer over-commits",
          description:
            "Stock checks sit in the path before promises leave the building.",
        },
        {
          title: "Faster exception recovery",
          description:
            "Blocked orders surface with owners instead of disappearing into chat.",
        },
        {
          title: "OTIF from the system",
          description:
            "Weekly ops reviews run from Analytics — not reconstructed sheets.",
        },
      ],
    },
    cta: {
      title: "Design an operations system leadership can run",
      description:
        "A System Audit of order stages, stock handoffs, dispatch ownership, and reporting — followed by a clear Zoho operations design.",
      primary: { label: "Book System Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "support-system",
    name: "Support System",
    published: true,
    seo: {
      title: "Zoho Support System | Desk & SLA",
      description:
        "Zoho support system for ticket ownership, SLA discipline, and account-linked service — process first, then Desk configuration.",
    },
    hero: {
      headline: "Ticket ownership and SLA control on one Zoho system",
      description:
        "Support stops living in shared inboxes. Every request has an owner, SLA clock, and account context so breaches are visible before the client escalates.",
      primaryCta: { label: "Book System Audit", href: "/contact" },
      secondaryCta: { label: "View Support System", href: "#system-we-build" },
    },
    problems: {
      title: "Where support process breaks",
      description:
        "These failures show up as escalations and churn risk before anyone blames Desk.",
      items: [
        {
          icon: "leakage",
          title: "Requests trapped in email and WhatsApp",
          description:
            "Customer issues arrive in personal channels. Nothing guarantees capture into a ticket with an owner.",
        },
        {
          icon: "pipeline",
          title: "No queue visibility by priority",
          description:
            "Managers cannot see aging, priority mix, or who is overloaded until a complaint lands.",
        },
        {
          icon: "delay",
          title: "SLAs exist only on paper",
          description:
            "Response and resolution targets are written in contracts, not enforced in the work queue.",
        },
        {
          icon: "accountability",
          title: "Account context missing from tickets",
          description:
            "Agents lack commercial and delivery history, so answers restart from zero every time.",
        },
        {
          icon: "reporting",
          title: "Leadership cannot trust support metrics",
          description:
            "Weekly reviews rebuild CSAT and breach counts from exports that disagree.",
        },
      ],
    },
    systemFlow: {
      title: "Support system flow",
      description:
        "From intake to account health — designed as an operating path before Zoho Desk is configured.",
      nodes: [
        {
          id: "lead",
          label: "Request",
          caption: "Email, chat, portal",
          icon: "lead",
        },
        {
          id: "crm",
          label: "Desk",
          caption: "Ticket + owner",
          icon: "crm",
        },
        {
          id: "pipeline",
          label: "Triage",
          caption: "Priority & SLA",
          icon: "pipeline",
        },
        {
          id: "followups",
          label: "Resolve",
          caption: "Work + updates",
          icon: "followup",
        },
        {
          id: "deal",
          label: "Account",
          caption: "CRM context",
          icon: "deal",
        },
        {
          id: "reporting",
          label: "Reporting",
          caption: "Breaches & CSAT",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho modules in the support system",
      description:
        "Each app owns a defined job across service intake and account health.",
      items: [
        {
          name: "Desk",
          role: "Ticket capture, ownership, SLA clocks, and agent queues.",
        },
        {
          name: "CRM",
          role: "Account and commercial context linked to every ticket.",
        },
        {
          name: "Projects",
          role: "Larger remediation work spawned from repeated or complex issues.",
        },
        {
          name: "Analytics",
          role: "Breach, volume, and agent performance views for weekly reviews.",
        },
      ],
    },
    approach: {
      title: "Implementation method",
      description:
        "Design the support operating rules first. Configure Zoho to enforce them second.",
      items: [
        {
          number: "01",
          title: "Business Process Mapping",
          description:
            "Document how requests move today — including shared inboxes and informal escalations.",
        },
        {
          number: "02",
          title: "System Design",
          description:
            "Define channels, priority rules, SLA targets, ownership, and leadership metrics.",
        },
        {
          number: "03",
          title: "Zoho Configuration",
          description:
            "Build Desk, CRM links, automation, and reporting so the designed process is default.",
        },
        {
          number: "04",
          title: "Team Training",
          description:
            "Train agents and managers on triage, SLA handling, and account-linked replies.",
        },
        {
          number: "05",
          title: "Stabilization",
          description:
            "Tighten adoption until weekly support reviews run from the system.",
        },
      ],
    },
    useCases: {
      title: "Support workflows after go-live",
      description:
        "Concrete paths once intake, ownership, and SLAs are enforced.",
      items: [
        {
          title: "Email request to owned ticket",
          summary:
            "Inbound mail becomes a ticket with priority, SLA, and account link — not a buried thread.",
          steps: [
            "Email captured into Desk",
            "Account matched from CRM",
            "Owner and priority assigned",
            "SLA clock starts",
            "Customer receives first response",
          ],
        },
        {
          title: "SLA breach prevention",
          summary:
            "Aging tickets escalate to managers before the contractual breach.",
          steps: [
            "Ticket approaches SLA threshold",
            "System alerts owner and lead",
            "Reassignment or priority bump",
            "Resolution logged",
            "Dashboard updates",
          ],
        },
        {
          title: "Repeat issue to remediation project",
          summary:
            "Chronic problems leave the ticket pile and become owned delivery work.",
          steps: [
            "Repeat pattern flagged",
            "Project opened from Desk/CRM context",
            "Remediation owner assigned",
            "Ticket linked to project",
            "Account risk reduced on review",
          ],
        },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description:
        "Success is not Desk go-live. Success is control over service work.",
      items: [
        {
          title: "Owned queue visibility",
          description:
            "Every open request has an owner, priority, and SLA status managers can review.",
        },
        {
          title: "Fewer silent breaches",
          description:
            "Aging and threshold alerts surface risk before the client escalates.",
        },
        {
          title: "Account-aware replies",
          description:
            "Agents answer with commercial and delivery context instead of restarting discovery.",
        },
        {
          title: "Support metrics from one system",
          description:
            "Weekly reviews run from Analytics — not conflicting mailbox exports.",
        },
      ],
    },
    cta: {
      title: "Design a support system leadership can run",
      description:
        "A System Audit of intake channels, SLA rules, ownership, and reporting — followed by a clear Zoho support system design.",
      primary: { label: "Book System Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "finance-operations",
    name: "Finance Operations",
    published: true,
    seo: {
      title: "Zoho Finance Operations | Books & Collections",
      description:
        "Zoho finance operations for invoicing, collections, and dues visibility linked to sales and delivery — process first, then Books.",
    },
    hero: {
      headline: "Invoicing and collections control on one Zoho system",
      description:
        "Finance stops chasing status in chat. Invoices, reminders, and aging stay linked to the commercial record sales and delivery already work in.",
      primaryCta: { label: "Book System Audit", href: "/contact" },
      secondaryCta: {
        label: "View Finance Operations",
        href: "#system-we-build",
      },
    },
    problems: {
      title: "Where finance operations break",
      description:
        "These failures show up as cash delays before anyone blames accounting software.",
      items: [
        {
          icon: "leakage",
          title: "Invoices wait on manual reminders",
          description:
            "Someone has to remember to raise the bill after a milestone or dispatch. Delays are normal, not exceptional.",
        },
        {
          icon: "pipeline",
          title: "Collections disconnected from deals",
          description:
            "Outstanding dues live in Books while sales works from CRM. Neither side sees the full story.",
        },
        {
          icon: "delay",
          title: "Aging is reviewed too late",
          description:
            "Overdue invoices surface in month-end panic instead of weekly operating reviews.",
        },
        {
          icon: "accountability",
          title: "No clear owner for follow-up",
          description:
            "Sales, finance, and ops disagree on who chases which customer and when.",
        },
        {
          icon: "reporting",
          title: "Cash views rebuilt from exports",
          description:
            "Leadership cannot trust receivables because CRM, Books, and Excel disagree.",
        },
      ],
    },
    systemFlow: {
      title: "Finance operations flow",
      description:
        "From billable event to cash visibility — designed before Zoho Books is configured.",
      nodes: [
        {
          id: "lead",
          label: "Billable",
          caption: "Deal / milestone",
          icon: "deal",
        },
        {
          id: "crm",
          label: "CRM",
          caption: "Commercial truth",
          icon: "crm",
        },
        {
          id: "pipeline",
          label: "Invoice",
          caption: "Books raise",
          icon: "invoice",
        },
        {
          id: "followups",
          label: "Collect",
          caption: "Reminders & owner",
          icon: "followup",
        },
        {
          id: "deal",
          label: "Reconcile",
          caption: "Payments applied",
          icon: "pipeline",
        },
        {
          id: "reporting",
          label: "Aging",
          caption: "Leadership view",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho modules in finance operations",
      description:
        "Each app owns a defined job across invoice-to-cash.",
      items: [
        {
          name: "Books",
          role: "Invoices, credit notes, payment recording, and customer statements.",
        },
        {
          name: "CRM",
          role: "Deal and customer context that explains what should be billed.",
        },
        {
          name: "Inventory",
          role: "Dispatch-triggered billing for product and distribution teams.",
        },
        {
          name: "Analytics",
          role: "Aging, DSO, and owner follow-up dashboards for weekly cash reviews.",
        },
      ],
    },
    approach: {
      title: "Implementation method",
      description:
        "Design invoice-to-cash rules first. Configure Zoho to enforce them second.",
      items: [
        {
          number: "01",
          title: "Business Process Mapping",
          description:
            "Document how billing and collections move today — including chat chasing and spreadsheet trackers.",
        },
        {
          number: "02",
          title: "System Design",
          description:
            "Define billable triggers, reminder cadence, owners, and leadership aging metrics.",
        },
        {
          number: "03",
          title: "Zoho Configuration",
          description:
            "Build Books, CRM links, automation, and reporting so the designed process is default.",
        },
        {
          number: "04",
          title: "Team Training",
          description:
            "Train finance and sales on shared dues views and follow-up ownership.",
        },
        {
          number: "05",
          title: "Stabilization",
          description:
            "Tighten adoption until weekly cash reviews run from the system.",
        },
      ],
    },
    useCases: {
      title: "Finance workflows after go-live",
      description:
        "Concrete paths once billing triggers and collection ownership are enforced.",
      items: [
        {
          title: "Milestone to invoice",
          summary:
            "Completed delivery milestones raise invoices without waiting on a manual reminder.",
          steps: [
            "Milestone marked complete",
            "Invoice created in Books",
            "Customer notified",
            "Dues visible to sales and finance",
          ],
        },
        {
          title: "Overdue collection cadence",
          summary:
            "Aging buckets drive owned follow-ups instead of ad-hoc WhatsApp pings.",
          steps: [
            "Invoice crosses due date",
            "Reminder sequence starts",
            "Owner assigned for chase",
            "Promise-to-pay logged",
            "Aging dashboard updates",
          ],
        },
        {
          title: "Cash view for leadership",
          summary:
            "One receivables picture for the weekly operating review.",
          steps: [
            "Payments applied in Books",
            "Analytics refreshes aging",
            "Exceptions reviewed by owner",
            "CEO sees one trusted cash view",
          ],
        },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description:
        "Success is not Books go-live. Success is control over invoice-to-cash work.",
      items: [
        {
          title: "Faster invoice release",
          description:
            "Billable events trigger invoices instead of waiting on memory.",
        },
        {
          title: "Shared dues visibility",
          description:
            "Sales and finance work from the same outstanding view.",
        },
        {
          title: "Owned collection follow-ups",
          description:
            "Aging has owners and cadences — not informal chat chasing.",
        },
        {
          title: "Cash reviews from the system",
          description:
            "Weekly leadership reviews run from Analytics — not reconstructed sheets.",
        },
      ],
    },
    cta: {
      title: "Design finance operations leadership can run",
      description:
        "A System Audit of billing triggers, collection ownership, aging, and reporting — followed by a clear Zoho finance operations design.",
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
