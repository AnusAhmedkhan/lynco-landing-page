"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  href: string;
  labelKey: string;
  /** When set, shown instead of `t(labelKey)` (e.g. marketing pages with fixed copy). */
  label?: string;
}

interface MobileNavDrawerProps {
  items: NavItem[];
  cta?: { href: string; labelKey: string; label?: string };
}

const MobileNavDrawer = ({ items, cta }: MobileNavDrawerProps) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on route change by relying on SheetClose wrapping links
  useEffect(() => {
    // no-op: dependency keeps component aware of route changes
  }, [pathname]);

  // Close when viewport switches to lg and above
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* <Button variant="plain" size="icon" className="lg:hidden"> */}
        <div className="lg:hidden cursor-pointer flex items-center justify-center">
          <Menu className="h-5 w-5 text-inherit" />
        </div>
        {/* </Button>x */}
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[84%] px-4 py-6 sm:max-w-sm"
        aria-label={resolvedMenuLabel}
      >
        <SheetTitle className="sr-only">{resolvedMenuLabel}</SheetTitle>
        <div className="flex flex-col gap-6">
          <div className="px-1">
            <Typography className="text-primary font-bold" variant="lg">
              {resolvedMenuLabel}
            </Typography>
          </div>

          <nav className="flex flex-col gap-2">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-secondary-text hover:text-primary"
                    }`}
                  >
                    {item.label ?? t(item.labelKey)}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>

          {cta && (
            <div className="mt-2">
              <SheetClose asChild>
                <Link href={cta.href} className="block">
                  <Button variant="solidBlue" className="w-full rounded-3xl">
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
