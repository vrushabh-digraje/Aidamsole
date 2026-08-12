"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

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
  className?: string;
};

export function Faq({
  title = "Frequently asked questions",
  description = "Common questions about Zoho implementation with Aidamsole.",
  items,
  tone = "muted",
  spacing = "default",
  className,
}: FaqProps) {
  const headingId = "faq-heading";
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIdx((current) => (current === index ? null : index));
  };

  return (
    <Section 
      id="faq" 
      ariaLabelledby={headingId} 
      tone={tone} 
      spacing={spacing}
      className={className}
    >
      <div className="mx-auto max-w-2xl text-center mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          FAQ
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base leading-snug text-gray-500 max-w-md mx-auto">
          {description}
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Help card widget (Takes 4/12 columns) */}
        <div className="lg:col-span-4 h-full">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/20 p-6 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md mb-4" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
              <h3 className="text-base font-extrabold text-gray-900">Have specific questions?</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Our certified architects are ready to map out your implementation timeline and scope details.
              </p>
            </div>
            
            {/* Visual Mini Chat Widget */}
            <div className="border border-gray-150 rounded-xl bg-white p-4 shadow-sm space-y-3 mt-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-gray-600">Consultant online</span>
              </div>
              <p className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-[11px] text-gray-600 leading-relaxed font-medium">
                "We typically map data migration and custom workflow integrations in the first week."
              </p>
              <Link 
                href="/contact" 
                className="block text-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors shadow-sm"
              >
                Ask our team →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Accordion FAQ block (Takes 8/12 columns) */}
        <div className="lg:col-span-8 space-y-3.5">
          {items.map((item, index) => {
            const isOpen = activeIdx === index;
            
            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300 bg-white",
                  isOpen
                    ? "border-blue-200 shadow-md ring-1 ring-blue-500/5"
                    : "border-gray-200 hover:border-gray-300 shadow-sm"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left px-5 py-4 font-bold text-xs md:text-sm text-gray-900 focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{item.question}</span>
                  <span className={cn(
                    "h-6 w-6 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 text-xs font-semibold transition-all duration-300 shrink-0",
                    isOpen ? "bg-blue-600 text-white border-blue-600 rotate-45" : "text-gray-500"
                  )} aria-hidden="true">
                    +
                  </span>
                </button>

                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-xs md:text-sm leading-relaxed text-gray-500">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
