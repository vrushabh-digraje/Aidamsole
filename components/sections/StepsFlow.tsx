import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export type StepsFlowItem = {
  number: string;
  title: string;
  description: string;
};

type StepsFlowProps = {
  title: string;
  description: string;
  items: StepsFlowItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

export function StepsFlow({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: StepsFlowProps) {
  const headingId = "steps-flow-heading";

  return (
    <Section
      id="implementation"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.number} as="li" className="h-full">
            <p className="text-sm font-medium text-primary">{item.number}</p>
            <h3 className="mt-4">{item.title}</h3>
            <p className="body-clamp mt-3">{item.description}</p>
          </Card>
        ))}
      </ol>
    </Section>
  );
}
