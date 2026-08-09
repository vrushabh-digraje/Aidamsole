import { Section } from "@/components/layout/Section";

type ProblemProps = {
  title?: string;
  description?: string;
  points?: string[];
};

const defaultPoints = [
  "Zoho is licensed, but process still lives in Excel and WhatsApp.",
  "Dashboards cannot be trusted because ownership and stages are undefined.",
  "Sales-to-delivery handoffs break, creating leakage and rework.",
];

export function Problem({
  title = "The problem is the operating process",
  description = "Most mid-market companies do not need another login. They need a CRM and operations system leadership can review every week.",
  points = defaultPoints,
}: ProblemProps) {
  const headingId = "problem-heading";

  return (
    <Section id="problem" ariaLabelledby={headingId}>
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <li
            key={point}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p>{point}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
