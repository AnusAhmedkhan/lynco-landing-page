"use client";

import { useCallback } from "react";
import { useTranslation } from "react-i18next";

/** Returns a string array from i18n (objects/arrays stored in locale JSON). */
export function useTranslationArray() {
  const { t, i18n } = useTranslation();

  const tArray = useCallback(
    <T = string>(key: string): T[] => {
      const value = i18n.getResource(i18n.language, "translation", key);
      if (Array.isArray(value)) return value as T[];
      const fallback = t(key, { returnObjects: true });
      return Array.isArray(fallback) ? (fallback as T[]) : [];
    },
    [i18n, t]
  );

  return { t, tArray };
}
