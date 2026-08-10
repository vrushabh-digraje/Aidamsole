import Link from "next/link";

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
  },
  {
    quote:
      "Site visits and broker leads used to disappear. After the CRM redesign, overdue visits and unowned enquiries show up before the week ends.",
    name: "Sneha Kapoor",
    role: "Operations Director",
    company: "Horizon Estates",
    industry: "Real Estate",
  },
  {
    quote:
      "We did not need more Zoho modules — we needed stage exits and handoffs. Training stuck because the process was clear first.",
    name: "Arjun Nair",
    role: "Managing Partner",
    company: "Vertex Manufacturing",
    industry: "Manufacturing",
  },
];

function Initials({ name }: { name: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
      {name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")}
    </span>
  );
}

/**
 * Homepage testimonials — illustrative quotes for layout/trust until named
 * client permissions are cleared (replace with real quotes when available).
 */
export function Testimonials({
  tone = "muted",
  spacing = "default",
  title = "What mid-market teams say",
  description = "Illustrative outcomes from Zoho operating-system work. Named client quotes are published once permission is cleared.",
  items = defaultItems,
}: TestimonialsProps) {
  const headingId = "testimonials-heading";

  return (
    <Section
      id="testimonials"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Testimonials
        </p>
        <h2 id={headingId} className="mt-2 text-gray-900">
          {title}
        </h2>
        <p className="mt-3 text-base leading-snug text-gray-600">{description}</p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <li key={`${item.company}-${item.name}`}>
            <figure
              className={cn(
                "flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
                "transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md",
              )}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                {item.industry}
              </p>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-gray-800 md:text-[15px]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <Initials name={item.name} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs leading-snug text-gray-600">
                    {item.role}, {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-sm text-gray-500">
        Want a reference in your industry?{" "}
        <Link
          href="/contact"
          className="font-semibold text-primary no-underline hover:underline"
        >
          Request a reference call →
        </Link>
      </p>
    </Section>
  );
}
