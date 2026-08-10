import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type TrustLogo = {
  id: string;
  name: string;
  /** Accent used on hover (enterprise blues / slate). */
  accentClass?: string;
};

export type TrustTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type TrustProps = {
  title?: string;
  description?: string;
  logos?: TrustLogo[];
  testimonial?: TrustTestimonial | null;
  showTestimonial?: boolean;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const defaultLogos: TrustLogo[] = [
  { id: "horizon", name: "Horizon Estates", accentClass: "group-hover:text-blue-700" },
  { id: "medcare", name: "MedCare Clinics", accentClass: "group-hover:text-sky-700" },
  { id: "apex", name: "Apex Distributors", accentClass: "group-hover:text-indigo-700" },
  { id: "northstar", name: "Northstar Retail", accentClass: "group-hover:text-blue-800" },
  { id: "urban", name: "Urban Learn", accentClass: "group-hover:text-slate-800" },
  { id: "buildwell", name: "BuildWell Infra", accentClass: "group-hover:text-blue-700" },
  { id: "prime", name: "Prime Service Co", accentClass: "group-hover:text-blue-700" },
  { id: "vertex", name: "Vertex Manufacturing", accentClass: "group-hover:text-indigo-800" },
];

const defaultTestimonial: TrustTestimonial = {
  quote:
    "We moved from WhatsApp and sheets to one Zoho operating system — ownership, pipeline, and collections are finally visible to leadership.",
  name: "Ananya Reddy",
  role: "Managing Director",
  company: "Prime Developers",
};

function LogoMark({ id }: { id: string }) {
  const common = "h-7 w-7 shrink-0 stroke-[1.5]";

  switch (id) {
    case "horizon":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M3 18h18M4 14l4-8 4 5 3-3 5 6" stroke="currentColor" />
        </svg>
      );
    case "medcare":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 4v16M4 12h16" stroke="currentColor" />
          <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" />
        </svg>
      );
    case "apex":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 18 12 4l8 14H4z" stroke="currentColor" />
        </svg>
      );
    case "northstar":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5L12 3z"
            stroke="currentColor"
          />
        </svg>
      );
    case "urban":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 20V9l4-3 4 3v11M12 20V8l4-2 4 2v12" stroke="currentColor" />
        </svg>
      );
    case "buildwell":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M3 20h18M6 20V10l6-4 6 4v10" stroke="currentColor" />
        </svg>
      );
    case "prime":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
          <path d="M8 16V9h3.5a2.5 2.5 0 0 1 0 5H8" stroke="currentColor" />
        </svg>
      );
    case "vertex":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 3 3 19h6l3-7 3 7h6L12 3z" stroke="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" />
        </svg>
      );
  }
}

export function Trust({
  title = "Teams we design systems for",
  description = "Illustrative client marks for layout — replace with approved logos when cleared for publishing.",
  logos = defaultLogos,
  testimonial = defaultTestimonial,
  showTestimonial = true,
  tone = "default",
  spacing = "default",
  className,
}: TrustProps) {
  const headingId = "trust-heading";

  return (
    <Section
      id="trust"
      tone={tone}
      spacing={spacing}
      ariaLabelledby={headingId}
      className={className}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Credibility
        </p>
        <h2 id={headingId} className="mt-2">
          {title}
        </h2>
        {description ? (
          <p className="section-lede mx-auto body-clamp">{description}</p>
        ) : null}
      </div>

      {logos.length > 0 ? (
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {logos.map((logo) => (
            <li key={logo.id}>
              <div
                className={cn(
                  "group flex h-24 items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition duration-300 ease-in-out",
                  "hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md",
                )}
              >
                <span
                  className={cn(
                    "text-gray-400 grayscale transition duration-300 ease-in-out",
                    "group-hover:grayscale-0 group-hover:text-blue-700",
                    logo.accentClass,
                  )}
                >
                  <LogoMark id={logo.id} />
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold tracking-tight text-gray-400 grayscale transition duration-300 ease-in-out",
                    "group-hover:grayscale-0 group-hover:text-gray-900",
                  )}
                >
                  {logo.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {showTestimonial && testimonial ? (
        <figure className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8">
          <blockquote className="text-base font-medium leading-relaxed text-gray-900 md:text-lg">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
              {testimonial.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-xs text-gray-600">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
            <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-gray-200">
              Client outcome
            </span>
          </figcaption>
        </figure>
      ) : null}
    </Section>
  );
}
