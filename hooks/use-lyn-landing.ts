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
type GalleryCard = { title: string; features: ShowcaseFeature[] };
type ChatMessage = {
  role: "user" | "bot";
  text: string;
  link?: string;
  completeStep?: number;
};
type ChatMessageRaw = {
  role: "user" | "bot";
  text: string;
  linkKey?: string;
  completeStep?: number;
};

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

export function useLynPricingFeatures(column: "left" | "right") {
  const { t } = useTranslation();
  const key =
    column === "left"
      ? "lynLanding.pricing.leftFeatures"
      : "lynLanding.pricing.rightFeatures";
  return useMemo(
    () => asArray<string>(t(key, { returnObjects: true })),
    [t, key]
  );
}

export function useLynWhatsappChatMessages() {
  const { t } = useTranslation();
  return useMemo(() => {
    const items = asArray<ChatMessageRaw>(
      t("lynLanding.automation.chat.messages", { returnObjects: true })
    );
    const paymentLink = t("lynLanding.automation.chat.paymentLink");
    return items.map(
      (item): ChatMessage => ({
        role: item.role,
        text: item.text,
        link: item.linkKey === "paymentLink" ? paymentLink : undefined,
        completeStep: item.completeStep,
      })
    );
  }, [t]);
}

export function useLynOnboardSteps() {
  const { t } = useTranslation();
  return useMemo(
    () =>
      asArray<StepItem>(t("lynLanding.onboard.steps", { returnObjects: true })),
    [t]
  );
}

export function useLynGalleryCards() {
  const { t } = useTranslation();
  return useMemo(
    () =>
      asArray<GalleryCard>(t("lynLanding.gallery.cards", { returnObjects: true })),
    [t]
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
