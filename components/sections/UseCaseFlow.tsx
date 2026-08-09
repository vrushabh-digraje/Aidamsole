import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export type UseCaseFlowItem = {
  title: string;
  summary: string;
  steps: string[];
};

type UseCaseFlowProps = {
  title: string;
  description: string;
  items: UseCaseFlowItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

export function UseCaseFlow({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: UseCaseFlowProps) {
  const headingId = "use-case-flow-heading";

  return (
    <Section
      id="use-cases"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      <div className="mt-10 grid gap-6">
        {items.map((item) => (
          <article key={item.title} className="surface p-6">
            <h3>{item.title}</h3>
            <p className="body-clamp section-lede mt-3">{item.summary}</p>

            <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {item.steps.map((step, index) => (
                <Card key={`${item.title}-${step}`} as="li" className="p-4">
                  <p className="text-xs font-medium text-primary">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm font-medium text-gray-900">{step}</p>
                </Card>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  );
}
