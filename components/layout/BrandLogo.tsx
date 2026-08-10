"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Larger mark for footer / drawer */
  size?: "header" | "footer" | "drawer";
};

const sizeMap = {
  header: { width: 200, height: 52, className: "h-9 w-auto sm:h-10" },
  footer: { width: 280, height: 72, className: "h-12 w-auto sm:h-14" },
  drawer: { width: 200, height: 52, className: "h-8 w-auto" },
} as const;

/**
 * Always-interactive brand mark. On the homepage, click scrolls to top
 * so the control never feels “dead”.
 */
export function BrandLogo({ className, size = "header" }: BrandLogoProps) {
  const pathname = usePathname();
  const dims = sizeMap[size];
  const isHome = pathname === ROUTES.home || pathname === "";

  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} — go to homepage`}
      title="Aidamsole home"
      onClick={(event) => {
        if (!isHome) return;
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn(
        "group relative z-[100] inline-flex shrink-0 items-center rounded-lg border border-transparent bg-transparent px-2 py-1.5",
        "cursor-pointer no-underline outline-none transition duration-200",
        "hover:border-gray-200 hover:bg-gray-50 hover:no-underline",
        "focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/30",
        "active:scale-[0.98]",
        className,
      )}
    >
      <Image
        src="/brand/aidamsole-logo.png"
        alt=""
        width={dims.width}
        height={dims.height}
        priority={size === "header"}
        className={cn(
          "pointer-events-none select-none object-contain object-left",
          dims.className,
        )}
      />
      <span className="sr-only">Aidamsole home</span>
    </Link>
  );
}
