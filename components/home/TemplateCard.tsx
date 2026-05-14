"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import type { TemplateItem } from "@/constants/landing";

interface TemplateCardProps {
  template: TemplateItem;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4 pt-6">
      {/* Icon */}
      <Image
        src={template.icon}
        alt={template.title}
        width={44}
        height={44}
        className="mb-3 sm:mb-4 sm:h-[50px] sm:w-[50px]"
      />

      <Typography
        className="text-primary mb-2 line-clamp-1 text-base font-semibold sm:mb-3 sm:text-lg"
        variant="subheading"
      >
        {template.title}
      </Typography>
      <div className="h-22">
        <Typography
          className="text-secondary-text mb-5 line-clamp-3 flex-1 text-sm leading-relaxed sm:mb-6"
          variant="p"
        >
          {template.description}
        </Typography>
      </div>

      <Button
        variant="solidBlue"
        size="default"
        className="w-full px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
      >
        {t("templates.startButton")}
      </Button>
    </div>
  );
};

export default TemplateCard;
