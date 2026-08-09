import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { MegaMenu } from "@/components/layout/MegaMenu";
import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PRIMARY_CTA, ROUTES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type HeaderProps = {
  showTopBar?: boolean;
};

const zohoModules = [
  { id: "crm", label: "CRM" },
  { id: "books", label: "Books" },
  { id: "analytics", label: "Analytics" },
] as const;

function ModuleIcon({ id }: { id: (typeof zohoModules)[number]["id"] }) {
  const common = "h-3 w-3 stroke-[1.75]";

  switch (id) {
    case "crm":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
          <path d="M3 10h18M8 4v16" stroke="currentColor" />
        </svg>
      );
    case "books":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"
            stroke="currentColor"
          />
          <path d="M8 10h5M8 14h3" stroke="currentColor" />
        </svg>
      );
    case "analytics":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 19V5M4 19h16" stroke="currentColor" />
          <path d="M8 15v-4M12 15V8M16 15v-6" stroke="currentColor" />
        </svg>
      );
  }
}

function TrustPill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Header({ showTopBar = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      {showTopBar ? <TopBar /> : null}

      <div>
        <Container className="grid h-[4.75rem] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
          {/* LEFT — logo + partner badge */}
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href={ROUTES.home}
              className="group flex shrink-0 items-center rounded-md bg-white px-2 py-1.5 no-underline hover:no-underline"
              aria-label={`${SITE.legalName} home`}
            >
              <Image
                src="/brand/aidamsole-logo.png"
                alt="Aidamsole Agile Services Private Limited"
                width={280}
                height={72}
                priority
                className="h-10 w-auto object-contain object-left sm:h-11 md:h-12"
              />
            </Link>

            <TrustPill className="hidden border border-gray-200/80 text-primary md:inline-flex">
              <span
                className="h-1.5 w-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Zoho Authorized Partner
            </TrustPill>
          </div>

          {/* CENTER — primary navigation */}
          <MegaMenu className="hidden justify-center gap-8 xl:flex" />

          {/* RIGHT — Zoho modules + CTA */}
          <div className="flex items-center justify-end gap-3">
            <div
              className="hidden items-center gap-1.5 lg:flex"
              aria-label="Zoho modules"
            >
              {zohoModules.map((module) => (
                <TrustPill key={module.id} className="gap-1 text-gray-600">
                  <span className="text-primary">
                    <ModuleIcon id={module.id} />
                  </span>
                  {module.label}
                </TrustPill>
              ))}
            </div>

            <Button
              href={PRIMARY_CTA.href}
              size="sm"
              className="rounded-lg px-5 py-2.5 text-xs font-semibold shadow-md sm:text-sm"
            >
              {PRIMARY_CTA.label}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
