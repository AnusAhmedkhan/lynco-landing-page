// Landing Page Constants
import type { Statistic } from "@/types/landing";

import { ROUTES } from "./routes";

// Navigation items for landing header
export interface NavigationItem {
  label: string;
  href: string;
}

export const LANDING_NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "navigation.templates", href: "/templates" },
  { label: "navigation.pricing", href: ROUTES.PRICING },
  { label: "navigation.aboutUs", href: ROUTES.ABOUTUS },
  { label: "navigation.contactUs", href: ROUTES.CONTACT },
] as const;

// Logo slider constants
export interface LogoData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const LOGO_SLIDER_DATA: LogoData[] = [
  {
    src: "/assets/logoslider/logo-slider-frame.webp",
    alt: "logoSlider.altTexts.snaplegalCertified",
    width: 120,
    height: 80,
  },
  {
    src: "/assets/logoslider/main-logo.webp",
    alt: "logoSlider.altTexts.snaplegalCertified",
    width: 120,
    height: 80,
  },
  {
    src: "/assets/logoslider/partner-logo-1.webp",
    alt: "logoSlider.altTexts.americanExpress",
    width: 140,
    height: 60,
  },
  {
    src: "/assets/logoslider/partner-logo-2.webp",
    alt: "logoSlider.altTexts.panasonic",
    width: 120,
    height: 60,
  },
  {
    src: "/assets/logoslider/partner-logo-3.webp",
    alt: "logoSlider.altTexts.opentext",
    width: 100,
    height: 60,
  },
  {
    src: "/assets/logoslider/partner-logo-4.webp",
    alt: "logoSlider.altTexts.diageo",
    width: 100,
    height: 60,
  },
  {
    src: "/assets/logoslider/partner-logo-5.webp",
    alt: "logoSlider.altTexts.jera",
    width: 80,
    height: 60,
  },
  {
    src: "/assets/logoslider/partner-logo-6.webp",
    alt: "logoSlider.altTexts.cazoo",
    width: 100,
    height: 60,
  },
  {
    src: "/assets/logoslider/partner-logo-7.webp",
    alt: "logoSlider.altTexts.gymshark",
    width: 120,
    height: 60,
  },
] as const;

export const LOGO_SLIDER_ANIMATION = {
  DURATION: 30, // seconds
  GAP: 12, // gap between logos in Tailwind units
} as const;

export interface WalkthroughStep {
  image: string;
  title: string;
  description: string;
}

export const WALKTHROUGH_STEPS = [
  {
    image: "/assets/walkthrough/walk1.svg",
    titleKey: "walkthrough.steps.0.title",
    descriptionKey: "walkthrough.steps.0.description",
  },
  {
    image: "/assets/walkthrough/walk2.svg",
    titleKey: "walkthrough.steps.1.title",
    descriptionKey: "walkthrough.steps.1.description",
  },
  {
    image: "/assets/walkthrough/walk3.svg",
    titleKey: "walkthrough.steps.2.title",
    descriptionKey: "walkthrough.steps.2.description",
  },
];

// Templates section constants
export interface TemplateItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const TEMPLATES_SECTION = {
  templates: [
    {
      id: "mutual-nda",
      icon: "/assets/docCircle.svg",
      title: "Mutual NDA (Non-Disclosure Agreement)",
      description: "Both parties protect each other's confidential information",
      link: "/templates/mutual-nda",
    },
    {
      id: "unilateral-nda",
      icon: "/assets/docCircle.svg",
      title: "Unilateral NDA",
      description:
        "One party protects confidential information shared by another",
      link: "/templates/unilateral-nda",
    },
    {
      id: "independent-contractor",
      icon: "/assets/docCircle.svg",
      title: "Independent Contractor Agreement",
      description:
        "Define the relationship between a company and an independent contractor",
      link: "/templates/independent-contractor",
    },
    {
      id: "freelance-agreement",
      icon: "/assets/docCircle.svg",
      title: "Freelance Agreement",
      description: "Comprehensive contract for freelance work and services",
      link: "/templates/freelance-agreement",
    },
    {
      id: "service-contract",
      icon: "/assets/docCircle.svg",
      title: "Service Contract",
      description:
        "Professional service agreement with clear terms and conditions",
      link: "/templates/service-contract",
    },
    {
      id: "lease-agreement",
      icon: "/assets/docCircle.svg",
      title: "Lease Agreement",
      description: "Residential or commercial property rental agreement",
      link: "/templates/lease-agreement",
    },
  ],
} as const;

