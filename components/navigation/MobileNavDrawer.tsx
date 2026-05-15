"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { LynLandingNavLink } from "@/components/navigation/LynLandingNavLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  labelKey: string;
  label?: string;
}

interface MobileNavDrawerProps {
  items: NavItem[];
  cta?: { href: string; labelKey: string; label?: string };
  /** LYNCO landing: dark glass drawer + in-page scroll for #hash links */
  variant?: "default" | "lyn";
}

const MobileNavDrawer = ({
  items,
  cta,
  variant = "default",
}: MobileNavDrawerProps) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isLyn = variant === "lyn";

  useEffect(() => {
    // keeps drawer in sync with route
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 1024px)");
    const handle = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", handle);
    return () => media.removeEventListener("change", handle);
  }, []);

  const menuLabel = t("navigation.menu");
  const resolvedMenuLabel =
    menuLabel === "navigation.menu" ? "Menu" : menuLabel;

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="flex cursor-pointer items-center justify-center lg:hidden">
          <Menu className="h-5 w-5 text-inherit" />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        overlayClassName={isLyn ? "bg-black/70 backdrop-blur-sm" : undefined}
        className={cn(
          "w-[84%] border-r px-4 py-6 sm:max-w-sm",
          isLyn
            ? "lyn-glass border-lyn-border !bg-lyn-bg text-white"
            : "bg-white"
        )}
        aria-label={resolvedMenuLabel}
      >
        <SheetTitle className="sr-only">{resolvedMenuLabel}</SheetTitle>
        <div className="flex flex-col gap-6">
          <div className="px-1">
            <Typography
              className={cn("font-bold", isLyn ? "text-white" : "text-primary")}
              variant="lg"
            >
              {resolvedMenuLabel}
            </Typography>
          </div>

          <nav className="flex flex-col gap-1">
            {items.map((item) => {
              const label = item.label ?? t(item.labelKey);
              const isHash = item.href.startsWith("#");

              if (isLyn && isHash) {
                return (
                  <LynLandingNavLink
                    key={item.href}
                    href={item.href}
                    label={label}
                    onNavigate={close}
                    className="text-lyn-muted rounded-md px-3 py-2.5 text-base font-medium hover:text-white"
                  />
                );
              }

              const isActive = pathname === item.href;
              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-base font-medium transition-colors",
                      isActive
                        ? isLyn
                          ? "text-white"
                          : "text-primary"
                        : isLyn
                          ? "text-lyn-muted hover:text-white"
                          : "text-secondary-text hover:text-primary"
                    )}
                  >
                    {label}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>

          {cta && (
            <div className="mt-2">
              <SheetClose asChild>
                <Link href={cta.href} className="block" onClick={close}>
                  <Button
                    variant="solidBlue"
                    className={cn(
                      "w-full rounded-xl",
                      isLyn && "lyn-btn-primary border-0"
                    )}
                  >
                    {cta.label ?? t(cta.labelKey)}
                  </Button>
                </Link>
              </SheetClose>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavDrawer;
