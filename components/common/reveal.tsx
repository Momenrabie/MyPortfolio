"use client";

import type { ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealDelay = "none" | "sm" | "md";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: RevealDelay;
};

const delayClassName: Record<RevealDelay, string> = {
  none: "",
  sm: "motion-safe:delay-150",
  md: "motion-safe:delay-300",
};

export function Reveal({ children, className, delay = "none" }: RevealProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:duration-700",
        delayClassName[delay],
        isVisible
          ? "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4"
          : "motion-safe:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
