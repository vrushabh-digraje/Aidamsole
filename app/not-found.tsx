import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA, ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-xl flex-col items-start px-6 py-24 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-snug text-gray-600">
          That URL isn&apos;t published on this site. Try the homepage, browse
          industries, or book a consultation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={ROUTES.home}>Go home</Button>
          <Button href={ROUTES.industries} variant="secondary">
            Industries
          </Button>
          <Button href={PRIMARY_CTA.href} variant="secondary">
            {PRIMARY_CTA.label}
          </Button>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Or{" "}
          <Link
            href={ROUTES.contact}
            className="font-semibold text-primary no-underline hover:underline"
          >
            contact us
          </Link>{" "}
          if you were looking for something specific.
        </p>
      </div>
    </div>
  );
}
