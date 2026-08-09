import type { ReactNode } from "react";

import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

type GridProps = {
  title: string;
  description?: string;
  children: ReactNode;
  columns?: 2 | 3 | 4;
  id?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
} as const;

export function Grid({
  title,
  description,
  children,
  columns = 3,
  id,
  tone = "default",
  spacing = "default",
}: GridProps) {
  const headingId = id ? `${id}-heading` : "grid-heading";

  return (
    <Section
      id={id}
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        {description ? (
          <p className="section-lede body-clamp">{description}</p>
        ) : null}
      </div>
      <div className={cn("mt-10 grid gap-8", columnClasses[columns])}>
        {children}
      </div>
    </Section>
  );
}
