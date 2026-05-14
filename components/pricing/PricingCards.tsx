"use client";

import type { PricingPlan } from "@/types/subscription";

import PricingCard from "./PricingCard";

interface PricingCardsProps {
  pricingPlans: PricingPlan[];
  isButtonShow?: boolean;
}

const PricingCards = ({
  pricingPlans,
  isButtonShow = false,
}: PricingCardsProps) => {
  return (
    <div className="pt-6">
      {/* Small screens: horizontal scroll list */}
      <div className="-mx-4 block overflow-x-auto px-4 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 pb-2">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan._id}
              className="min-w-[260px] snap-start rounded-xl border border-gray-100 p-4 shadow-sm"
            >
              <PricingCard
                plan={plan}
                isButtonShow={isButtonShow}
                planIndex={index}
                totalPlans={pricingPlans.length}
              />
            </div>
          ))}
        </div>
      </div>

      {/* md+ screens: 4-column grid with empty first column alignment */}
      <div className="hidden grid-cols-4 gap-4 md:grid">
        <div className="px-6"></div>
        {pricingPlans.map((plan, index) => (
          <div key={plan._id} className="px-4">
            <PricingCard
              plan={plan}
              isButtonShow={isButtonShow}
              planIndex={index}
              totalPlans={pricingPlans.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
