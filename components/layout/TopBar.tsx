import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
import { ROUTES } from "@/lib/constants";

type TopBarProps = {
  label?: string;
};

export function TopBar({
  label = "Zoho Authorized Partner · India & GCC",
}: TopBarProps) {
  return (
    <div className="border-b border-primary/15 bg-primary text-white">
      <Container className="flex h-9 items-center justify-between gap-3 sm:h-10">
        <Link
          href={ROUTES.platform}
          className="inline-flex items-center gap-2 no-underline hover:no-underline"
          aria-label="Zoho Authorized Partner"
        >
          <span className="hidden rounded bg-white/95 px-1.5 py-0.5 sm:inline-flex">
            <ZohoPartnerBadge variant="badge" size="sm" className="h-5 w-auto" />
          </span>
          <p className="text-[11px] font-medium tracking-[0.04em] text-white/95 sm:tracking-[0.06em]">
            {label}
          </p>
        </Link>
        <Link
          href={ROUTES.contact}
          className="shrink-0 text-[11px] font-semibold text-white/90 no-underline hover:text-white hover:underline"
        >
          Book consultation →
        </Link>
      </Container>
    </div>
  );
}
