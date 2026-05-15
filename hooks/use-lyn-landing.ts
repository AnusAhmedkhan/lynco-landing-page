"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const LYN_APP_SHOWCASE_TAB_IDS = [
  "calendar",
  "ai",
  "payments",
  "marketing",
] as const;

export type LynAppShowcaseTabId = (typeof LYN_APP_SHOWCASE_TAB_IDS)[number];

type StepItem = { title: string; body: string; stepNumber?: string };
type FaqItem = { q: string; a: string };
type ShowcaseFeature = { title: string; body: string };

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

export function useLynAutomationSteps() {
  const { t } = useTranslation();
  return useMemo(
    () =>
      asArray<StepItem>(t("lynLanding.automation.steps", { returnObjects: true })),
    [t]
  );
}

export function useLynPosFeatures() {
  const { t } = useTranslation();
  return useMemo(
    () => asArray<string>(t("lynLanding.pos.features", { returnObjects: true })),
    [t]
  );
}

export function useLynFaqItems() {
  const { t } = useTranslation();
  return useMemo(
    () => asArray<FaqItem>(t("lynLanding.faq.items", { returnObjects: true })),
    [t]
  );
}

export function useLynPricingFeatures(plan: "autonomous" | "multi") {
  const { t } = useTranslation();
  const key =
    plan === "autonomous"
      ? "lynLanding.pricing.autonomousFeatures"
      : "lynLanding.pricing.multiFeatures";
  return useMemo(
    () => asArray<string>(t(key, { returnObjects: true })),
    [t, key]
  );
}

export function useLynAppShowcaseTabs() {
  const { t } = useTranslation();
  return useMemo(
    () =>
      LYN_APP_SHOWCASE_TAB_IDS.map((id) => {
        const base = `lynLanding.showcase.tabs.${id}`;
        const features = asArray<ShowcaseFeature>(
          t(`${base}.features`, { returnObjects: true })
        );
        return {
          id,
          label: t(`${base}.label`),
          eyebrow: t(`${base}.eyebrow`),
          title: t(`${base}.title`),
          description: t(`${base}.description`),
          features,
        };
      }),
    [t]
  );
}
