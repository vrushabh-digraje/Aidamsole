import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTA } from "@/components/sections/CTA";
import { CTAS, ROUTES } from "@/lib/constants";
import { getPublishedInsights } from "@/lib/published";
import { STATIC_PAGES, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: STATIC_PAGES.insights.title,
  description: STATIC_PAGES.insights.description,
  path: STATIC_PAGES.insights.path,
});

export default function InsightsPage() {
  const items = getPublishedInsights();

  return (
    <>
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          {/* 2. Grid section title */}
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Latest Implementation Insights
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              In-depth articles outlining common implementation mistakes, design thinking, and architecture practices.
            </p>
          </div>

          {/* 3. Grid of Insights Cards (Sharp light theme) */}
          <ul className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <li key={item.slug} className="h-full">
                <article className="group flex h-full flex-col rounded-none border border-gray-200 bg-white p-0 no-underline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 overflow-hidden">
                  
                  {/* Top brand colored accent strip */}
                  <div className="h-1.5 w-full bg-primary shrink-0" />
                  
                  {/* Card Content Wrapper */}
                  <div className="relative z-10 flex flex-col flex-grow justify-between p-6 bg-white rounded-none">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {item.category}
                      </p>
                      
                      <h2 className="mt-2 text-lg font-extrabold tracking-tight text-gray-900">
                        <Link
                          href={`${ROUTES.insights}/${item.slug}`}
                          className="no-underline hover:text-primary transition-colors duration-255"
                        >
                          {item.title}
                        </Link>
                      </h2>
                      
                      <p className="mt-4 text-xs leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href={`${ROUTES.insights}/${item.slug}`}
                      className="inline-flex items-center gap-1.5 pt-5 text-xs font-bold text-primary transition-all duration-300 ease-in-out hover:text-blue-800"
                    >
                      Read insight
                      <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTA
        tone="muted"
        title="Want this applied to your team?"
        description="Book a consultation and we’ll map the pattern to your process."
        cta={CTAS.primary}
        secondaryCta={CTAS.whatsapp}
      />
    </>
  );
}
