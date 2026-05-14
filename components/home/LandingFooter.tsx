"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { Typography } from "@/components/Typography";
import { FOOTER_LINKS, SOCIAL_ICONS } from "@/constants/landing";

const LandingFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-grayWhite py-8 text-white sm:py-12">
      <Container size="lg" className="relative">
        <div className="bg-primary rounded-2xl px-4 py-10 sm:px-6 sm:py-12">
          {/* Decorative Image */}
          <div className="pointer-events-none absolute -top-16 left-1/2 hidden -translate-x-1/2 transform sm:block md:-top-24">
            <Image
              src="/assets/snap-footer.webp"
              alt="Footer Logo"
              width={720}
              height={320}
              className="h-auto w-[520px] object-contain md:w-[680px] lg:w-[720px]"
            />
          </div>

          {/* Content */}
          <div className="mb-8 flex flex-col items-center gap-6 sm:mb-10 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Logo (left spacing placeholder on desktop) */}
            <div className="hidden flex-1 lg:block" />

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:flex-[2] lg:justify-center lg:gap-x-8">
              {FOOTER_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white transition-colors hover:text-gray-300"
                >
                  <Typography
                    className="text-sm font-medium sm:text-base"
                    variant="lg"
                  >
                    {t(link.textKey)}
                  </Typography>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex flex-1 justify-center gap-4 lg:justify-end">
              {SOCIAL_ICONS.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white transition-colors hover:text-gray-300"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] sm:h-6 sm:w-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="px-2 text-center">
            <Typography className="text-xs text-white sm:text-sm">
              {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default LandingFooter;
