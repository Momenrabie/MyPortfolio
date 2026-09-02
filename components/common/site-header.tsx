import Link from "next/link";

import { AppButton } from "@/components/app/app-button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <AppButton asChild className="hidden rounded-full md:inline-flex">
            <Link href="/#contact">Contact</Link>
          </AppButton>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
