import type { Config } from "tailwindcss";

/**
 * Aidamsole enterprise design system tokens.
 * Prefer semantic tokens (primary, secondary, accent) over raw palette in UI.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          foreground: "#FFFFFF",
          soft: "#DBEAFE",
          muted: "#EFF6FF",
        },
        secondary: {
          DEFAULT: "#64748B",
          foreground: "#FFFFFF",
          soft: "#F1F5F9",
        },
        accent: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
          soft: "#EFF6FF",
        },
        danger: {
          DEFAULT: "#DC2626",
          soft: "#FEF2F2",
        },
        gray: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
        background: "#FFFFFF",
        "surface-muted": "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "80rem", // 7xl
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(15 23 42 / 0.05)",
        md: "0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.06)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
};

export default config;
