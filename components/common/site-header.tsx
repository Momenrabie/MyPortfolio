import Link from "next/link";

import { AppButton } from "@/components/app/app-button";
import { DesktopNav } from "@/components/common/desktop-nav";
import { MobileNav } from "@/components/common/mobile-nav";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { SITE_NAME } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          {SITE_NAME}
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-2">
          <AppButton asChild className="hidden rounded-full xl:inline-flex">
            <Link href="/#contact">Contact</Link>
          </AppButton>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
