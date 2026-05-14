"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TESTIMONIALS } from "@/constants/landing";

import TestimonialCard from "./TestimonialCard";

interface TestimonialCarouselProps {
  onSwiper?: (swiper: SwiperType) => void;
}

const TestimonialCarousel = ({ onSwiper }: TestimonialCarouselProps) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 24,
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
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        onSwiper={onSwiper}
        className="testimonials-swiper"
      >
        {TESTIMONIALS.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
