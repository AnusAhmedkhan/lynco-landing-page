"use client";

import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { Typography } from "@/components/Typography";
import { OUR_STORY_STATISTICS } from "@/constants/landing";

import StatisticsCard from "./StatisticsCard";

const OurStorySection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-grayWhite pt-10 pb-12 sm:pt-36 sm:pb-14 md:pt-44 md:pb-16 lg:pt-52 lg:pb-16">
      <Container size="lg" className="">
        {/* 3/9 Column Layout */}
        <div className="mb-10 grid grid-cols-1 gap-8 sm:mb-12 md:mb-16 md:grid-cols-12">
          {/* Left Column - Headings (3/12) */}
          <div className="px-4 md:col-span-3 md:px-0">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <Typography
                variant="subheading"
                className="text-bluish-cyan-dark font-medium"
              >
                {t("about.ourStory.subtitle")}
              </Typography>
              <Typography className="text-primary font-bold" variant="title">
                {t("about.ourStory.title")}
              </Typography>
            </div>
          </div>

          {/* Right Column - Description (9/12) */}
          <div className="flex flex-col gap-6 px-4 md:col-span-9 md:px-0">
            <div className="pt-4 sm:pt-6 md:pt-8">
              <Typography
                variant="p"
                className="text-secondary-text leading-relaxed"
              >
                {t("about.ourStory.description")}
              </Typography>
            </div>
            <div className="">
              <div className="flex flex-wrap gap-6 sm:gap-8">
                {OUR_STORY_STATISTICS.map((statistic, index) => (
                  <StatisticsCard
                    key={statistic.id}
                    statistic={statistic}
                    isLast={index === OUR_STORY_STATISTICS.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}

        {/* Full Width Description Section */}
        <div className="flex flex-col gap-3 px-4 sm:gap-4 md:gap-6 md:px-0">
          <div>
            <Typography
              variant="p"
              className="text-secondary-text leading-relaxed"
            >
              {t("about.ourStory.paragraph1")}
            </Typography>
          </div>
          <div>
            <Typography
              variant="p"
              className="text-secondary-text text-sm leading-relaxed sm:text-base"
            >
              {t("about.ourStory.paragraph2")}
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStorySection;
