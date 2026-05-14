"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  side?: "left" | "right" | "top" | "bottom";
};

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(function SheetContent(
  { className = "", side = "right", children, ...props },
  ref
) {
  const sideClasses =
    side === "left"
      ? "left-0 top-0 h-full w-3/4 max-w-sm translate-x-0"
      : side === "right"
        ? "right-0 top-0 h-full w-3/4 max-w-sm translate-x-0"
        : side === "top"
          ? "top-0 w-full translate-y-0"
          : "bottom-0 w-full translate-y-0";

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[9998] bg-black/40" />
      <DialogPrimitive.Content
        ref={ref}
        className={`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left fixed z-[9999] bg-white p-0 shadow-xl outline-none ${sideClasses} ${className}`}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

export const SheetHeader = ({ children }: { children?: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

export const SheetFooter = ({ children }: { children?: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
