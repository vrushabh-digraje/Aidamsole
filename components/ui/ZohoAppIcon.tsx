import { cn } from "@/lib/utils";

/** Distinctive Zoho-style app color tiles (partner-safe marks, not official logos). */
const APP_COLORS: Record<string, { bg: string; label: string }> = {
  crm: { bg: "#E42527", label: "CRM" },
  books: { bg: "#1F7A4D", label: "Bks" },
  inventory: { bg: "#0B6E99", label: "Inv" },
  projects: { bg: "#2F6FED", label: "Prj" },
  people: { bg: "#C45C26", label: "Ppl" },
  desk: { bg: "#5B4CC4", label: "Dsk" },
  analytics: { bg: "#0B5CAB", label: "Anl" },
  creator: { bg: "#D9480F", label: "Cre" },
  campaigns: { bg: "#0F766E", label: "Cmp" },
};

type ZohoAppIconProps = {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "h-9 w-9 text-[9px]",
  md: "h-12 w-12 text-[10px]",
  lg: "h-14 w-14 text-[11px]",
} as const;

export function ZohoAppIcon({
  name,
  className,
  size = "md",
}: ZohoAppIconProps) {
  const key = name.trim().toLowerCase();
  const meta = APP_COLORS[key] ?? {
    bg: "#0B3A82",
    label: name.slice(0, 3).toUpperCase(),
  };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl font-bold tracking-wide text-white shadow-sm",
        sizeClass[size],
        className,
      )}
      style={{ backgroundColor: meta.bg }}
      aria-hidden="true"
      title={`Zoho ${name}`}
    >
      {meta.label}
    </span>
  );
}

export function zohoAppHref(name: string) {
  const slug = name.trim().toLowerCase();
  return `/platform/${slug}`;
}
