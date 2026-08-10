"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA } from "@/lib/constants";
import { megaMenu, type MegaMenuPanel } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className={cn("xl:hidden", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-800"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] xl:hidden" role="presentation">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-gray-900/40"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <div id={titleId} onClick={() => setOpen(false)}>
                <BrandLogo size="drawer" />
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-800"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-6">
                {megaMenu.map((panel) => (
                  <MobilePanel
                    key={panel.label}
                    panel={panel}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </ul>
            </nav>

            <div className="border-t border-gray-200 p-5">
              <Button
                href={PRIMARY_CTA.href}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {PRIMARY_CTA.label}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobilePanel({
  panel,
  onNavigate,
}: {
  panel: MegaMenuPanel;
  onNavigate: () => void;
}) {
  if (panel.type === "link" || !panel.items?.length) {
    return (
      <li>
        <Link
          href={panel.href}
          onClick={onNavigate}
          className="block text-base font-semibold text-gray-900 no-underline hover:text-primary"
        >
          {panel.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        {panel.label}
      </p>
      <ul className="mt-3 space-y-1">
        <li>
          <Link
            href={panel.href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary no-underline hover:bg-gray-50"
          >
            View all {panel.label.toLowerCase()}
          </Link>
        </li>
        {panel.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 no-underline hover:bg-gray-50 hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
