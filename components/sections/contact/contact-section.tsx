import type { ComponentType } from "react";
import { MapPin } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/sections/contact/contact-icons";
import {
  contact,
  getAvailableChannels,
  type ContactChannelId,
} from "@/lib/content/contact";

const channelIcons = {
  email: MailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  whatsapp: WhatsAppIcon,
} as const satisfies Record<ContactChannelId, ComponentType<{ className?: string }>>;

export function ContactSection() {
  const channels = getAvailableChannels();

  return (
    <SectionShell id="contact">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            index={contact.index}
            eyebrow={contact.eyebrow}
            heading={contact.heading}
            description={contact.description}
          />
        </Reveal>

        <Reveal delay="sm" className="lg:col-span-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-base text-foreground">{contact.location}</p>
            </div>

            {channels.length > 0 ? (
              <ul className="flex flex-col gap-3">
                {channels.map((channel) => {
                  const Icon = channelIcons[channel.id];

                  return (
                    <li key={channel.id}>
                      <a
                        href={channel.href}
                        target={channel.id === "email" ? undefined : "_blank"}
                        rel={
                          channel.id === "email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-4 py-3 text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                      >
                        <Icon className="size-5 text-primary" />
                        <span className="font-medium">
                          {channel.display ?? channel.label}
                        </span>
                        {channel.id !== "email" ? (
                          <span className="sr-only">(opens in a new tab)</span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-base leading-relaxed text-muted-foreground">
                Direct links for email, LinkedIn, GitHub, and WhatsApp will
                appear here. Until then, I&apos;m based in {contact.location} and
                open to new work.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
