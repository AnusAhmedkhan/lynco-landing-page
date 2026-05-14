"use client";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "white";
  className?: string;
  text?: string;
}

const LoadingSpinner = ({
  size = "md",
  variant = "primary",
  className,
  text,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary-text",
    white: "text-white",
  };

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-gray-300 border-t-transparent",
          sizeClasses[size],
          variantClasses[variant]
        )}
        style={{
          borderTopColor: "currentColor",
        }}
      />
      {text ? (
        <span className={cn("text-sm", variantClasses[variant])}>{text}</span>
      ) : null}
    </div>
  );
};
export default LoadingSpinner;
