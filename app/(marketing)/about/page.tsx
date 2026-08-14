import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
          
          {/* 1. 2-Column Intro Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center pb-12 border-b border-gray-100 mb-12">
            {/* Left Column: Corporate profile */}
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                About
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Zoho Authorized Partner for growing businesses
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
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

              {/* Inline Quick Action Links */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-bold text-primary no-underline hover:underline"
                >
                  Email Us: {SITE.email}
                </a>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary no-underline hover:underline"
                >
                  View on Google Maps
                </a>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <Link
                  href={PRIMARY_CTA.href}
                  className="font-bold text-primary no-underline hover:underline"
                >
                  {PRIMARY_CTA.label}
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image Showcase (Sharp Corners to match card design) */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none border border-gray-200 shadow-xl ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl bg-gray-50">
              <Image
                src="/brand/about-hero.jpg"
                alt="Zoho Authorized Partner analytics and implementation console"
                fill
                priority
                className="object-cover rounded-none"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
            </div>
          </div>

          {/* 2. Our Mission Section */}
          <div className="py-16 border-b border-gray-100 mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Mission
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Building trustable systems that drive real growth
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-gray-600">
                Our goal is simple: to eliminate the friction in your sales, operations, and finance pipelines. We design Zoho systems that your team wants to use and that your leadership can rely on.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-2 border-primary pl-5">
                <h3 className="text-sm font-bold text-gray-900">Zero System Fluff</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                  We don't sell over-engineered modules. We configure Zoho around your active processes, stages, and metrics to ensure immediate business usability.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="text-sm font-bold text-gray-900">End-to-End Ownership</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                  A system is only as good as its adoption. We train your teams extensively and hand over structured documentation so you own your digital ecosystem completely.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="text-sm font-bold text-gray-900">Real-Time Clarity</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                  We integrate sales pipelines, inventory counts, and invoicing so your dashboards show real-time profit, loss, and lead conversion rates.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Why Choose Us Section */}
          <div className="pb-16 border-b border-gray-100 mb-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Why businesses partner with Aidamsole
              </h2>
            </div>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {/* Feature 1 */}
              <div className="border border-gray-200 bg-gray-50/30 p-6 flex flex-col justify-between">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/5 text-primary text-sm font-bold">
                    01
                  </span>
                  <h3 className="mt-5 text-sm font-bold text-gray-900">Zoho Certified Partner</h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    We possess deep technical knowledge of Zoho's full stack, ensuring clean APIs, reliable custom scripts, and native Zoho CRM integrations.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="border border-gray-200 bg-gray-50/30 p-6 flex flex-col justify-between">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/5 text-primary text-sm font-bold">
                    02
                  </span>
                  <h3 className="mt-5 text-sm font-bold text-gray-900">100% In-House Delivery</h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    We never outsource. Every line of code, process map, and database node is built in-house by our certified engineering team.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="border border-gray-200 bg-gray-50/30 p-6 flex flex-col justify-between">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/5 text-primary text-sm font-bold">
                    03
                  </span>
                  <h3 className="mt-5 text-sm font-bold text-gray-900">90-Day Post-Launch Support</h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    We stand by our work. We provide 90 days of active post-go-live assistance to iron out issues and guarantee team adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Region Cards Title */}
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Regional Operations
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Get in touch with our certified implementation teams based in India and the UAE.
            </p>
          </div>

          {/* 3. Interactive Offices Grid (Sharp theme, no border radius) */}
          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* India Card */}
            <div className="group relative flex flex-col justify-between rounded-none border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary hover:-translate-y-1 overflow-hidden">
              {/* Top border colored accent strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-amber-500 shrink-0" />
              
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  India Head Office
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
                <span>Certified Zoho Partner Office</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Support
                </span>
              </div>
            </div>

            {/* UAE Card */}
            <div className="group relative flex flex-col justify-between rounded-none border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary hover:-translate-y-1 overflow-hidden">
              {/* Top border colored accent strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-sky-500 shrink-0" />
              
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                  GCC Regional Office (UAE)
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
                <span>Ajman Free Zone Office</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Support
                </span>
              </div>
            </div>

          </div>

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
