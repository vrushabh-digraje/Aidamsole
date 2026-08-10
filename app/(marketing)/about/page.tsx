import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/sections/CTA";
import { CTAS, PRIMARY_CTA, SITE } from "@/lib/constants";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.about.title,
  description: STATIC_PAGES.about.description,
  path: STATIC_PAGES.about.path,
});

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            About
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Zoho Authorized Partner for growing businesses
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            {SITE.legalName} helps mid-sized companies design and implement Zoho
            so sales, operations, and finance run as one system — with a focus
            on retail &amp; distribution and other process-heavy verticals across
            India and the GCC.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            We start with how your business operates today, then configure Zoho
            CRM and connected apps around ownership, stages, and reporting your
            leadership can trust.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                India
              </p>
              <a
                href={`tel:${SITE.phones.india.tel}`}
                className="mt-3 block text-base font-semibold text-gray-900 no-underline hover:text-primary"
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
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                UAE
              </p>
              <a
                href={`tel:${SITE.phones.uae.tel}`}
                className="mt-3 block text-base font-semibold text-gray-900 no-underline hover:text-primary"
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

          <p className="mt-8 text-sm text-gray-600">
            Email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-primary no-underline hover:underline"
            >
              {SITE.email}
            </a>
            {" · "}
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary no-underline hover:underline"
            >
              View on Google Maps
            </a>
            {" · "}
            <Link
              href={PRIMARY_CTA.href}
              className="font-semibold text-primary no-underline hover:underline"
            >
              {PRIMARY_CTA.label}
            </Link>
          </p>
        </div>
      </div>

      <CTA
        tone="dark"
        title="Talk to a Zoho expert"
        description="Tell us how your retail, distribution, or mid-market team operates — we’ll map the Zoho approach."
        cta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
      />
    </>
  );
}
