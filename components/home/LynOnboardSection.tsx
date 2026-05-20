"use client";

import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynStepFeatureRow } from "@/components/home/LynStepFeatureRow";
import { useLynOnboardSteps } from "@/hooks/use-lyn-landing";

const LynOnboardSection = () => {
  const { t } = useTranslation();
  const steps = useLynOnboardSteps();

  return (
    <section id="onboard" className="bg-lyn-bg scroll-mt-24 py-16 md:py-24">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] lg:rounded-[40px]">
          <div
            className="lyn-section-plan-bg absolute inset-0 rounded-[inherit]"
            aria-hidden
          />

          <div className="relative z-10 grid grid-cols-1 gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:p-10 xl:p-12">
            <div>
              <h2 className="text-white text-2xl font-bold leading-tight sm:text-3xl md:text-[2rem] md:leading-snug">
                {t("lynLanding.onboard.title")}
              </h2>
              <p className="text-lyn-muted mt-4 text-base sm:text-lg">
                {t("lynLanding.onboard.subline1")}
              </p>
              <p className="text-lyn-muted mt-1 text-base sm:text-lg">
                {t("lynLanding.onboard.subline2")}
              </p>

              <ul className="mt-8 overflow-visible sm:mt-10">
                {steps.map((step, i) => (
                  <li key={step.stepNumber ?? i}>
                    <LynStepFeatureRow
                      isLast={i === steps.length - 1}
                      badge={
                        <span className="text-white text-lg font-semibold">
                          {step.stepNumber}
                        </span>
                      }
                    >
                      <h3 className="text-white text-lg font-semibold md:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-lyn-muted mt-1 text-base md:text-lg">
                        {step.body}
                      </p>
                    </LynStepFeatureRow>
                  </li>
                ))}
              </ul>
            </div>

            <div
              aria-label={t("lynLanding.onboard.videoPlaceholderAria")}
              className="min-h-[200px] sm:min-h-[280px] lg:min-h-[480px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynOnboardSection;
