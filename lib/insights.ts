export type Insight = {
  slug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  problem: string;
  analysis: string;
  conclusion: string;
  published?: boolean;
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
  {
    slug: "how-ops-heads-evaluate-zoho-partner",
    category: "Buying decisions",
    title: "How Ops Heads should evaluate a Zoho partner",
    description:
      "Licenses and demos are easy to buy. Operating control is not. Use a short diligence checklist before you commit.",
    intro:
      "Most partner pitches look the same: modules, screenshots, and a go-live date. Ops Heads need a different test — whether the partner can redesign how work moves, then make Zoho enforce it.",
    problem:
      "Buyers compare price and timeline, then discover after go-live that nobody owns stage exits, handoffs, or weekly review definitions. The partner delivered configuration. The business still runs on WhatsApp. Replacing the vendor later costs more than choosing carefully once.",
    analysis:
      "Evaluate partners on process evidence, not feature lists. Ask them to walk one of your real journeys — enquiry to close, or close to delivery — and name owners, entry criteria, and the metrics leadership will trust. Ask who trains managers, not only end users. Ask what “done” means after go-live: adoption reviews, report trust, and shadow-process shutdown. A strong partner will refuse to start in the admin panel. They will push for a System Audit, write operating rules in business language, and keep scope subtractive. If the proposal is only hours of configuration with no process design, you are buying setup labor.",
    conclusion:
      "Choose the partner who can run a weekly operating review from the system they design. Configuration skill is necessary; operating design is the differentiator.",
  },
  {
    slug: "zoho-for-retail-distribution-visibility",
    category: "Zoho use cases",
    title: "Zoho for retail and distribution order visibility",
    description:
      "Dealer enquiries, stock checks, and dispatch status need one path — or sales and warehouse will keep disagreeing.",
    intro:
      "Retail and distribution teams feel busy because volume is high. The real pain is invisibility after the quote: confirmed orders, stock reality, and dispatch aging live in different places.",
    problem:
      "Sales promises availability warehouse cannot see. Dealers chase status on WhatsApp. Managers rebuild OTIF from Excel every week. CRM may hold the customer, but fulfillment truth sits elsewhere — so leadership cannot trust either system.",
    analysis:
      "A workable Zoho design for retail and distribution starts with stages after confirmation: reserved, picking, dispatched, delivered. Stock checks belong in the path before promises leave the building. CRM keeps commercial context; Inventory and Books own stock and invoice truth; Analytics shows aging without a rebuild. Automations should flag blocked orders early, not create more noise. The consulting question is simple: can sales and ops answer “where is this order?” from one screen without calling each other?",
    conclusion:
      "For retail and distribution, Zoho success is shared order visibility under volume. Design fulfillment stages and stock rules before adding more apps.",
  },
  {
    slug: "admissions-funnel-counsellor-ownership",
    category: "Zoho use cases",
    title: "Admissions funnels need counsellor ownership first",
    description:
      "Education CRM projects fail when stages differ by counsellor. Shared definitions turn Zoho into a funnel you can manage.",
    intro:
      "Institutes rarely lack enquiries during campaign season. They lack a single definition of stage, owner, and next action across counsellors — so conversion reporting becomes fiction.",
    problem:
      "Each counsellor tracks progress differently. Document chase lives in chat. Fee status sits with finance. Leadership asks for funnel conversion and receives three spreadsheets that cannot be reconciled. Zoho gets blamed for “not fitting education.”",
    analysis:
      "Start with admissions language, not modules: enquiry, counselling, application, documents, fee, enrolled. Assign one counsellor owner immediately. Make document and fee blockers visible on the same record. Campaigns can nurture stalled applications, but only after ownership rules exist. Analytics should show stage conversion by counsellor using those frozen definitions. Overbuilding custom forms before stage discipline usually locks in confusion. The useful Monday test: can the admissions head see overdue document follow-ups and unowned enquiries in one view?",
    conclusion:
      "Education Zoho wins when counsellor ownership and stage exits are enforced. Configure CRM to that funnel — then layer nurture and fee visibility.",
  },
  {
    slug: "ticket-to-account-health",
    category: "Operational inefficiencies",
    title: "From tickets to account health",
    description:
      "Support queues without commercial context create repeat work. Link Desk to CRM so risk shows before escalation.",
    intro:
      "Service businesses often treat support as a separate island. Tickets get answered, but account risk still surprises sales and leadership — because nobody connects queue health to the customer relationship.",
    problem:
      "Agents lack deal and delivery history. SLAs exist on paper. Repeat issues reopen as new chats. Account managers learn about pain only when the client escalates or churns. Desk may be “implemented,” yet account health stays invisible.",
    analysis:
      "Design support as part of the operating system: every ticket links to an account, priority rules reflect commercial risk, and aging surfaces to managers before contractual breach. Chronic patterns should spawn remediation work — not endless reopen cycles. CRM holds relationship context; Desk owns the queue; Analytics shows breach and repeat themes for weekly review. The goal is earlier intervention, not more ticket fields. If agents restart discovery every time, the handoff between commercial and service was never designed.",
    conclusion:
      "Connect tickets to accounts and make aging visible. Support becomes a control system when queue work and relationship risk share one operating view.",
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export function getInsightSlugs(): string[] {
  return insights.map((insight) => insight.slug);
}
