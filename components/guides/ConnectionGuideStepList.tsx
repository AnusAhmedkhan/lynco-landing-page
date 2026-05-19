"use client";

import Typography from "@/components/ui/legacy-typography";

import React, { useEffect, useRef } from "react";

import { CONNECTION_GUIDE_STEPS } from "@/constants/connection-guide-steps";
import { useTranslation } from "react-i18next";

interface ConnectionGuideStepListProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const ConnectionGuideStepList: React.FC<ConnectionGuideStepListProps> = ({
  activeStep,
  setActiveStep,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeStepRef = useRef(activeStep);

  // Keep ref in sync with latest activeStep so scroll handler is stable
  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = container;
      const epsilon = 8;

      // Clamp to first step at very top
      if (scrollTop <= epsilon) {
        if (activeStepRef.current !== 1) {
          setActiveStep(1);
        }
        return;
      }

      // Clamp to last step at very bottom
      const lastIndex = CONNECTION_GUIDE_STEPS.length - 1;
      const lastId = CONNECTION_GUIDE_STEPS[lastIndex]?.id;
      if (scrollTop + clientHeight >= scrollHeight - epsilon) {
        if (lastId && activeStepRef.current !== lastId) {
          setActiveStep(lastId);
        }
        return;
      }

      // Otherwise, pick the step whose center is closest to container center
      const rect = container.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;

      let bestId = activeStepRef.current;
      let bestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const distance = Math.abs(mid - centerY);
        const id = CONNECTION_GUIDE_STEPS[index]?.id;
        if (!id) return;

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });

      if (bestId !== activeStepRef.current) {
        setActiveStep(bestId);
      }
    };

    // Initial sync on mount
    handleScroll();

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [setActiveStep]);

  return (
    <div
      ref={containerRef}
      className="max-h-[520px] overflow-y-auto pr-2 space-y-4 scroll-smooth"
    >
      {CONNECTION_GUIDE_STEPS.map((step, index) => {
        const isActive = step.id === activeStep;

        return (
          <div
            key={step.id}
            data-index={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className="py-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={
                  isActive
                    ? "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold bg-lyn-secondary text-white"
                    : "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold border border-lyn-border text-lyn-muted"
                }
              >
                {step.id}
              </div>
              <span
                className={
                  isActive
                    ? "text-sm font-medium text-white"
                    : "text-sm font-medium text-lyn-muted"
                }
              >
                {t("connectionGuide.stepLabel")} {step.id}
              </span>
            </div>

            <Typography
              variant="headline"
              className={
                isActive
                  ? "text-2xl md:text-3xl font-semibold text-lyn-secondary mb-2"
                  : "text-2xl md:text-3xl font-semibold text-lyn-muted/50 mb-2"
              }
            >
              {t(`connectionGuide.steps.${step.key}.title`)}
            </Typography>
            <Typography
              variant="body"
              className={
                isActive
                  ? "text-base text-lyn-muted max-w-xl leading-relaxed font-normal"
                  : "text-base text-lyn-muted/50 max-w-xl leading-relaxed font-normal"
              }
            >
              {t(`connectionGuide.steps.${step.key}.description`)}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default ConnectionGuideStepList;
