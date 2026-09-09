import Link from "next/link";

import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { getAvailableChannels } from "@/lib/content/contact";

export function SiteFooter() {
  const channels = getAvailableChannels();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-foreground"
          >
            {SITE_NAME}
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            Full-Stack Engineer — Cairo, Egypt.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
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

        {channels.length > 0 ? (
          <ul className="flex flex-wrap gap-4">
            {channels.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  target={channel.id === "email" ? undefined : "_blank"}
                  rel={
                    channel.id === "email" ? undefined : "noopener noreferrer"
                  }
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {channel.label}
                  {channel.id !== "email" ? (
                    <span className="sr-only">(opens in a new tab)</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-4 text-sm text-muted-foreground">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
