"use client";

import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { useCounter } from "@/hooks/useCounter";
import type { Statistic } from "@/types/landing";
import { formatCount, getStatisticSymbol } from "@/utils";

interface StatisticsCardProps {
  statistic: Statistic;
}

const StatisticsCard = ({ statistic }: StatisticsCardProps) => {
  const { t } = useTranslation();

  // Parse the numeric value for animation
  const numericValue = parseInt(statistic.value.replace(/,/g, ""));
  const { count, elementRef } = useCounter(numericValue, {
    duration: 2000,
    threshold: 0.1,
  });

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center px-2 text-center"
    >
      {/* Value with Symbol */}
      <div className="mb-2 flex items-baseline">
        <Typography
          className="text-primary text-3xl font-bold sm:text-4xl md:text-5xl"
          variant="heading"
        >
          {formatCount(count)}
        </Typography>
        {statistic.hasSpecialSymbol ? (
          <Typography
            className={`${statistic.symbolColor} text-3xl font-bold sm:text-4xl md:text-5xl`}
          >
            {getStatisticSymbol(statistic.id)}
          </Typography>
        ) : null}
      </div>

      {/* Label */}
      <Typography className="text-secondary-text text-xs leading-relaxed sm:text-sm">
        {t(statistic.labelKey)}
      </Typography>
    </div>
  );
};

export default StatisticsCard;
