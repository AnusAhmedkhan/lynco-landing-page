export enum Language {
  EN = "en",
  ES = "es",
}

export interface LanguageOption {
  code: Language;
  label: string;
  flag?: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: Language.EN,
    label: "EN",
  },
  {
    code: Language.ES,
    label: "ES",
  },
] as const;

export const DEFAULT_LANGUAGE = Language.EN;
