"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import type { Testimonial } from "@/constants/landing";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-300">
      {/* Star Rating */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <svg
            key={index}
            className="text-orangeCream h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <Typography
        className="text-primary mb-6 line-clamp-3 flex-1 text-sm leading-relaxed"
        variant="p"
      >
        {t(testimonial.textKey)}
      </Typography>

      {/* Border Line */}
      <div className="mb-4 border-t border-gray-200"></div>

      {/* User Information */}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.userImage}
            alt={t(testimonial.userNameKey)}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <Typography className="text-primary text-sm font-semibold">
            {t(testimonial.userNameKey)}
          </Typography>
          <Typography className="text-secondary-text text-xs">
            {t(testimonial.userRoleKey)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
