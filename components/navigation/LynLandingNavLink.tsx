"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { isLandingHomePath, scrollToHash } from "@/lib/scroll-to-hash";
import { cn } from "@/lib/utils";

type LynLandingNavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
};

export function LynLandingNavLink({
  href,
  label,
  className,
  onNavigate,
}: LynLandingNavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHash = href.startsWith("#");

  if (isHash) {
    return (
      <button
        type="button"
        onClick={() => {
          if (isLandingHomePath(pathname)) {
            scrollToHash(href);
            window.history.pushState(null, "", `/home${href}`);
          } else {
            router.push(`/home${href}`);
          }
          onNavigate?.();
        }}
        className={cn(
          "cursor-pointer text-left transition-colors",
          className
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {label}
    </Link>
  );
}
