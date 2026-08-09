export type Industry = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    summary:
      "Lead routing, site-visit stages, and inventory-linked CRM for brokers and developers.",
    problem:
      "Portal and broker leads fragment across Excel and WhatsApp. Visit ownership is unclear and pipeline reporting cannot be trusted.",
    approach:
      "Zoho CRM designed around enquiry ownership, visit stages, and sales-to-handover handoffs.",
    outcome:
      "One pipeline for leadership reviews, with fewer duplicate leads and missed follow-ups.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Enquiry handling, appointment follow-up, and named ownership from first contact to visit.",
    problem:
      "Patient enquiries live in shared inboxes. Response quality varies by staff and weekly reporting is unreliable.",
    approach:
      "Enquiry-to-appointment flow mapped in Zoho with staged ownership, reminders, and an operations dashboard.",
    outcome:
      "Consistent first response, less appointment leakage, and reviews based on system data.",
  },
  {
    slug: "education",
    title: "Education",
    summary:
      "Admissions funnels, counsellor ownership, and enquiry-to-enrollment reporting.",
    problem:
      "Counsellors track enquiries differently. Funnel stages and conversion reporting stay fragmented.",
    approach:
      "Admissions stages defined first, then Zoho configured for counsellor ownership and enrollment visibility.",
    outcome:
      "One admissions process across the team and stage conversion without spreadsheet rebuilds.",
  },
  {
    slug: "service",
    title: "Service Businesses",
    summary:
      "Sales-to-delivery handoffs, SLA tracking, and account status in one operating flow.",
    problem:
      "Closed deals disappear into informal delivery chats. SLAs are informal and risk surfaces only after escalation.",
    approach:
      "CRM opportunities connected to delivery workflows with named owners and status fields.",
    outcome:
      "Clear handoffs after every sale and earlier visibility into account risk.",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
