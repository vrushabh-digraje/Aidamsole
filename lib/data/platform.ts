import type { SystemFlowNode } from "@/components/sections/SystemFlow";
import type { FeatureGridItem } from "@/components/sections/FeatureGrid";
import type { IntegrationFlowConnection } from "@/components/sections/IntegrationFlow";
import type { StepsFlowItem } from "@/components/sections/StepsFlow";
import type { UseCaseFlowItem } from "@/components/sections/UseCaseFlow";
import type { OutcomeGridItem } from "@/components/sections/OutcomeGrid";

export type PlatformPageData = {
  slug: string;
  name: string;
  published: boolean;
  seo?: {
    title: string;
    description: string;
  };
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
    published: true,
    seo: {
      title: "Zoho CRM Implementation",
      description:
        "Zoho CRM configured as the sales system of record — intake, pipeline, automation, and reporting.",
    },
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
  {
    slug: "books",
    name: "Books",
    productName: "Zoho Books",
    published: true,
    seo: {
      title: "Zoho Books Implementation",
      description:
        "Zoho Books for invoicing, collections, and finance control — connected to CRM so quotes and payments stay linked.",
    },
    hero: {
      headline: "Zoho Books configured for invoicing and collections control",
      description:
        "Quotes, invoices, credit, and aging designed around how your finance and sales teams actually collect — not a disconnected accounts tool.",
      primaryCta: { label: "Book Books Setup Audit", href: "/contact" },
      secondaryCta: { label: "View Books System", href: "#platform-system" },
    },
    systemFlow: {
      title: "Books in the operating flow",
      description:
        "Finance visibility starts when a deal is won — invoice, due dates, and collections stay tied to commercial context.",
      highlightId: "invoice",
      nodes: [
        { id: "deal", label: "Won Deal", caption: "CRM close context", icon: "deal" },
        { id: "invoice", label: "Invoice", caption: "Books document", icon: "invoice" },
        { id: "followups", label: "Collections", caption: "Due & reminders", icon: "followup" },
        { id: "reporting", label: "Aging View", caption: "Leadership visibility", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho Books performs",
      description: "Finance control that sales and leadership can trust.",
      items: [
        {
          icon: "track",
          title: "Links invoices to won work",
          description:
            "Commercial context from CRM carries into quotes and invoices — finance stops rebuilding the story from email.",
        },
        {
          icon: "followup",
          title: "Drives payment follow-ups",
          description:
            "Due dates and reminders keep collections moving without a parallel spreadsheet tracker.",
        },
        {
          icon: "pipeline",
          title: "Exposes outstanding aging",
          description:
            "Managers see overdue and at-risk invoices in one place before weekly reviews.",
        },
        {
          icon: "forecast",
          title: "Supports cash visibility",
          description:
            "Invoiced vs collected views help leadership plan without waiting on month-end rebuilds.",
        },
      ],
    },
    implementation: {
      title: "Books implementation method",
      description: "Chart of accounts and collection rules first — configuration second.",
      items: [
        {
          number: "01",
          title: "Finance process mapping",
          description: "Document quote → invoice → payment → credit note paths.",
        },
        {
          number: "02",
          title: "Tax & document design",
          description: "Align templates, tax settings, and approval rules to how you bill.",
        },
        {
          number: "03",
          title: "CRM connection",
          description: "Connect closed deals to invoices so ownership stays clear.",
        },
        {
          number: "04",
          title: "Collections cadence",
          description: "Set reminders, statements, and escalation for overdue invoices.",
        },
        {
          number: "05",
          title: "Reporting handoff",
          description: "Aging and cash views for finance and leadership reviews.",
        },
      ],
    },
    useCases: {
      title: "Books workflows after go-live",
      description: "How finance and sales stay aligned on money movement.",
      items: [
        {
          title: "Won deal to invoice",
          summary: "Closed CRM work creates an invoice without retyping customer and commercial details.",
          steps: [
            "Deal marked closed-won",
            "Invoice draft created in Books",
            "Tax and terms applied",
            "Invoice sent to customer",
            "Status visible to sales owner",
          ],
        },
        {
          title: "Overdue collection recovery",
          summary: "Aging queues drive who follows up and when — not memory.",
          steps: [
            "Invoice becomes overdue",
            "Reminder fired",
            "Owner notified",
            "Payment or promise logged",
            "Aging dashboard updates",
          ],
        },
        {
          title: "Weekly finance review",
          summary: "Leadership sees invoiced, collected, and outstanding without spreadsheet merges.",
          steps: [
            "Payments reconciled",
            "Aging refreshed",
            "Exceptions flagged",
            "Review run from system data",
          ],
        },
      ],
    },
    integrations: {
      title: "Books connections across Zoho",
      description: "Finance stays connected to sales and inventory reality.",
      hub: {
        name: "Books",
        role: "System of record for quotes, invoices, payments, and aging.",
      },
      connections: [
        { name: "CRM", role: "Customer and deal context for invoicing." },
        { name: "Inventory", role: "Stock and fulfilment tied to billed orders." },
        { name: "Analytics", role: "Cash and aging dashboards on live Books data." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is collections visibility — not another login.",
      items: [
        {
          title: "Faster invoice cycle",
          description: "Won work becomes billable without email chasing.",
        },
        {
          title: "Clear outstanding ownership",
          description: "Someone owns every overdue invoice with a next action.",
        },
        {
          title: "Fewer payment surprises",
          description: "Aging is visible before the month-end scramble.",
        },
        {
          title: "Finance and sales aligned",
          description: "Both teams see the same invoice status.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho Books around how you collect",
      description:
        "A Books Setup Audit of invoicing, tax, CRM connection, and collections cadence.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "inventory",
    name: "Inventory",
    productName: "Zoho Inventory",
    published: true,
    seo: {
      title: "Zoho Inventory Implementation",
      description:
        "Zoho Inventory for stock visibility, order fulfilment, and retail/distribution control connected to CRM and Books.",
    },
    hero: {
      headline: "Zoho Inventory configured for stock-aware selling",
      description:
        "Availability, allocation, and fulfilment designed so sales does not promise what warehouse cannot deliver.",
      primaryCta: { label: "Book Inventory Setup Audit", href: "/contact" },
      secondaryCta: { label: "View Inventory System", href: "#platform-system" },
    },
    systemFlow: {
      title: "Inventory in the operating flow",
      description:
        "Stock truth sits between confirmed orders and dispatch — visible to sales and operations.",
      highlightId: "project",
      nodes: [
        { id: "deal", label: "Order", caption: "Confirmed demand", icon: "deal" },
        { id: "project", label: "Allocate", caption: "Stock reserved", icon: "project" },
        { id: "pipeline", label: "Fulfil", caption: "Pick & dispatch", icon: "pipeline" },
        { id: "invoice", label: "Bill", caption: "Books invoice", icon: "invoice" },
        { id: "reporting", label: "Stock View", caption: "Leadership KPIs", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho Inventory performs",
      description: "Stock control that protects customer promises.",
      items: [
        {
          icon: "track",
          title: "Shows usable availability",
          description:
            "Sales sees what can be committed before promising delivery dates.",
        },
        {
          icon: "pipeline",
          title: "Tracks fulfilment stages",
          description:
            "Pick, pack, and dispatch status replaces WhatsApp warehouse updates.",
        },
        {
          icon: "ownership",
          title: "Keeps order ownership clear",
          description:
            "Every open fulfilment task has an owner and next action.",
        },
        {
          icon: "forecast",
          title: "Surfaces stock risk early",
          description:
            "Low stock and delayed fulfilment appear before the customer escalates.",
        },
      ],
    },
    implementation: {
      title: "Inventory implementation method",
      description: "SKU rules and fulfilment stages first — then Zoho configuration.",
      items: [
        {
          number: "01",
          title: "Catalog & warehouse map",
          description: "Define SKUs, locations, and how stock is counted today.",
        },
        {
          number: "02",
          title: "Order-to-fulfilment design",
          description: "Set stages from confirmed order to dispatch.",
        },
        {
          number: "03",
          title: "CRM & Books connection",
          description: "Link demand and billing to inventory movement.",
        },
        {
          number: "04",
          title: "Exception rules",
          description: "Define what happens on stockouts and partial shipments.",
        },
        {
          number: "05",
          title: "Ops dashboards",
          description: "Fill rate, backlog, and aging views for weekly ops reviews.",
        },
      ],
    },
    useCases: {
      title: "Inventory workflows after go-live",
      description: "How retail and distribution teams keep promises honest.",
      items: [
        {
          title: "Confirm order with stock check",
          summary: "Sales confirms only when allocation rules pass.",
          steps: [
            "Order confirmed in CRM",
            "Availability checked",
            "Stock allocated",
            "Fulfilment task created",
            "Customer date committed",
          ],
        },
        {
          title: "Partial shipment handling",
          summary: "Backorders stay visible instead of disappearing into chat.",
          steps: [
            "Partial pick completed",
            "Remaining qty tracked",
            "Customer update logged",
            "Follow-up fulfilment scheduled",
          ],
        },
        {
          title: "Weekly ops stock review",
          summary: "Ops heads see backlog and low-stock SKUs without Excel rebuilds.",
          steps: [
            "Movements posted",
            "Backlog refreshed",
            "Exceptions flagged",
            "Review from system data",
          ],
        },
      ],
    },
    integrations: {
      title: "Inventory connections across Zoho",
      description: "Stock stays connected to demand and billing.",
      hub: {
        name: "Inventory",
        role: "System of record for stock, allocation, and fulfilment status.",
      },
      connections: [
        { name: "CRM", role: "Confirmed demand and customer commitments." },
        { name: "Books", role: "Invoicing after fulfilment events." },
        { name: "Analytics", role: "Fill rate and backlog dashboards." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is fewer broken delivery promises.",
      items: [
        {
          title: "Stock-aware selling",
          description: "Commitments match warehouse reality.",
        },
        {
          title: "Visible fulfilment backlog",
          description: "Open orders do not hide in chats.",
        },
        {
          title: "Cleaner handoffs to finance",
          description: "Billing follows what was actually dispatched.",
        },
        {
          title: "Ops reviews from live data",
          description: "Fill rate and aging are reviewable weekly.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho Inventory around fulfilment",
      description:
        "An Inventory Setup Audit of SKUs, allocation, CRM/Books links, and ops reporting.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "projects",
    name: "Projects",
    productName: "Zoho Projects",
    published: true,
    seo: {
      title: "Zoho Projects Implementation",
      description:
        "Zoho Projects for delivery ownership after sales close — tasks, milestones, and handoffs connected to CRM.",
    },
    hero: {
      headline: "Zoho Projects configured for delivery after the sale",
      description:
        "Kickoff, milestones, and ownership designed so won work does not disappear into informal chats.",
      primaryCta: { label: "Book Projects Setup Audit", href: "/contact" },
      secondaryCta: { label: "View Projects System", href: "#platform-system" },
    },
    systemFlow: {
      title: "Projects in the operating flow",
      description:
        "Delivery starts when CRM closes — with inherited scope and a named delivery owner.",
      highlightId: "project",
      nodes: [
        { id: "deal", label: "Close-Won", caption: "CRM context", icon: "deal" },
        { id: "project", label: "Project", caption: "Kickoff & plan", icon: "project" },
        { id: "pipeline", label: "Milestones", caption: "Stage exits", icon: "pipeline" },
        { id: "followups", label: "Tasks", caption: "Owner + due date", icon: "followup" },
        { id: "reporting", label: "Status", caption: "Leadership view", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho Projects performs",
      description: "Delivery control after commercial commitment.",
      items: [
        {
          icon: "ownership",
          title: "Names a delivery owner",
          description:
            "Every won engagement has a clear owner before work starts.",
        },
        {
          icon: "pipeline",
          title: "Tracks milestone exits",
          description:
            "Managers see which deliveries are on track or slipping.",
        },
        {
          icon: "followup",
          title: "Enforces task cadence",
          description:
            "Due dates and overdue queues reduce silent stall.",
        },
        {
          icon: "track",
          title: "Carries sales context forward",
          description:
            "Scope and customer promises from CRM stay attached to the project.",
        },
      ],
    },
    implementation: {
      title: "Projects implementation method",
      description: "Delivery stages and ownership rules first.",
      items: [
        {
          number: "01",
          title: "Handoff mapping",
          description: "Define what must be true before delivery can start.",
        },
        {
          number: "02",
          title: "Milestone design",
          description: "Set stages, exits, and required updates.",
        },
        {
          number: "03",
          title: "CRM connection",
          description: "Create projects from close-won with inherited fields.",
        },
        {
          number: "04",
          title: "Team templates",
          description: "Role-based task templates for repeatable delivery.",
        },
        {
          number: "05",
          title: "Status reporting",
          description: "Portfolio views for ops and leadership reviews.",
        },
      ],
    },
    useCases: {
      title: "Projects workflows after go-live",
      description: "From won deal to visible delivery.",
      items: [
        {
          title: "Close-won to kickoff",
          summary: "Delivery starts with a named owner and checklist — not a chat ping.",
          steps: [
            "Deal closed in CRM",
            "Project created",
            "Owner assigned",
            "Kickoff checklist completed",
            "First milestone dated",
          ],
        },
        {
          title: "Slippage escalation",
          summary: "Late milestones surface before the customer escalates.",
          steps: [
            "Milestone overdue",
            "Owner alerted",
            "Manager sees portfolio risk",
            "Recovery plan logged",
          ],
        },
        {
          title: "Weekly delivery review",
          summary: "Ops reviews run from project status, not spreadsheet rebuilds.",
          steps: [
            "Teams update tasks",
            "Portfolio refreshed",
            "At-risk projects flagged",
            "Review from live data",
          ],
        },
      ],
    },
    integrations: {
      title: "Projects connections across Zoho",
      description: "Delivery stays connected to sales and finance.",
      hub: {
        name: "Projects",
        role: "System of record for delivery ownership, milestones, and status.",
      },
      connections: [
        { name: "CRM", role: "Commercial scope and customer context at kickoff." },
        { name: "Books", role: "Billing milestones tied to delivery progress." },
        { name: "Analytics", role: "Portfolio health dashboards." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is accountable delivery after the sale.",
      items: [
        {
          title: "Clean sales-to-delivery handoff",
          description: "Won work always creates operable delivery.",
        },
        {
          title: "Visible milestone risk",
          description: "Slippage is seen early.",
        },
        {
          title: "Less chat-based coordination",
          description: "Status lives in the system of record.",
        },
        {
          title: "Leadership portfolio view",
          description: "Ops can review delivery health weekly.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho Projects for delivery control",
      description:
        "A Projects Setup Audit of handoffs, milestones, CRM connection, and portfolio reporting.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "people",
    name: "People",
    productName: "Zoho People",
    published: true,
    seo: {
      title: "Zoho People Implementation",
      description:
        "Zoho People for HR processes — onboarding, attendance, leave, and employee records mid-sized teams can run.",
    },
    hero: {
      headline: "Zoho People configured for HR without spreadsheet chaos",
      description:
        "Onboarding, leave, attendance, and employee records designed around how your managers actually approve and track — not a generic HR template.",
      primaryCta: { label: "Book People Setup Audit", href: "/contact" },
      secondaryCta: { label: "View People System", href: "#platform-system" },
    },
    systemFlow: {
      title: "People in the operating flow",
      description:
        "HR workflows that keep employee status clear from hire to ongoing administration.",
      highlightId: "crm",
      nodes: [
        { id: "lead", label: "Hire", caption: "Offer accepted", icon: "lead" },
        { id: "crm", label: "Onboard", caption: "Records & access", icon: "crm" },
        { id: "followups", label: "Leave", caption: "Requests & approvals", icon: "followup" },
        { id: "pipeline", label: "Attendance", caption: "Daily presence", icon: "pipeline" },
        { id: "reporting", label: "HR View", caption: "Leadership reports", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho People performs",
      description: "HR control managers will actually use.",
      items: [
        {
          icon: "ownership",
          title: "Owns the employee record",
          description:
            "One profile for role, manager, and status — not scattered sheets.",
        },
        {
          icon: "followup",
          title: "Runs leave approvals",
          description:
            "Requests, approvers, and balances stay visible without WhatsApp chasing.",
        },
        {
          icon: "track",
          title: "Tracks attendance patterns",
          description:
            "Managers see exceptions early instead of discovering gaps at month-end.",
        },
        {
          icon: "forecast",
          title: "Supports HR reviews",
          description:
            "Headcount and leave summaries for leadership without rebuilds.",
        },
      ],
    },
    implementation: {
      title: "People implementation method",
      description: "Policies and approval chains first — then Zoho People setup.",
      items: [
        {
          number: "01",
          title: "HR process mapping",
          description: "Document hire, onboard, leave, and attendance rules.",
        },
        {
          number: "02",
          title: "Org & approval design",
          description: "Define departments, managers, and who approves what.",
        },
        {
          number: "03",
          title: "Policy configuration",
          description: "Leave types, holidays, and attendance policies in People.",
        },
        {
          number: "04",
          title: "Employee rollout",
          description: "Import records and train managers on the approval path.",
        },
        {
          number: "05",
          title: "HR reporting",
          description: "Views for leave, attendance, and headcount reviews.",
        },
      ],
    },
    useCases: {
      title: "People workflows after go-live",
      description: "How teams run HR without parallel trackers.",
      items: [
        {
          title: "New hire onboarding",
          summary: "Accepted candidates become employee records with clear owners.",
          steps: [
            "Offer accepted",
            "Employee record created",
            "Manager assigned",
            "Onboarding checklist started",
            "Access and docs tracked",
          ],
        },
        {
          title: "Leave request to approval",
          summary: "Employees request leave; managers approve in one path.",
          steps: [
            "Leave submitted",
            "Balance checked",
            "Manager notified",
            "Approved or rejected",
            "Calendar and balance updated",
          ],
        },
        {
          title: "Monthly attendance review",
          summary: "Exceptions are reviewed from the system, not reconstructed sheets.",
          steps: [
            "Attendance logged",
            "Exceptions flagged",
            "Manager reviews",
            "HR closes the month",
          ],
        },
      ],
    },
    integrations: {
      title: "People connections across Zoho",
      description: "HR stays connected to the wider Zoho stack where needed.",
      hub: {
        name: "People",
        role: "System of record for employees, leave, and attendance.",
      },
      connections: [
        { name: "Payroll", role: "Leave and attendance inputs for payroll runs." },
        { name: "CRM", role: "Sales team structure aligned to HR org data." },
        { name: "Analytics", role: "Headcount and leave dashboards." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is fewer HR spreadsheets — and clearer approvals.",
      items: [
        {
          title: "Single employee record",
          description: "Managers stop maintaining private sheets.",
        },
        {
          title: "Faster leave decisions",
          description: "Approvals happen in-system with balance visibility.",
        },
        {
          title: "Attendance exceptions visible",
          description: "Gaps are caught before payroll week.",
        },
        {
          title: "HR reviews from live data",
          description: "Leadership sees headcount and leave without rebuilds.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho People around your HR process",
      description:
        "A People Setup Audit of org structure, leave policies, attendance, and manager rollout.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "desk",
    name: "Desk",
    productName: "Zoho Desk",
    published: true,
    seo: {
      title: "Zoho Desk Implementation",
      description:
        "Zoho Desk for support tickets, SLAs, and customer follow-ups — connected to CRM context.",
    },
    hero: {
      headline: "Zoho Desk configured for accountable customer support",
      description:
        "Tickets, SLAs, and ownership designed so customer issues do not die in shared inboxes or WhatsApp groups.",
      primaryCta: { label: "Book Desk Setup Audit", href: "/contact" },
      secondaryCta: { label: "View Desk System", href: "#platform-system" },
    },
    systemFlow: {
      title: "Desk in the operating flow",
      description:
        "Support starts with a named owner and SLA — and stays linked to the customer record.",
      highlightId: "crm",
      nodes: [
        { id: "lead", label: "Request", caption: "Email, form, chat", icon: "lead" },
        { id: "crm", label: "Ticket", caption: "Owned in Desk", icon: "crm" },
        { id: "followups", label: "SLA", caption: "Response timers", icon: "followup" },
        { id: "pipeline", label: "Resolve", caption: "Status exits", icon: "pipeline" },
        { id: "reporting", label: "Support View", caption: "Leadership KPIs", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho Desk performs",
      description: "Support control customers can feel.",
      items: [
        {
          icon: "ownership",
          title: "Assigns every ticket",
          description:
            "No orphan emails — each request has an owner and queue.",
        },
        {
          icon: "followup",
          title: "Enforces response SLAs",
          description:
            "Timers and escalations surface late replies before customers escalate.",
        },
        {
          icon: "track",
          title: "Keeps customer context",
          description:
            "Agents see related CRM history instead of asking the customer to repeat.",
        },
        {
          icon: "pipeline",
          title: "Exposes backlog health",
          description:
            "Managers see aging and volume by queue without spreadsheet rebuilds.",
        },
      ],
    },
    implementation: {
      title: "Desk implementation method",
      description: "Queues and SLAs first — then channels and automation.",
      items: [
        {
          number: "01",
          title: "Support process mapping",
          description: "Document intake channels, queues, and escalation paths.",
        },
        {
          number: "02",
          title: "SLA design",
          description: "Define first-response and resolution targets by priority.",
        },
        {
          number: "03",
          title: "Channel setup",
          description: "Connect email, forms, and other intake into Desk.",
        },
        {
          number: "04",
          title: "CRM connection",
          description: "Link tickets to contacts and accounts for context.",
        },
        {
          number: "05",
          title: "Support reporting",
          description: "Backlog, SLA breach, and CSAT views for weekly reviews.",
        },
      ],
    },
    useCases: {
      title: "Desk workflows after go-live",
      description: "How support teams stay accountable.",
      items: [
        {
          title: "Email to owned ticket",
          summary: "Inbound email becomes a ticket with owner and SLA clock.",
          steps: [
            "Customer emails support",
            "Ticket created",
            "Queue and owner assigned",
            "SLA timer starts",
            "First response logged",
          ],
        },
        {
          title: "SLA breach escalation",
          summary: "Late tickets escalate before the customer complains twice.",
          steps: [
            "SLA nearing breach",
            "Agent alerted",
            "Manager sees queue risk",
            "Priority adjusted",
            "Resolution path logged",
          ],
        },
        {
          title: "Weekly support review",
          summary: "Leaders review backlog and breaches from Desk data.",
          steps: [
            "Tickets updated",
            "Dashboards refreshed",
            "Breach and aging reviewed",
            "Coaching actions set",
          ],
        },
      ],
    },
    integrations: {
      title: "Desk connections across Zoho",
      description: "Support stays connected to sales and product context.",
      hub: {
        name: "Desk",
        role: "System of record for tickets, SLAs, and support ownership.",
      },
      connections: [
        { name: "CRM", role: "Customer and deal context on every ticket." },
        { name: "Projects", role: "Bugs or delivery issues escalated with ownership." },
        { name: "Analytics", role: "SLA and backlog dashboards." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is fewer lost customer requests.",
      items: [
        {
          title: "Named ticket ownership",
          description: "Nothing sits in a shared inbox without an owner.",
        },
        {
          title: "SLA discipline",
          description: "Late responses are visible and escalated.",
        },
        {
          title: "Less repeated customer context",
          description: "Agents see CRM history while resolving.",
        },
        {
          title: "Support reviews from live data",
          description: "Backlog health is reviewable every week.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho Desk for support accountability",
      description:
        "A Desk Setup Audit of queues, SLAs, channels, CRM connection, and reporting.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "analytics",
    name: "Analytics",
    productName: "Zoho Analytics",
    published: true,
    seo: {
      title: "Zoho Analytics Implementation",
      description:
        "Zoho Analytics for leadership dashboards — pipeline, collections, and operations from live Zoho data.",
    },
    hero: {
      headline: "Zoho Analytics configured for leadership reviews",
      description:
        "Dashboards designed around the few metrics your leadership actually decides on — fed by live CRM, Books, and operations data.",
      primaryCta: { label: "Book Analytics Setup Audit", href: "/contact" },
      secondaryCta: { label: "View Analytics System", href: "#platform-system" },
    },
    systemFlow: {
      title: "Analytics in the operating flow",
      description:
        "Reporting sits on top of owned process data — not a separate spreadsheet reality.",
      highlightId: "reporting",
      nodes: [
        { id: "crm", label: "CRM Data", caption: "Pipeline & owners", icon: "crm" },
        { id: "invoice", label: "Finance Data", caption: "Invoices & aging", icon: "invoice" },
        { id: "project", label: "Ops Data", caption: "Delivery / stock", icon: "project" },
        { id: "reporting", label: "Dashboards", caption: "Weekly review", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho Analytics performs",
      description: "Decision views — not vanity charts.",
      items: [
        {
          icon: "forecast",
          title: "Builds leadership scorecards",
          description:
            "A short set of KPIs that survive cross-examination in weekly meetings.",
        },
        {
          icon: "pipeline",
          title: "Exposes pipeline health",
          description:
            "Aging, conversion, and stuck deals from live CRM definitions.",
        },
        {
          icon: "track",
          title: "Connects multi-app data",
          description:
            "Sales, finance, and ops numbers in one place without manual merges.",
        },
        {
          icon: "ownership",
          title: "Keeps definitions stable",
          description:
            "Reports use the same stage and field meanings teams work with.",
        },
      ],
    },
    implementation: {
      title: "Analytics implementation method",
      description: "Decide the review questions first — then build dashboards.",
      items: [
        {
          number: "01",
          title: "Decision mapping",
          description: "List the questions leadership asks every week.",
        },
        {
          number: "02",
          title: "Metric definitions",
          description: "Freeze what qualified, overdue, and completed mean.",
        },
        {
          number: "03",
          title: "Data connections",
          description: "Connect CRM, Books, and other Zoho apps as sources.",
        },
        {
          number: "04",
          title: "Dashboard build",
          description: "Create a tight scorecard — not fifty unused charts.",
        },
        {
          number: "05",
          title: "Review rhythm",
          description: "Train leaders to run meetings from the dashboard.",
        },
      ],
    },
    useCases: {
      title: "Analytics workflows after go-live",
      description: "How leadership stops living in Excel exports.",
      items: [
        {
          title: "Monday pipeline review",
          summary: "Sales heads open one dashboard for aging and conversion.",
          steps: [
            "CRM data syncs",
            "Pipeline dashboard refreshes",
            "Stuck deals highlighted",
            "Coaching actions set",
          ],
        },
        {
          title: "Collections aging review",
          summary: "Finance and sales see the same outstanding picture.",
          steps: [
            "Books aging updates",
            "Dashboard shows overdue bands",
            "Owners assigned follow-ups",
            "Progress checked next week",
          ],
        },
        {
          title: "Ops exception review",
          summary: "Delivery or stock exceptions are reviewed from live ops data.",
          steps: [
            "Ops systems sync",
            "Exception widgets update",
            "Risks discussed",
            "Actions logged back in source apps",
          ],
        },
      ],
    },
    integrations: {
      title: "Analytics connections across Zoho",
      description: "Dashboards only work when source systems are the system of record.",
      hub: {
        name: "Analytics",
        role: "Decision layer over live Zoho operating data.",
      },
      connections: [
        { name: "CRM", role: "Pipeline, conversion, and ownership metrics." },
        { name: "Books", role: "Invoicing, collections, and aging." },
        { name: "Inventory", role: "Fill rate and backlog metrics." },
        { name: "Projects", role: "Delivery milestone health." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is trusted weekly decisions — not prettier charts.",
      items: [
        {
          title: "One review source",
          description: "Leadership stops reconciling three exports.",
        },
        {
          title: "Stable metric definitions",
          description: "Arguments shift from numbers to actions.",
        },
        {
          title: "Faster exception spotting",
          description: "Aging and stuck work surface early.",
        },
        {
          title: "Tied to real process",
          description: "Dashboards reflect how teams work in Zoho.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho Analytics for leadership reviews",
      description:
        "An Analytics Setup Audit of decision metrics, definitions, data connections, and weekly dashboards.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "creator",
    name: "Creator",
    productName: "Zoho Creator",
    published: true,
    seo: {
      title: "Zoho Creator Implementation",
      description:
        "Zoho Creator for custom business apps — workflows that do not fit standard Zoho modules, designed around your operating process.",
    },
    hero: {
      headline: "Zoho Creator configured for workflows CRM cannot own alone",
      description:
        "Custom apps for approvals, field operations, dealer portals, and internal checklists — designed after process mapping, not as a random form builder project.",
      primaryCta: { label: "Book Creator Setup Audit", href: "/contact" },
      secondaryCta: { label: "View Creator System", href: "#platform-system" },
    },
    systemFlow: {
      title: "Creator in the operating flow",
      description:
        "Custom apps sit where standard modules stop — still connected to CRM and reporting.",
      highlightId: "project",
      nodes: [
        { id: "lead", label: "Need", caption: "Process gap", icon: "lead" },
        { id: "crm", label: "CRM", caption: "Core commercial", icon: "crm" },
        { id: "project", label: "Creator", caption: "Custom workflow", icon: "project" },
        { id: "followups", label: "Approvals", caption: "Owned steps", icon: "followup" },
        { id: "reporting", label: "Dashboard", caption: "Ops visibility", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho Creator performs",
      description: "Custom control — not another disconnected spreadsheet app.",
      items: [
        {
          icon: "ownership",
          title: "Owns niche workflows",
          description:
            "Dealer claims, site checklists, internal approvals — with named owners.",
        },
        {
          icon: "track",
          title: "Tracks steps CRM skips",
          description:
            "Stages and forms for work that does not fit a deal or ticket record.",
        },
        {
          icon: "followup",
          title: "Enforces approval paths",
          description:
            "Requests move through defined approvers instead of informal chat.",
        },
        {
          icon: "forecast",
          title: "Feeds leadership views",
          description:
            "Custom app data can roll into Analytics with the rest of Zoho.",
        },
      ],
    },
    implementation: {
      title: "Creator implementation method",
      description: "Prove the process gap first — then build the minimum app.",
      items: [
        {
          number: "01",
          title: "Gap mapping",
          description: "Document the workflow Excel or WhatsApp is still carrying.",
        },
        {
          number: "02",
          title: "System design",
          description: "Define records, owners, approvals, and CRM handoffs.",
        },
        {
          number: "03",
          title: "App build",
          description: "Build the smallest Creator app that enforces the design.",
        },
        {
          number: "04",
          title: "Integration",
          description: "Connect CRM, Books, or Desk where the custom flow starts or ends.",
        },
        {
          number: "05",
          title: "Stabilization",
          description: "Train owners and tighten until the spreadsheet path dies.",
        },
      ],
    },
    useCases: {
      title: "Creator workflows after go-live",
      description: "Where custom apps earn their place next to core Zoho modules.",
      items: [
        {
          title: "Dealer claim portal",
          summary:
            "Channel partners submit claims with status visibility instead of email attachments.",
          steps: [
            "Claim submitted in Creator",
            "Owner assigned",
            "Approval path runs",
            "Outcome synced to CRM/Books as needed",
          ],
        },
        {
          title: "Field checklist",
          summary:
            "Site or warehouse checks become owned records with completion proof.",
          steps: [
            "Checklist opened for visit",
            "Items completed in field",
            "Exceptions flagged",
            "Manager reviews completion",
          ],
        },
        {
          title: "Internal approval chain",
          summary:
            "Spend or exception requests stop living in personal inboxes.",
          steps: [
            "Request created",
            "Approvers notified in sequence",
            "Decision logged",
            "Downstream Zoho record updated",
          ],
        },
      ],
    },
    integrations: {
      title: "Creator connections across Zoho",
      description: "Custom apps should extend the system of record — not replace it.",
      hub: {
        name: "Creator",
        role: "Custom workflow layer for process gaps.",
      },
      connections: [
        { name: "CRM", role: "Customer and deal context into custom forms." },
        { name: "Books", role: "Approved claims or charges into finance." },
        { name: "Desk", role: "Service exceptions escalated from custom apps." },
        { name: "Analytics", role: "Completion and aging from Creator data." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is killing a spreadsheet path — not shipping a demo app.",
      items: [
        {
          title: "Owned niche process",
          description: "Work that never fit CRM now has stages and owners.",
        },
        {
          title: "Fewer shadow systems",
          description: "Teams stop inventing parallel Excel trackers.",
        },
        {
          title: "Connected to core Zoho",
          description: "Custom records hand off to CRM, Books, or Desk.",
        },
        {
          title: "Visible to leadership",
          description: "Completion and exceptions can appear in weekly reviews.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho Creator for real process gaps",
      description:
        "A Creator Setup Audit of the workflow still stuck in Excel or WhatsApp — then the minimum app design.",
      primary: { label: "Book Audit", href: "/contact" },
      secondary: { label: "Request Consultation", href: "/contact" },
    },
  },
  {
    slug: "campaigns",
    name: "Campaigns",
    productName: "Zoho Campaigns",
    published: true,
    seo: {
      title: "Zoho Campaigns Implementation",
      description:
        "Zoho Campaigns for nurture and follow-up sequences tied to CRM ownership — not spray-and-pray email blasts.",
    },
    hero: {
      headline: "Zoho Campaigns configured for CRM-backed nurture",
      description:
        "Email sequences for stalled deals, cold enquiries, and post-visit follow-ups — designed so every send has an owner and a next action in CRM.",
      primaryCta: { label: "Book Campaigns Setup Audit", href: "/contact" },
      secondaryCta: { label: "View Campaigns System", href: "#platform-system" },
    },
    systemFlow: {
      title: "Campaigns in the operating flow",
      description:
        "Nurture sits on top of owned CRM records — not a separate marketing list reality.",
      highlightId: "followups",
      nodes: [
        { id: "lead", label: "Audience", caption: "CRM segments", icon: "lead" },
        { id: "crm", label: "CRM", caption: "Owner + stage", icon: "crm" },
        { id: "followups", label: "Campaigns", caption: "Nurture sequence", icon: "followup" },
        { id: "pipeline", label: "Re-engage", caption: "Reply / click", icon: "pipeline" },
        { id: "reporting", label: "Review", caption: "Conversion view", icon: "dashboard" },
      ],
    },
    features: {
      title: "Business jobs Zoho Campaigns performs",
      description: "Follow-up at scale — with sales ownership intact.",
      items: [
        {
          icon: "followup",
          title: "Runs staged nurture",
          description:
            "Cold and stalled records get a defined sequence instead of hoping reps remember.",
        },
        {
          icon: "ownership",
          title: "Keeps CRM ownership",
          description:
            "Engagement routes back to the named sales owner — not a marketing void.",
        },
        {
          icon: "track",
          title: "Tracks who re-engaged",
          description:
            "Opens and replies become next actions sales can work from.",
        },
        {
          icon: "forecast",
          title: "Supports pipeline recovery",
          description:
            "Leadership sees which nurture paths actually return deals to motion.",
        },
      ],
    },
    implementation: {
      title: "Campaigns implementation method",
      description: "Segment and cadence first — then templates and automation.",
      items: [
        {
          number: "01",
          title: "Segment mapping",
          description: "Define which CRM stages and sources deserve nurture.",
        },
        {
          number: "02",
          title: "Cadence design",
          description: "Write the sequence length, timing, and exit rules.",
        },
        {
          number: "03",
          title: "CRM sync",
          description: "Connect lists, tags, and owner routing into Zoho CRM.",
        },
        {
          number: "04",
          title: "Campaign build",
          description: "Build templates and automations for the agreed paths only.",
        },
        {
          number: "05",
          title: "Stabilization",
          description: "Review reply handling and suppress noisy or duplicate sends.",
        },
      ],
    },
    useCases: {
      title: "Campaigns workflows after go-live",
      description: "Where nurture earns its place next to sales activity.",
      items: [
        {
          title: "Stalled deal recovery",
          summary:
            "Opportunities past a follow-up SLA enter a short sequence that returns replies to the owner.",
          steps: [
            "Deal flagged stalled in CRM",
            "Enters Campaigns sequence",
            "Reply routes to owner",
            "Stage and next action updated",
          ],
        },
        {
          title: "Post-visit nurture",
          summary:
            "After a site visit or demo, a defined series keeps the conversation warm without spam.",
          steps: [
            "Visit marked complete",
            "Nurture sequence starts",
            "Engagement scored",
            "Hot replies prioritized for call",
          ],
        },
        {
          title: "Cold enquiry reactivation",
          summary:
            "Older unowned or cold leads get one controlled reactivation path — then exit cleanly.",
          steps: [
            "Cold segment defined",
            "Reactivation campaign runs",
            "Non-responders suppressed",
            "Responders assigned or reopened",
          ],
        },
      ],
    },
    integrations: {
      title: "Campaigns connections across Zoho",
      description: "Email only works when CRM remains the system of record.",
      hub: {
        name: "Campaigns",
        role: "Nurture layer over owned CRM records.",
      },
      connections: [
        { name: "CRM", role: "Segments, owners, and stage updates from engagement." },
        { name: "Analytics", role: "Nurture-to-pipeline conversion views." },
        { name: "SalesIQ", role: "Website intent feeding the same CRM audience." },
        { name: "Desk", role: "Suppress or route customers already in support." },
      ],
    },
    outcomes: {
      title: "Operating outcomes",
      description: "Success is recovered pipeline — not open-rate vanity.",
      items: [
        {
          title: "Fewer forgotten follow-ups",
          description: "Defined sequences cover gaps when reps are overloaded.",
        },
        {
          title: "Owner stays in the loop",
          description: "Engagement returns to the salesperson who owns the record.",
        },
        {
          title: "Cleaner lists",
          description: "Exit and suppress rules stop endless blasting.",
        },
        {
          title: "Nurture tied to revenue",
          description: "Leadership can see which sequences return deals to motion.",
        },
      ],
    },
    cta: {
      title: "Configure Zoho Campaigns for CRM-backed nurture",
      description:
        "A Campaigns Setup Audit of segments, cadence, CRM ownership routing, and recovery paths.",
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
