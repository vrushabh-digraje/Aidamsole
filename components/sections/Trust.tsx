"use client";

import { useState, useEffect, useRef } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type TrustLogo = {
  id: string;
  name: string;
  category: string;
  accentClass: string;
  iconBgColor: string;
  borderAccent: string;
};

export type TrustTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  badge: string;
};

type TrustProps = {
  title?: string;
  description?: string;
  logos?: TrustLogo[];
  showTestimonial?: boolean;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const defaultLogos: TrustLogo[] = [
  { id: "horizon", name: "Horizon Estates", category: "real-estate", accentClass: "text-blue-600 bg-blue-50/70", iconBgColor: "bg-blue-50/70", borderAccent: "border-l-blue-500" },
  { id: "medcare", name: "MedCare Clinics", category: "healthcare-edtech", accentClass: "text-rose-600 bg-rose-50/70", iconBgColor: "bg-rose-50/70", borderAccent: "border-l-rose-500" },
  { id: "apex", name: "Apex Distributors", category: "retail-distribution", accentClass: "text-amber-600 bg-amber-50/70", iconBgColor: "bg-amber-50/70", borderAccent: "border-l-amber-500" },
  { id: "northstar", name: "Northstar Retail", category: "retail-distribution", accentClass: "text-indigo-600 bg-indigo-50/70", iconBgColor: "bg-indigo-50/70", borderAccent: "border-l-indigo-500" },
  { id: "urban", name: "Urban Learn", category: "healthcare-edtech", accentClass: "text-emerald-600 bg-emerald-50/70", iconBgColor: "bg-emerald-50/70", borderAccent: "border-l-emerald-500" },
  { id: "buildwell", name: "BuildWell Infra", category: "manufacturing-infra", accentClass: "text-sky-600 bg-sky-50/70", iconBgColor: "bg-sky-50/70", borderAccent: "border-l-sky-500" },
  { id: "prime", name: "Prime Service Co", category: "real-estate", accentClass: "text-indigo-600 bg-indigo-50/70", iconBgColor: "bg-indigo-50/70", borderAccent: "border-l-indigo-500" },
  { id: "vertex", name: "Vertex Manufacturing", category: "manufacturing-infra", accentClass: "text-violet-600 bg-violet-50/70", iconBgColor: "bg-violet-50/70", borderAccent: "border-l-violet-500" },
];

const clientDetails: Record<string, TrustTestimonial> = {
  horizon: {
    quote: "Zoho CRM automated our lead assignment and pipeline tracking for 50+ property agents. Handover from marketing to sales is now instant.",
    name: "Rajesh Mehta",
    role: "Director of Sales",
    company: "Horizon Estates",
    badge: "Real Estate CRM"
  },
  medcare: {
    quote: "Consultation follow-ups and patient reminders are fully automated on Zoho, reducing missed appointments by 40% in our first quarter.",
    name: "Dr. Sarah Al-Mansoori",
    role: "Chief Operations Officer",
    company: "MedCare Clinics",
    badge: "Healthcare CRM"
  },
  apex: {
    quote: "With Zoho Inventory connected to Books, our wholesale distribution across 3 warehouses is synchronized. We finally have real-time stock levels.",
    name: "Vikram Malhotra",
    role: "Head of Logistics",
    company: "Apex Distributors",
    badge: "Distribution System"
  },
  northstar: {
    quote: "Multi-store cash flow tracking and retail store POS data sync directly into Zoho Books. Reconciliations take minutes instead of days.",
    name: "Karan Johar",
    role: "Financial Controller",
    company: "Northstar Retail",
    badge: "Retail Operations"
  },
  urban: {
    quote: "Nurturing student leads through Zoho CRM and Campaigns doubled our course enrollment rate. The attribution modeling is crystal clear.",
    name: "Nisha Rao",
    role: "Marketing Manager",
    company: "Urban Learn",
    badge: "EdTech CRM"
  },
  buildwell: {
    quote: "Site development milestones and contractor work-orders are tracked in Zoho Projects. Task handoffs between design and construction are seamless.",
    name: "Aman Sheikh",
    role: "Project Director",
    company: "BuildWell Infra",
    badge: "Infrastructure Portal"
  },
  prime: {
    quote: "We moved from WhatsApp and sheets to one Zoho operating system — ownership, pipeline, and collections are finally visible to leadership.",
    name: "Ananya Reddy",
    role: "Managing Director",
    company: "Prime Developers",
    badge: "Real Estate System"
  },
  vertex: {
    quote: "Vertex connected the production floor work-orders with sales deals, bringing Zoho CRM, Creator, and Books together in a custom build.",
    name: "Sunil Dutt",
    role: "General Manager",
    company: "Vertex Manufacturing",
    badge: "Manufacturing ERP"
  }
};

const categories = [
  { id: "all", name: "All Industries" },
  { id: "real-estate", name: "Real Estate" },
  { id: "retail-distribution", name: "Retail & Distribution" },
  { id: "healthcare-edtech", name: "Healthcare & EdTech" },
  { id: "manufacturing-infra", name: "Manufacturing & Infra" },
];

function LogoMark({ id, isActive }: { id: string; isActive: boolean }) {
  const common = cn(
    "h-5 w-5 shrink-0 stroke-[1.75] transition-all duration-300",
    isActive ? "scale-110" : "group-hover:scale-110"
  );

  switch (id) {
    case "horizon":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M3 18h18M4 14l4-8 4 5 3-3 5 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "medcare":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 4v16M4 12h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" />
        </svg>
      );
    case "apex":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 18 12 4l8 14H4z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "northstar":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5L12 3z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "urban":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 20V9l4-3 4 3v11M12 20V8l4-2 4 2v12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "buildwell":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M3 20h18M6 20V10l6-4 6 4v10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "prime":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
          <path d="M8 16V9h3.5a2.5 2.5 0 0 1 0 5H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "vertex":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 3 3 19h6l3-7 3 7h6L12 3z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
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
  showTestimonial = true,
  tone = "default",
  spacing = "default",
  className,
}: TrustProps) {
  const headingId = "trust-heading";
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeId, setActiveId] = useState("prime");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter logos by active category
  const filteredLogos = activeCategory === "all"
    ? logos
    : logos.filter(logo => logo.category === activeCategory);

  // Autoplay rotation logic
  useEffect(() => {
    if (!isAutoPlaying || filteredLogos.length <= 1) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = filteredLogos.findIndex(logo => logo.id === currentId);
        const nextIndex = (currentIndex + 1) % filteredLogos.length;
        return filteredLogos[nextIndex]?.id ?? currentId;
      });
    }, 5000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, filteredLogos]);

  // If the active logo is filtered out, select the first available logo in the category
  useEffect(() => {
    const isIdInFiltered = filteredLogos.some(logo => logo.id === activeId);
    if (!isIdInFiltered && filteredLogos.length > 0) {
      setActiveId(filteredLogos[0].id);
    }
  }, [activeCategory, filteredLogos, activeId]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsAutoPlaying(false); // Pause autoplay when user interacts
  };

  const handleLogoHover = (logoId: string) => {
    setActiveId(logoId);
    setIsAutoPlaying(false); // Pause autoplay on hover
  };

  const testimonial = clientDetails[activeId] ?? clientDetails.prime;

  return (
    <Section
      id="trust"
      tone={tone}
      spacing={spacing}
      ariaLabelledby={headingId}
      className={cn("bg-white border-b border-gray-100", className)}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Credibility
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">{description}</p>
        ) : null}
      </div>

      {/* Category Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-1.5 border-b border-gray-100 pb-4">
        {categories.map((cat) => {
          const isSelected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300",
                isSelected
                  ? "bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Filtered Connected Logo Grid */}
      {filteredLogos.length > 0 ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200/90 shadow-sm bg-gray-50/10">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-y divide-x divide-gray-200/90 -mt-[1px] -ml-[1px]">
            {filteredLogos.map((logo) => {
              const isActive = logo.id === activeId;
              return (
                <li
                  key={logo.id}
                  className={cn(
                    "relative group bg-white hover:z-10 transition-all duration-300 cursor-pointer border-l-2 border-l-transparent",
                    isActive && cn("bg-slate-50/30 shadow-[inset_0_1px_3px_rgba(0,0,0,0.01)]", logo.borderAccent)
                  )}
                  onMouseEnter={() => handleLogoHover(logo.id)}
                >
                  <div className="flex h-16 items-center justify-center gap-2.5 px-4">
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-all duration-300 ease-in-out group-hover:scale-105",
                        isActive ? logo.accentClass : "group-hover:bg-slate-100/60",
                        !isActive && "group-hover:" + logo.accentClass.split(" ").slice(0, 1).join(" ")
                      )}
                    >
                      <LogoMark id={logo.id} isActive={isActive} />
                    </span>
                    <span
                      className={cn(
                        "text-xs md:text-sm font-semibold tracking-tight transition-all duration-300 ease-in-out",
                        isActive ? "text-gray-900 font-bold" : "text-gray-400 group-hover:text-gray-900"
                      )}
                    >
                      {logo.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {/* Synergized Case Outcome Card */}
      {showTestimonial && testimonial ? (
        <div className="relative mx-auto mt-10 max-w-3xl">
          <figure className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm md:p-8">
            <blockquote className="text-sm font-medium leading-relaxed text-gray-900 md:text-base min-h-[50px] transition-all duration-500 ease-in-out">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-3 border-t border-gray-200/80 pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <div>
                <p className="text-xs font-bold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-[11px] text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
              <span className="ml-auto rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 ring-1 ring-gray-200">
                {testimonial.badge}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
