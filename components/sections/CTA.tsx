"use client";

import Image from "next/image";
import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { ContactExpertForm } from "@/components/sections/ContactExpertForm";
import { cn } from "@/lib/utils";

type CTAProps = {
  title?: string;
  description?: string;
  cta?: any;
  secondaryCta?: any;
  tertiaryCta?: any;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  variant?: "full" | "band";
  align?: "center" | "between";
  id?: string;
};

export function CTA({
  tone = "dark",
  spacing = "default",
  id = "cta-consultation",
}: CTAProps) {
  const isDark = tone === "dark";

  return (
    <Section
      id={id}
      tone={tone}
      spacing={spacing}
      bordered={false}
      className={cn(isDark && "relative overflow-hidden")}
      containerClassName="relative"
    >
      {isDark ? (
        <>
          {/* Full-bleed enterprise depth over flat primary */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-[linear-gradient(145deg,#071533_0%,#0f2a6b_52%,#1e3a8a_100%)]"
          >
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Animated concentric rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-60">
              <div className="absolute h-[350px] w-[350px] rounded-full border border-sky-400/10 animate-[ping_8s_linear_infinite]" />
              <div className="absolute h-[500px] w-[500px] rounded-full border border-blue-400/5 animate-[ping_12s_linear_infinite]" />
            </div>
            
            <Image
              src="/brand/hero-pattern.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.08] mix-blend-luminosity"
              sizes="100vw"
            />
          </div>

          {/* Zoho multicolor brand rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-10 h-1 w-screen -translate-x-1/2 bg-[linear-gradient(90deg,#E42527_0%,#F59E0B_25%,#22C55E_50%,#3B82F6_75%,#06B6D4_100%)]"
          />
        </>
      ) : null}

      <div className="relative z-10">
        <ContactExpertForm id={`${id}-form`} />
      </div>
    </Section>
  );
}

export const journeyCtas = {} as const;
