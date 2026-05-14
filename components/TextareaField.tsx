import React from "react";
import type { FieldErrors } from "react-hook-form";

import { cn } from "@/lib/utils";

import ErrorComponent from "./ErrorComponent";
import { Typography } from "./Typography";

export interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  errors?: FieldErrors;
  labelClassName?: string;
  containerClassName?: string;
  textareaFieldClassName?: string;
  variant?: "default" | "underlined";
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  placeholder = "",
  errors,
  labelClassName,
  containerClassName,
  textareaFieldClassName,
  variant = "default",
  ...props
}) => {
  return (
    <div className="mt-8">
      <div className={cn("relative")}>
        {label ? (
          <div className="flex items-center justify-between">
            <label htmlFor={props?.name}>
              <Typography className={cn(labelClassName)}>{label}</Typography>
              {props.required ? (
                <span className="ml-1 text-red-500">*</span>
              ) : null}
            </label>
          </div>
        ) : null}
        <div
          className={cn(
            "mt-1 flex items-start justify-center py-2 md:mt-2",
            variant === "underlined"
              ? "border-borderGray rounded-none border-0 border-b bg-transparent"
              : "bg-background border-outline rounded-full border",
            containerClassName
          )}
        >
          <textarea
            {...props}
            id={props?.name}
            name={props?.name}
            placeholder={placeholder}
            className={cn(
              "text-secondary-text placeholder:text-secondary-text w-full resize-none border-none text-sm placeholder:text-sm focus:ring-0 focus:outline-none focus-visible:ring-0",
              variant === "underlined" ? "px-0 py-2" : "px-4 py-3",
              textareaFieldClassName
            )}
          />
        </div>
      </div>
      <ErrorComponent errors={errors} name={props?.name} />
    </div>
  );
};

export default TextareaField;
