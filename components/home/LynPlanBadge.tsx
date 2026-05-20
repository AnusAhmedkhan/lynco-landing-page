import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LynPlanBadgeVariant = "black" | "multipro";

const BADGE_BG: Record<LynPlanBadgeVariant, string> = {
  black: "#000000",
  multipro: "#15151766",
};

export function LynPlanBadge({
  children,
  variant = "black",
  iconSrc,
  className,
}: {
  children: ReactNode;
  variant?: LynPlanBadgeVariant;
  iconSrc?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit max-w-full rounded-full p-px",
        // "bg-[linear-gradient(207.94deg,rgba(255,255,255,0.5)_8.93%,rgba(255,255,255,0)_69.85%)]",
        "lyn-glass-card",
        className
      )}
    >
      <span
        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white backdrop-blur-[16px] sm:text-base"
        style={{
          background: BADGE_BG[variant],
          boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.35)",
        }}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 shrink-0"
          />
        ) : null}
        {children}
      </span>
    </span>
  );
}
