import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function iconClass(className?: string) {
  return cn("h-5 w-5 stroke-[1.75]", className);
}

export function DirectoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const common = iconClass(className);
  const key = name.trim().toLowerCase();

  switch (key) {
    case "sales":
    case "sales-system":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" />
          <circle cx="18" cy="12" r="2" stroke="currentColor" />
          <circle cx="15" cy="18" r="2" stroke="currentColor" />
        </svg>
      );
    case "marketing":
    case "marketing-automation":
    case "campaigns":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            stroke="currentColor"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" />
          <path
            d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
          />
        </svg>
      );
    case "delivery":
    case "delivery-project-system":
    case "operations-system":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M9 11l3 3L22 4" stroke="currentColor" />
          <path
            d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            stroke="currentColor"
          />
        </svg>
      );
    case "support":
    case "support-system":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" />
          <path d="M12 8v5M12 16h.01" stroke="currentColor" />
        </svg>
      );
    case "finance":
    case "finance-operations":
    case "finance-system":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"
            stroke="currentColor"
          />
          <path d="M8 10h5M8 14h3" stroke="currentColor" />
        </svg>
      );
    case "dashboard":
    case "leadership-dashboard":
    case "analytics":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3" y="3" width="7" height="9" rx="1" stroke="currentColor" />
          <rect x="14" y="3" width="7" height="5" rx="1" stroke="currentColor" />
          <rect x="14" y="12" width="7" height="9" rx="1" stroke="currentColor" />
          <rect x="3" y="16" width="7" height="5" rx="1" stroke="currentColor" />
        </svg>
      );
    case "crm":
    case "books":
    case "inventory":
    case "projects":
    case "people":
    case "desk":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
          <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" />
        </svg>
      );
    case "creator":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 3v18M3 12h18" stroke="currentColor" />
          <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" />
        </svg>
      );
    case "real-estate":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"
            stroke="currentColor"
          />
        </svg>
      );
    case "healthcare":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 3v18M3 12h18" stroke="currentColor" />
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M3 21h18M5 21V10l5 3V8l5 3V6l4 2v13"
            stroke="currentColor"
            strokeLinejoin="round"
          />
          <path d="M8 21v-4M12 21v-6M16 21v-3" stroke="currentColor" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M3 9l9-5 9 5-9 5-9-5z" stroke="currentColor" />
          <path d="M7 12v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" stroke="currentColor" />
        </svg>
      );
    case "retail":
    case "retail-distribution":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M4 7h16l-1.5 12H5.5L4 7zM8 7V5a4 4 0 0 1 8 0v2"
            stroke="currentColor"
          />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M3 21h18M6 21V10l6-4 6 4v11" stroke="currentColor" />
          <path d="M10 21v-5h4v5" stroke="currentColor" />
        </svg>
      );
    case "service":
    case "it-services":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" />
          <path d="M8 21h8M12 17v4" stroke="currentColor" />
        </svg>
      );
    case "interior-design":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 20V9l8-5 8 5v11" stroke="currentColor" />
          <path d="M9 20v-6h6v6" stroke="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
          <path d="M8 12h8" stroke="currentColor" />
        </svg>
      );
  }
}

export type { IconProps };
