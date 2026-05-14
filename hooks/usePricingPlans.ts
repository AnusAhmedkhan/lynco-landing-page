import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

import type { PricingPlan } from "@/types/subscription";

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const usePricingPlans = () => {
  return useQuery({
    queryKey: ["pricing-plans"],
    queryFn: async (): Promise<PricingPlan[]> => {
      const response = await axiosInstance.get("/subscription/plans");

      return response.data.data;
    },
  });
};
