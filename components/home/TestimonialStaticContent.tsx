"use client";

import { useTranslation } from "react-i18next";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";

const TestimonialStaticContent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-center space-y-4">
      <Typography
        className="text-bluish-cyan-dark font-semibold tracking-wider"
        variant="subheading"
      >
        {t("testimonials.subtitle")}
      </Typography>

      <Typography
        className="text-primary leading-[45px] font-bold"
        variant="title"
      >
        {t("testimonials.title")}
      </Typography>

      <Typography className="text-secondary-text text-md leading-relaxed">
        {t("testimonials.description")}
      </Typography>

      <div>
        <Button variant="solidBlue" size="lg" className="rounded-3xl px-8 py-3">
          {t("testimonials.ctaButton")}
        </Button>
      </div>

      <div className="flex space-x-3">
        <button
          className="testimonials-prev bg-grayWhite flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-0 transition-colors"
          aria-label={t("testimonials.previousAriaLabel")}
        >
          <MdOutlineArrowBack className="text-bluish-cyan-dark h-5 w-5" />
        </button>

        <button
          className="testimonials-next bg-bluish-cyan-dark flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition-colors"
          aria-label={t("testimonials.nextAriaLabel")}
        >
          <MdOutlineArrowForward className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialStaticContent;
