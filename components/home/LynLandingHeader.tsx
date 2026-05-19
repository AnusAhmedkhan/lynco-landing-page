"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import GuidesNavDropdown from "@/components/navigation/GuidesNavDropdown";
import { LynLandingNavLink } from "@/components/navigation/LynLandingNavLink";
import MobileNavDrawer from "@/components/navigation/MobileNavDrawer";
import { GUIDE_NAV_ITEMS } from "@/constants/guides-nav";
import { LYN_NAV } from "@/constants/lyn-landing-content";
import { APP_ROUTES } from "@/constants/routes";
import { useLynLandingReady } from "@/context/LynLandingAnimationContext";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";

const LynLandingHeader = () => {
  const { t } = useTranslation();
  const landingReady = useLynLandingReady();
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="bg-lyn-bg sticky top-0 z-50 border-b border-lyn-border/40"
      initial={reduceMotion ? false : { x: "-100%", opacity: 0 }}
      animate={
        landingReady
          ? { x: 0, opacity: 1 }
          : reduceMotion
            ? { x: 0, opacity: 1 }
            : { x: "-100%", opacity: 0 }
      }
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
    >
      <Container size="xl" className="py-4">
        <motion.div
          className="relative flex items-center justify-between gap-4"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={landingReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            href="/home"
            className="relative z-10 flex shrink-0 items-center"
          >
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
            <GuidesNavDropdown />
          </nav>

          <motion.div
            className="relative z-10 ml-auto flex items-center gap-3"
            initial={reduceMotion ? false : { x: 24, opacity: 0 }}
            animate={landingReady ? { x: 0, opacity: 1 } : { x: 24, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
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
                guideItems={GUIDE_NAV_ITEMS}
                cta={{
                  href: APP_ROUTES.SIGNUP,
                  labelKey: "lynLanding.ctaStart",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.header>
  );
};

export default LynLandingHeader;
