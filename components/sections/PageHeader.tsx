import { Section } from "@/components/layout/Section";

type PageHeaderProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  const headingId = "page-header-title";

  return (
    <Section ariaLabelledby={headingId}>
      <div className="section-copy">
        {eyebrow ? (
          <p className="text-sm font-medium text-primary">{eyebrow}</p>
        ) : null}
        <h1 id={headingId} className={eyebrow ? "mt-4" : undefined}>
          {title}
        </h1>
        <p className="section-lede body-clamp">{description}</p>
      </div>
    </Section>
  );
}
