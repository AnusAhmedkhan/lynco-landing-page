"use client";

import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/constants/routes";
import type { PricingPlan } from "@/types/subscription";
import {
  getPlanColor,
  getPlanDescriptionKey,
  getPlanNameKey,
} from "@/utils/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isButtonShow?: boolean;
  planIndex?: number;
  totalPlans?: number;
}

const PricingCard = ({
  plan,
  isButtonShow = false,
  planIndex = 0,
  totalPlans = 1,
}: PricingCardProps) => {
  const { t } = useTranslation();

  const getButtonVariant = () => {
    if (planIndex === 0 || planIndex === totalPlans - 1) return "outlineGray";
    return "solidBlue";
  };

  return (
    <div className="flex flex-col items-center">
      <Typography
        className={`${getPlanColor(plan.name.toLowerCase())} mb-2 text-xl font-bold md:text-2xl`}
        variant="subheading"
      >
        {t(getPlanNameKey(plan.name))}
      </Typography>

      <div className="my-3 flex items-center md:my-4">
        <Typography
          className="text-primary text-4xl font-medium md:text-5xl"
          variant="xl"
        >
          ${plan.price}
        </Typography>
        <Typography className="text-lightGray ml-2 text-xs md:text-sm">
          /{t("pricing.billingPeriod")}
        </Typography>
      </div>

      <Typography
        className="text-secondary-text text-center text-sm leading-relaxed"
        variant="p"
      >
        {t(getPlanDescriptionKey(plan.name))}
      </Typography>

      {isButtonShow && (
        <Button
          variant={getButtonVariant()}
          className="mt-4 w-full"
          onClick={() => {
            window.location.href = APP_ROUTES.SIGNUP;
          }}
        >
          {t("pricing.buttonText")}
        </Button>
      )}
    </div>
  );
};

export default PricingCard;
