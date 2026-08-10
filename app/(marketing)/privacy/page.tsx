import type { Metadata } from "next";

import { SITE } from "@/lib/constants";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.privacy.title,
  description: STATIC_PAGES.privacy.description,
  path: STATIC_PAGES.privacy.path,
});

export default function PrivacyPage() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base leading-snug text-gray-600">
          How {SITE.legalName} handles information submitted through this
          website and related consultation forms.
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              What we collect
            </h2>
            <p className="mt-3">
              When you contact us, book a consultation, or submit an assessment,
              we may collect your name, work email, phone number, company
              details, role, and the message or process context you provide.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              How we use it
            </h2>
            <p className="mt-3">
              We use this information to respond to enquiries, qualify fit for
              Zoho consulting work, schedule conversations, and improve our
              services. Enquiry data may be stored in our CRM and related
              business systems used by {SITE.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Sharing
            </h2>
            <p className="mt-3">
              We do not sell personal information. We may share data with
              processors that help us operate email, CRM, hosting, or analytics
              — only as needed to run the business and respond to you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Retention
            </h2>
            <p className="mt-3">
              We retain enquiry records for as long as needed for sales follow-up,
              service delivery, legal, or accounting purposes, then delete or
              anonymize when no longer required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
            <p className="mt-3">
              Privacy questions:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold text-primary no-underline hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
