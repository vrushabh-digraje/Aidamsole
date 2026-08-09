import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export type FeatureGridItem = {
  title: string;
  description: string;
  icon: "track" | "followup" | "pipeline" | "forecast" | "ownership";
};

type FeatureGridProps = {
  title: string;
  description: string;
  items: FeatureGridItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

function FeatureIcon({ type }: { type: FeatureGridItem["icon"] }) {
  const className = "h-5 w-5 stroke-[1.75]";

  switch (type) {
    case "track":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" />
        </svg>
      );
    case "followup":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path d="M12 7v5l3 2" stroke="currentColor" />
        </svg>
      );
    case "pipeline":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="4" width="6" height="16" rx="1" stroke="currentColor" />
          <rect x="9" y="8" width="6" height="12" rx="1" stroke="currentColor" />
          <rect x="15" y="12" width="6" height="8" rx="1" stroke="currentColor" />
        </svg>
      );
    case "forecast":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M4 19V5M4 19h16" stroke="currentColor" />
          <path d="M7 14l4-4 3 3 5-6" stroke="currentColor" />
        </svg>
      );
    case "ownership":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="9" cy="8" r="3" stroke="currentColor" />
          <path d="M3 19a6 6 0 0 1 12 0" stroke="currentColor" />
          <path d="M16 11l2 2 4-4" stroke="currentColor" />
        </svg>
      );
  }
}

export function FeatureGrid({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: FeatureGridProps) {
  const headingId = "feature-grid-heading";

  return (
    <Section
      id="what-it-does"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.title} as="li" className="h-full">
            <span className="icon-box">
              <FeatureIcon type={item.icon} />
            </span>
            <h3 className="mt-5">{item.title}</h3>
            <p className="body-clamp mt-3">{item.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
