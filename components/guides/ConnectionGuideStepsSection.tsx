"use client";

import React, { useState } from "react";

import ConnectionGuidePhonePanel from "./ConnectionGuidePhonePanel";
import ConnectionGuideStepList from "./ConnectionGuideStepList";
import ConnectionGuideVerticalTimeline from "./ConnectionGuideVerticalTimeline";

const ConnectionGuideStepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="w-full bg-lyn-bg py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.1fr)_minmax(0,1.2fr)] gap-10">
          {/* Left: phone + progress */}
          <ConnectionGuidePhonePanel activeStep={activeStep} />

          {/* Center: vertical timeline */}
          <ConnectionGuideVerticalTimeline activeStep={activeStep} />

          {/* Right: step list */}
          <ConnectionGuideStepList
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>

        {/* Mobile / tablet layout: stacked */}
        <div className="flex flex-col gap-10 lg:hidden">
          <ConnectionGuidePhonePanel activeStep={activeStep} />
          <ConnectionGuideStepList
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectionGuideStepsSection;
