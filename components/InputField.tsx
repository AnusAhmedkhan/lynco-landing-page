"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { type ReactElement, useState } from "react";

import { cn } from "@/lib/utils";
import type { FormFieldBaseProps } from "@/types";

import ErrorComponent from "./ErrorComponent";
import TooltipComponent from "./Tooltip";
import { Typography } from "./Typography";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export interface InputFieldProps
  extends FormFieldBaseProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  inputFieldClassName?: string;
  tooltipComponent?: ReactElement;
  rightButtonComponent?: ReactElement;
  variant?: "default" | "underlined";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = "",
  errors,
  labelClassName,
  containerClassName,
  inputFieldClassName,
  tooltipComponent,
  rightButtonComponent,
  variant = "default",
  ...props
}) => {
  const isPasswordField = props.type === "password";

  const [isPasswordHidden, setIsPasswordHidden] = useState(isPasswordField);

  const handleTogglePassword = () => setIsPasswordHidden((prev) => !prev);

  return (
    <div>
      <div className={cn("relative", { "mt-3": tooltipComponent })}>
        <div className="flex items-center justify-between">
          {label ? (
            <Label htmlFor={props?.name}>
              <Typography className={cn(labelClassName)}>{label}</Typography>
              {props.required ? (
                <span className="ml-1 text-red-500">*</span>
              ) : null}
            </Label>
          ) : null}
          {tooltipComponent ? (
            <div className="mr-2">
              <TooltipComponent>{tooltipComponent}</TooltipComponent>
            </div>
          ) : null}
        </div>
        <div
          className={cn(
            "mt-1 flex h-12 items-center justify-center md:mt-2",
            variant === "underlined"
              ? "border-borderGray text-secondary-text rounded-none border-0 border-b bg-transparent"
              : "bg-background border-outline rounded-full border",
            containerClassName
          )}
        >
          <Input
            {...props}
            id={props?.name}
            name={props?.name}
            placeholder={placeholder}
            value={props.value}
            onChange={props.onChange}
            maxLength={60}
            type={isPasswordField && !isPasswordHidden ? "text" : props.type}
            className={cn(
              "font-lato flex-1 border-none text-sm placeholder:text-sm focus-visible:ring-0",
              "text-secondary-text caret-secondary-text",
              "[&:-webkit-autofill]:text-secondary-text [&:-webkit-autofill]:caret-secondary-text [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_theme(colors.background)] [&:-webkit-autofill]:transition-colors",
              "[&:-webkit-autofill:focus]:caret-secondary-text [&:-webkit-autofill:hover]:caret-secondary-text",
              variant === "underlined"
                ? "placeholder:text-secondary-text text-secondary-text px-0"
                : "px-4",
              inputFieldClassName
            )}
          />
          {rightButtonComponent ? rightButtonComponent : null}
          {isPasswordField ? (
            <Button
              type="button"
              variant="iconOnly"
              onClick={handleTogglePassword}
              aria-label={isPasswordHidden ? "hidePassword" : "showPassword"}
              className="mr-2 flex h-4 w-4 items-center justify-center hover:bg-transparent"
              icon={
                isPasswordHidden ? (
                  <EyeOff className="text-primary size-4" />
                ) : (
                  <Eye className="text-primary size-4" />
                )
              }
            />
          ) : null}
        </div>
      </div>
      <ErrorComponent errors={errors} name={props?.name} />
    </div>
  );
};

export default InputField;
