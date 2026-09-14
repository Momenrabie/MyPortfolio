import type { ComponentType } from "react";
import { Download } from "lucide-react";
import Link from "next/link";

import { AppButton } from "@/components/app/app-button";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/sections/contact/contact-icons";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import {
  getAvailableChannels,
  isExternalChannel,
  type ContactChannelId,
} from "@/lib/content/contact";
import { cv } from "@/lib/content/cv";

const channelIcons = {
  email: MailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  whatsapp: WhatsAppIcon,
} as const satisfies Record<
  ContactChannelId,
  ComponentType<{ className?: string }>
>;

export function SiteFooter() {
  const channels = getAvailableChannels();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-4 md:col-span-5">
          <Link
            href="/"
            className="w-fit font-display text-lg font-semibold tracking-tight text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            {SITE_NAME}
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            Full-Stack Engineer — Cairo, Egypt.
          </p>
          <AppButton asChild size="lg" className="w-full rounded-full sm:w-fit">
            <a href={cv.href} download={cv.fileName}>
              <Download data-icon="inline-start" />
              {cv.label}
            </a>
          </AppButton>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2">
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

        <nav aria-label="Social" className="md:col-span-4">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Connect
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {channels.map((channel) => {
              const Icon = channelIcons[channel.id];
              const external = isExternalChannel(channel);

              return (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={channel.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    <Icon className="size-4" />
                    {external ? (
                      <span className="sr-only">(opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-5 text-sm text-muted-foreground">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
