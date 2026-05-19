"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { GUIDE_NAV_ITEMS } from "@/constants/guides-nav";
import { cn } from "@/lib/utils";

const GuidesNavDropdown = () => {
  const { t } = useTranslation();

  const linkClass =
    "block w-full px-4 py-2 text-left text-xs text-lyn-muted transition-colors hover:bg-lyn-glass hover:text-white sm:text-sm";

  return (
    <div className="group relative">
      <button
        type="button"
        className="text-lyn-secondary  text-[13px] font-medium whitespace-nowrap transition-colors"
      >
        {t("navigation.guides")}
      </button>
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-xl",
          "border border-lyn-border bg-lyn-surface opacity-0 shadow-xl",
          "transition-all duration-300 group-hover:visible group-hover:opacity-100"
        )}
      >
        <div className="py-3">
          <p className="text-lyn-muted px-4 pb-1 text-[10px] font-semibold uppercase tracking-widest">
            {t("navigation.guidesMenu.sectionGuides")}
          </p>
          {GUIDE_NAV_ITEMS.map((item) => (
            <Link key={item.key} href={item.href} className={linkClass}>
              {t(item.labelKey)}
            </Link>
          ))}
          {/* <p className="text-lyn-muted mt-2 px-4 pb-1 text-[10px] font-semibold uppercase tracking-widest">
            {t("navigation.guidesMenu.sectionPages")}
          </p>
          {STATIC_PAGE_NAV_ITEMS.map((item) => (
            <Link key={item.key} href={item.href} className={linkClass}>
              {t(item.labelKey)}
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default GuidesNavDropdown;
