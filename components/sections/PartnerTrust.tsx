import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
import { SectionIcons } from "@/components/ui/SectionIcons";
import { cn } from "@/lib/utils";

type PartnerTrustProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
};

const stats = [
  {
    label: "PARTNER STATUS",
    value: "Zoho Authorized",
    icon: "check" as const,
  },
  {
    label: "REGIONS",
    value: "India & GCC",
    icon: "building" as const,
  },
  {
    label: "FOCUS",
    value: "Retail & Distribution",
    icon: "connected" as const,
  },
  {
    label: "CLIENTS",
    value: "Mid-sized teams",
    icon: "people" as const,
  },
];

export function PartnerTrust({
  tone = "muted",
  spacing = "compact",
  className,
}: PartnerTrustProps) {
  const headingId = "partner-trust-heading";

  return (
    <Section
      id="credibility"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
      className={cn("border-b border-gray-100 bg-slate-50/30", className)}
    >
      <h2 id={headingId} className="sr-only">
        Partner credentials
      </h2>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        
        {/* Left Side: Logo and copy description */}
        <div className="flex flex-1 max-w-xl items-center gap-4 sm:flex-row">
          <div className="flex-shrink-0">
            <ZohoPartnerBadge variant="badge" size="md" framed />
          </div>
          <div className="min-w-0">
            <p className="text-base font-bold text-gray-900 tracking-tight sm:text-lg">
              Official Zoho Authorized Partner
            </p>
            <p className="mt-1 text-xs md:text-sm leading-snug text-gray-500 max-w-sm">
              Zoho systems for retail and distribution teams across India &amp;
              the GCC — implementation, training, and support.
            </p>
          </div>
        </div>

        {/* Right Side: Credential Cards Row */}
        <ul className="grid w-full gap-3 grid-cols-2 lg:max-w-[55%] lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = SectionIcons[item.icon];
            return (
              <li
                key={item.label}
                className="flex flex-col justify-between rounded-xl border border-gray-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200/60"
              >
                <div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors duration-300">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="mt-3.5 text-[9.5px] font-bold tracking-wider text-gray-400">
                    {item.label}
                  </p>
                </div>
                <p className="mt-1 text-xs md:text-sm font-extrabold text-gray-900 leading-tight">
                  {item.value}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
