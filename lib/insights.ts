export type Insight = {
  slug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  problem: string;
  analysis: string;
  conclusion: string;
};

export const insights: Insight[] = [
  {
    slug: "crm-mistakes-after-go-live",
    category: "CRM mistakes",
    title: "Why CRM implementations fail after go-live",
    description:
      "Licenses are active, modules are configured, and teams still run on Excel. The failure is usually process ownership — not the tool.",
    intro:
      "Many growing companies buy Zoho, finish configuration, and still cannot answer a basic weekly question: who owns each open enquiry, and what happens next? The system is live. The operating discipline is not.",
    problem:
      "Go-live is treated as the finish line. Fields exist, pipelines exist, users have logins — but stage exits are vague, ownership is optional, and reports disagree with reality. Teams keep the shadow process in Excel and WhatsApp because it feels safer than a CRM they do not trust. Leadership then assumes the tool failed, when the real failure was stopping at setup.",
    analysis:
      "A CRM only works when process decisions are explicit: what starts a record, who owns it, when a stage changes, and what “done” means. Without those rules, configuration becomes decoration. The useful test after go-live is not “is Zoho installed?” It is “can an Ops Head run a review from the system without calling three people?” If the answer is no, the implementation solved software access, not business control. Repair usually means redesigning ownership and stages first, then simplifying the CRM to match — not adding more fields.",
    conclusion:
      "Failed CRM projects rarely need another module. They need a clearer operating model, enforced in the system, with leadership using the same numbers the teams work from. Treat go-live as the start of adoption, not the end of consulting.",
  },
  {
    slug: "handoffs-break-operations",
    category: "Operational inefficiencies",
    title: "Where sales-to-delivery handoffs break",
    description:
      "Work gets sold, then disappears into informal chats. If ownership is unclear at the handoff, leakage becomes normal.",
    intro:
      "Revenue problems often look like sales problems. In service and delivery-led businesses, the leak frequently starts after the deal is won — at the moment work moves from commercial promise to operational execution.",
    problem:
      "Sales closes an opportunity. Context lives in a proposal, a chat thread, or one person’s memory. Delivery discovers scope late. Support hears about the client only after frustration. No shared record defines what was sold, who owns kickoff, and what “ready for delivery” requires. The company works harder while still missing commitments.",
    analysis:
      "Handoffs break when systems treat CRM as a sales island. Opportunity data stops at close-won. Delivery tools start from zero. The fix is not a longer email template. It is a designed transition: required fields before close, a named delivery owner, status visibility for account managers, and a definition of account health that leadership can review. Zoho can connect these steps, but only after the handoff rules are written in business language. If sales can mark a deal won without creating an operable delivery record, leakage is built into the process.",
    conclusion:
      "Close the gap between sold work and delivered work with explicit ownership and a shared system of record. When handoffs are designed, escalation becomes rarer — and leadership sees risk before the client does.",
  },
  {
    slug: "design-system-before-zoho",
    category: "System design thinking",
    title: "Design the operating system before configuring Zoho",
    description:
      "Stages, owners, and reporting rules come first. Configuration should follow how the business actually runs.",
    intro:
      "Zoho is flexible. That is both the advantage and the trap. Teams that start in the admin panel often encode confusion with great precision. Teams that start with operating design configure less — and get used more.",
    problem:
      "Configuration-first projects ask “which modules should we turn on?” before asking “how does work move?” The result is crowded layouts, unused automations, and reports that look complete while hiding broken process. Users blame Zoho. The real issue is that nobody designed the system of work.",
    analysis:
      "System design begins with a map: enquiry → qualification → commitment → delivery → support. For each step, define owner, entry criteria, exit criteria, and the one or two metrics leadership needs. Only then should fields, pipelines, and automations be chosen. This sequence prevents overbuilding. It also creates a shared language between CEO, Ops Head, and implementers. Zoho becomes the enforcement layer for decisions already made, not a place where process is invented under project pressure. Good design is subtractive: remove optional complexity until the weekly review can run from the system.",
    conclusion:
      "Configure Zoho after the operating model is clear. Design first, implement second, adopt third. That order is what separates a consulting engagement from a setup ticket.",
  },
  {
    slug: "zoho-crm-for-real-estate-follow-up",
    category: "Zoho use cases",
    title: "Zoho CRM for real estate follow-up discipline",
    description:
      "Portal leads and broker enquiries need named owners, visit stages, and one pipeline leadership can trust.",
    intro:
      "Real estate teams rarely lack leads. They lack follow-up discipline when volume rises across portals, walk-ins, and channel partners. Zoho CRM helps only when the process matches that messy intake reality.",
    problem:
      "The same buyer appears in multiple lists. Site visits are promised in chat and never logged. Inventory status sits outside CRM. Managers ask for a pipeline update and receive three different spreadsheets. Speed feels high; conversion is opaque.",
    analysis:
      "A workable Zoho design for real estate is narrow and strict: unique lead identity rules, immediate owner assignment, visit stages with dates, and a clear path from enquiry to negotiation. Broker or channel source should be visible without creating parallel trackers. Inventory linkage can stay simple at first — enough that sales does not promise unavailable units. Automations should support reminders and reassignment, not replace judgment. The consulting question is always the same: can a sales head see overdue visits and unowned enquiries in one view by Monday morning?",
    conclusion:
      "For real estate, Zoho success is follow-up accountability under volume. Design for ownership and visit discipline before adding advanced customizations.",
  },
  {
    slug: "reporting-leadership-cannot-trust",
    category: "CRM mistakes",
    title: "When leadership cannot trust the dashboard",
    description:
      "If field definitions and stage exits are loose, reports become arguments. Clean definitions restore decision use.",
    intro:
      "A dashboard that sparks debate every week is worse than no dashboard. Leadership does not need more charts. They need definitions stable enough to decide.",
    problem:
      "Pipeline value looks strong until someone asks what “qualified” means. Conversion rates swing because stages are skipped. Two managers pull the same report and get different stories. Trust collapses, and meetings return to anecdote.",
    analysis:
      "Untrustworthy reporting is almost always a definition problem. Fields are optional that should be required. Stage names sound clear but exit criteria are not. Historical cleanup never happened, so old junk distorts trends. Fixing this is operational work: freeze stage meanings, train to those meanings, restrict who can skip steps, and rebuild a short leadership report with fewer metrics. In Zoho, that may mean simpler pipelines and stricter validation — not a new analytics module. The goal is a report that survives cross-examination in a management meeting.",
    conclusion:
      "Restore trust by tightening definitions and reducing vanity metrics. When leadership believes the numbers, the CRM becomes a decision system again.",
  },
  {
    slug: "whatsapp-excel-shadow-process",
    category: "Operational inefficiencies",
    title: "The WhatsApp and Excel shadow process",
    description:
      "Parallel tracking feels fast until volume grows. The cost shows up as missed follow-ups and conflicting numbers.",
    intro:
      "Shadow processes start as practical shortcuts. A shared sheet here, a WhatsApp group there. At fifty people and rising lead volume, those shortcuts become the real system — and the CRM becomes optional theater.",
    problem:
      "Teams update Excel because it is familiar. They coordinate on WhatsApp because it is immediate. Zoho stays incomplete. Nobody can reconstruct what happened to an enquiry last Tuesday without scrolling chats. Audits, handovers, and leadership reviews all suffer.",
    analysis:
      "Shadow processes persist when the official system is slower than the workaround or fails to answer the team’s real question. Removing WhatsApp by policy rarely works. The consulting move is to make the system of record faster for the critical path: capture, owner, next action, status. Excel can remain for analysis temporarily; it should not remain the place where ownership lives. Design Zoho around the moments people currently open WhatsApp — lead assignment, visit confirmation, delivery update — and the shadow process shrinks because it is no longer necessary.",
    conclusion:
      "Do not fight shadow tools with slogans. Replace their job with a clearer, faster process in Zoho. When the system of record is useful under pressure, Excel and chat fall back to communication — not control.",
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export function getInsightSlugs(): string[] {
  return insights.map((insight) => insight.slug);
}
