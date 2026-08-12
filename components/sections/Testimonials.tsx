"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  slug?: string;
  impactMetric?: string;
  impactLabel?: string;
};

type TestimonialsProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  title?: string;
  description?: string;
  items?: TestimonialItem[];
};

const defaultItems: TestimonialItem[] = [
  {
    quote:
      "Dealer follow-ups stopped living in WhatsApp. Ownership and order stages are visible — our Monday review finally runs from one system.",
    name: "Rohit Mehta",
    role: "Sales Head",
    company: "Nova Distributors",
    industry: "Retail & Distribution",
    slug: "retail-distribution",
    impactMetric: "0% Leakage",
    impactLabel: "WhatsApp lead leakage resolved"
  },
  {
    quote:
      "Site visits and broker leads used to disappear. After the CRM redesign, overdue visits and unowned enquiries show up before the week ends.",
    name: "Sneha Kapoor",
    role: "Operations Director",
    company: "Horizon Estates",
    industry: "Real Estate",
    slug: "real-estate",
    impactMetric: "24h Routing",
    impactLabel: "Broker assignments completed in < 24h"
  },
  {
    quote:
      "We did not need more Zoho modules — we needed stage exits and handoffs. Training stuck because the process was clear first.",
    name: "Arjun Nair",
    role: "Managing Partner",
    company: "Vertex Manufacturing",
    industry: "Manufacturing",
    slug: "manufacturing",
    impactMetric: "100% Floor Sync",
    impactLabel: "Sales promises synced to shopfloor cogs"
  },
];

function Initials({ name, slug }: { name: string; slug?: string }) {
  let initialsBg = "bg-blue-600";
  if (slug === "retail-distribution") initialsBg = "bg-amber-500";
  else if (slug === "real-estate") initialsBg = "bg-sky-500";
  else if (slug === "manufacturing") initialsBg = "bg-emerald-500";

  return (
    <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-105", initialsBg)}>
      {name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")}
    </span>
  );
}

export function Testimonials({
  tone = "muted",
  spacing = "default",
  title = "What mid-market teams say",
  description = "Illustrative outcomes from Zoho operating-system work. Named client quotes are published once permission is cleared.",
  items = defaultItems,
}: TestimonialsProps) {
  const headingId = "testimonials-heading";
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <Section
      id="testimonials"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Testimonials
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">{description}</p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item, index) => {
          const isHovered = index === activeCard;
          
          let borderHoverColor = "hover:border-blue-200";
          let badgeColor = "text-blue-600 bg-blue-50";
          if (item.slug === "retail-distribution") {
            borderHoverColor = "hover:border-amber-200 hover:ring-1 hover:ring-amber-500/10";
            badgeColor = "text-amber-600 bg-amber-50";
          } else if (item.slug === "real-estate") {
            borderHoverColor = "hover:border-sky-200 hover:ring-1 hover:ring-sky-500/10";
            badgeColor = "text-sky-600 bg-sky-50";
          } else if (item.slug === "manufacturing") {
            borderHoverColor = "hover:border-emerald-200 hover:ring-1 hover:ring-emerald-500/10";
            badgeColor = "text-emerald-600 bg-emerald-50";
          }

          return (
            <li 
              key={`${item.company}-${item.name}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="h-full"
            >
              <figure
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm relative overflow-hidden",
                  "transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md",
                  borderHoverColor,
                  isHovered && "scale-[1.01]"
                )}
              >
                {/* Metric callout header */}
                {item.impactMetric && (
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="min-w-0">
                      <p className={cn("text-xs font-bold uppercase tracking-wider", badgeColor.split(" ").slice(0, 1).join(" "))}>
                        {item.industry}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5 truncate max-w-[150px]">{item.impactLabel}</p>
                    </div>
                    <span className={cn("rounded-lg px-2.5 py-1 text-xs font-extrabold tracking-tight shadow-sm border border-transparent", badgeColor)}>
                      {item.impactMetric}
                    </span>
                  </div>
                )}

                {!item.impactMetric && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {item.industry}
                  </p>
                )}

                <blockquote className="mt-1 flex-1 text-xs md:text-sm leading-relaxed text-gray-500 font-medium italic">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <Initials name={item.name} slug={item.slug} />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900">{item.name}</p>
                    <p className="text-[10px] leading-snug text-gray-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 text-center text-xs font-bold text-gray-500">
        Want a reference in your industry?{" "}
        <Link
          href="/contact"
          className="text-blue-600 no-underline hover:underline"
        >
          Request a reference call →
        </Link>
      </p>
    </Section>
  );
}
