import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { capabilities } from "@/lib/content/capabilities";

type CapabilitiesProps = {
  title?: string;
  description?: string;
};

export function Capabilities({
  title = "Capabilities",
  description = "CRM, process automation, and finance operations designed as one Zoho operating model.",
}: CapabilitiesProps) {
  const headingId = "capabilities-heading";

  return (
    <Section id="capabilities" ariaLabelledby={headingId}>
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {capabilities.map((capability) => (
          <Card key={capability.title} as="li">
            <h3>{capability.title}</h3>
            <p className="mt-3">{capability.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
