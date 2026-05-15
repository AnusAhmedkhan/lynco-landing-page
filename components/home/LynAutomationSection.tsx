"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynStepFeatureRow } from "@/components/home/LynStepFeatureRow";
import { useLynAutomationSteps } from "@/hooks/use-lyn-landing";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";
import ChatBg from "@/public/assets/chatBg.png";
import ChatBg2 from "@/public/assets/chatBg2.png";
import ChatPhone from "@/public/assets/chatPhone.png";

const LynAutomationSection = () => {
  const { t } = useTranslation();
  const steps = useLynAutomationSteps();

  return (
    <section id="automation" className="bg-lyn-bg scroll-mt-24 py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white max-w-xl text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              {t("lynLanding.automation.title")}
            </h2>
            <p className="lyn-gradient-text mt-2 text-3xl font-extrabold md:text-[2.6rem]">
              {t("lynLanding.automation.titleAccent")}
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            {t("lynLanding.shared.aside")}{" "}
            <span className="font-bold">{t("lynLanding.shared.asideBold")}</span>
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border-lyn-border relative min-h-[520px] overflow-hidden rounded-[32px] border p-6 md:p-8">
            <div className="bg-lyn-surface absolute inset-0 -z-10 rounded-[32px]" />
            <Image
              src={ChatBg.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative z-10 flex flex-col overflow-visible">
              {steps.map((step, i) => (
                <LynStepFeatureRow
                  key={step.stepNumber ?? i}
                  isLast={i === steps.length - 1}
                  badge={
                    step.stepNumber ? (
                      <span className="text-white text-lg">
                        {step.stepNumber}
                      </span>
                    ) : (
                      <Image
                        src={lynLandingAssets.checkIcon}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7"
                      />
                    )
                  }
                >
                  <h3 className="text-white text-lg font-semibold md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-lyn-muted mt-1 text-base md:text-lg">
                    {step.body}
                  </p>
                </LynStepFeatureRow>
              ))}
            </div>
          </div>

          <div className="border-lyn-border relative min-h-[520px] overflow-hidden rounded-[32px] border">
            <div className="bg-lyn-surface absolute inset-0 -z-10" />
            <Image
              src={ChatBg2.src}
              alt=""
              fill
              className="object-cover mix-blend-lighten"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <Image
              src={lynLandingAssets.chatBg3}
              alt=""
              fill
              className="object-cover object-bottom mix-blend-screen opacity-80"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative mx-auto flex max-w-[280px] justify-center py-10 md:max-w-[320px] md:py-16">
              <div className="relative aspect-[315/646] w-full">
                <Image
                  src={ChatPhone.src}
                  alt={t("lynLanding.automation.whatsappAlt")}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                boxShadow: "inset 0 0 80px 15px rgba(44,45,185,0.31)",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynAutomationSection;
