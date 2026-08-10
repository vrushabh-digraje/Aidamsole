import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
import { SectionIcons } from "@/components/ui/SectionIcons";

type PartnerTrustProps = {
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const stats = [
  {
    label: "Partner status",
    value: "Zoho Authorized",
    icon: "check" as const,
  },
  {
    label: "Regions",
    value: "India & GCC",
    icon: "building" as const,
  },
  {
    label: "Focus",
    value: "Retail & Distribution",
    icon: "connected" as const,
  },
  {
    label: "Clients",
    value: "Mid-sized teams",
    icon: "people" as const,
  },
];

export function PartnerTrust({
  tone = "muted",
  spacing = "compact",
}: PartnerTrustProps) {
  const headingId = "partner-trust-heading";

  return (
    <Section
      id="credibility"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      <h2 id={headingId} className="sr-only">
        Partner credentials
      </h2>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex max-w-md flex-col items-start gap-4 sm:flex-row sm:items-center">
          <ZohoPartnerBadge variant="badge" size="lg" framed />
          <div>
            <p className="text-lg font-semibold tracking-tight text-gray-900">
              Official Zoho Authorized Partner
            </p>
            <p className="mt-1 text-sm leading-snug text-gray-600">
              Zoho systems for retail and distribution teams across India &amp;
              the GCC — implementation, training, and support.
            </p>
          </div>
        </div>

        <ul className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = SectionIcons[item.icon];
            return (
              <li
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-muted text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
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
