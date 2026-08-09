export type Capability = {
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "CRM & Sales Systems",
    description:
      "Zoho CRM configured around intake, ownership, stages, and forecast reporting — so pipeline data matches how sales actually works.",
  },
  {
    title: "Process Automation",
    description:
      "Assignment rules, follow-up reminders, and stage exits that remove chase work from WhatsApp and spreadsheets.",
  },
  {
    title: "Finance & Operations",
    description:
      "Delivery, billing, and collections linked to commercial records so leadership reviews one operating view.",
  },
];

export const systemFlowSteps = [
  {
    number: "01",
    title: "Map the operating process",
    description:
      "Document how work moves across sales, delivery, and finance before any Zoho configuration.",
  },
  {
    number: "02",
    title: "Design the system",
    description:
      "Define stages, ownership, required fields, and the metrics leadership will review weekly.",
  },
  {
    number: "03",
    title: "Configure and integrate",
    description:
      "Build Zoho modules, handoffs, and automations so the designed process is the default path.",
  },
  {
    number: "04",
    title: "Stabilize adoption and reporting",
    description:
      "Tighten usage, dashboards, and exceptions until weekly reviews run from the system.",
  },
] as const;
