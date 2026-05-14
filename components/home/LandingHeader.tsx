"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileNavDrawer from "@/components/navigation/MobileNavDrawer";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { LANDING_NAVIGATION_ITEMS } from "@/constants/landing";
import { Language } from "@/constants/language";
import { APP_ROUTES, ROUTES } from "@/constants/routes";
import i18n from "@/lib/i18n";

const LandingHeader = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (i18n.language as Language) || Language.EN
  );

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };
  return (
    <header className="absolute top-2 z-500 w-full sm:top-4">
      <Container size="lg">
        <div className="bg-grayWhite mx-2 flex h-[60px] w-auto items-center justify-between rounded-4xl border-none px-3 py-2 sm:mx-0 sm:h-[70px] sm:w-full sm:px-4 sm:py-[10px]">
          <div
            className="flex cursor-pointer items-center"
            onClick={() => router.push(ROUTES.HOME)}
          >
            <Image
              src="/assets/logo.svg"
              alt="SNAPLEGAL"
              width={72}
              height={40}
              className="h-8 w-auto sm:h-10"
            />
          </div>

          <nav className="hidden items-center space-x-6 lg:flex lg:space-x-8">
            {LANDING_NAVIGATION_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`cursor-pointer font-semibold transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-secondary-text hover:text-primary"
                  }`}
                >
                  <Typography
                    className="cursor-pointer font-semibold"
                    variant="lg"
                  >
                    {t(item.label)}
                  </Typography>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-3 md:space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />

            {/* Vertical Separator */}
            <div className="h-6 w-px bg-gray-300"></div>
            <Link
              href={APP_ROUTES.SIGNIN}
              className="hover:text-primary text-secondary-text transition-colors"
            >
              <Typography className="font-semibold" variant="lg">
                {t("navigation.login")}
              </Typography>
            </Link>
            <Button
              variant="solidBlue"
              size="default"
              className="px-5 md:px-6"
              onClick={() => router.push(APP_ROUTES.SIGNUP)}
            >
              {t("navigation.getStarted")}
            </Button>
          </div>
          <div className="flex  lg:hidden">
            {/* Mobile Language Switcher */}
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />

            <MobileNavDrawer
              items={LANDING_NAVIGATION_ITEMS.map((i) => ({
                href: i.href,
                labelKey: i.label,
              }))}
              cta={{
                href: APP_ROUTES.SIGNUP,
                labelKey: "navigation.getStarted",
              }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default LandingHeader;
