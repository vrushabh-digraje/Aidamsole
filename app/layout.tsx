import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SITE } from "@/lib/constants";
import { SITE_URL, STATIC_PAGES } from "@/lib/seo";
import "@/styles/globals.css";

import { LiveChatWidget } from "@/components/layout/LiveChatWidget";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: STATIC_PAGES.home.title,
    template: `%s | ${SITE.name}`,
  },
  description: STATIC_PAGES.home.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE.name,
    title: STATIC_PAGES.home.title,
    description: STATIC_PAGES.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: STATIC_PAGES.home.title,
    description: STATIC_PAGES.home.description,
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/aidamsole-logo.png", type: "image/png" },
    ],
    shortcut: "/icon",
    apple: "/brand/apple-touch-icon.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <OrganizationJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-gray-900"
        >
          Skip to main content
        </a>
        
        {children}

        <a
          href="https://wa.me/919356917424?text=Hi%20AiDamsole%20team%2C%20I'd%20like%20to%20get%20a%20consultation%20and%20system%20audit%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-6 z-[9999] flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-2xl hover:scale-112 hover:shadow-[0_0_20px_rgba(37,211,102,0.45)] active:scale-95 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated pulsing ripple ring */}
          <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 animate-[ping_2.5s_ease-in-out_infinite]" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 rounded border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-xl transition-all duration-200 origin-right select-none pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
          </span>
          
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-9 w-9 transition-all duration-300 group-hover:rotate-[12deg] group-hover:scale-105"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.485.002 9.948-4.461 9.951-9.95.001-2.66-1.033-5.16-2.909-7.038C17.22 1.74 14.73 1.701 12.01 1.701c-5.49 0-9.952 4.46-9.955 9.949-.002 1.912.499 3.79 1.45 5.4l-.994 3.635 3.72-.977zm11.368-6.424c-.302-.151-1.787-.882-2.056-.98-.269-.099-.465-.148-.661.151-.196.299-.757.98-.929 1.178-.172.197-.344.221-.646.071-.302-.151-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.676-2.084-.176-.301-.019-.464.132-.613.136-.134.302-.351.453-.527.151-.176.201-.299.302-.501.101-.2.05-.375-.025-.526-.075-.151-.661-1.59-.906-2.179-.238-.573-.48-.495-.661-.504-.171-.008-.367-.01-.564-.01-.196 0-.516.074-.786.374-.27.299-1.03 1.008-1.03 2.459 0 1.45 1.054 2.852 1.202 3.051.147.2 2.075 3.167 5.027 4.444.702.304 1.25.486 1.677.622.705.224 1.347.193 1.855.117.567-.085 1.787-.732 2.04-.1438.253-.652.253-1.208 0-.151-.075-.151-.271-.226-.572-.377z" />
          </svg>
        </a>

        {/* Floating Live Chat Widget directly above WhatsApp */}
        <LiveChatWidget />
      </body>
    </html>
  );
}
