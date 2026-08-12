import {
  Section,
  type SectionSpacing,
  type SectionTone,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export type OutcomeGridItem = {
  title: string;
  description: string;
};

type OutcomeGridProps = {
  title: string;
  description: string;
  items: OutcomeGridItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

// Rich colors for the left-border accent of each outcome
const outcomeThemes = [
  { border: "bg-amber-500", text: "text-amber-600" },
  { border: "bg-sky-500", text: "text-sky-600" },
  { border: "bg-rose-500", text: "text-rose-600" },
  { border: "bg-emerald-500", text: "text-emerald-600" },
];

export function OutcomeGrid({
  title,
  description,
  items,
  tone = "default",
  spacing = "default",
}: OutcomeGridProps) {
  const headingId = "outcome-grid-heading";

  return (
    <Section
      id="outcomes"
      ariaLabelledby={headingId}
      tone={tone}
      spacing={spacing}
    >
      {/* Section Title Header */}
      <div className="section-copy">
        <h2 id={headingId}>{title}</h2>
        <p className="section-lede body-clamp">{description}</p>
      </div>

      {/* Grid of Outcome Cards (Sharp corners, colored left borders) */}
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item, idx) => {
          const theme = outcomeThemes[idx % outcomeThemes.length];
          return (
            <li
              key={item.title}
              className={cn(
                "group relative flex flex-col justify-between rounded-none border border-gray-200 bg-white p-6 shadow-sm",
                "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 overflow-hidden"
              )}
            >
              {/* Left border colored accent strip */}
              <div className={cn("absolute left-0 inset-y-0 w-1.5 shrink-0", theme.border)} />
              
              <div>
                {/* Header row: Title and outcome index number badge */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-extrabold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 border border-gray-100 bg-gray-50 text-gray-400 font-mono select-none">
                    0{idx + 1}
                  </span>
                </div>
                
                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>

              {/* Action/Metric indicator link */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-semibold select-none">
                <span>Verified Handoff Criteria</span>
                <span className={cn("uppercase tracking-wider", theme.text)}>Active Target</span>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
