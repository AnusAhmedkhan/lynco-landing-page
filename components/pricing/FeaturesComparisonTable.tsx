"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import type { PricingPlan } from "@/types/subscription";

interface FeaturesComparisonTableProps {
  pricingPlans: PricingPlan[];
}

const FeaturesComparisonTable = ({
  pricingPlans,
}: FeaturesComparisonTableProps) => {
  const { t } = useTranslation();

  const features = [
    {
      nameKey: "pricing.features.docsPerMonth",
      hasInfoIcon: false,
      values: pricingPlans.map((plan) =>
        plan.features.docsPerMonth === -1
          ? "Unlimited"
          : plan.features.docsPerMonth.toString()
      ),
    },
    {
      nameKey: "pricing.features.emailSupport",
      hasInfoIcon: false,
      values: pricingPlans.map((plan) =>
        plan.features.emailSupport ? "included" : "notIncluded"
      ),
    },
    {
      nameKey: "pricing.features.dashboardStorage",
      hasInfoIcon: false,
      values: pricingPlans.map((plan) =>
        plan.features.dashboardStorage ? "included" : "notIncluded"
      ),
    },
    {
      nameKey: "pricing.features.multiPartyESign",
      hasInfoIcon: true,
      values: pricingPlans.map((plan) =>
        plan.features.multiPartyESign ? "included" : "notIncluded"
      ),
    },
    {
      nameKey: "pricing.features.upTo3Users",
      hasInfoIcon: true,
      values: pricingPlans.map((plan) =>
        plan.features.upTo3Users ? "included" : "notIncluded"
      ),
    },
    {
      nameKey: "pricing.features.spanishUI",
      hasInfoIcon: false,
      values: pricingPlans.map((plan) =>
        plan.features.spanishUI ? "included" : "notIncluded"
      ),
    },
    {
      nameKey: "pricing.features.clauseCustomization",
      hasInfoIcon: true,
      values: pricingPlans.map((plan) =>
        plan.features.clauseCustomization ? "included" : "notIncluded"
      ),
    },
    {
      nameKey: "pricing.features.sharedLibrary",
      hasInfoIcon: false,
      values: pricingPlans.map((plan) =>
        plan.features.sharedLibrary ? "included" : "notIncluded"
      ),
    },
    {
      nameKey: "pricing.features.summaries",
      hasInfoIcon: false,
      values: pricingPlans.map((plan) =>
        plan.features.summaries ? "included" : "notIncluded"
      ),
    },
  ];

  const renderFeatureValue = (value: string, featureNameKey: string) => {
    if (value === "included") {
      return (
        <div className="flex justify-center">
          <Image
            src="/assets/greenTick.webp"
            alt="Included"
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </div>
      );
    }

    if (value === "notIncluded") {
      return (
        <div className="flex justify-center">
          <Image
            src="/assets/redCross.webp"
            alt="Not Included"
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </div>
      );
    }

    const isDocsPerMonth = featureNameKey === "pricing.features.docsPerMonth";

    return (
      <Typography
        className={`text-center text-sm font-semibold ${isDocsPerMonth ? "text-primary" : ""}`}
        variant="p"
      >
        {value === "Unlimited" ? t("pricingPage.limits.unlimited") : value}
      </Typography>
    );
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse sm:min-w-[820px] md:min-w-0">
          <thead>
            <tr>
              <th className="w-1/4 px-3 py-3 text-left sm:px-4 sm:py-4 md:px-6 md:py-4">
                <Typography
                  className="text-bluish-cyan-dark text-lg font-semibold md:text-2xl"
                  variant="subheading"
                >
                  {t("pricingPage.features.title")}
                </Typography>
              </th>
              {pricingPlans.map((plan) => (
                <th
                  key={plan._id}
                  className="w-1/4 px-3 py-3 text-center sm:px-4 sm:py-4 md:px-6 md:py-4"
                >
                  <Typography
                    className="text-primary font-semibold"
                    variant="p"
                  >
                    {t(`pricing.plans.${plan.name.toLowerCase()}.name`)}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="w-1/4 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4">
                  <div className="flex items-center gap-2">
                    <Typography
                      className="text-primary font-semibold"
                      variant="p"
                    >
                      {t(feature.nameKey)}
                    </Typography>
                    {feature.hasInfoIcon ? (
                      <Image
                        src="/assets/info.webp"
                        alt="Info"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                    ) : null}
                  </div>
                </td>
                {feature.values.map((value, planIndex) => (
                  <td
                    key={planIndex}
                    className="w-1/4 px-3 py-3 text-center sm:px-4 sm:py-4 md:px-6 md:py-4"
                  >
                    {renderFeatureValue(value, feature.nameKey)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturesComparisonTable;
