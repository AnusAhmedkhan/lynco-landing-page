"use client";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { Language } from "@/constants/language";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    const savedLanguage = localStorage.getItem("i18nextLng");
    return savedLanguage || Language.EN;
  }
  return Language.EN;
};
const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: Language.EN,
    debug: false,
    lng: getSavedLanguage(), // Default language
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false, // Disable suspense to prevent hydration issues
    },
  });

export default i18n;
