import type { Metadata } from "next";
import Image from "next/image";

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

      {/* 1. 2-Column Hero Intro Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center pb-16 border-b border-gray-100 mb-16">
          
          {/* Left Column: Title & Description */}
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Book a System Audit
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Tell us how you run sales, operations, and finance today — we&apos;ll
              map the Zoho system that fits.
            </p>
            
            {/* Inline Quick Info Links */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary no-underline hover:underline"
              >
                View location on Google Maps →
              </a>
              <span className="text-gray-300" aria-hidden="true">|</span>
              <a
                href={`mailto:${SITE.email}`}
                className="font-bold text-primary no-underline hover:underline"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image (Sharp corners) */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-none border border-gray-200 shadow-xl ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl bg-gray-50">
            <Image
              src="/brand/contact-hero.jpg"
              alt="Zoho Analytics Control Panel System Audit Showcase"
              fill
              priority
              className="object-cover rounded-none"
              sizes="(max-w-7xl) 50vw, 100vw"
            />
            {/* Tech gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 2. Region Cards Title */}
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Regional Office Hubs
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Call our regional support teams or view our physical mailing locations below.
          </p>
        </div>

        {/* 3. Regional Office Cards (Sharp, Interactive, matching About page) */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 mb-16">
          
          {/* India Card */}
          <div className="group relative flex flex-col justify-between rounded-none border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary overflow-hidden">
            {/* Top border colored accent strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-amber-500 shrink-0" />
            
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                India Operations
              </p>
              <a
                href={`tel:${SITE.phones.india.tel}`}
                className="mt-3 inline-flex items-center gap-1.5 text-base font-extrabold text-gray-900 no-underline hover:text-primary transition duration-200"
              >
                {SITE.phones.india.display}
                <span className="text-xs text-gray-400 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                {SITE.addresses.india.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            {/* Card Footer indicator */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
              <span>Mailing Address</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Line
              </span>
            </div>
          </div>

          {/* UAE Card */}
          <div className="group relative flex flex-col justify-between rounded-none border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary overflow-hidden">
            {/* Top border colored accent strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-sky-500 shrink-0" />
            
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                UAE & GCC Operations
              </p>
              <a
                href={`tel:${SITE.phones.uae.tel}`}
                className="mt-3 inline-flex items-center gap-1.5 text-base font-extrabold text-gray-900 no-underline hover:text-primary transition duration-200"
              >
                {SITE.phones.uae.display}
                <span className="text-xs text-gray-400 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                {SITE.addresses.uae.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            {/* Card Footer indicator */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
              <span>Mailing Address</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Line
              </span>
            </div>
          </div>

        </div>

        {/* 4. Form Section */}
        <ContactExpertForm className="pt-0 border-t border-gray-100" />
      </div>

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
