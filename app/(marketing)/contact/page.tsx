import type { Metadata } from "next";

import { ContactExpertForm } from "@/components/sections/ContactExpertForm";
import { Faq } from "@/components/sections/Faq";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { SITE } from "@/lib/constants";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.contact.title,
  description: STATIC_PAGES.contact.description,
  path: STATIC_PAGES.contact.path,
});

const contactFaqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "An Aidamsole consultant reviews your note and follows up to schedule a System Audit conversation. There is no automated demo theater — the next step is a real discussion of how your team operates.",
  },
  {
    question: "Is the System Audit free?",
    answer:
      "Yes. The initial consultation and System Audit discussion are free. Any paid implementation work is scoped separately after we agree on fit and approach.",
  },
  {
    question: "Do you work with teams outside India?",
    answer:
      "Yes. We support mid-sized teams across India and the GCC, with offices in Manchar, Maharashtra and Ajman Free Zone, UAE.",
  },
  {
    question: "Should I book WhatsApp or the form?",
    answer:
      "Either works. Use WhatsApp for a quick intro; use the form when you want to share process context (sales, ops, finance) before the call.",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <FaqJsonLd items={contactFaqs} />

      <div className="mx-auto max-w-3xl px-6 pb-2 pt-14 text-center md:pt-16">
        <p className="ds-eyebrow">Contact</p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Book a System Audit
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-snug text-gray-600">
          Tell us how you run sales, operations, and finance today — we&apos;ll
          map the Zoho system that fits.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 px-6 pb-4 md:grid-cols-2 md:gap-8">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-left shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            India
          </p>
          <a
            href={`tel:${SITE.phones.india.tel}`}
            className="mt-3 block text-lg font-semibold text-gray-900 no-underline hover:text-primary"
          >
            {SITE.phones.india.display}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {SITE.addresses.india.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-left shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            UAE
          </p>
          <a
            href={`tel:${SITE.phones.uae.tel}`}
            className="mt-3 block text-lg font-semibold text-gray-900 no-underline hover:text-primary"
          >
            {SITE.phones.uae.display}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {SITE.addresses.uae.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      <p className="mx-auto max-w-5xl px-6 pb-2 text-center text-sm text-gray-500">
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary no-underline hover:underline"
        >
          View location on Google Maps →
        </a>
        {" · "}
        <a
          href={`mailto:${SITE.email}`}
          className="font-semibold text-primary no-underline hover:underline"
        >
          {SITE.email}
        </a>
      </p>

      <ContactExpertForm className="pt-8 md:pt-10" />

      <Faq
        tone="muted"
        spacing="default"
        title="Before you book"
        description="Straight answers on what happens after you reach out."
        items={[...contactFaqs]}
      />
    </div>
  );
}
