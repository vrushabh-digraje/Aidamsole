"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useCallback } from "react";

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
  { name: "CRM", slug: "crm" as const, href: `${ROUTES.platform}/crm` },
  { name: "Books", slug: "invoice" as const, href: `${ROUTES.platform}/books` },
  { name: "Inventory", slug: "crm" as const, href: `${ROUTES.platform}/inventory` },
  { name: "Projects", slug: "project" as const, href: `${ROUTES.platform}/projects` },
  { name: "Analytics", slug: "dashboard" as const, href: `${ROUTES.platform}/analytics` },
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

  // Dispatch custom events on hover to communicate with InteractiveHeroAside
  const handleAppMouseEnter = useCallback((slug: string) => {
    window.dispatchEvent(new CustomEvent("hero-app-hover", { detail: slug }));
  }, []);

  const handleAppMouseLeave = useCallback(() => {
    window.dispatchEvent(new CustomEvent("hero-app-hover", { detail: null }));
  }, []);

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40",
        "py-6 lg:py-8 lg:min-h-[calc(100vh-76px)] lg:flex lg:items-center", // Frame fit adjustments
        className,
      )}
    >
      {/* Decorative Blur Background Blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(15_23_42_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_23_42_/_0.03)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <Container className="relative w-full">
        <div
          className={cn(
            "grid items-center gap-6 lg:gap-10",
            isSplit
              ? isAuthority
                ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]"
                : "lg:grid-cols-2"
              : "",
          )}
        >
          {/* LEFT SIDE: Texts, Badges, and highlights with entrance animations */}
          <div className={cn("min-w-0 max-w-xl", isSplit && "order-2 lg:order-1 flex flex-col justify-center")}>
            
            {/* Header Badges with slide-in animation */}
            <div className="mb-3 flex flex-wrap items-center gap-3 animate-fade-slide-down">
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-1 hover:shadow-md transition duration-300">
                <ZohoPartnerBadge variant="badge" size="md" framed priority />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>
              {eyebrow ? (
                <span className="inline-flex rounded-full border border-blue-100 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-sm hover:scale-105 transition duration-300">
                  {eyebrow.replace("Zoho Authorized Partner · ", "")}
                </span>
              ) : null}
            </div>

            {/* Title with reveal slide up */}
            <h1
              id={headingId}
              className={cn(
                "text-balance font-bold tracking-tight text-gray-900",
                "text-[1.85rem] leading-[1.1] sm:text-3xl md:text-[2.35rem]", // Moderated size for single-frame fit
                "animate-reveal-up"
              )}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 max-w-md text-sm leading-relaxed text-gray-600 md:text-base md:leading-snug animate-fade-slide-up">
              {description}
            </p>

            {/* Highlights Grid restructured to inline tags to save screen vertical space */}
            {highlights.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {highlights.map((item, idx) => (
                  <div
                    key={item}
                    style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                    className={cn(
                      "group/item flex items-center gap-2 rounded-full border border-gray-100 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm",
                      "transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-md hover:scale-[1.03]",
                      "animate-fade-slide-up-staggered opacity-0"
                    )}
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform group-hover/item:scale-110 group-hover/item:rotate-[360deg] duration-500">
                      <SectionIcons.check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            ) : null}

            {/* Core Apps Implementation section */}
            <div className="mt-4 animate-fade-slide-up-delayed">
              <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                Core Zoho apps we implement
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {heroApps.map((app) => (
                  <li key={app.name}>
                    <Link
                      href={app.href}
                      onMouseEnter={() => handleAppMouseEnter(app.slug)}
                      onMouseLeave={handleAppMouseLeave}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-800 no-underline shadow-sm",
                        "transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md hover:no-underline",
                        app.slug === "crm" ? "hover:text-red-600 hover:bg-red-50/10" : 
                        app.slug === "invoice" ? "hover:text-blue-600 hover:bg-blue-50/10" :
                        app.slug === "project" ? "hover:text-sky-600 hover:bg-sky-50/10" : "hover:text-emerald-600 hover:bg-emerald-50/10"
                      )}
                    >
                      <ZohoAppIcon name={app.name} size="sm" />
                      {app.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3 animate-fade-slide-up-delayed-more">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Grid Flow */}
          {isSplit ? (
            <div className="order-1 w-full min-w-0 lg:order-2 lg:pl-2 animate-fade-in-delayed">
              {aside}
            </div>
          ) : null}
        </div>
      </Container>

      {/* Inline styles for custom entrance animations */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-reveal-up {
          animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }
        .animate-fade-slide-up-staggered {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-slide-up-delayed {
          opacity: 0;
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        .animate-fade-slide-up-delayed-more {
          opacity: 0;
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s forwards;
        }

        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-down {
          animation: fadeSlideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-delayed {
          opacity: 0;
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
      `}</style>
    </section>
  );
}
