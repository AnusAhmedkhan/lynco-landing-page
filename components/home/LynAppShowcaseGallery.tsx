"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynGlassCard } from "@/components/home/LynGlassCard";
import { APP_ROUTES } from "@/constants/routes";
import { useLynGalleryCards } from "@/hooks/use-lyn-landing";

function FeatureDot() {
  return (
    <span
      aria-hidden
      className="lyn-pricing-feature-dot mt-2 h-3 w-3 shrink-0 rounded-full"
    />
  );
}

export function LynAppShowcaseGallery() {
  const { t } = useTranslation();
  const cards = useLynGalleryCards();

  return (
    <section className="bg-lyn-bg py-16 md:py-24">
      <Container size="xl">
        <div className=" relative rounded-[28px] sm:rounded-[32px] lg:rounded-[40px]">
          <div
            className="lyn-section-plan-bg absolute inset-0 rounded-[inherit]"
            aria-hidden
          />

          <div className="relative z-10 flex flex-col gap-8 p-6 sm:gap-10 sm:p-8 lg:gap-12 lg:p-10 xl:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <Image
                  src="/assets/logo.svg"
                  alt="Lynco"
                  width={122}
                  height={25}
                  className="h-6 w-auto sm:h-7"
                />
                <h2 className="text-white mt-6 text-2xl font-bold leading-tight sm:text-3xl md:text-[2rem] md:leading-snug lg:mt-8">
                  {t("lynLanding.gallery.heading")}
                </h2>
                <p className="text-lyn-muted mt-4 text-base sm:text-lg">
                  {t("lynLanding.gallery.subline1")}
                </p>
                <p className="text-lyn-muted mt-1 text-base sm:text-lg">
                  {t("lynLanding.gallery.subline2")}
                </p>
              </div>

              <Link
                href={APP_ROUTES.SIGNUP}
                className="lyn-btn-subscribe w-full shrink-0 rounded-xl px-6 py-3.5 text-center text-base font-semibold text-white sm:w-auto sm:px-8 lg:self-center"
              >
                {t("lynLanding.gallery.cta")}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {cards.map((card) => (
                <LynGlassCard
                  key={card.title}
                  className="flex h-full flex-col p-5 sm:p-6"
                >
                  <h3 className="text-white text-lg font-bold sm:text-xl">
                    {card.title}
                  </h3>
                  <ul className="text-white mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                    {card.features.map((feature) => (
                      <li key={feature.title} className="flex gap-3">
                        <FeatureDot />
                        <span className="text-sm leading-relaxed sm:text-base">
                          <strong className="font-bold">{feature.title}</strong>
                          {": "}
                          {feature.body}
                        </span>
                      </li>
                    ))}
                  </ul>
                </LynGlassCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
