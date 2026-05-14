"use client";

import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";

const PricingPageHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mb-12 flex flex-col text-center sm:mb-14 md:mb-16">
      {/* Subtitle */}
      <Typography
        className="text-bluish-cyan-dark mb-3 font-semibold tracking-wider sm:mb-4"
        variant="subheading"
      >
        {t("pricingPage.subtitle")}
      </Typography>

      {/* Main Title */}
      <Typography
        className="text-primary mb-4 leading-tight font-bold sm:mb-5 md:mb-6"
        variant="title"
      >
        {t("pricingPage.title")}
      </Typography>

      {/* Description */}
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Typography
          className="text-secondary-text mb-6 leading-relaxed sm:mb-8"
          variant="p"
        >
          {t("pricingPage.description")}
        </Typography>
      </div>
    </div>
  );
};

export default PricingPageHeader;
