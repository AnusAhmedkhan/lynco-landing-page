import type { i18n } from "i18next";

// Statistics utility functions
export const formatValue = (value: string): number => {
  const numericValue = parseInt(value.replace(/,/g, ""));
  return numericValue;
};

export const formatCount = (num: number): string => {
  return num.toLocaleString();
};

export const getStatisticSymbol = (statisticId: string): string => {
  switch (statisticId) {
    case "templates":
    case "users":
    case "contracts":
    case "contracts-created":
    case "templates-ready":
    case "active-users":
      return "+";
    case "summaries":
    case "plain-english":
      return "%";
    default:
      return "";
  }
};

// Language utility functions
export const changeLanguage = (i18n: i18n, lng: string): void => {
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    localStorage.setItem("i18nextLng", lng);
  }
};

// Array utility functions
export const duplicateArray = <T>(array: T[]): T[] => {
  return [...array, ...array];
};
