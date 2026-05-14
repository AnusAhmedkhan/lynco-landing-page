"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { Typography } from "@/components/Typography";
import { WALKTHROUGH_STEPS } from "@/constants/landing";

const WalkthroughSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-grayWhite py-14 sm:py-20">
      <Container size="lg">
        {/* Section Header */}
        <div className="mb-10 flex flex-col text-center sm:mb-16">
          <Typography
            className="text-bluish-cyan-dark mb-4 font-semibold tracking-wider"
            variant="subheading"
          >
            {t("walkthrough.subtitle")}
          </Typography>

          <Typography
            className="text-primary mb-4 font-bold sm:mb-6"
            variant="title"
          >
            {t("walkthrough.title")}
          </Typography>

          <Typography
            className="text-secondary-text mx-auto max-w-3xl px-4 text-base leading-relaxed sm:text-lg"
            variant="p"
          >
            {t("walkthrough.description")}
          </Typography>
        </div>

        {/* Three Column Steps */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {WALKTHROUGH_STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Visual Mockup */}
              <div className="mb-6 w-full sm:mb-8">
                <div className="relative h-56 overflow-hidden rounded-xl sm:h-72 md:h-80">
                  <Image
                    src={step.image}
                    alt={step.titleKey}
                    width={400}
                    height={400}
                    className="h-full w-full rounded-xl object-contain lg:object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="flex flex-col">
                <Typography
                  className="text-primary mb-2 text-center font-bold sm:mb-4 lg:text-left"
                  variant="subheading"
                >
                  {t(step.titleKey)}
                </Typography>

                <Typography
                  className="text-secondary-text px-4 text-center text-sm sm:px-0 sm:text-base lg:text-left"
                  variant="p"
                >
                  {t(step.descriptionKey)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WalkthroughSection;
