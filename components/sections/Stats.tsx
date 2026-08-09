import { Section } from "@/components/layout/Section";

type StatItem = {
  label: string;
  value: string;
};

type StatsProps = {
  title?: string;
  items?: StatItem[];
};

const defaultItems: StatItem[] = [
  { label: "Placeholder metric", value: "—" },
  { label: "Placeholder metric", value: "—" },
  { label: "Placeholder metric", value: "—" },
];

export function Stats({
  title = "Stats",
  items = defaultItems,
}: StatsProps) {
  const headingId = "stats-heading";

  return (
    <Section ariaLabelledby={headingId} tone="muted">
      <h2 id={headingId} className="sr-only">
        {title}
      </h2>
      <dl className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <dt className="text-sm text-gray-600">{item.label}</dt>
            <dd className="mt-3 text-3xl font-semibold text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
