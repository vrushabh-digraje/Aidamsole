import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function base(className?: string) {
  return cn("h-6 w-6 stroke-[1.75]", className);
}

/** Shared section icons for partner-style homepage. */
export const SectionIcons = {
  consultation({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <path
          d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
          stroke="currentColor"
        />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeLinecap="round" />
      </svg>
    );
  },
  implementation({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
        <path d="M3 10h18M8 4v16" stroke="currentColor" />
        <path d="M12 14h5" stroke="currentColor" strokeLinecap="round" />
      </svg>
    );
  },
  training({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <path d="M3 9l9-5 9 5-9 5-9-5z" stroke="currentColor" />
        <path d="M7 12v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" stroke="currentColor" />
      </svg>
    );
  },
  support({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
        <path d="M12 8v5" stroke="currentColor" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    );
  },
  process({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" />
        <circle cx="18" cy="6" r="2.5" stroke="currentColor" />
        <circle cx="12" cy="18" r="2.5" stroke="currentColor" />
        <path d="M8.5 6h7M7.5 8.2 10.5 16M16.5 8.2 13.5 16" stroke="currentColor" />
      </svg>
    );
  },
  market({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <path d="M4 19V5M4 19h16" stroke="currentColor" />
        <path d="M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" />
      </svg>
    );
  },
  connected({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <circle cx="6" cy="12" r="3" stroke="currentColor" />
        <circle cx="18" cy="7" r="3" stroke="currentColor" />
        <circle cx="18" cy="17" r="3" stroke="currentColor" />
        <path d="M9 12h4.5M15.5 8.5 12.5 11M15.5 15.5 12.5 13" stroke="currentColor" />
      </svg>
    );
  },
  check({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
        <path d="M8 12.5 10.5 15 16 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
  people({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
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
  },
  building({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden="true">
        <path
          d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 10h5a1 1 0 0 1 1 1v10M8 8h2M8 12h2M8 16h2M17 14h1M17 17h1"
          stroke="currentColor"
        />
      </svg>
    );
  },
};
