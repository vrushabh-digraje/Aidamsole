import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";

export type StatItem = {
  label: string;
  value: string;
  hint?: string;
};

type StatsProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
  items?: StatItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

/** Non-numeric proof points — no fabricated counts. */
export const homepageStats: StatItem[] = [
  { label: "Partner status", value: "Zoho Authorized" },
  { label: "Focus", value: "Retail & Distribution" },
  { label: "Regions", value: "India & GCC" },
  { label: "Engagement", value: "Consult → Support" },
];

export function Stats({
  title = "What we stand on",
  description = "Credentials and focus — not invented volume metrics.",
  eyebrow = "Credibility",
  items = homepageStats,
  tone = "default",
  spacing = "compact",
}: StatsProps) {
  const headingId = "stats-heading";

  return (
    <Section
      id="stats"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
        <h2 id={headingId} className="mt-2 text-gray-900">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-snug text-gray-600">{description}</p>
        ) : null}
      </div>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
          >
            <dd className="text-xl font-bold tracking-tight text-primary md:text-2xl">
              {item.value}
            </dd>
            <dt className="mt-2 text-sm font-semibold text-gray-900">
              {item.label}
            </dt>
            {item.hint ? (
              <p className="mt-1 text-[11px] text-gray-400">{item.hint}</p>
            ) : null}
          </div>
        ))}
      </dl>
    </Section>
  );
}
