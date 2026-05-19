import { ROUTES } from "@/constants/routes";

export type GuideNavItem = {
  key: string;
  labelKey: string;
  href: string;
};

export const GUIDE_NAV_ITEMS: GuideNavItem[] = [
  {
    key: "credit",
    labelKey: "navigation.guidesMenu.credit",
    href: ROUTES.CREDIT_GUIDE,
  },
  {
    key: "whatsapp",
    labelKey: "navigation.guidesMenu.whatsapp",
    href: ROUTES.WHATSAPP_GUIDE,
  },
  {
    key: "connection",
    labelKey: "navigation.guidesMenu.connection",
    href: ROUTES.CONNECTION_GUIDE,
  },
];

export const STATIC_PAGE_NAV_ITEMS: GuideNavItem[] = [
  {
    key: "contact",
    labelKey: "navigation.staticPages.contact",
    href: ROUTES.CONTACT,
  },
  {
    key: "support",
    labelKey: "navigation.staticPages.support",
    href: ROUTES.SUPPORT,
  },
  {
    key: "privacy",
    labelKey: "navigation.staticPages.privacy",
    href: ROUTES.PRIVACY_POLICY,
  },
  {
    key: "terms",
    labelKey: "navigation.staticPages.terms",
    href: ROUTES.TERMS_OF_SERVICE,
  },
];
