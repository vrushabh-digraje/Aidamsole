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
  eyebrow?: string;
  children: ReactNode;
  columns?: 2 | 3 | 4;
  id?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function Grid({
  title,
  description,
  eyebrow,
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
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={headingId}
          className={cn("text-gray-900", eyebrow && "mt-2")}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-snug text-gray-600">
            {description}
          </p>
        ) : null}
      </div>
      <div className={cn("mt-12 grid gap-6", columnClasses[columns])}>
        {children}
      </div>
    </Section>
  );
}
