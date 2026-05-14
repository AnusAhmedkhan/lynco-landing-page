"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TEMPLATES_SECTION } from "@/constants/landing";

import TemplateCard from "./TemplateCard";

interface TemplatesCarouselProps {
  onSwiper?: (swiper: SwiperType) => void;
}

const TemplatesCarousel = ({ onSwiper }: TemplatesCarouselProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-hidden">
      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
        }}
        centeredSlides={false}
        centeredSlidesBounds={false}
        allowTouchMove={true}
        navigation={{
          nextEl: ".templates-next",
          prevEl: ".templates-prev",
        }}
        onSwiper={onSwiper}
        className="templates-swiper"
      >
        {TEMPLATES_SECTION.templates.map((template) => (
          <SwiperSlide key={template.id}>
            <TemplateCard template={template} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="mt-6 flex space-x-3 sm:mt-8">
        <button
          className="templates-prev bg-grayWhite flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-colors sm:h-10 sm:w-10"
          aria-label={t("templates.previousAriaLabel")}
        >
          <MdOutlineArrowBack className="text-bluish-cyan-dark h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <button
          className="templates-next bg-bluish-cyan-dark flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white transition-colors sm:h-10 sm:w-10"
          aria-label={t("templates.nextAriaLabel")}
        >
          <MdOutlineArrowForward className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default TemplatesCarousel;
