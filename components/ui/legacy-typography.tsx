"use client";
/* eslint-disable react/prop-types */
import React from "react";

import { cn } from "@/lib/utils";

interface TypographyProps {
  variant?:
    | "display"
    | "title"
    | "headline"
    | "subheading"
    | "error"
    | "body"
    | "label"
    | "caption"
    | "overline";
  className?: string;
  children: React.ReactNode;
  component?: keyof React.JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  className,
  children,
  component,
  ...props
}) => {
  const variantClasses = {
    display: "text-5xl font-bold tracking-tight",
    title: "text-textDark text-2xl sm:text-3xl font-bold",
    headline: "text-xl sm:text-2xl font-bold tracking-tight",
    subheading: "text-base sm:text-xl font-medium",
    body: "text-base",
    error: "text-error text-sm",
    label: "text-sm sm:text-base font-medium",
    caption: "text-textLight text-sm",
    overline: "text-sm sm:text-xl uppercase tracking-wide font-bold",
  };

  const defaultComponents = {
    display: "h1",
    title: "h2",
    headline: "h3",
    subheading: "h4",
    body: "p",
    label: "label",
    caption: "span",
    overline: "span",
    error: "p",
  };

  const Component =
    component || (defaultComponents[variant] as keyof React.JSX.IntrinsicElements);

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
