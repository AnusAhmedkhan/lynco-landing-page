import { cn } from "@/lib/utils";

interface ITypography {
  children: React.ReactNode;
  className?: string;
  variant?: "display" | "title" | "heading" | "subheading" | "xl" | "lg" | "p";
}

export const Typography = ({
  variant = "p",
  className,
  children,
}: ITypography) => (
  <span
    className={cn(
      "",
      {
        "text-3xl leading-tight font-bold sm:text-4xl md:text-5xl xl:text-6xl":
          variant === "display",
        "text-[30px] md:text-[40px] leading-tight": variant === "title",
        "text-xl leading-4 font-bold md:text-[32px] md:leading-[44px]":
          variant === "heading",
        "text-lg font-semibold md:text-xl": variant === "subheading",
        "font-lato text-sm font-normal md:text-base": variant === "p",
      },
      className
    )}
  >
    {children}
  </span>
);
