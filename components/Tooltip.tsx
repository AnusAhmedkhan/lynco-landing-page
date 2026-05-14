import { CircleAlert } from "lucide-react";
import React, { type ReactNode, useEffect, useRef } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type TooltipComponentProps = {
  trigger?: ReactNode;
  text?: string;
  children?: ReactNode;
  className?: string;
  align?: "end" | "center" | "start";
  showTooltip?: boolean;
  triggerClassName?: string;
};

type TooltipContentProps = TooltipComponentProps & {
  text?: never;
};

type TooltipTextProps = TooltipComponentProps & {
  children?: never;
};

const TooltipComponent = ({
  trigger = <CircleAlert size={14} />,
  text,
  children,
  align = "end",
  className = "max-w-64",
  showTooltip = true,
  triggerClassName,
}: TooltipContentProps | TooltipTextProps) => {
  const isTouchDevice = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);

  // Detect touch device
  useEffect(() => {
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!triggerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const isButton = () => {
    if (React.isValidElement(trigger)) {
      const { type } = trigger;
      if (typeof type === "string") {
        return type === "button";
      }
    }
    return false;
  };

  return (
    <TooltipProvider>
      <Tooltip open={isOpen}>
        <TooltipTrigger
          ref={triggerRef}
          {...(isButton() ? { asChild: true } : {})}
          className={cn(
            "flex items-center justify-center",
            "outline-none select-none",
            isTouchDevice.current ? "touch-manipulation" : "",
            triggerClassName
          )}
          onClick={handleTriggerClick}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleTriggerClick();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleTriggerClick();
            }
          }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {trigger}
        </TooltipTrigger>
        {showTooltip ? (
          <TooltipContent
            className={cn("animate-in fade-in-0 zoom-in-95", className)}
            align={align}
            sideOffset={5}
          >
            {text ? <p>{text}</p> : children}
          </TooltipContent>
        ) : null}
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
