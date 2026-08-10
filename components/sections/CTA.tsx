import Image from "next/image";
import Link from "next/link";

import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
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
  variant?: "full" | "band";
  align?: "center" | "between";
  id?: string;
};

const darkPrimaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary no-underline shadow-sm transition hover:bg-gray-50 hover:no-underline";

const darkSecondaryBtn =
  "inline-flex items-center justify-center rounded-lg border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white no-underline transition hover:border-white hover:bg-white/10 hover:no-underline";

const lightPrimaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white no-underline shadow-sm transition hover:bg-primary/90 hover:no-underline";

const lightSecondaryBtn =
  "inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 no-underline transition hover:bg-gray-50 hover:no-underline";

const zohoProducts = [
  {
    name: "CRM",
    accent: "border-l-[#E42527] text-[#FCA5A5]",
    className: "left-[4%] top-[18%] -rotate-6 hidden sm:flex",
  },
  {
    name: "Books",
    accent: "border-l-[#22C55E] text-[#86EFAC]",
    className: "right-[5%] top-[16%] rotate-6 hidden sm:flex",
  },
  {
    name: "Projects",
    accent: "border-l-[#3B82F6] text-[#93C5FD]",
    className: "left-[8%] bottom-[20%] rotate-3 hidden md:flex",
  },
  {
    name: "People",
    accent: "border-l-[#F59E0B] text-[#FCD34D]",
    className: "right-[7%] bottom-[18%] -rotate-3 hidden md:flex",
  },
  {
    name: "Analytics",
    accent: "border-l-[#06B6D4] text-[#67E8F9]",
    className: "left-[18%] top-[8%] rotate-2 hidden lg:flex",
  },
  {
    name: "Creator",
    accent: "border-l-[#F97316] text-[#FDBA74]",
    className: "right-[16%] top-[10%] -rotate-2 hidden lg:flex",
  },
] as const;

function ZohoProductMark({
  name,
  accent,
  className,
}: {
  name: string;
  accent: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-[1] items-center gap-2 rounded-lg border border-white/10 border-l-4 bg-white/[0.06] px-3 py-2 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-[2px]",
        accent,
        className,
      )}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
        Zoho
      </span>
      {name}
    </span>
  );
}

export function CTA({
  title = "Book a free Zoho consultation",
  description = "Tell us how your business runs today. We'll map the right Zoho approach for your team.",
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

  const primaryClass = isDark ? darkPrimaryBtn : lightPrimaryBtn;
  const secondaryClass = isDark ? darkSecondaryBtn : lightSecondaryBtn;

  if (isBand) {
    return (
      <Section
        id={id}
        ariaLabelledby={headingId}
        tone={tone}
        spacing={spacing === "default" ? "compact" : spacing}
        bordered
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="min-w-0 max-w-xl">
            <h2
              id={headingId}
              className={cn(
                "text-xl font-semibold tracking-tight md:text-2xl",
                isDark ? "!text-white" : "text-gray-900",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={cn(
                  "mt-2 text-sm leading-snug",
                  isDark ? "!text-white/80" : "text-gray-600",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Link href={cta.href} className={cn(primaryClass, "px-4 py-2")}>
              {cta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={cn(secondaryClass, "px-4 py-2")}
              >
                {secondaryCta.label}
              </Link>
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
      className={cn(isDark && "relative overflow-hidden")}
      containerClassName="relative"
    >
      {isDark ? (
        <>
          {/* Full-bleed enterprise depth over flat primary */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-[linear-gradient(145deg,#071533_0%,#0f2a6b_52%,#1e3a8a_100%)]"
          >
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <Image
              src="/brand/hero-pattern.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.08] mix-blend-luminosity"
              sizes="100vw"
            />
          </div>

          {/* Zoho multicolor brand rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-10 h-1 w-screen -translate-x-1/2 bg-[linear-gradient(90deg,#E42527_0%,#F59E0B_25%,#22C55E_50%,#3B82F6_75%,#06B6D4_100%)]"
          />

          {zohoProducts.map((product) => (
            <ZohoProductMark
              key={product.name}
              name={product.name}
              accent={product.accent}
              className={product.className}
            />
          ))}
        </>
      ) : null}

      <div
        className={cn(
          "relative z-10 mx-auto max-w-2xl",
          align === "center" && "text-center",
        )}
      >
        {isDark ? (
          <div
            className={cn(
              "mb-6 flex flex-col items-center gap-3",
              align !== "center" && "items-start",
            )}
          >
            <ZohoPartnerBadge variant="badge" size="md" framed />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] !text-white/70">
              Zoho Authorized Partner · India & GCC
            </p>
          </div>
        ) : null}

        <h2
          id={headingId}
          className={cn(
            "text-2xl font-semibold tracking-tight md:text-3xl",
            isDark ? "!text-white" : "text-gray-900",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-4 text-base leading-snug",
              isDark ? "!text-white/85" : "text-gray-600",
            )}
          >
            {description}
          </p>
        ) : null}

        {isDark ? (
          <ul
            className={cn(
              "mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm !text-white/75",
              align === "center" && "justify-center",
            )}
          >
            {["Implementation", "Training", "Support"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-sm bg-sky-300"
                />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div
          className={cn(
            "mt-8 flex flex-wrap items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <Link href={cta.href} className={primaryClass}>
            {cta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className={secondaryClass}
              {...(secondaryCta.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {secondaryCta.label}
            </Link>
          ) : null}
          {tertiaryCta ? (
            <Link
              href={tertiaryCta.href}
              className={cn(
                "text-sm font-semibold no-underline hover:underline",
                isDark ? "!text-white/90" : "text-primary",
              )}
            >
              {tertiaryCta.label} →
            </Link>
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
      "Walk the flow — then book a consultation to map it to your business.",
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
      "Open an industry use case — or book a free consultation.",
    cta: CTAS.industryUseCase,
    secondaryCta: CTAS.primary,
    tertiaryCta: CTAS.exploreSolutions,
  },
  afterPlatform: {
    id: "cta-after-platform",
    title: "Modules with jobs. Not a shopping list.",
    description:
      "See the live demo, or book a free consultation to define the build.",
    cta: CTAS.primary,
    secondaryCta: CTAS.viewDemo,
    tertiaryCta: CTAS.explorePlatform,
  },
} as const;
