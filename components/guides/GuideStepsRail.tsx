"use client";

import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

interface Step {
  id: number;
}

interface GuideStepsRailProps {
  steps: Step[];
  activeStep: number;
}

const GuideStepsRail = ({ steps, activeStep }: GuideStepsRailProps) => {
  const { t } = useTranslation();

  return (
    <div className="sticky top-24 hidden h-fit md:block">
      <div className="flex flex-col gap-8">
        {steps.map((step) => {
          const isActive = step.id === activeStep;
          return (
            <div key={step.id} className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-base font-bold transition-all duration-300",
                  isActive
                    ? "lyn-btn-primary text-white"
                    : "bg-lyn-surface text-lyn-muted border border-lyn-border"
                )}
              >
                {step.id}
              </div>
              <span
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  isActive ? "font-semibold text-white" : "text-lyn-muted"
                )}
              >
                {t("connectionGuide.stepLabel")} {step.id}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuideStepsRail;
