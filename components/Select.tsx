import { Label } from "@radix-ui/react-label";
import type { FieldErrors } from "react-hook-form";

import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { SelectOption } from "@/types";

import ErrorComponent from "./ErrorComponent";
import { Typography } from "./Typography";

export function Select({
  label,
  labelClassName,
  selectGroupClassName,
  errors,
  options,
  value,
  onChange,
  placeholder,
  variant = "default",
  ...props
}: {
  label?: string;
  name?: string;
  labelClassName?: string;
  errors?: FieldErrors;
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
  selectGroupClassName?: string;
  variant?: "default" | "underlined";
  placeholder?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label ? (
        <Label htmlFor={props?.name} className="flex gap-1">
          <Typography className={cn(labelClassName)}>{label}</Typography>
          {props.required ? <span className="ml-1 text-red-500">*</span> : null}
        </Label>
      ) : null}
      <SelectComponent value={value} onValueChange={onChange}>
        <SelectTrigger
          className={cn(
            "font-lato mt-1 flex w-full items-center capitalize shadow-none data-[size=default]:h-12 data-[size=sm]:h-12 md:mt-2",
            variant === "underlined"
              ? "border-borderGray text-secondary-text focus-visible:border-primary rounded-none border-0 border-b bg-transparent px-0 focus-visible:ring-0"
              : "bg-background border-outline text-secondary-text focus-visible:border-primary rounded-full border focus-visible:ring-0",
            selectGroupClassName
          )}
        >
          <SelectValue
            className="placeholder:text-secondary-text text-primary font-lato text-sm"
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent
          className={cn(
            "bg-background border-outline text-secondary-text",
            selectGroupClassName
          )}
        >
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-primary hover:bg-primary/10 font-lato text-sm capitalize"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectComponent>
      <ErrorComponent errors={errors} name={props?.name} />
    </div>
  );
}
