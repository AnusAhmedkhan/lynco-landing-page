"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { useLynFaqItems } from "@/hooks/use-lyn-landing";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";
import minusCircle from "@/public/assets/minusCircle.png";
import plusCircle from "@/public/assets/plusCircle.png";

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

        <div className=" mt-12  space-y-6">
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
                  <Image
                    src={isOpen ? minusCircle.src : plusCircle.src}
                    alt=""
                    width={48}
                    height={48}
                    className="mt-1 h-12 w-12 shrink-0"
                  />
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
