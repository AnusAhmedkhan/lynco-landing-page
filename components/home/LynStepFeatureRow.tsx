import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LynStepFeatureRowProps = {
  badge: ReactNode;
  children: ReactNode;
  isLast?: boolean;
  className?: string;
};

/**
 * Step row + optional bridge: dotted rail from badge bottom to next badge top.
 * Bridge fills the gap between rows (padding cannot — flex children sit above it).
 */
export function LynStepFeatureRow({
  badge,
  children,
  isLast = false,
  className,
}: LynStepFeatureRowProps) {
  return (
    <>
      <div className={cn("lyn-step-row flex gap-4", className)}>
        <div className="lyn-step-rail flex w-14 min-h-0 shrink-0 flex-col items-center self-stretch">
          <div className="lyn-step-badge lyn-glass flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
            {badge}
          </div>
          {!isLast ? (
            <div
              aria-hidden
              className="lyn-step-connector lyn-step-connector--grow"
            />
          ) : null}
        </div>
        <div className="min-h-0 min-w-0 flex-1">{children}</div>
      </div>
      {!isLast ? (
        <div aria-hidden className="lyn-step-bridge">
          <div className="lyn-step-connector lyn-step-connector--bridge" />
        </div>
      ) : null}
    </>
  );
}
