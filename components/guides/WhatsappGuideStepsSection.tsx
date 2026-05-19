"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import GuideAllSetSection from "@/components/guides/GuideAllSetSection";
import GuideStepCard from "@/components/guides/GuideStepCard";
import GuideStepsRail from "@/components/guides/GuideStepsRail";
import Typography from "@/components/ui/legacy-typography";
import { ROUTES } from "@/constants/routes";

const WhatsappGuideStepsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 1,
      label: t("whatsappGuide.steps.step1.title"),
      description: t("whatsappGuide.steps.step1.description"),
      imageSrc: "/guides/WhatsappStep1.png",
    },
    {
      id: 2,
      label: t("whatsappGuide.steps.step2.title"),
      description: t("whatsappGuide.steps.step2.description"),
      imageSrc: "/guides/WhatsappStep2.png",
    },
    {
      id: 3,
      label: t("whatsappGuide.steps.step3.title"),
      description: t("whatsappGuide.steps.step3.description"),
      imageSrc: "/guides/WhatsappStep3.png",
    },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const stepId = index + 1;
              setActiveStep(stepId);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const railSteps = steps.map((step) => ({
    id: step.id,
    label: `Step ${step.id}`,
    description: "",
  }));

  return (
    <div className="w-full bg-lyn-bg py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Important Section */}
        <div className="mb-12 md:mb-16 text-center flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Typography
              variant="display"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              {t("whatsappGuide.whyImportant.title")}{" "}
            </Typography>
            <Typography
              variant="display"
              className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-lyn-secondary"
            >
              {t("whatsappGuide.whyImportant.titleHighlight")}
            </Typography>
          </div>
          <Typography
            variant="body"
            className="text-lyn-muted text-center text-base md:text-lg max-w-3xl mx-auto md:mx-0 leading-relaxed"
          >
            {t("whatsappGuide.whyImportant.descriptionPrefix")}
            <span className="text-lyn-muted font-semibold">
              {t("whatsappGuide.whyImportant.metaPhrase")}
            </span>
            {t("whatsappGuide.whyImportant.descriptionSuffix")}
          </Typography>
        </div>

        {/* Two Column Layout */}
        <div className="grid w-full md:w-[80%] mx-auto md:grid-cols-[20%_80%] gap-8 md:gap-6 lg:gap-8">
          {/* Left Rail - Steps Navigation */}
          <div>
            <GuideStepsRail steps={railSteps} activeStep={activeStep} />
          </div>

          {/* Right Column - Step Cards */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
              >
                <GuideStepCard
                  stepNumber={step.id}
                  title={step.label}
                  description={step.description}
                  imageSrc={step.imageSrc}
                  stepId={`whatsapp-step-${step.id}`}
                  isLast={index === steps.length - 1}
                />
              </div>
            ))}

            <GuideAllSetSection
              prefix="whatsappGuide"
              nextHref={ROUTES.CONNECTION_GUIDE}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappGuideStepsSection;
