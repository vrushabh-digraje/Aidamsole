import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export type OutcomeGridItem = {
  title: string;
  description: string;
};

type OutcomeGridProps = {
  title: string;
  description: string;
  items: OutcomeGridItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

export function OutcomeGrid({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: OutcomeGridProps) {
  const headingId = "outcome-grid-heading";

  return (
    <Section
      id="outcomes"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} as="li" className="h-full">
            <h3>{item.title}</h3>
            <p className="body-clamp mt-3">{item.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
