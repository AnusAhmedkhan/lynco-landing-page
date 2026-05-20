"use client";

import { motion } from "framer-motion";

import {
  type LynAppShowcaseTabId,
  useLynAppShowcaseTabs,
} from "@/hooks/use-lyn-landing";
import { cn } from "@/lib/utils";

export function LynAppShowcaseTabs({
  activeId,
  onChange,
}: {
  activeId: LynAppShowcaseTabId;
  onChange: (id: LynAppShowcaseTabId) => void;
}) {
  const tabs = useLynAppShowcaseTabs();

  return (
    <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center px-3 sm:bottom-6 sm:px-4 md:bottom-4">
      <div
        role="tablist"
        aria-label="App features"
        className="lyn-showcase-tab-track lyn-glass relative h-[58px] w-full max-w-[548px] overflow-hidden !rounded-[45px] sm:h-[71px]"
      >
        <div className="absolute inset-0 flex items-center justify-center px-[5%] sm:px-[38px]">
          <div className="relative grid h-[30px] w-full max-w-[457px] grid-cols-4 sm:h-[35px]">
            {tabs.map((tab) => {
              const active = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onChange(tab.id)}
                  className={cn(
                    "relative flex h-full min-w-0 items-center justify-center rounded-[35px] px-0.5 sm:px-2.5",
                    active
                      ? "font-extrabold text-white"
                      : "font-semibold text-white transition-colors hover:text-white"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="lyn-showcase-tab-pill"
                      className="lyn-showcase-tab-active absolute inset-0 rounded-[35px]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 34,
                      }}
                    />
                  ) : null}
                  <span
                    className={cn(
                      "relative z-10 block max-w-full truncate",
                      "text-[10px] leading-tight sm:text-[14px] sm:leading-normal"
                    )}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
