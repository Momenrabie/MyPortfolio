import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-6 py-20 md:py-24", className)}>
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-col gap-12",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
