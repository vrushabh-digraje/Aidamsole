import Image from "next/image";

import { cn } from "@/lib/utils";

const ASSETS = {
  /** Official blue “Zoho Authorized Partner” badge */
  badge: {
    src: "/brand/zoho-authorized-partner.png",
    width: 1024,
    height: 285,
  },
  /** Icon + wordmark lockup (light background) */
  lockup: {
    src: "/brand/zoho-partner.png",
    width: 222,
    height: 122,
  },
} as const;

type ZohoPartnerBadgeProps = {
  /** `badge` = blue authorized mark; `lockup` = icon + wordmark */
  variant?: keyof typeof ASSETS;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Soft white plate — use on dark surfaces */
  framed?: boolean;
  priority?: boolean;
};

const sizeClass = {
  sm: "h-8 w-auto",
  md: "h-11 w-auto",
  lg: "h-14 w-auto sm:h-16",
} as const;

export function ZohoPartnerBadge({
  variant = "badge",
  size = "md",
  className,
  framed = false,
  priority = false,
}: ZohoPartnerBadgeProps) {
  const asset = ASSETS[variant];

  const image = (
    <Image
      src={asset.src}
      alt="Zoho Authorized Partner"
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn(
        "object-contain object-left",
        sizeClass[size],
        !framed && className,
      )}
    />
  );

  if (!framed) {
    return image;
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 shadow-sm",
        className,
      )}
    >
      {image}
    </span>
  );
}
