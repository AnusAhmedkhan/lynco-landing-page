"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import MobileNavDrawer from "@/components/navigation/MobileNavDrawer";
import { LynLandingNavLink } from "@/components/navigation/LynLandingNavLink";
import { LYN_NAV } from "@/constants/lyn-landing-content";
import { APP_ROUTES } from "@/constants/routes";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";

const LynLandingHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-lyn-bg sticky top-0 z-50 border-b border-lyn-border/40">
      <Container size="xl" className="py-4">
        <div className="relative flex items-center justify-between gap-4">
          <Link href="/home" className="relative z-10 flex shrink-0 items-center">
            <Image
              src={lynLandingAssets.logo}
              alt="Lynco"
              width={123}
              height={25}
              className="h-6 w-auto"
              priority
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 text-[13px] font-medium lg:flex xl:gap-6">
            {LYN_NAV.map((item) => (
              <LynLandingNavLink
                key={item.href}
                href={item.href}
                label={t(item.labelKey)}
                className="text-white whitespace-nowrap hover:text-lyn-muted"
              />
            ))}
          </nav>

          <div className="relative z-10 ml-auto flex items-center gap-3">
            <Link
              href={APP_ROUTES.SIGNIN}
              className="lyn-login-text hidden text-[13px] font-medium lg:inline"
            >
              {t("lynLanding.ctaLogin")}
            </Link>
            <Link
              href={APP_ROUTES.SIGNUP}
              className="lyn-btn-primary hidden rounded-xl px-4 py-2 text-[13px] font-semibold text-white lg:inline"
            >
              {t("lynLanding.ctaStart")}
            </Link>
            <div className="text-white lg:hidden">
              <MobileNavDrawer
                variant="lyn"
                items={LYN_NAV.map((item) => ({
                  href: item.href,
                  labelKey: item.labelKey,
                }))}
                cta={{
                  href: APP_ROUTES.SIGNUP,
                  labelKey: "lynLanding.ctaStart",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default LynLandingHeader;
