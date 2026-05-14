"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { APP_ROUTES, ROUTES } from "@/constants/routes";

const HeroSection = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <section className="bg-primary relative flex h-[500px] items-center justify-center overflow-hidden rounded-b-2xl sm:h-[550px] lg:h-[900px]">
      <div className="mix-blend absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full bg-home-overlay bg-cover"></div>

      <Container
        size="lg"
        className="relative z-100 flex h-full w-full px-4 sm:px-6"
      >
        <div className="absolute right-0 bottom-0 z-10 hidden h-[200px] w-full sm:h-[320px] lg:block lg:h-[400px]">
          <Image
            src="/assets/homeBannerImg.webp"
            alt="Home Banner"
            width={1000}
            height={400}
            priority={true}
            className="w-full rounded-3xl object-contain"
          />
        </div>
        <div className="mt-28 flex w-full flex-col items-center sm:mt-32 md:mt-35">
          <Typography
            className="mb-4 w-full px-2 text-center text-white sm:mb-6 sm:w-[80%] md:w-[80%]"
            variant="display"
          >
            {t("hero.title")}
          </Typography>

          <Typography
            className="mb-6 px-4 text-center text-white sm:mb-8"
            variant="p"
          >
            {t("hero.subtitle")}
          </Typography>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              variant="solidBlue"
              size="lg"
              onClick={() => {
                router.push(APP_ROUTES.SIGNUP);
              }}
              className="rounded-3xl px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg"
            >
              {t("hero.primaryButton")}
            </Button>
            <Button
              variant="outlineBlue"
              size="lg"
              onClick={() => {
                router.push(ROUTES.PRICING);
              }}
              className="text-secondary-text rounded-3xl border-none px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg"
            >
              {t("hero.secondaryButton")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
