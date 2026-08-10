import type { Metadata } from "next";

import { SITE } from "@/lib/constants";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.terms.title,
  description: STATIC_PAGES.terms.description,
  path: STATIC_PAGES.terms.path,
});

export default function TermsPage() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-base leading-snug text-gray-600">
          Terms that apply when you use the {SITE.name} website and submit
          consultation or assessment enquiries.
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Website use
            </h2>
            <p className="mt-3">
              Content on this site is for general information about {SITE.name}
              services. It is not a binding proposal, quote, or guarantee of
              outcomes. Zoho product names are trademarks of their respective
              owners; {SITE.name} is a Zoho Authorized Partner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Enquiries and consultations
            </h2>
            <p className="mt-3">
              Submitting a form or booking a consultation does not create a
              client engagement. Any paid work is governed by a separate written
              agreement between you and {SITE.legalName}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Accuracy
            </h2>
            <p className="mt-3">
              We aim to keep site information current, but pages may change
              without notice. Case studies and system designs describe
              operating patterns; they are not promises of identical results for
              every business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              Limitation
            </h2>
            <p className="mt-3">
              To the extent permitted by law, {SITE.legalName} is not liable for
              decisions made solely based on website content. Use of third-party
              links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
            <p className="mt-3">
              Questions about these terms:{" "}
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
