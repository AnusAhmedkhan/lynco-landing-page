"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynStepFeatureRow } from "@/components/home/LynStepFeatureRow";
import { LynWhatsappChatDemo } from "@/components/home/LynWhatsappChatDemo";
import { useLynAutomationSteps } from "@/hooks/use-lyn-landing";
import ChatBg from "@/public/assets/chatBg.png";
import ChatBg2 from "@/public/assets/chatBg2.png";
import checkIcon from "@/public/assets/check.png";

const LynAutomationSection = () => {
  const { t } = useTranslation();
  const steps = useLynAutomationSteps();
  const [completedCount, setCompletedCount] = useState(0);

  const handleStepComplete = useCallback((step: number) => {
    setCompletedCount((prev) => Math.max(prev, step));
  }, []);

  const handleConversationReset = useCallback(() => {
    setCompletedCount(0);
  }, []);

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
            <span className="font-bold">
              {t("lynLanding.shared.asideBold")}
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="border-lyn-border relative overflow-hidden rounded-[32px] border p-6 md:p-8">
            <div className="bg-lyn-surface absolute inset-0 -z-10 rounded-[32px]" />
            <Image
              src={ChatBg.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative z-10 flex flex-col overflow-visible">
              {steps.map((step, i) => {
                const isComplete = i + 1 <= completedCount;

                return (
                  <LynStepFeatureRow
                    key={step.stepNumber ?? i}
                    isLast={i === steps.length - 1}
                    badge={
                      isComplete ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 22,
                          }}
                        >
                          <Image
                            src={checkIcon.src}
                            alt=""
                            width={28}
                            height={28}
                            className="h-7 w-7"
                          />
                        </motion.div>
                      ) : (
                        <span className="text-white text-lg">
                          {step.stepNumber}
                        </span>
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
                );
              })}
            </div>
          </div>

          <div className="border-lyn-border relative flex min-h-[600px] flex-col overflow-hidden rounded-[32px] border">
            <div className="bg-lyn-surface absolute inset-0 -z-10" />
            <Image
              src={ChatBg2.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative flex min-h-[460px] flex-1 sm:min-h-[400px]">
              <LynWhatsappChatDemo
                alt={t("lynLanding.automation.whatsappAlt")}
                onStepComplete={handleStepComplete}
                onConversationReset={handleConversationReset}
              />
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
