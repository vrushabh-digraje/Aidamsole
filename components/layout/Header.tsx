import type { ReactNode } from "react";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PRIMARY_CTA } from "@/lib/constants";

type HeaderProps = {
  showTopBar?: boolean;
};

export function Header({ showTopBar = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      {showTopBar ? <TopBar /> : null}

      <div className="relative z-[60] bg-white">
        <Container className="flex h-[4.25rem] items-center gap-3 lg:h-[4.5rem] lg:gap-4">
          <BrandLogo className="mr-auto" />

          <MegaMenu className="hidden min-w-0 flex-1 justify-end gap-1 xl:flex xl:gap-2" />

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              href={PRIMARY_CTA.href}
              size="sm"
              className="rounded-lg px-3 py-2 text-xs font-semibold sm:px-5 sm:text-sm"
            >
              {PRIMARY_CTA.label}
            </Button>
            <MobileNav />
          </div>
        </Container>
      </div>
    </header>
  );
}