// Pricing section constants
export interface PricingPlan {
  id: string;
  nameKey: string;
  price: number;
  billingPeriodKey: string;
  descriptionKey: string;
  buttonTextKey: string;
  buttonVariant: "outline" | "solid";
  featuresKey: string;
  isPopular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    nameKey: "pricing.plans.0.name",
    price: 19,
    billingPeriodKey: "pricing.plans.0.billingPeriod",
    descriptionKey: "pricing.plans.0.description",
    buttonTextKey: "pricing.plans.0.buttonText",
    buttonVariant: "outline",
    featuresKey: "pricing.plans.0.features",
  },
  {
    id: "pro",
    nameKey: "pricing.plans.1.name",
    price: 49,
    billingPeriodKey: "pricing.plans.1.billingPeriod",
    descriptionKey: "pricing.plans.1.description",
    buttonTextKey: "pricing.plans.1.buttonText",
    buttonVariant: "solid",
    featuresKey: "pricing.plans.1.features",
    isPopular: true,
  },
  {
    id: "team",
    nameKey: "pricing.plans.2.name",
    price: 99,
    billingPeriodKey: "pricing.plans.2.billingPeriod",
    descriptionKey: "pricing.plans.2.description",
    buttonTextKey: "pricing.plans.2.buttonText",
    buttonVariant: "outline",
    featuresKey: "pricing.plans.2.features",
  },
] as const;

// Testimonial section constants
export interface Testimonial {
  id: string;
  textKey: string;
  userNameKey: string;
  userRoleKey: string;
  userImage: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    textKey: "testimonials.testimonials.0.text",
    userNameKey: "testimonials.testimonials.0.userName",
    userRoleKey: "testimonials.testimonials.0.userRole",
    userImage: "/assets/avatar1.svg",
    rating: 5,
  },
  {
    id: "testimonial-2",
    textKey: "testimonials.testimonials.1.text",
    userNameKey: "testimonials.testimonials.1.userName",
    userRoleKey: "testimonials.testimonials.1.userRole",
    userImage: "/assets/avatar2.svg",
    rating: 5,
  },
  {
    id: "testimonial-3",
    textKey: "testimonials.testimonials.2.text",
    userNameKey: "testimonials.testimonials.2.userName",
    userRoleKey: "testimonials.testimonials.2.userRole",
    userImage: "/assets/avatar1.svg",
    rating: 5,
  },
  {
    id: "testimonial-4",
    textKey: "testimonials.testimonials.3.text",
    userNameKey: "testimonials.testimonials.3.userName",
    userRoleKey: "testimonials.testimonials.3.userRole",
    userImage: "/assets/avatar2.svg",
    rating: 5,
  },
] as const;

// Statistics section constants

export const STATISTICS: Statistic[] = [
  {
    id: "contracts",
    value: "5,000",
    labelKey: "statistics.stats.contractsLabel",
  },
  {
    id: "templates",
    value: "25",
    labelKey: "statistics.stats.templatesLabel",
    hasSpecialSymbol: true,
    symbolColor: "text-bluish-cyan-dark",
  },
  {
    id: "users",
    value: "2,125",
    labelKey: "statistics.stats.usersLabel",
    hasSpecialSymbol: true,
    symbolColor: "text-bluish-cyan-dark",
  },
  {
    id: "summaries",
    value: "100",
    labelKey: "statistics.stats.summariesLabel",
    hasSpecialSymbol: true,
    symbolColor: "text-bluish-cyan-dark",
  },
] as const;

// Call-to-Action section constants
export interface CTAButton {
  text: string;
  variant: "solidBlue" | "outlineGray";
  href?: string;
}

// Footer section constants
export interface FooterLink {
  textKey: string;
  href: string;
}

export interface SocialIcon {
  name: string;
  icon: string;
  href: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { textKey: "footer.links.templates", href: ROUTES.HOME },
  { textKey: "footer.links.pricing", href: ROUTES.PRICING },
  { textKey: "footer.links.aboutUs", href: ROUTES.ABOUTUS },
  { textKey: "footer.links.contactUs", href: ROUTES.CONTACT },
] as const;

export const SOCIAL_ICONS: SocialIcon[] = [
  { name: "YouTube", icon: "/assets/social/youtube.svg", href: "#" },
  { name: "Facebook", icon: "/assets/social/facebook.svg", href: "#" },
  { name: "Twitter", icon: "/assets/social/twitter.svg", href: "#" },
  { name: "Instagram", icon: "/assets/social/instagram.svg", href: "#" },
  { name: "LinkedIn", icon: "/assets/social/linkedin.svg", href: "#" },
] as const;

// Our Story section constants
export const OUR_STORY_STATISTICS: Statistic[] = [
  {
    id: "contracts-created",
    value: "5,000",
    labelKey: "statistics.stats.contractsLabel",
  },
  {
    id: "templates-ready",
    value: "25",
    labelKey: "statistics.stats.templatesLabel",
    hasSpecialSymbol: true,
    symbolColor: "text-bluish-cyan-dark",
  },
  {
    id: "active-users",
    value: "2,125",
    labelKey: "statistics.stats.usersLabel",
    hasSpecialSymbol: true,
    symbolColor: "text-bluish-cyan-dark",
  },
  {
    id: "plain-english",
    value: "100",
    labelKey: "statistics.stats.summariesLabel",
    hasSpecialSymbol: true,
    symbolColor: "text-bluish-cyan-dark",
  },
] as const;

export const INQUIRY_OPTIONS = [
  { label: "contact.inquiryOptions.general", value: "general" },
  { label: "contact.inquiryOptions.support", value: "product" },
  { label: "contact.inquiryOptions.partnership", value: "partnership" },
  { label: "contact.inquiryOptions.technical", value: "technical" },
];
