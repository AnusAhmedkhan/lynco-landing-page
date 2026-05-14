"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { Typography } from "@/components/Typography";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary relative flex h-[600px] items-center justify-center  rounded-b-2xl lg:h-[700px] xl:h-[800px]">
      <div className="mix-blend absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full bg-home-overlay bg-cover"></div>

      <Container size="lg" className="relative z-100 flex h-full w-full">
        <div className="absolute right-0 -bottom-20 z-999 hidden h-[220px] w-full sm:-bottom-28 sm:h-[280px] md:-bottom-36 md:h-[340px] lg:-bottom-45 lg:block lg:h-[400px]">
          <Image
            src="/assets/aboutUsBanner.webp"
            alt="About Us Banner"
            fill
            className="w-full rounded-3xl object-contain sm:object-cover"
          />
        </div>
        <div className="mt-28 flex flex-col items-center px-4 md:mt-45 lg:mt-40">
          <Typography
            className="mb-4 w-full text-center text-white sm:mb-5 sm:w-[80%] md:mb-6 md:w-[70%]"
            variant="display"
          >
            {t("about.hero.title")}
          </Typography>

          <Typography
            className="mb-6 max-w-4xl px-4 text-center text-white sm:mb-7 md:mb-8"
            variant="p"
          >
            {t("about.hero.description")}
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
