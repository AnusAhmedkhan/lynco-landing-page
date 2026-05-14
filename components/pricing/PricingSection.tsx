"use client";
import ErrorState from "@/components/ErrorState";
import LoadingSpinner from "@/components/LoadingSpinner";
import { usePricingPlans } from "@/hooks/usePricingPlans";
import { strings } from "@/locales";

import Container from "../Container";
import FeaturesComparisonTable from "./FeaturesComparisonTable";
import PricingCards from "./PricingCards";
import PricingPageHeader from "./PricingPageHeader";

interface PricingSectionProps {
  isButtonShow?: boolean;
}

const PricingSection = ({ isButtonShow = false }: PricingSectionProps) => {
  const { data: pricingPlans, isLoading, error } = usePricingPlans();

  if (isLoading) {
    return (
      <Container size="lg" className="p-4">
        <div className="flex justify-center py-8">
          <LoadingSpinner />
        </div>
      </Container>
    );
  }

  if (error || !pricingPlans) {
    return (
      <Container size="lg" className="p-4">
        <ErrorState
          message={error?.message || strings.common.failedToLoadPricingPlans}
        />
      </Container>
    );
  }

  return (
    <Container size="lg">
      <PricingPageHeader />
      <div className="w-full overflow-x-auto rounded-2xl bg-white p-8 shadow-lg">
        <PricingCards pricingPlans={pricingPlans} isButtonShow={isButtonShow} />

        <div className="my-8 border-b border-gray-200"></div>

        <FeaturesComparisonTable pricingPlans={pricingPlans} />
      </div>
    </Container>
  );
};

export default PricingSection;
