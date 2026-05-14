export interface PricingPlan {
  id: string;
  nameKey: string;
  price: number;
  billingPeriodKey: string;
  descriptionKey: string;
}

export interface FeatureComparison {
  nameKey: string;
  hasInfoIcon?: boolean;
  starter: "included" | "notIncluded" | string;
  pro: "included" | "notIncluded" | string;
  team: "included" | "notIncluded" | string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    nameKey: "pricingPage.plans.starter",
    price: 19,
    billingPeriodKey: "pricingPage.plans.perMonth",
    descriptionKey: "pricingPage.plans.description",
  },
  {
    id: "pro",
    nameKey: "pricingPage.plans.pro",
    price: 49,
    billingPeriodKey: "pricingPage.plans.perMonth",
    descriptionKey: "pricingPage.plans.description",
  },
  {
    id: "team",
    nameKey: "pricingPage.plans.team",
    price: 99,
    billingPeriodKey: "pricingPage.plans.perMonth",
    descriptionKey: "pricingPage.plans.description",
  },
];

export const FEATURES_COMPARISON: FeatureComparison[] = [
  {
    nameKey: "pricingPage.features.docsPerMonth",
    starter: "pricingPage.limits.tenDocs",
    pro: "pricingPage.limits.fiftyDocs",
    team: "pricingPage.limits.unlimited",
  },
  {
    nameKey: "pricingPage.features.emailSupport",
    starter: "included",
    pro: "notIncluded",
    team: "notIncluded",
  },
  {
    nameKey: "pricingPage.features.dashboardStorage",
    starter: "included",
    pro: "notIncluded",
    team: "notIncluded",
  },
  {
    nameKey: "pricingPage.features.multiPartyESign",
    hasInfoIcon: true,
    starter: "included",
    pro: "notIncluded",
    team: "notIncluded",
  },
  {
    nameKey: "pricingPage.features.upTo3Users",
    hasInfoIcon: true,
    starter: "included",
    pro: "notIncluded",
    team: "notIncluded",
  },
  {
    nameKey: "pricingPage.features.spanishUI",
    starter: "included",
    pro: "notIncluded",
    team: "notIncluded",
  },
  {
    nameKey: "pricingPage.features.clauseCustomization",
    hasInfoIcon: true,
    starter: "notIncluded",
    pro: "included",
    team: "included",
  },
  {
    nameKey: "pricingPage.features.sharedLibrary",
    starter: "notIncluded",
    pro: "included",
    team: "included",
  },
  {
    nameKey: "pricingPage.features.summaries",
    starter: "included",
    pro: "notIncluded",
    team: "notIncluded",
  },
  {
    nameKey: "pricingPage.features.prioritySupport",
    starter: "included",
    pro: "notIncluded",
    team: "notIncluded",
  },
];
