"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynPlanBadge } from "@/components/home/LynPlanBadge";
import { APP_ROUTES } from "@/constants/routes";
import { useLynPricingFeatures } from "@/hooks/use-lyn-landing";

function formatFeature(line: string) {
  const parts = line.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="text-white space-y-3 text-base sm:space-y-3.5 sm:text-lg">
      {items.map((line, idx) => (
        <li key={idx} className="flex gap-3">
          <PlanDot />
          <span className="leading-relaxed">{formatFeature(line)}</span>
        </li>
      ))}
    </ul>
  );
}

const LynPricingSection = () => {
  const { t } = useTranslation();
  const leftFeatures = useLynPricingFeatures("left");
  const rightFeatures = useLynPricingFeatures("right");

  return (
    <section id="plans" className="bg-lyn-bg scroll-mt-24 py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              {t("lynLanding.pricing.title")}
            </h2>
            <p className="lyn-gradient-text mt-1 text-3xl font-extrabold md:text-[2.6rem]">
              {t("lynLanding.pricing.titleAccent")}
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            {t("lynLanding.pricing.aside")}
          </p>
        </div>

        <div className="border-lyn-card-border relative mt-12 overflow-hidden rounded-[28px] border sm:rounded-[32px] lg:rounded-[40px]">
          <div className="lyn-section-plan-bg absolute inset-0" aria-hidden />
          <div className="relative z-10 grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-10 lg:gap-y-8 lg:p-10 xl:gap-x-14 xl:p-12">
            <div className="order-1 flex flex-col lg:col-start-1 lg:row-start-1">
              <LynPlanBadge variant="multipro" className="w-fit">
                {t("lynLanding.pricing.autonomousPlan")}
              </LynPlanBadge>
              <div className="text-white mt-5 md:mt-6">
                <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  R$497{" "}
                </span>
                <span className="text-lyn-muted text-lg font-light sm:text-xl">
                  {t("lynLanding.pricing.perMonth")}
                </span>
              </div>
              <p className="text-lyn-muted mt-1 text-base font-light sm:text-xl">
                {t("lynLanding.pricing.autonomousFor")}
              </p>
            </div>

            <div className="order-2 flex justify-end lg:col-start-2 lg:row-start-1 lg:pt-[4.5rem]">
              <Link
                href={APP_ROUTES.SIGNUP}
                className="lyn-btn-subscribe inline-flex h-12 w-fit min-w-[168px] items-center justify-center rounded-xl px-8 text-center text-base font-medium text-white sm:h-[52px] sm:min-w-[180px] sm:px-10 sm:text-lg"
              >
                {t("lynLanding.pricing.subscribe")}
              </Link>
            </div>

            <div className="order-3 lg:col-start-1 lg:row-start-2">
              <FeatureList items={leftFeatures} />
            </div>

            <div className="order-4 lg:col-start-2 lg:row-start-2">
              <FeatureList items={rightFeatures} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

function PlanDot() {
  return (
    <span
      aria-hidden
      className="lyn-pricing-feature-dot mt-2 h-3 w-3 shrink-0 rounded-full"
    />
  );
}

export default LynPricingSection;
