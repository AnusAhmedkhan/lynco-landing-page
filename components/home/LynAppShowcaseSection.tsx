"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynAppShowcaseTabs } from "@/components/home/LynAppShowcaseTabs";
import { LynStepFeatureRow } from "@/components/home/LynStepFeatureRow";
import {
  type LynAppShowcaseTabId,
  useLynAppShowcaseTabs,
} from "@/hooks/use-lyn-landing";
import badgeAppStore from "@/public/assets/appStore.png";
import ChatBg from "@/public/assets/chatBg.png";
import ChatBg2 from "@/public/assets/chatBg2.png";
import checkIcon from "@/public/assets/check.png";
import badgeGooglePlay from "@/public/assets/googlePlay.png";

const LynAppShowcaseSection = () => {
  const { t } = useTranslation();
  const tabs = useLynAppShowcaseTabs();
  const [activeTabId, setActiveTabId] =
    useState<LynAppShowcaseTabId>("calendar");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  return (
    <section id="app" className="bg-lyn-bg scroll-mt-24 py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              {t("lynLanding.showcase.title")}
            </h2>
            <p className="lyn-gradient-text mt-1 text-3xl font-extrabold md:text-[2.6rem]">
              {t("lynLanding.showcase.titleAccent")}
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            {t("lynLanding.shared.aside")}{" "}
            <span className="font-bold">
              {t("lynLanding.shared.asideBold")}
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="border-lyn-border relative min-h-[480px] overflow-hidden rounded-[32px] border sm:min-h-[560px] lg:min-h-[739px]">
            <div className="bg-lyn-surface absolute inset-0 -z-10" />
            <Image
              src={ChatBg2.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <Image
              src="/assets/chatBg.png"
              alt=""
              fill
              className="object-cover object-bottom opacity-70 mix-blend-screen"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative flex justify-center px-4 pb-[4.75rem] pt-10 sm:pb-[5.5rem] sm:pt-14">
              <div className="relative aspect-[283/581] w-full max-w-[260px] sm:max-w-[283px]">
                <Image
                  src="/assets/calnderPhone.png"
                  alt={t("lynLanding.showcase.phoneAlt")}
                  fill
                  className="object-cover"
                  sizes="283px"
                  priority
                />
                {/* <Image
                  src="/assets/phoneFrame.png"
                  alt=""
                  fill
                  className="pointer-events-none object-contain"
                  sizes="283px"
                /> */}
              </div>
            </div>
            <LynAppShowcaseTabs
              activeId={activeTabId}
              onChange={setActiveTabId}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                boxShadow: "inset 0 0 80px 15px rgba(44,45,185,0.31)",
              }}
            />
          </div>

          <div className="border-lyn-border relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[32px] border p-6 md:min-h-[560px] md:p-8 lg:min-h-[739px]">
            <div className="bg-lyn-surface absolute inset-0 -z-10" />
            <Image
              src={ChatBg.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative z-10"
              >
                <p className="text-lyn-secondary text-lg font-extrabold uppercase tracking-wide">
                  {activeTab.eyebrow}
                </p>
                <h3 className="text-white mt-2 text-2xl font-bold md:text-3xl">
                  {activeTab.title}
                </h3>
                <p className="text-lyn-muted mt-2 max-w-lg text-base md:text-lg">
                  {activeTab.description}
                </p>
                <ul className="mt-8 overflow-visible">
                  {activeTab.features.map((item, i) => (
                    <li key={item.title}>
                      <LynStepFeatureRow
                        isLast={i === activeTab.features.length - 1}
                        badge={
                          <Image
                            src={checkIcon.src}
                            alt=""
                            width={28}
                            height={28}
                          />
                        }
                      >
                        <p className="text-white text-lg font-semibold md:text-xl">
                          {item.title}
                        </p>
                        <p className="text-lyn-muted mt-1 text-base">
                          {item.body}
                        </p>
                      </LynStepFeatureRow>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
            <div className="relative z-10 mt-10 flex flex-wrap gap-2">
              <Image
                src={badgeAppStore.src}
                alt={t("lynLanding.showcase.appStoreAlt")}
                width={140}
                height={42}
                className="h-9 w-auto"
              />
              <Image
                src={badgeGooglePlay.src}
                alt={t("lynLanding.showcase.googlePlayAlt")}
                width={140}
                height={42}
                className="h-9 w-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynAppShowcaseSection;
