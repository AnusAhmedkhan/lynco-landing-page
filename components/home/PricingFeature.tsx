"use client";

import { FaCheck } from "react-icons/fa6";

import { Typography } from "@/components/Typography";

interface PricingFeatureProps {
  feature: string;
}

const PricingFeature = ({ feature }: PricingFeatureProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-green flex h-5 w-5 items-center justify-center rounded-full">
        <FaCheck className="h-3 w-3 text-white" />
      </div>
      <div className="flex-1">
        <Typography className="text-secondary-text line-clamp-1 text-sm">
          {feature}
        </Typography>
      </div>
    </div>
  );
};

export default PricingFeature;
