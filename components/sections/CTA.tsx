import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CTAS, PRIMARY_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CtaLink = { href: string; label: string };

type CTAProps = {
  title?: string;
  description?: string;
  cta?: CtaLink;
  secondaryCta?: CtaLink;
  tertiaryCta?: CtaLink;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  /** Compact mid-page band vs full closing CTA. */
  variant?: "full" | "band";
  align?: "center" | "between";
  id?: string;
};

export function CTA({
  title = "Book a System Audit",
  description = "Assess intake, handoffs, and reporting — then define the Zoho system design your leadership can run.",
  cta = PRIMARY_CTA,
  secondaryCta,
  tertiaryCta,
  tone = "dark",
  spacing = "default",
  variant = "full",
  align = "center",
  id = "cta",
}: CTAProps) {
  const headingId = `${id}-heading`;
  const isDark = tone === "dark";
  const isBand = variant === "band";

  if (isBand) {
    return (
      <Section
        id={id}
        ariaLabelledby={headingId}
        tone={tone}
        spacing={spacing === "default" ? "compact" : spacing}
        bordered
      >
        <div
          className={cn(
            "flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:gap-8 md:p-8",
            tone === "muted" && "border-gray-200/80 bg-gray-50",
            isDark && "border-primary/20 bg-primary",
          )}
        >
          <div className="min-w-0 max-w-xl">
            <h2
              id={headingId}
              className={cn(
                "text-xl font-semibold tracking-tight md:text-2xl",
                isDark ? "text-white" : "text-gray-900",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={cn(
                  "mt-2 text-sm leading-snug",
                  isDark ? "text-white/80" : "text-gray-600",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Button
              href={cta.href}
              size="sm"
              className={cn(
                isDark &&
                  "bg-white text-primary shadow-md hover:bg-gray-50 focus-visible:outline-white",
              )}
            >
              {cta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="secondary"
                size="sm"
                className={cn(
                  isDark &&
                    "border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
                )}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
            {tertiaryCta ? (
              <a
                href={tertiaryCta.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  isDark
                    ? "text-white/85 hover:text-white"
                    : "text-primary hover:text-blue-800",
                )}
              >
                {tertiaryCta.label} →
              </a>
            ) : null}
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id={id}
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      bordered={false}
    >
      <div
        className={cn(
          "section-copy",
          align === "center" && "mx-auto text-center",
        )}
      >
        <h2 id={headingId} className={cn(isDark && "text-white")}>
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "section-lede body-clamp",
              align === "center" && "mx-auto",
              isDark && "text-white/80",
            )}
          >
            {description}
          </p>
        ) : null}
        <div
          className={cn(
            "mt-8 flex flex-wrap items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <Button
            href={cta.href}
            className={cn(
              isDark &&
                "bg-white text-primary hover:bg-gray-50 focus-visible:outline-white",
            )}
          >
            {cta.label}
          </Button>
          {secondaryCta ? (
            <Button
              href={secondaryCta.href}
              variant="secondary"
              className={cn(
                isDark &&
                  "border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
              )}
            >
              {secondaryCta.label}
            </Button>
          ) : null}
          {tertiaryCta ? (
            <a
              href={tertiaryCta.href}
              className={cn(
                "text-sm font-semibold transition-colors",
                isDark
                  ? "text-white/85 hover:text-white"
                  : "text-primary hover:text-blue-800",
              )}
            >
              {tertiaryCta.label} →
            </a>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

/** Preset mid-journey bands using the shared CTA vocabulary. */
export const journeyCtas = {
  afterProblem: {
    id: "cta-after-problem",
    title: "Fix the handoffs first.",
    description:
      "See how operating systems by function replace scattered tools.",
    cta: CTAS.exploreSolutions,
    secondaryCta: CTAS.primary,
    tertiaryCta: CTAS.viewDemo,
  },
  afterSystem: {
    id: "cta-after-system",
    title: "See the system in motion.",
    description:
      "Walk the flow — then book an audit to map it to your business.",
    cta: CTAS.primary,
    secondaryCta: CTAS.viewDemo,
    tertiaryCta: CTAS.exploreSolutions,
  },
  afterSolutions: {
    id: "cta-after-solutions",
    title: "Choose the system by function.",
    description:
      "Explore sales, delivery, and finance systems — or see your industry model.",
    cta: CTAS.exploreSolutions,
    secondaryCta: CTAS.primary,
    tertiaryCta: CTAS.industryUseCase,
  },
  afterIndustries: {
    id: "cta-after-industries",
    title: "Start from how your sector runs.",
    description:
      "Open an industry use case — or audit your current operating model.",
    cta: CTAS.industryUseCase,
    secondaryCta: CTAS.primary,
    tertiaryCta: CTAS.exploreSolutions,
  },
  afterPlatform: {
    id: "cta-after-platform",
    title: "Modules with jobs. Not a shopping list.",
    description:
      "See the live demo, or book a system audit to define the build.",
    cta: CTAS.primary,
    secondaryCta: CTAS.viewDemo,
    tertiaryCta: CTAS.exploreSolutions,
  },
} as const;
