"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynLandingNavLink } from "@/components/navigation/LynLandingNavLink";
import { ROUTES } from "@/constants/routes";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";
import badgeAppStore from "@/public/assets/appStore.png";
import badgeGooglePlay from "@/public/assets/googlePlay.png";
import metaIcon from "@/public/assets/metaIcon.png";

const LynLandingFooter = () => {
  const { t } = useTranslation();

  const productLinks = [
    { labelKey: "lynLanding.footer.links.features", href: "#automation" },
    { labelKey: "lynLanding.footer.links.howItWorks", href: "#how-it-works" },
    { labelKey: "lynLanding.footer.links.pricing", href: "#plans" },
    { labelKey: "lynLanding.footer.links.faq", href: "#faq" },
  ] as const;

  const companyLinks = [
    { labelKey: "lynLanding.footer.links.contact", href: ROUTES.CONTACT },
    { labelKey: "lynLanding.footer.links.facebook", href: "#" },
    { labelKey: "lynLanding.footer.links.linkedin", href: "#" },
    { labelKey: "lynLanding.footer.links.twitter", href: "#" },
  ] as const;

  const legalLinks = [
    {
      labelKey: "lynLanding.footer.links.privacy",
      href: ROUTES.PRIVACY_POLICY,
    },
    {
      labelKey: "lynLanding.footer.links.terms",
      href: ROUTES.TERMS_OF_SERVICE,
    },
    { labelKey: "navigation.staticPages.support", href: ROUTES.SUPPORT },
  ] as const;

  return (
    <footer
      id="download"
      className="bg-lyn-bg border-lyn-border border-t pb-10 pt-16"
    >
      <Container size="xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm space-y-4">
            <Image
              src={lynLandingAssets.logo}
              alt="Lynco"
              width={123}
              height={25}
              className="h-6 w-auto"
            />
            <p className="text-white text-xs font-bold leading-relaxed">
              {t("lynLanding.footer.tagline1")}
              <br />
              {t("lynLanding.footer.tagline2")}
            </p>
            <p className="text-white text-xs leading-relaxed">
              {t("lynLanding.footer.companyName")}
              <br />
              {t("lynLanding.footer.cnpj")}
              <br />
              {t("lynLanding.footer.address")}
              <br />
              {t("lynLanding.footer.city")}
            </p>
            <div>
              <p className="text-white mb-2 text-xs font-bold">
                {t("lynLanding.footer.downloadApp")}
              </p>
              <div className="flex flex-wrap gap-2">
                <Image
                  src={badgeAppStore.src}
                  alt={t("lynLanding.footer.appStoreAlt")}
                  width={140}
                  height={42}
                  className="h-9 w-auto"
                />
                <Image
                  src={badgeGooglePlay.src}
                  alt={t("lynLanding.footer.googlePlayAlt")}
                  width={140}
                  height={42}
                  className="h-9 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 text-sm md:gap-20">
            <div>
              <p className="text-white mb-3 text-xs font-normal uppercase tracking-wide">
                {t("lynLanding.footer.product")}
              </p>
              <ul className="text-white/80 space-y-2">
                {productLinks.map((l) => (
                  <li key={l.href}>
                    <LynLandingNavLink
                      href={l.href}
                      label={t(l.labelKey)}
                      className="hover:text-white transition-colors"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white mb-3 text-xs font-normal uppercase tracking-wide">
                {t("lynLanding.footer.company")}
              </p>
              <ul className="text-white/80 space-y-2">
                {companyLinks.map((l) => (
                  <li key={l.labelKey}>
                    <LynLandingNavLink
                      href={l.href}
                      label={t(l.labelKey)}
                      className="hover:text-white transition-colors"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white mb-3 text-xs font-normal uppercase tracking-wide">
                {t("lynLanding.footer.legal")}
              </p>
              <ul className="text-white/80 space-y-2">
                {legalLinks.map((l) => (
                  <li key={l.labelKey}>
                    <LynLandingNavLink
                      href={l.href}
                      label={t(l.labelKey)}
                      className="hover:text-white transition-colors"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-lyn-border mt-14 flex flex-col gap-6 border-t pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-white text-xs font-normal uppercase tracking-wide">
            {t("lynLanding.footer.copyright")}
          </p>
          <div className="text-white flex items-center gap-2 text-xs">
            <Image
              src={metaIcon.src}
              alt=""
              width={21}
              height={14}
              className="opacity-90"
            />
            <span>{t("lynLanding.footer.metaPartner")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default LynLandingFooter;
