import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ZohoAppIcon } from "@/components/ui/ZohoAppIcon";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
import { SectionIcons } from "@/components/ui/SectionIcons";
import { PRIMARY_CTA, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  highlights?: string[];
  aside?: ReactNode;
  variant?: "default" | "authority";
  className?: string;
  tone?: string;
  spacing?: string;
};

const defaultHighlights = [
  "Certified Zoho consultants",
  "CRM, Books, Projects & more",
  "India & GCC delivery",
];

const heroApps = [
  { name: "CRM", href: `${ROUTES.platform}/crm` },
  { name: "Books", href: `${ROUTES.platform}/books` },
  { name: "Inventory", href: `${ROUTES.platform}/inventory` },
  { name: "Projects", href: `${ROUTES.platform}/projects` },
  { name: "Analytics", href: `${ROUTES.platform}/analytics` },
] as const;

export function Hero({
  eyebrow = "Zoho Authorized Partner · India & GCC",
  title = "Zoho Implementation Partner for Growing Businesses",
  description = "We help mid-sized companies implement Zoho CRM and connected apps — so sales, operations, and finance run as one system.",
  primaryCta = {
    href: PRIMARY_CTA.href,
    label: PRIMARY_CTA.label,
  },
  secondaryCta = { href: "#system-flow", label: "View Demo" },
  highlights = defaultHighlights,
  aside,
  variant = "default",
  className,
}: HeroProps) {
  const headingId = "hero-heading";
  const isSplit = Boolean(aside);
  const isAuthority = isSplit && variant === "authority";

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40",
        "py-12 md:py-16 lg:py-20",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(15_23_42_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_23_42_/_0.03)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <Container className="relative">
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-12",
            isSplit
              ? isAuthority
                ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
                : "lg:grid-cols-2"
              : "",
          )}
        >
          <div className={cn("min-w-0 max-w-xl", isSplit && "order-2 lg:order-1")}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <ZohoPartnerBadge variant="badge" size="md" framed priority />
              {eyebrow ? (
                <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary shadow-sm">
                  {eyebrow.replace("Zoho Authorized Partner · ", "")}
                </span>
              ) : null}
            </div>

            <h1
              id={headingId}
              className={cn(
                "text-balance font-bold tracking-tight text-gray-900",
                "text-[2rem] leading-[1.15] sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
              )}
            >
              {title}
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600 md:text-lg md:leading-snug">
              {description}
            </p>

            {highlights.length > 0 ? (
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-1">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-white/80 px-3 py-2 text-sm font-medium text-gray-800 shadow-sm"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <SectionIcons.check className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Core Zoho apps we implement
              </p>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {heroApps.map((app) => (
                  <li key={app.name}>
                    <Link
                      href={app.href}
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2.5 py-2 text-xs font-semibold text-gray-800 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:no-underline"
                    >
                      <ZohoAppIcon name={app.name} size="sm" />
                      {app.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
          </div>

          {isSplit ? (
            <div className="order-1 w-full min-w-0 lg:order-2 lg:pl-2">
              {aside}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
