import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function LynGlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("lyn-glass-card", className)}>{children}</div>;
}
