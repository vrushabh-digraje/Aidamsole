import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
import { PRIMARY_CTA, ROUTES, SITE } from "@/lib/constants";
import { footerColumns } from "@/lib/navigation";
import { LIVE_ROUTES } from "@/lib/published";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aidamsole",
    hoverColor: "hover:bg-[#0077B5] hover:border-[#0077B5] hover:shadow-[#0077B5]/20",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/aidamsole",
    hoverColor: "hover:bg-white hover:text-black hover:border-white hover:shadow-white/10",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@aidamsole",
    hoverColor: "hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[#FF0000]/20",
  },
] as const;

function SocialIcon({ id }: { id: (typeof socialLinks)[number]["id"] }) {
  const common = "h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110";

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
        className="text-xs font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
      >
        {title}
      </Link>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-center text-xs text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
            >
              <span className="mr-1.5 h-1 w-1 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
    <footer className="relative bg-gray-950 text-white overflow-hidden border-t border-gray-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e3a8a/10,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_repeat(4,minmax(0,1fr))]">
          {/* 1. Brand */}
          <div className="max-w-sm">
            <div className="inline-flex flex-col gap-3">
              <span className="inline-flex rounded-lg bg-white px-2 py-1.5 shadow-md">
                <BrandLogo size="footer" className="hover:bg-transparent hover:border-transparent" />
              </span>
              <p className="text-sm font-extrabold tracking-tight text-white mt-1">
                Business Systems on Zoho
              </p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-gray-400">
              Zoho system design for mid-market companies — sales, operations,
              and finance on one operating model.
            </p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-gray-500">
              {SITE.tagline}
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-white/95 px-2.5 py-2 shadow-sm border border-white/10">
              <ZohoPartnerBadge variant="badge" size="sm" />
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn(
                    "group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-300 no-underline transition-all duration-300 ease-in-out hover:text-white hover:no-underline hover:scale-105 hover:shadow-lg",
                    social.hoverColor
                  )}
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
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Contact
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1.5 inline-flex items-center text-xs text-gray-300 transition-colors hover:text-blue-400 font-semibold"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 mr-1.5 text-blue-500" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    {SITE.email}
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      India
                    </p>
                  </div>
                  <a
                    href={`tel:${SITE.phones.india.tel}`}
                    className="mt-1.5 inline-flex items-center text-xs text-gray-300 transition-colors hover:text-blue-400 font-semibold"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 mr-1.5 text-blue-500" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {SITE.phones.india.display}
                  </a>
                  <p className="mt-2 text-[11px] leading-relaxed text-gray-400 pl-5">
                    {SITE.addresses.india.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-t border-gray-900 pt-4">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-gray-300 transition-colors hover:text-blue-400"
              >
                View on Google Maps →
              </a>
              <br />
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center text-xs font-bold text-gray-300 transition-colors hover:text-blue-400"
              >
                {PRIMARY_CTA.label} →
              </Link>
            </div>
          </div>
        </div>

        {/* Legal area */}
        <div className="mt-14 flex flex-col gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerColumns.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-gray-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sitemap.xml"
              className="text-xs text-gray-400 transition-colors hover:text-white"
            >
              Sitemap
            </Link>
            <Link
              href="/robots.txt"
              className="text-xs text-gray-400 transition-colors hover:text-white"
            >
              Robots
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
