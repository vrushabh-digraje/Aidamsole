import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  title?: string;
  description?: string;
  items: FaqItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

/**
 * Competitor-style FAQ for SEO and sales objections.
 */
export function Faq({
  title = "Frequently asked questions",
  description = "Common questions about Zoho implementation with Aidamsole.",
  items,
  tone = "muted",
  spacing = "default",
}: FaqProps) {
  const headingId = "faq-heading";

  return (
    <Section id="faq" ariaLabelledby={headingId} tone={tone} spacing={spacing}>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          FAQ
        </p>
        <h2 id={headingId} className="mt-2 text-gray-900">
          {title}
        </h2>
        <p className="mt-3 text-base leading-snug text-gray-600">{description}</p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-200 border-t border-b border-gray-200">
        {items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="cursor-pointer list-none text-left text-base font-semibold text-gray-900 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-gray-400 transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-2xl pr-8 text-sm leading-relaxed text-gray-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
