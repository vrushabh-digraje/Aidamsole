import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { getPublishedIndustries } from "@/lib/published";

type IndustriesProps = {
  title?: string;
  description?: string;
};

export function Industries({
  title = "Industries",
  description = "Industry operating models for mid-market companies across India and the UAE.",
}: IndustriesProps) {
  const headingId = "industries-heading";
  const industries = getPublishedIndustries();

  return (
    <Section id="industries" ariaLabelledby={headingId}>
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {industries.map((industry) => (
          <Card key={industry.slug} as="li">
            <h3>
              <Link
                href={`/industries/${industry.slug}`}
                className="transition-colors hover:text-primary"
              >
                {industry.name}
              </Link>
            </h3>
            <p className="mt-3">{industry.hero.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
