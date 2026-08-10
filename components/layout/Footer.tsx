import Link from "next/link";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
import { PRIMARY_CTA, ROUTES, SITE } from "@/lib/constants";
import { footerColumns } from "@/lib/navigation";
import { LIVE_ROUTES } from "@/lib/published";

/**
 * Footer columns come from lib/navigation.ts, which filters via
 * getPublished* helpers in lib/published.ts (single source of truth).
 */

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aidamsole",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/aidamsole",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@aidamsole",
  },
] as const;

function SocialIcon({ id }: { id: (typeof socialLinks)[number]["id"] }) {
  const common = "h-4 w-4 fill-current";

  switch (id) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V23H.24V8.25zM8.34 8.25h4.33v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.52v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V23H8.34V8.25z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.5l-5.1-6.67L5.7 22H2.58l7.25-8.29L.8 2h6.66l4.6 6.1L18.9 2zm-1.14 18h1.8L6.35 3.9H4.42L17.76 20z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
        </svg>
      );
  }
}

function FooterColumn({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <Link
        href={href}
        className="text-sm font-semibold uppercase tracking-wide text-gray-400 transition-colors hover:text-white"
      >
        {title}
      </Link>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_repeat(4,minmax(0,1fr))]">
          {/* 1. Brand */}
          <div className="max-w-sm">
            <div className="inline-flex flex-col gap-3">
              <span className="inline-flex rounded-lg bg-white px-2 py-1.5">
                <BrandLogo size="footer" className="hover:bg-transparent hover:border-transparent" />
              </span>
              <p className="text-sm font-semibold tracking-tight text-white">
                Business Systems on Zoho
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Zoho system design for mid-market companies — sales, operations,
              and finance on one operating model.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {SITE.tagline}
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-white px-2.5 py-2">
              <ZohoPartnerBadge variant="badge" size="sm" />
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-300 no-underline transition duration-300 ease-in-out hover:border-gray-500 hover:bg-gray-700 hover:text-white hover:no-underline"
                >
                  <SocialIcon id={social.id} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Solutions */}
          <FooterColumn
            title="Solutions"
            href={LIVE_ROUTES.solutions}
            items={footerColumns.solutions}
          />

          {/* 3. Industries */}
          <FooterColumn
            title="Industries"
            href={LIVE_ROUTES.industries}
            items={footerColumns.industries}
          />

          {/* 4. Platform */}
          <FooterColumn
            title="Platform"
            href={LIVE_ROUTES.platform}
            items={footerColumns.platform}
          />

          {/* 5. Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Contact
            </p>
            <ul className="mt-5 grid gap-5">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1.5 block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  India
                </p>
                <a
                  href={`tel:${SITE.phones.india.tel}`}
                  className="mt-1.5 block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {SITE.phones.india.display}
                </a>
                <p className="mt-2 text-sm leading-snug text-gray-400">
                  {SITE.addresses.india.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  UAE
                </p>
                <a
                  href={`tel:${SITE.phones.uae.tel}`}
                  className="mt-1.5 block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {SITE.phones.uae.display}
                </a>
                <p className="mt-2 text-sm leading-snug text-gray-400">
                  {SITE.addresses.uae.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-semibold text-white transition-colors hover:text-gray-300"
                >
                  View on Google Maps →
                </a>
              </li>
              <li>
                <Link
                  href={PRIMARY_CTA.href}
                  className="inline-flex text-sm font-semibold text-white transition-colors hover:text-gray-300"
                >
                  {PRIMARY_CTA.label} →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerColumns.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sitemap.xml"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Sitemap
            </Link>
            <Link
              href="/robots.txt"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Robots
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
