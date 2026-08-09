import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  aside?: ReactNode;
  /** Authority layout: content left, SystemFlow product right. */
  variant?: "default" | "authority";
  className?: string;
  /** @deprecated Hero uses a fixed enterprise surface (py-24 + gradient). */
  tone?: string;
  /** @deprecated Hero uses a fixed enterprise surface (py-24 + gradient). */
  spacing?: string;
};

export function Hero({
  eyebrow = "Zoho Implementation Partner",
  title = "Business Systems. Not Just Software.",
  description = "Structured systems for sales, operations, and finance — on Zoho.",
  primaryCta = {
    href: PRIMARY_CTA.href,
    label: PRIMARY_CTA.label,
  },
  secondaryCta = { href: "#system-flow", label: "View System Demo" },
  aside,
  variant = "default",
  className,
}: HeroProps) {
  const headingId = "hero-heading";
  const isSplit = Boolean(aside);
  const isAuthority = isSplit && variant === "authority";

  if (!isSplit) {
    return (
      <section
        aria-labelledby={headingId}
        className={cn(
          "relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-blue-50 to-white py-24",
          className,
        )}
      >
        <HeroBackdrop />
        <Container className="relative">
          <div className="mx-auto max-w-lg text-center">
            {eyebrow ? (
              <p className="ds-eyebrow">{eyebrow}</p>
            ) : null}
            <h1
              id={headingId}
              className={cn(
                "text-balance font-bold tracking-tight leading-[1.05]",
                eyebrow && "mt-5",
              )}
            >
              {title}
            </h1>
            <p className="mt-4 text-base leading-snug text-gray-600">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primaryCta.href} className="shadow-md">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-blue-50 via-blue-50/40 to-white py-24",
        className,
      )}
    >
      <HeroBackdrop />

      <Container className="relative">
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-6",
            isAuthority
              ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]"
              : "lg:grid-cols-2",
          )}
        >
          {/* LEFT — dense authority copy */}
          <div className="order-2 max-w-lg lg:order-1">
            {eyebrow ? (
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 shadow-sm backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-700"
                  aria-hidden="true"
                />
                {eyebrow}
              </p>
            ) : null}

            <h1
              id={headingId}
              className={cn(
                "max-w-lg text-balance font-bold tracking-tight text-gray-900",
                eyebrow && "mt-5",
                isAuthority
                  ? "text-4xl leading-[1.02] md:text-5xl lg:text-[3.15rem] lg:leading-[1.02]"
                  : "leading-[1.05]",
              )}
            >
              {title}
            </h1>

            <p className="mt-4 max-w-lg text-base leading-snug text-gray-600 md:text-[1.05rem] md:leading-snug">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={primaryCta.href} className="shadow-md">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>

            <p className="mt-5 text-xs font-medium leading-tight text-gray-500">
              Zoho Authorized Partner · India &amp; GCC
            </p>
          </div>

          {/* RIGHT — oversized system diagram */}
          <div
            className={cn(
              "order-1 w-full min-w-0 lg:order-2",
              isAuthority &&
                "relative flex items-center justify-center py-4 lg:min-h-[560px] lg:py-0",
            )}
          >
            {/* Soft blue / indigo glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="absolute inset-[12%] rounded-full bg-blue-400/25 blur-3xl" />
              <div className="absolute inset-[22%] rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute inset-[30%] rounded-[2rem] bg-blue-600/10 blur-2xl" />
            </div>

            <div
              className={cn(
                "relative w-full origin-center",
                "scale-[1.05] sm:scale-[1.1] lg:scale-[1.22] xl:scale-[1.28]",
              )}
            >
              <div className="rounded-2xl shadow-xl ring-1 ring-blue-100/80">
                {aside}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <>
      {/* Soft blue wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgb(191_219_254_/_0.7)_0%,_transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,_rgb(224_231_255_/_0.45)_0%,_transparent_45%)]"
      />
      {/* Subtle grid / pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(30 58 138 / 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(30 58 138 / 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at 70% 45%, black 0%, black 40%, transparent 75%)",
        }}
      />
    </>
  );
}
