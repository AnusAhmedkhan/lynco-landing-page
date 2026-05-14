import type { FieldErrors } from "react-hook-form";

export interface APIResponse<T> {
  status: boolean | number;
  message: string;
  data: T | null;
  error?: string;
}

export interface FormFieldBaseProps {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  containerClassName?: string;
  inputFieldClassName?: string;
  errors?: FieldErrors;
}

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}
