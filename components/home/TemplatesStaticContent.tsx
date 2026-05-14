"use client";

import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";

const TemplatesStaticContent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-center space-y-5">
      <Typography
        variant="subheading"
        className="text-bluish-cyan-dark font-semibold tracking-wider"
      >
        {t("templates.subtitle")}
      </Typography>

      <Typography className="text-primary font-bold" variant="title">
        {t("templates.title")}
      </Typography>

      <Typography className="text-secondary-text text-md leading-relaxed">
        {t("templates.description")}
      </Typography>

      <div>
        <Button variant="solidBlue" size="lg" className="rounded-3xl px-8 py-3">
          {t("templates.viewAllButton")}
        </Button>
      </div>
    </div>
  );
};

export default TemplatesStaticContent;
