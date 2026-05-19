"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import { CONNECTION_GUIDE_STEPS } from "@/constants/connection-guide-steps";

interface ConnectionGuidePhonePanelProps {
  activeStep: number;
}

const ConnectionGuidePhonePanel: React.FC<ConnectionGuidePhonePanelProps> = ({
  activeStep,
}) => {
  const { t } = useTranslation();
  const currentStep =
    CONNECTION_GUIDE_STEPS.find((step) => step.id === activeStep) ||
    CONNECTION_GUIDE_STEPS[0];

  return (
    <div className="flex flex-col items-center">
      {/* Phone frame with current step image */}
      <div className="rounded-[32px] shadow-2xl overflow-hidden bg-black max-w-[260px] w-full">
        <img
          src={currentStep.image}
          alt={`Step ${currentStep.id}`}
          className="w-full h-auto"
        />
      </div>

      {/* Progress label */}
      <div className="mt-6 text-[10px] tracking-[0.25em] text-lyn-muted uppercase">
        {t("connectionGuide.progress")}
      </div>

      {/* Progress dots */}
      <div className="mt-3 flex items-center gap-1">
        {CONNECTION_GUIDE_STEPS.map((step) => (
          <span
            key={step.id}
            className={
              step.id === activeStep
                ? "h-1.5 w-3 rounded-full bg-[#6E90F6]"
                : step.id < activeStep
                  ? "h-1.5 w-3 rounded-full bg-[#6E90F6]"
                  : "h-1.5 w-3 rounded-full bg-[#D0D5DD]"
            }
          />
        ))}
      </div>

      {/* Step counter */}
      <div className="mt-2 text-sm font-bold text-lyn-muted">
        <span className="text-[#000000]">{activeStep}</span> /{" "}
        {CONNECTION_GUIDE_STEPS.length}
      </div>
    </div>
  );
};

export default ConnectionGuidePhonePanel;
