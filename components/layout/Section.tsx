import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type SectionTone = "default" | "muted" | "dark";
export type SectionSpacing = "compact" | "default" | "prominent";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  ariaLabelledby?: string;
  tone?: SectionTone;
  /** compact = py-16, default = py-20, prominent = py-28 */
  spacing?: SectionSpacing;
  /** Subtle bottom border between sections. */
  bordered?: boolean;
};

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-16",
  default: "py-20",
  prominent: "py-28",
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background",
  muted: "bg-surface-muted",
  dark: "bg-primary text-white",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  ariaLabelledby,
  tone = "default",
  spacing = "default",
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        spacingClasses[spacing],
        toneClasses[tone],
        bordered && tone !== "dark" && "border-b border-gray-200",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
