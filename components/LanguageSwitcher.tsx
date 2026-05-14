"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  DEFAULT_LANGUAGE,
  Language,
  LANGUAGE_OPTIONS,
} from "@/constants/language";

import { Typography } from "./Typography";

interface LanguageSwitcherProps {
  currentLanguage?: Language;
  onLanguageChange?: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage = DEFAULT_LANGUAGE,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange?.(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
      >
        {/* Current Language */}
        <Typography className="text-secondary-text text-sm font-semibold">
          {LANGUAGE_OPTIONS.find((option) => option.code === currentLanguage)
            ?.label || currentLanguage}
        </Typography>

        {/* Globe Icon */}
        <Image
          src="/assets/globe.svg"
          alt="Language"
          width={16}
          height={16}
          className="w-4 h-4"
        />

        {/* Chevron Down Icon */}
        <ChevronDown
          className={`w-5 h-5 cursor-pointer text-primary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-borderGray min-w-[120px] z-50">
          {LANGUAGE_OPTIONS.map((option, index) => (
            <button
              key={option.code}
              onClick={() => handleLanguageSelect(option.code)}
              className={`w-full cursor-pointer flex items-center justify-between px-4 py-3 hover:bg-grayWhite transition-colors ${
                index === 0 ? "first:rounded-t-lg" : ""
              } ${
                index === LANGUAGE_OPTIONS.length - 1 ? "last:rounded-b-lg" : ""
              }`}
            >
              <Typography className="text-secondary-text text-sm font-semibold">
                {option.label}
              </Typography>
              {currentLanguage === option.code && (
                <Image
                  src="/assets/greenTick.webp"
                  alt="Selected"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
