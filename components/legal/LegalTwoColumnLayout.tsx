"use client";

"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

export type LegalNavItem = {
  id: string;
  label: string;
};

type Props = {
  nav: LegalNavItem[];
  children: React.ReactNode;
};

const LegalTwoColumnLayout = ({ nav, children }: Props) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const navItems = useMemo(() => nav?.filter(Boolean) ?? [], [nav]);

  useEffect(() => {
    if (navItems.length === 0) return;

    const sections = navItems
      .map((x) => document.getElementById(x.id))
      .filter((x): x is HTMLElement => Boolean(x));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.sort(
          (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
        )[0];
        if (topMost?.target?.id) setActiveId(topMost.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navItems]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto max-w-[1160px] px-4 sm:px-8 py-12">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-lyn-muted mb-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              {t("legal.pageNavLabel")}
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "rounded-md border-l-2 px-3 py-2 text-left text-sm transition-colors",
                    activeId === item.id
                      ? "bg-lyn-glass text-lyn-secondary border-l-lyn-secondary font-medium"
                      : "text-lyn-muted hover:bg-lyn-glass hover:text-lyn-secondary border-l-transparent"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="border-lyn-border min-w-0 lg:border-l lg:pl-14">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LegalTwoColumnLayout;
