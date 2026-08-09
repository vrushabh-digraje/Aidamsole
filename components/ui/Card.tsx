import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  /** Enable lift on hover (default true for interactive grids). */
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as: Component = "div",
  interactive = true,
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        interactive &&
          "transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      {children}
    </Component>
  );
}
