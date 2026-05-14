"use client";

import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { useCounter } from "@/hooks/useCounter";
import type { Statistic } from "@/types/landing";
import { formatValue } from "@/utils";

interface StatisticsCardProps {
  statistic: Statistic;
  isLast?: boolean;
}

const StatisticsCard = ({ statistic, isLast = false }: StatisticsCardProps) => {
  const { t } = useTranslation();

  const { count, elementRef } = useCounter(formatValue(statistic.value));

  return (
    <div
      ref={elementRef}
      className={`flex flex-col items-start gap-2 sm:gap-3 ${!isLast ? "border-secondary-text border-l-[0.5px] pr-6 sm:pr-8" : "pl-2"} p-2 sm:p-3`}
    >
      <div className="mb-1 flex items-start pl-2 sm:mb-2">
        <Typography className="text-primary font-bold" variant="title">
          {count.toLocaleString()}
        </Typography>
        {statistic.hasSpecialSymbol ? (
          <Typography
            variant="title"
            className={`font-bold ${statistic.symbolColor}`}
          >
            {statistic.id === "plain-english" ? "%" : "+"}
          </Typography>
        ) : null}
      </div>
      <Typography
        variant="p"
        className="text-secondary-text font-lato pl-2 text-xs sm:text-sm md:text-base"
      >
        {t(statistic.labelKey)}
      </Typography>
    </div>
  );
};

export default StatisticsCard;
