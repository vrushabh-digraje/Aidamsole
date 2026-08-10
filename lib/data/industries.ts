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
  /** When false/undefined, page 404s from nav/sitemap even if file exists */
  published: boolean;
  seo?: {
    title: string;
    description: string;
  };
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
    slug: "retail-distribution",
    name: "Retail & Distribution",
    published: true,
    seo: {
      title: "Zoho for Retail & Distribution",
      description:
        "Zoho CRM and connected apps for retailers and distributors — enquiry to order, stock visibility, and collections in one system.",
    },
    hero: {
      headline: "Retail & distribution sales, stock, and collections on Zoho",
      description:
        "Dealer and retailer enquiries, order follow-up, inventory handoffs, and payment visibility — designed as one process for mid-sized retail and distribution teams.",
      ctaLabel: "Book System Audit",
      ctaHref: "/contact",
    },
    problems: [
      {
        icon: "leakage",
        title: "Dealer and retailer leads scattered across WhatsApp",
        description:
          "Enquiries from dealers, retailers, and field sales land in chats and personal sheets. Ownership is unclear and follow-ups stall.",
      },
      {
        icon: "pipeline",
        title: "Order status invisible after the quote",
        description:
          "Quotes, confirmations, and dispatch live in different places. Managers cannot see which orders are stuck or overdue.",
      },
      {
        icon: "delay",
        title: "Stock and sales not connected",
        description:
          "Sales promises stock that warehouse cannot see in time. Stockouts and overselling surface only after the customer escalates.",
      },
      {
        icon: "payment",
        title: "Collections follow-ups are manual",
        description:
          "Outstanding invoices depend on someone remembering. Finance rebuilds aging outside the sales record.",
      },
      {
        icon: "reporting",
        title: "No single view for leadership",
        description:
          "Weekly reviews pull conflicting numbers from CRM exports, Excel, and WhatsApp updates.",
      },
    ],
    systemFlow: {
      title: "Retail & distribution operating flow",
      description:
        "From enquiry to collection — designed as one process before Zoho modules are configured.",
      nodes: [
        {
          id: "lead-capture",
          label: "Enquiry Capture",
          caption: "Dealers, retailers, field",
          icon: "lead",
        },
        {
          id: "crm",
          label: "CRM Ownership",
          caption: "Named owner + stage",
          icon: "crm",
        },
        {
          id: "deal",
          label: "Quote & Order",
          caption: "Confirm & allocate",
          icon: "deal",
        },
        {
          id: "project",
          label: "Fulfilment",
          caption: "Dispatch & delivery",
          icon: "project",
        },
        {
          id: "invoice",
          label: "Invoice",
          caption: "Books & collections",
          icon: "invoice",
        },
        {
          id: "dashboard",
          label: "Leadership View",
          caption: "Pipeline & aging",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho module mapping",
      description:
        "Core apps we configure for retail and distribution operating control.",
      items: [
        { name: "CRM", role: "Dealer/retailer ownership, quotes, and order stages." },
        { name: "Inventory", role: "Stock visibility aligned to sales promises." },
        { name: "Books", role: "Invoicing, credit, and collections." },
        { name: "Analytics", role: "Pipeline, fill rate, and outstanding views." },
      ],
    },
    useCases: {
      title: "Retail workflows after go-live",
      description: "How teams run the connected process day to day.",
      items: [
        {
          title: "Dealer enquiry to confirmed order",
          summary:
            "Field or WhatsApp enquiry becomes an owned CRM record with quote and confirmation stages.",
          steps: [
            "Enquiry captured with source and territory",
            "Owner assigned with next action date",
            "Quote issued from CRM",
            "Order confirmed when stock rules pass",
            "Handoff to fulfilment with clear status",
          ],
        },
        {
          title: "Stock-aware selling",
          summary:
            "Sales sees usable stock context before promising delivery dates.",
          steps: [
            "Product interest logged on the deal",
            "Availability checked against inventory rules",
            "Commitment recorded in CRM",
            "Warehouse sees allocated demand",
            "Exceptions escalate before the customer does",
          ],
        },
        {
          title: "Invoice to collection follow-up",
          summary:
            "Closed orders create invoices and aging visibility for sales and finance.",
          steps: [
            "Order marked fulfilled",
            "Invoice created in Books",
            "Due dates drive reminders",
            "Outstanding visible on leadership dashboard",
            "Collections ownership stays clear",
          ],
        },
      ],
    },
    cta: {
      title: "Design a retail & distribution operating system",
      description:
        "A System Audit of enquiry intake, order stages, stock handoffs, and collections — followed by a Zoho system design for your team.",
      label: "Book System Audit",
      href: "/contact",
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    published: true,
    seo: {
      title: "Zoho for Real Estate",
      description:
        "Real estate sales, handover, and collections on Zoho — lead ownership, deal stages, and payment follow-ups for brokerage and developer teams.",
    },
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
  {
    slug: "manufacturing",
    name: "Manufacturing",
    published: true,
    seo: {
      title: "Zoho for Manufacturing",
      description:
        "Zoho for manufacturing teams — enquiry to delivery with CRM, production handoffs, and collections visibility.",
    },
    hero: {
      headline: "Manufacturing enquiry-to-delivery on one Zoho system",
      description:
        "Quote follow-up, order handoff, production visibility, and payment tracking — designed so sales promises and shop-floor reality stay aligned.",
      ctaLabel: "Book System Audit",
      ctaHref: "/contact",
    },
    problems: [
      {
        icon: "leakage",
        title: "Enquiries lost between sales and estimation",
        description:
          "Quotes live in email and personal folders. Nobody owns the next follow-up after the first response.",
      },
      {
        icon: "pipeline",
        title: "Order status invisible after confirmation",
        description:
          "Once an order is accepted, progress hides in shop-floor chats. Customers ask sales for updates sales cannot see.",
      },
      {
        icon: "delay",
        title: "Sales and production use different sheets",
        description:
          "Committed dates and actual capacity never meet in one system. Slippage surfaces only when delivery is late.",
      },
      {
        icon: "payment",
        title: "Collections disconnected from delivery",
        description:
          "Invoices and milestone payments are tracked outside the order record.",
      },
      {
        icon: "reporting",
        title: "Leadership cannot trust weekly status",
        description:
          "Pipeline, WIP, and outstanding payments are rebuilt from conflicting sources every review.",
      },
    ],
    systemFlow: {
      title: "Manufacturing operating flow",
      description:
        "From enquiry to collection — designed as one process before Zoho modules are configured.",
      nodes: [
        {
          id: "lead-capture",
          label: "Enquiry",
          caption: "RFQ & inbound",
          icon: "lead",
        },
        {
          id: "crm",
          label: "CRM Quote",
          caption: "Owner + stages",
          icon: "crm",
        },
        {
          id: "deal",
          label: "Order Confirm",
          caption: "Commercial close",
          icon: "deal",
        },
        {
          id: "project",
          label: "Production",
          caption: "Delivery milestones",
          icon: "project",
        },
        {
          id: "invoice",
          label: "Invoice",
          caption: "Books & collections",
          icon: "invoice",
        },
        {
          id: "dashboard",
          label: "Leadership",
          caption: "WIP & aging",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho module mapping",
      description: "Core apps we configure for manufacturing operating control.",
      items: [
        { name: "CRM", role: "Enquiry ownership, quoting, and order confirmation." },
        { name: "Projects", role: "Production milestones and delivery ownership." },
        { name: "Books", role: "Invoicing and collections against delivered work." },
        { name: "Analytics", role: "Pipeline, WIP, and outstanding views." },
      ],
    },
    useCases: {
      title: "Manufacturing workflows after go-live",
      description: "How sales and production stay connected.",
      items: [
        {
          title: "RFQ to confirmed order",
          summary:
            "Every enquiry has an owner, quote stage, and clear exit into confirmed demand.",
          steps: [
            "RFQ captured with source",
            "Owner assigned",
            "Quote issued from CRM",
            "Order confirmed",
            "Handoff to production created",
          ],
        },
        {
          title: "Production status for sales",
          summary:
            "Sales sees milestone progress without calling the shop floor.",
          steps: [
            "Project opened from confirmed order",
            "Milestones dated",
            "Status updated by production",
            "Customer update taken from system",
          ],
        },
        {
          title: "Delivery to collection",
          summary:
            "Invoices follow completed milestones with visible aging.",
          steps: [
            "Milestone marked complete",
            "Invoice raised in Books",
            "Reminders for dues",
            "Aging on leadership dashboard",
          ],
        },
      ],
    },
    cta: {
      title: "Design a manufacturing operating system",
      description:
        "A System Audit of enquiry intake, order handoffs, production milestones, and collections — followed by a Zoho system design.",
      label: "Book System Audit",
      href: "/contact",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    published: true,
    seo: {
      title: "Zoho for Healthcare | Clinics & Hospitals",
      description:
        "Zoho for clinics and healthcare operators — enquiry ownership, appointment follow-up, and operations visibility without shared-inbox chaos.",
    },
    hero: {
      headline: "Healthcare enquiry-to-appointment on one Zoho system",
      description:
        "Patient and referral enquiries, appointment ownership, no-show follow-ups, and front-desk visibility — designed so response quality does not depend on who is on shift.",
      ctaLabel: "Book System Audit",
      ctaHref: "/contact",
    },
    problems: [
      {
        icon: "leakage",
        title: "Enquiries trapped in shared inboxes",
        description:
          "Calls, WhatsApp, and portal messages land in shared threads. First response depends on who notices — not on an assigned owner.",
      },
      {
        icon: "pipeline",
        title: "Appointment status lives in memory",
        description:
          "Confirmed, rescheduled, and no-show visits are tracked inconsistently. Managers cannot see leakage until the day is over.",
      },
      {
        icon: "delay",
        title: "Follow-ups skip when the desk is busy",
        description:
          "Reminder calls and pending confirmations drop when front-office load spikes. Warm enquiries cool without a system cadence.",
      },
      {
        icon: "payment",
        title: "Billing context disconnected from enquiry",
        description:
          "Package interest, insurance notes, and payment status sit outside the patient enquiry record.",
      },
      {
        icon: "reporting",
        title: "Weekly reviews rebuild from WhatsApp and sheets",
        description:
          "Leadership cannot trust conversion from enquiry to appointment because sources disagree.",
      },
    ],
    systemFlow: {
      title: "Healthcare operating flow",
      description:
        "From first contact to leadership review — designed as one process before Zoho modules are configured.",
      nodes: [
        {
          id: "lead-capture",
          label: "Enquiry",
          caption: "Call, WhatsApp, web",
          icon: "lead",
        },
        {
          id: "crm",
          label: "CRM",
          caption: "Owner & triage",
          icon: "crm",
        },
        {
          id: "deal-pipeline",
          label: "Appointment",
          caption: "Confirm & stage",
          icon: "deal",
        },
        {
          id: "project",
          label: "Visit Care",
          caption: "Reminders & no-shows",
          icon: "followup",
        },
        {
          id: "finance",
          label: "Billing",
          caption: "Packages & dues",
          icon: "invoice",
        },
        {
          id: "dashboard",
          label: "Dashboard",
          caption: "Ops & conversion",
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
          role: "Enquiry ownership, source, triage stages, and counsellor or desk assignment.",
        },
        {
          name: "Desk",
          role: "Front-office tickets and SLA reminders when response queues build up.",
        },
        {
          name: "Books",
          role: "Package invoices and outstanding dues linked to the enquiry context.",
        },
        {
          name: "Analytics",
          role: "Enquiry-to-appointment conversion, no-show rates, and source performance.",
        },
      ],
    },
    useCases: {
      title: "Healthcare workflows after go-live",
      description:
        "Concrete paths from enquiry to visit once ownership, stages, and reminders are enforced.",
      items: [
        {
          title: "Web enquiry to confirmed appointment",
          summary:
            "A website enquiry becomes an owned CRM record, moves through confirmation stages, and surfaces on the ops dashboard.",
          steps: [
            "Enquiry captured from website or call",
            "Owner assigned with first-response SLA",
            "Appointment stage set",
            "Confirmation reminder sent",
            "Visit marked completed or no-show",
            "Leadership sees conversion by source",
          ],
        },
        {
          title: "No-show recovery",
          summary:
            "Missed visits re-enter a follow-up queue instead of disappearing into chat history.",
          steps: [
            "Appointment marked no-show",
            "Recovery task created for owner",
            "Reschedule attempt logged",
            "Outcome visible on ops review",
          ],
        },
        {
          title: "Package interest to invoice",
          summary:
            "Commercial interest stays attached to the patient journey so billing does not restart from zero.",
          steps: [
            "Package interest noted on enquiry",
            "Appointment completed",
            "Invoice raised in Books",
            "Outstanding dues visible to desk and finance",
          ],
        },
      ],
    },
    cta: {
      title: "Design a healthcare operating system",
      description:
        "A System Audit of enquiry intake, appointment ownership, no-show follow-ups, and reporting — followed by a Zoho system design for your clinic or hospital team.",
      label: "Book System Audit",
      href: "/contact",
    },
  },
  {
    slug: "education",
    name: "Education",
    published: true,
    seo: {
      title: "Zoho for Education | Admissions CRM",
      description:
        "Zoho for schools, colleges, and training institutes — counsellor ownership, admissions stages, and enrolment visibility.",
    },
    hero: {
      headline: "Admissions enquiry-to-enrolment on one Zoho system",
      description:
        "Counsellor ownership, stage discipline, document follow-ups, and leadership conversion views — designed so admissions does not run on personal spreadsheets.",
      ctaLabel: "Book System Audit",
      ctaHref: "/contact",
    },
    problems: [
      {
        icon: "leakage",
        title: "Enquiries split across portals and WhatsApp",
        description:
          "Campaign, walk-in, and partner leads land in different places. Duplicate counselling and missed first responses are common.",
      },
      {
        icon: "pipeline",
        title: "Funnel stages differ by counsellor",
        description:
          "Each counsellor invents their own stages. Managers cannot compare conversion or coach with shared definitions.",
      },
      {
        icon: "delay",
        title: "Document and fee follow-ups slip",
        description:
          "Pending docs and fee reminders live in chat. Applications stall without a visible next action.",
      },
      {
        icon: "payment",
        title: "Fee status disconnected from admissions",
        description:
          "Finance tracks fees outside the admissions record. Counsellors cannot see what is blocking enrolment.",
      },
      {
        icon: "reporting",
        title: "Leadership rebuilds funnel reports weekly",
        description:
          "Stage conversion and counsellor performance come from conflicting exports and sheets.",
      },
    ],
    systemFlow: {
      title: "Education admissions flow",
      description:
        "From enquiry to enrolment reporting — designed as one process before Zoho modules are configured.",
      nodes: [
        {
          id: "lead-capture",
          label: "Enquiry",
          caption: "Campaigns & walk-ins",
          icon: "lead",
        },
        {
          id: "crm",
          label: "CRM",
          caption: "Counsellor owner",
          icon: "crm",
        },
        {
          id: "deal-pipeline",
          label: "Admissions",
          caption: "Stage exits",
          icon: "pipeline",
        },
        {
          id: "project",
          label: "Docs & Fees",
          caption: "Checklist follow-up",
          icon: "followup",
        },
        {
          id: "finance",
          label: "Fee Desk",
          caption: "Books & dues",
          icon: "invoice",
        },
        {
          id: "dashboard",
          label: "Dashboard",
          caption: "Funnel & counsellor",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho module mapping",
      description:
        "Each app owns a job in the admissions operating flow.",
      items: [
        {
          name: "CRM",
          role: "Enquiry ownership, admissions stages, counsellor activity, and source tracking.",
        },
        {
          name: "Campaigns",
          role: "Nurture sequences for stalled applications and open-day reminders.",
        },
        {
          name: "Books",
          role: "Fee invoices and outstanding dues linked to the applicant record.",
        },
        {
          name: "Analytics",
          role: "Stage conversion, counsellor performance, and campaign ROI views.",
        },
      ],
    },
    useCases: {
      title: "Education workflows after go-live",
      description:
        "Concrete paths from enquiry to enrolment once ownership and stages are enforced.",
      items: [
        {
          title: "Campaign lead to counsellor ownership",
          summary:
            "Every paid or portal enquiry gets an owner and first-response SLA before personal chat takes over.",
          steps: [
            "Lead captured from campaign or form",
            "Auto-enters Zoho CRM",
            "Counsellor assigned",
            "First contact logged",
            "Stage set with next action",
          ],
        },
        {
          title: "Application document chase",
          summary:
            "Pending documents become a checklist with overdue visibility — not a buried WhatsApp thread.",
          steps: [
            "Application stage opened",
            "Document checklist created",
            "Reminders to applicant and counsellor",
            "Completion unlocks next stage",
          ],
        },
        {
          title: "Fee clearance to enrolment",
          summary:
            "Finance and admissions share one view of what is blocking enrolment.",
          steps: [
            "Offer accepted in CRM",
            "Fee schedule created in Books",
            "Payment status visible to counsellor",
            "Enrolment marked complete",
            "Leadership reviews conversion",
          ],
        },
      ],
    },
    cta: {
      title: "Design an admissions operating system",
      description:
        "A System Audit of enquiry intake, counsellor ownership, stage definitions, and fee handoffs — followed by a Zoho system design for your institute.",
      label: "Book System Audit",
      href: "/contact",
    },
  },
  {
    slug: "service",
    name: "Service Businesses",
    published: true,
    seo: {
      title: "Zoho for Service Businesses",
      description:
        "Zoho for service firms — sales-to-delivery handoffs, SLA tracking, and account status in one operating system.",
    },
    hero: {
      headline: "Service sales-to-delivery on one Zoho system",
      description:
        "Won deals stop disappearing into informal delivery chats. Ownership, SLA status, and account health stay visible from close to ongoing service.",
      ctaLabel: "Book System Audit",
      ctaHref: "/contact",
    },
    problems: [
      {
        icon: "leakage",
        title: "Closed deals vanish into delivery chats",
        description:
          "After the sale, context lives in WhatsApp and email. Delivery starts without a clean handoff record.",
      },
      {
        icon: "pipeline",
        title: "No shared view of account status",
        description:
          "Sales and delivery disagree on what was sold, what is in progress, and what is at risk.",
      },
      {
        icon: "delay",
        title: "SLAs are informal",
        description:
          "Response and resolution promises exist in proposals, not in a system that flags breaches early.",
      },
      {
        icon: "payment",
        title: "Billing lags delivery milestones",
        description:
          "Invoices wait on someone remembering to raise them after work is done.",
      },
      {
        icon: "reporting",
        title: "Leadership cannot see delivery risk early",
        description:
          "Escalations arrive before dashboards. Weekly reviews rebuild status from conflicting sources.",
      },
    ],
    systemFlow: {
      title: "Service business operating flow",
      description:
        "From opportunity to account health — designed as one process before Zoho modules are configured.",
      nodes: [
        {
          id: "lead-capture",
          label: "Opportunity",
          caption: "Qualified demand",
          icon: "lead",
        },
        {
          id: "crm",
          label: "CRM Close",
          caption: "Scope & owner",
          icon: "crm",
        },
        {
          id: "deal-pipeline",
          label: "Handoff",
          caption: "Sales → delivery",
          icon: "deal",
        },
        {
          id: "project",
          label: "Delivery",
          caption: "Projects & SLAs",
          icon: "project",
        },
        {
          id: "finance",
          label: "Billing",
          caption: "Milestones & dues",
          icon: "invoice",
        },
        {
          id: "dashboard",
          label: "Account Health",
          caption: "Risk & retention",
          icon: "dashboard",
        },
      ],
    },
    modules: {
      title: "Zoho module mapping",
      description:
        "Each app owns a job across sales, delivery, and support.",
      items: [
        {
          name: "CRM",
          role: "Opportunity close, scope notes, and commercial ownership into delivery.",
        },
        {
          name: "Projects",
          role: "Delivery milestones, owners, and progress against sold scope.",
        },
        {
          name: "Desk",
          role: "SLA tickets, escalations, and ongoing service requests.",
        },
        {
          name: "Books",
          role: "Milestone invoices and collections tied to delivered work.",
        },
        {
          name: "Analytics",
          role: "Handoff aging, SLA breaches, utilization, and account risk views.",
        },
      ],
    },
    useCases: {
      title: "Service workflows after go-live",
      description:
        "Concrete paths from closed deal to healthy account once handoffs and SLAs are enforced.",
      items: [
        {
          title: "Won deal to delivery kickoff",
          summary:
            "Every closed opportunity opens a delivery record with scope, owner, and kickoff date — not a chat dump.",
          steps: [
            "Deal marked closed-won in CRM",
            "Handoff checklist completed",
            "Project created with milestones",
            "Delivery owner assigned",
            "Kickoff status visible to sales",
          ],
        },
        {
          title: "SLA breach early warning",
          summary:
            "Open tickets and overdue milestones surface before the client escalates.",
          steps: [
            "Ticket or milestone due date set",
            "System flags aging risk",
            "Owner and manager notified",
            "Recovery action logged",
            "Account health dashboard updates",
          ],
        },
        {
          title: "Milestone to invoice",
          summary:
            "Billing follows completed work with shared visibility between delivery and finance.",
          steps: [
            "Milestone marked complete",
            "Invoice raised in Books",
            "Client notified",
            "Outstanding dues on account view",
          ],
        },
      ],
    },
    cta: {
      title: "Design a service operating system",
      description:
        "A System Audit of sales-to-delivery handoffs, SLA tracking, billing milestones, and account health — followed by a Zoho system design.",
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
