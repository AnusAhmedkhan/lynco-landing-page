"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { APP_ROUTES, ROUTES } from "@/constants/routes";

const CallToActionSection = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className="bg-grayWhite pb-10 sm:pb-6">
      <Container size="lg">
        <div className="flex flex-col items-center space-y-3 px-4 text-center sm:space-y-4">
          {/* Main Heading */}
          <Typography className="text-primary" variant="display">
            {t("cta.title")}
          </Typography>

          {/* Description */}
          <Typography
            className="text-secondary-text max-w-3xl text-base leading-relaxed sm:text-lg md:text-sm"
            variant="p"
          >
            {t("cta.description")}
          </Typography>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <Button
              variant="solidBlue"
              size="lg"
              onClick={() => router.push(APP_ROUTES.SIGNUP)}
              className="rounded-3xl px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg"
            >
              {t("cta.primaryButton")}
            </Button>
            <Button
              onClick={() => router.push(ROUTES.PRICING)}
              variant="outlineGray"
              size="lg"
              className="rounded-3xl px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg"
            >
              {t("cta.secondaryButton")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToActionSection;
