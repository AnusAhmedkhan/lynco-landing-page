"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { APP_ROUTES, ROUTES } from "@/constants/routes";
import type { PricingPlan } from "@/types/subscription";
import {
  getPlanColor,
  getPlanDescriptionKey,
  getPlanNameKey,
} from "@/utils/pricing";

import PricingFeature from "./PricingFeature";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const allFeatures = [
    plan.features.docsPerMonth === -1
      ? t("pricing.features.unlimited")
      : `${plan.features.docsPerMonth} ${t("pricing.features.docsPerMonth")}`,
    plan.features.emailSupport ? t("pricing.features.emailSupport") : null,
    plan.features.dashboardStorage
      ? t("pricing.features.dashboardStorage")
      : null,
    plan.features.multiPartyESign
      ? t("pricing.features.multiPartyESign")
      : null,
    plan.features.upTo3Users ? t("pricing.features.upTo3Users") : null,
    plan.features.spanishUI ? t("pricing.features.spanishUI") : null,
    plan.features.clauseCustomization
      ? t("pricing.features.clauseCustomization")
      : null,
    plan.features.sharedLibrary ? t("pricing.features.sharedLibrary") : null,
    plan.features.summaries ? t("pricing.features.summaries") : null,
  ].filter(Boolean) as string[];

  const featuresArray = allFeatures.slice(0, 5);
  const hasMoreFeatures = allFeatures.length > 5;

  const isPopular = plan.name.toLowerCase() === "pro";

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div
        className={`flex flex-col gap-2 rounded-t-[12px] border border-neutral-300 p-5 sm:p-6 ${
          isPopular ? "pricing-card-gradient" : "bg-white"
        }`}
      >
        <Typography
          variant="subheading"
          className={`${getPlanColor(plan.name.toLowerCase())} mb-1 text-base font-bold sm:mb-2 sm:text-lg`}
        >
          {t(getPlanNameKey(plan.name))}
        </Typography>

        <div className="mb-3 flex items-baseline sm:mb-4">
          <Typography
            className="text-primary text-4xl font-bold sm:text-5xl"
            variant="xl"
          >
            ${plan.price}
          </Typography>
          <Typography className="text-lightGray ml-2 text-xs sm:text-sm">
            {t("pricing.billingPeriod")}
          </Typography>
        </div>

        <Typography
          className="text-secondary-text mb-5 line-clamp-1 text-sm leading-relaxed sm:mb-6"
          variant="p"
        >
          {t(getPlanDescriptionKey(plan.name))}
        </Typography>

        <div className="mb-5 sm:mb-6">
          <Button
            variant="solidBlue"
            onClick={() => {
              router.push(APP_ROUTES.SIGNUP);
            }}
            size="lg"
            className="w-full rounded-3xl px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
          >
            {t("pricing.buttonText")}
          </Button>
        </div>
      </div>

      <div className="flex-1 space-y-3 p-5 sm:p-6">
        <Typography className="text-primary my-2 text-xs font-semibold sm:my-3 sm:text-sm">
          {t("pricing.featuresLabel")}
        </Typography>
        <div className="mt-3 space-y-5">
          {featuresArray.map((feature: string, index: number) => (
            <PricingFeature key={index} feature={feature} />
          ))}
          {hasMoreFeatures && (
            <div className="flex items-center justify-center pt-2">
              <a
                href={ROUTES.PRICING}
                className="text-primary underline-none text-md font-medium transition-colors duration-200"
              >
                +{allFeatures.length - 5} {t("pricing.moreFeatures")}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
