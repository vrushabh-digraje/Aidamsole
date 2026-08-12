import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type StatItem = {
  label: string;
  value: string;
  hint?: string;
  accentColor: string; // Zoho brand colors
  bgPattern: React.ReactNode;
};

type StatsProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
  items?: StatItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

/** Non-numeric proof points — custom styled with related SVG background illustrations. */
export const homepageStats: StatItem[] = [
  { 
    label: "Partner status", 
    value: "Zoho Authorized",
    accentColor: "border-t-[4px] border-t-blue-600 hover:border-blue-600",
    bgPattern: (
      <svg className="absolute -bottom-4 -right-4 h-24 w-24 text-blue-500/10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="35" cy="50" r="22" />
        <circle cx="65" cy="50" r="22" />
        <path d="M 45,50 A 10,10 0 0,0 55,50" />
      </svg>
    )
  },
  { 
    label: "Focus", 
    value: "Retail & Distribution",
    accentColor: "border-t-[4px] border-t-amber-500 hover:border-amber-500",
    bgPattern: (
      <svg className="absolute -bottom-4 -right-4 h-24 w-24 text-amber-500/10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8M21 8l-9-5-9 5M21 8l-9 5-9-5M12 13v7" />
      </svg>
    )
  },
  { 
    label: "Regions", 
    value: "India & GCC",
    accentColor: "border-t-[4px] border-t-red-500 hover:border-red-500",
    bgPattern: (
      <svg className="absolute -bottom-4 -right-4 h-24 w-24 text-red-500/10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  { 
    label: "Engagement", 
    value: "Consult → Support",
    accentColor: "border-t-[4px] border-t-green-600 hover:border-green-600",
    bgPattern: (
      <svg className="absolute -bottom-4 -right-4 h-24 w-24 text-green-500/10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 3a2.82 2.82 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="M15 5l4 4" />
      </svg>
    )
  },
];

export function Stats({
  title = "What we stand on",
  description = "Credentials and focus — not invented volume metrics.",
  eyebrow = "Credibility",
  items = homepageStats,
  tone = "default",
  spacing = "compact",
  className,
}: StatsProps) {
  const headingId = "stats-heading";

  return (
    <Section
      id="stats"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={cn("bg-slate-50/50 border-b border-gray-100", className)}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">{description}</p>
        ) : null}
      </div>

      <dl className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className={cn(
              "group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300",
              "hover:-translate-y-1.5 hover:shadow-md",
              item.accentColor
            )}
          >
            {/* Background vector pattern watermark */}
            {item.bgPattern}

            <dd className="relative z-10 text-base font-extrabold tracking-tight text-blue-900 md:text-lg">
              {item.value}
            </dd>
            <dt className="relative z-10 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {item.label}
            </dt>
            {item.hint ? (
              <p className="relative z-10 mt-1 text-[11px] text-gray-400">{item.hint}</p>
            ) : null}
          </div>
        ))}
      </dl>
    </Section>
  );
}
