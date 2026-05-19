"use client";

import React from "react";

import { CONNECTION_GUIDE_STEPS } from "@/constants/connection-guide-steps";

interface ConnectionGuideVerticalTimelineProps {
  activeStep: number;
}

const ConnectionGuideVerticalTimeline: React.FC<
  ConnectionGuideVerticalTimelineProps
> = ({ activeStep }) => {
  const total = CONNECTION_GUIDE_STEPS.length;
  const isFirst = activeStep === 1;
  const isLast = activeStep === total;

  const style: React.CSSProperties = {};

  if (isFirst) {
    // Align dot with the first step number (top of the list)
    style.top = "0";
    style.transform = "translateY(0)";
  } else if (isLast) {
    // Align dot with the last step number (bottom of the list)
    style.bottom = "0";
    style.top = "auto";
    style.transform = "translateY(0)";
  } else {
    // All middle steps: keep the dot centered vertically
    style.top = "50%";
    style.transform = "translateY(-50%)";
  }

  return (
    <div className="relative hidden lg:flex justify-center">
      <div className="w-px bg-lyn-border h-full" />
      <div
        className="absolute w-3 h-3 rounded-full bg-lyn-secondary  shadow-[0_0_15px_#6E90F6]"
        style={style}
      />
    </div>
  );
};

export default ConnectionGuideVerticalTimeline;
