"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import GuideAllSetSection from "@/components/guides/GuideAllSetSection";
import GuideStepCard from "@/components/guides/GuideStepCard";
import GuideStepsRail from "@/components/guides/GuideStepsRail";
import { ROUTES } from "@/constants/routes";

const CreditGuideStepsSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 1,
      label: t("creditGuide.steps.step1.title"),
      description: t("creditGuide.steps.step1.description"),
      imageSrc: "/guides/CreditStep1.png",
      url: t("creditGuide.steps.step1.url"),
    },
    {
      id: 2,
      label: t("creditGuide.steps.step2.title"),
      description: t("creditGuide.steps.step2.description"),
      imageSrc: "/guides/CreditStep2.png",
      note: t("creditGuide.steps.step2.note"),
    },
    {
      id: 3,
      label: t("creditGuide.steps.step3.title"),
      description: t("creditGuide.steps.step3.description"),
      imageSrc: "/guides/CreditStep3.png",
    },
    {
      id: 4,
      label: t("creditGuide.steps.step4.title"),
      description: t("creditGuide.steps.step4.description"),
      imageSrc: "/guides/CreditStep4.png",
    },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveStep(index + 1);
          });
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const railSteps = steps.map((s) => ({ id: s.id }));

  return (
    <div className="bg-lyn-bg w-full py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center text-center md:mb-16">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {t("creditGuide.whyImportant.title")}{" "}
            </h2>
            <h2 className="lyn-gradient-text text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("creditGuide.whyImportant.titleHighlight")}
            </h2>
          </div>
          <p className="text-lyn-muted mx-auto max-w-3xl text-base leading-relaxed md:text-lg">
            {t("creditGuide.whyImportant.description")}
          </p>
        </div>

        <div className="mx-auto grid w-full gap-8 md:w-[80%] md:grid-cols-[20%_80%] md:gap-6 lg:gap-8">
          <GuideStepsRail steps={railSteps} activeStep={activeStep} />
          <div>
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
                  note={step.note}
                  url={step.url}
                  stepId={`step-${step.id}`}
                  isLast={index === steps.length - 1}
                />
              </div>
            ))}
            <GuideAllSetSection
              prefix="creditGuide"
              nextHref={ROUTES.WHATSAPP_GUIDE}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditGuideStepsSection;
