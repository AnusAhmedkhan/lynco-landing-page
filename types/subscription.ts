export interface SelectPlanRequest {
  email: string;
  paymentPlanId: string;
}

export interface SelectPlanResponse {
  sessionId: string;
}
export interface PricingFeatures {
  docsPerMonth: number;
  spanishUI: boolean;
  emailSupport: boolean;
  dashboardStorage: boolean;
  multiPartyESign: boolean;
  upTo3Users: boolean;
  clauseCustomization: boolean;
  sharedLibrary: boolean;
  summaries: boolean;
}

export interface PricingPlan {
  _id: string;
  name: string;
  price: number;
  description: string;
  features: PricingFeatures;
  priceId: string;
  createdAt: string;
  updatedAt: string;
}
