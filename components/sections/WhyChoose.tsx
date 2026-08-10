import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

type WhyChooseProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const pillars = [
  {
    title: "Expert Team",
    accent: "border-sky-400 text-sky-700",
    iconBg: "bg-sky-50",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    title: "Trusted Partner",
    accent: "border-emerald-400 text-emerald-700",
    iconBg: "bg-emerald-50",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3 4 7v5c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    accent: "border-primary text-primary",
    iconBg: "bg-primary-muted",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Proven Process",
    accent: "border-amber-400 text-amber-700",
    iconBg: "bg-amber-50",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
] as const;

const proofs = [
  {
    title: "Zoho Authorized Partner",
    caption: "Recognised partner status",
    iconBg: "bg-sky-100 text-sky-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3 4 7v5c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    title: "India & GCC",
    caption: "Manchar · Ajman coverage",
    iconBg: "bg-emerald-100 text-emerald-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    title: "Mid-market focus",
    caption: "Built for growing teams",
    iconBg: "bg-amber-100 text-amber-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    title: "Process before software",
    caption: "Systems designed, then built on Zoho",
    iconBg: "bg-violet-100 text-violet-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M8.5 6h7M7.5 8.2 10.5 16M16.5 8.2 13.5 16"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
] as const;

/**
 * Linz-style Why Choose layout: copy · visual pillars · proof cards.
 */
export function WhyChoose({
  tone = "default",
  spacing = "default",
}: WhyChooseProps) {
  const headingId = "why-choose-heading";

  return (
    <Section
      id="why-us"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
        {/* Left — copy */}
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Why Aidamsole
          </p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl md:leading-[1.15]"
          >
            Why clients{" "}
            <span className="text-primary">choose</span> Aidamsole?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            Businesses choose us for one reason — we make Zoho work for how
            they already operate. Consultation, implementation, training, and
            support as one connected engagement.
          </p>
        </div>

        {/* Center — floating value tiles */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-1/2 h-10 w-40 -translate-x-1/2 rounded-full bg-primary/15 blur-xl"
          />

          <ul className="relative grid grid-cols-2 gap-4">
            {pillars.map((item, index) => (
              <li
                key={item.title}
                className={cn(
                  "rounded-2xl border-2 bg-white p-4 shadow-md",
                  item.accent,
                  index % 2 === 1 && "mt-6",
                  index % 2 === 0 && "-mt-2",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                    item.iconBg,
                  )}
                >
                  {item.icon}
                </span>
                <p className="mt-3 text-sm font-semibold tracking-tight text-gray-900">
                  {item.title}
                </p>
                <span
                  className={cn(
                    "mt-2 block h-0.5 w-8 rounded-full",
                    item.accent.includes("sky") && "bg-sky-400",
                    item.accent.includes("emerald") && "bg-emerald-400",
                    item.accent.includes("primary") && "bg-primary",
                    item.accent.includes("amber") && "bg-amber-400",
                  )}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Right — proof cards */}
        <ul className="flex flex-col gap-3">
          {proofs.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <span
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                  item.iconBg,
                )}
              >
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight text-gray-900">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-gray-500">{item.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
