import { CTA, journeyCtas } from "@/components/sections/CTA";
import { Grid } from "@/components/sections/Grid";
import { Hero } from "@/components/sections/Hero";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { ConnectedSystemExperience } from "@/components/sections/ConnectedSystemExperience";
import { ProblemGrid } from "@/components/sections/ProblemGrid";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { Trust } from "@/components/sections/Trust";
import { DirectoryCard } from "@/components/ui/DirectoryCard";
import { DirectoryIcon } from "@/components/ui/DirectoryIcons";
import { CTAS } from "@/lib/constants";
import { megaMenu } from "@/lib/navigation";

const problems = [
  {
    icon: "leakage" as const,
    title: "Leads scattered",
    description: "WhatsApp, sheets, and inboxes — no single owner.",
  },
  {
    icon: "pipeline" as const,
    title: "No visibility",
    description: "Sales, delivery, and finance status stay opaque.",
  },
  {
    icon: "delay" as const,
    title: "Manual handoffs",
    description: "Work moves by chase, not by system rules.",
  },
  {
    icon: "reporting" as const,
    title: "Broken reporting",
    description: "Leadership rebuilds numbers every week in Excel.",
  },
];

const solutions = (
  megaMenu.find((item) => item.type === "solutions")?.items ?? []
).map((item) => ({
  ...item,
  description: item.description ?? "",
}));

const industryCopy: Record<string, string> = {
  "Real Estate": "Lead to booking — sites, brokers, collections.",
  Healthcare: "Patient intake, follow-ups, and clinic visibility.",
  Manufacturing: "Enquiry to delivery across sales and production.",
  Education: "Admissions, counselling, and fee control.",
  Retail: "Store, ecommerce, and inventory in one flow.",
  Construction: "Tenders, projects, billing, and site execution.",
};

const industries = [
  "Real Estate",
  "Healthcare",
  "Manufacturing",
  "Education",
  "Retail",
  "Construction",
].map((label) => {
  const navItem = megaMenu
    .find((item) => item.type === "industries")
    ?.items?.find((item) => item.label === label);

  return {
    label,
    href:
      navItem?.href ??
      `/industries/${label.toLowerCase().replace(/\s+/g, "-")}`,
    description: industryCopy[label] ?? "Process model for your sector.",
    icon: navItem?.icon ?? label.toLowerCase().replace(/\s+/g, "-"),
  };
});

const platform = [
  {
    name: "CRM",
    role: "Ownership and pipeline control across sales.",
    group: "Sales" as const,
  },
  {
    name: "SalesIQ",
    role: "Website and chat capture tied to CRM ownership.",
    group: "Sales" as const,
  },
  {
    name: "Books",
    role: "Invoices, payments, and collections.",
    group: "Finance" as const,
  },
  {
    name: "Expense",
    role: "Spend visibility and approval control.",
    group: "Finance" as const,
  },
  {
    name: "Projects",
    role: "Delivery execution after deal closure.",
    group: "Operations" as const,
  },
  {
    name: "Creator",
    role: "Process extensions unique to your business.",
    group: "Operations" as const,
  },
  {
    name: "Analytics",
    role: "Leadership reporting and live dashboards.",
    group: "Intelligence" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        variant="authority"
        eyebrow="Zoho Implementation Partner"
        title="Business Systems. Not Just Software."
        description="Structured systems for sales, operations, and finance — owned, connected, and visible on Zoho."
        primaryCta={CTAS.primary}
        secondaryCta={CTAS.viewDemo}
        aside={<SystemFlow showSectionChrome={false} size="lg" />}
      />

      {/* 2. Trust */}
      <Trust
        tone="default"
        spacing="default"
        title="Trusted by growing companies"
        description="Mid-market teams across India and the GCC running sales, operations, and finance on Zoho."
        showTestimonial
      />

      {/* 3. Problem */}
      <ProblemGrid
        tone="muted"
        spacing="default"
        title="No System. No Control."
        description="Software without process design fails in the handoffs."
        items={problems}
      />
      <CTA
        variant="band"
        tone="default"
        {...journeyCtas.afterProblem}
      />

      {/* 3–4. System walkthrough ↔ CRM preview */}
      <ConnectedSystemExperience />
      <CTA
        variant="band"
        tone="muted"
        {...journeyCtas.afterSystem}
      />

      {/* 5. Solutions */}
      <Grid
        id="solutions"
        tone="muted"
        spacing="default"
        title="Solutions"
        description="Operating systems by function."
        columns={3}
      >
        {solutions.map((item) => (
          <DirectoryCard
            key={item.href}
            href={item.href}
            title={item.label}
            description={item.description}
            icon={<DirectoryIcon name={item.icon ?? item.label} />}
          />
        ))}
      </Grid>
      <CTA
        variant="band"
        tone="default"
        {...journeyCtas.afterSolutions}
      />

      {/* 6. Industries */}
      <Grid
        id="industries"
        tone="muted"
        spacing="default"
        title="Industries"
        description="Enter by sector — see the operating system built for how you run."
        columns={3}
      >
        {industries.map((item) => (
          <DirectoryCard
            key={item.href}
            href={item.href}
            title={item.label}
            description={item.description}
            icon={<DirectoryIcon name={item.icon} />}
            ctaLabel="View System"
            tall
          />
        ))}
      </Grid>
      <CTA
        variant="band"
        tone="default"
        {...journeyCtas.afterIndustries}
      />

      {/* 7. Platform */}
      <ModuleGrid
        tone="default"
        spacing="default"
        title="Zoho Platform"
        description="One structured ecosystem — Sales, Finance, Operations, and Intelligence."
        items={platform}
        grouped
      />
      <CTA
        variant="band"
        tone="muted"
        {...journeyCtas.afterPlatform}
      />

      {/* 8. Closing CTA */}
      <CTA
        tone="dark"
        spacing="default"
        title="Audit Your Systems"
        description="Map intake, handoffs, and reporting. Define the Zoho build."
        cta={CTAS.primary}
        secondaryCta={CTAS.viewDemo}
        tertiaryCta={CTAS.exploreSolutions}
      />
    </>
  );
}
