import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export type IntegrationFlowConnection = {
  name: string;
  role: string;
};

type IntegrationFlowProps = {
  title: string;
  description: string;
  hub: {
    name: string;
    role: string;
  };
  connections: IntegrationFlowConnection[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

export function IntegrationFlow({
  title,
  description,
  hub,
  connections,
  tone = "default",
  spacing = "default",
}: IntegrationFlowProps) {
  const headingId = "integration-flow-heading";

  return (
    <Section
      id="integrations"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      <div
        className="surface mt-10 p-6"
        role="list"
        aria-label={`${hub.name} integration flow`}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div role="listitem">
            <Card className="h-full border-primary">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                System hub
              </p>
              <h3 className="mt-3">Zoho {hub.name}</h3>
              <p className="body-clamp mt-3">{hub.role}</p>
            </Card>
          </div>

          <ul className="grid gap-4 md:grid-cols-2 lg:col-span-2">
            {connections.map((connection) => (
              <Card key={connection.name} as="li" className="h-full">
                <p className="text-xs font-medium text-primary">
                  {hub.name} → {connection.name}
                </p>
                <h3 className="mt-3">Zoho {connection.name}</h3>
                <p className="body-clamp mt-3">{connection.role}</p>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
