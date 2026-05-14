import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

const buttonVariants = cva(
  "h-12 relative z-10 text-main-text inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text- font-medium transition-all disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer [&>*]:relative [&>*]:z-10 min-w-24",
  {
    variants: {
      variant: {
        default:
          "linear-gradient text-gradient text-white font-semibold rounded-full",
        destructive: "bg-red-500 text-white shadow-xs",
        outline: "p-1 gradient-border-darker border shadow-xs font-semibold",
        secondary:
          "bg-primary/10 rounded-full text-primary shadow-xs hover:bg-primary/20",
        ghost: "text-white bg-danger font-semibold rounded-full shadow-lg",
        plain: "text-primary  justify-end",
        iconOnly: "text-primary p-0 w-auto h-auto min-w-0 min-h-0",
        link: "text-primary font-lato",
        circular:
          "h-10 w-10 !rounded-full p-0 bg-[rgba(104,210,252,0.2)]  hover:bg-[rgba(104,210,252,0.2)] disabled:bg-gray/20 disabled:rounded-full",
        solidBlue:
          "bg-[#1E3A8A] text-white font-semibold rounded-full shadow-lg btn-gradient-hover-ltr",
        outlineBlue:
          "bg-gradient-to-br from-white to-[#FBFBFE] text-primary border-1 border-borderGray font-semibold rounded-full shadow-[0px_3px_6px_rgba(7,0,110,0.03)] btn-gradient-hover-rtl btn-text-hover-primary",
        outlineGray:
          "bg-gradient-to-br from-white to-grayWhite text-secondary-text border border-gray-light font-semibold rounded-[30px] shadow-[0_3px_6px_0_rgba(7,0,110,0.03)] hover:shadow-[0_6px_12px_0_rgba(7,0,110,0.06)] btn-gradient-hover-rtl btn-text-hover-gray",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        sm: "rounded-full gap-1 px-2 has-[>svg]:px-2.5",
        lg: "rounded-full px-6 has-[>svg]:px-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  iconPosition = "left",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  } & ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const hasIcon = !!props.icon;
  const hasChildren = !!props.children;
  const shouldRenderInnerDiv = hasIcon && hasChildren;

  const Content = () => {
    if (loading) return <Loader color="white" className="animate-spin" />;
    return (
      <>
        {props.children}
        {props.icon}
      </>
    );
  };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={loading || props.disabled}
      {...props}
    >
      {shouldRenderInnerDiv ? (
        <div
          className={cn(
            "mx-auto flex w-full items-center justify-center gap-2 px-2",
            {
              "flex-row-reverse": iconPosition === "right",
            }
          )}
        >
          {Content()}
        </div>
      ) : (
        Content()
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
