"use client";

import type { ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealDelay = "none" | "sm" | "md" | "lg";
type RevealFrom = "bottom" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: RevealDelay;
  from?: RevealFrom;
};

const delayClassName: Record<RevealDelay, string> = {
  none: "",
  sm: "motion-safe:delay-150",
  md: "motion-safe:delay-300",
  lg: "motion-safe:delay-500",
};

const fromClassName: Record<RevealFrom, string> = {
  bottom: "motion-safe:slide-in-from-bottom-4",
  left: "motion-safe:slide-in-from-left-6",
  right: "motion-safe:slide-in-from-right-6",
};

export function Reveal({
  children,
  className,
  delay = "none",
  from = "bottom",
}: RevealProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:duration-700",
        delayClassName[delay],
        isVisible
          ? cn(
              "motion-safe:animate-in motion-safe:fade-in",
              fromClassName[from],
            )
          : "motion-safe:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
