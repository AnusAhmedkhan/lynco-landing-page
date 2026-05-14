"use client";

import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import ErrorState from "@/components/ErrorState";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Typography } from "@/components/Typography";
import { usePricingPlans } from "@/hooks/usePricingPlans";

import PricingCard from "./PricingCard";

const PricingSection = () => {
  const { t } = useTranslation();
  const { data: pricingPlans, isLoading, error } = usePricingPlans();

  if (isLoading) {
    return (
      <section className="bg-grayWhite py-14 sm:py-20">
        <Container size="lg">
          <div className="flex justify-center py-8">
            <LoadingSpinner />
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-grayWhite py-14 sm:py-20">
        <Container size="lg">
          <ErrorState message="Failed to load pricing plans" />
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-grayWhite py-14 sm:py-20">
      <Container size="lg">
        {/* Section Header */}
        <div className="mb-10 flex flex-col text-center sm:mb-16">
          <Typography
            className="text-bluish-cyan-dark mb-4 font-semibold tracking-wider"
            variant="subheading"
          >
            {t("pricing.subtitle")}
          </Typography>

          <Typography
            className="text-primary mb-4 font-bold sm:mb-6"
            variant="title"
          >
            {t("pricing.title")}
          </Typography>

          <Typography
            className="text-secondary-text mx-auto max-w-4xl px-4 text-base leading-relaxed sm:text-lg"
            variant="p"
          >
            {t("pricing.description")}
          </Typography>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {pricingPlans?.map((plan) => (
            <PricingCard key={plan._id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
