"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

import { getSectionIdFromHref } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onSelect?: (id: string) => void;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

export function NavLink({
  href,
  label,
  isActive,
  onSelect,
  onClick,
  className,
}: NavLinkProps) {
  const sectionId = getSectionIdFromHref(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={(event) => {
        if (sectionId) {
          onSelect?.(sectionId);
        }
        onClick?.(event);
      }}
      className={cn(
        "relative text-sm transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        isActive
          ? "text-primary after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-primary"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {label}
    </Link>
  );
}
