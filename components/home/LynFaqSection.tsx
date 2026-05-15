"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { useLynFaqItems } from "@/hooks/use-lyn-landing";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";

const LynFaqSection = () => {
  const { t } = useTranslation();
  const faqItems = useLynFaqItems();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-lyn-bg py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white flex flex-wrap items-center gap-2 text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              <span>{t("lynLanding.faq.title1")}</span>
              <span className="lyn-gradient-text font-extrabold">
                {t("lynLanding.faq.titleAccent")}
              </span>
              <span>{t("lynLanding.faq.title2")}</span>
            </h2>
            <p className="text-white mt-2 text-3xl font-medium md:text-[2.6rem]">
              {t("lynLanding.faq.title3")}
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            {t("lynLanding.faq.aside")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-white text-xl font-medium tracking-tight md:text-3xl">
                    {item.q}
                  </span>
                  <span className="relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center">
                    <Image
                      src={
                        isOpen
                          ? lynLandingAssets.faqOpenBg
                          : lynLandingAssets.faqClosedBg
                      }
                      alt=""
                      width={48}
                      height={48}
                      className="absolute"
                    />
                    {isOpen ? (
                      <ChevronDown className="text-white relative z-10 h-6 w-6 rotate-180" />
                    ) : (
                      <Image
                        src={lynLandingAssets.faqClosedIcon}
                        alt=""
                        width={24}
                        height={24}
                        className="relative z-10"
                      />
                    )}
                  </span>
                </button>
                {isOpen ? (
                  <p className="text-lyn-muted mt-4 max-w-3xl text-lg leading-relaxed">
                    {item.a}
                  </p>
                ) : null}
                <div className="mt-6">
                  <Image
                    src={lynLandingAssets.faqDivider}
                    alt=""
                    width={800}
                    height={2}
                    className="h-px w-full object-cover opacity-60"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default LynFaqSection;
