export type ContactChannelId = "email" | "linkedin" | "github" | "whatsapp";

export type ContactChannel = {
  id: ContactChannelId;
  label: string;
  href?: string;
  display?: string;
};

export type AvailableChannel = ContactChannel & { href: string };

const EXTERNAL_CHANNEL_IDS = new Set<ContactChannelId>([
  "github",
  "linkedin",
  "whatsapp",
]);

export const contact: {
  index: string;
  eyebrow: string;
  heading: string;
  description: string;
  location: string;
  channels: readonly ContactChannel[];
} = {
  index: "05",
  eyebrow: "Contact",
  heading: "Let's work together.",
  description:
    "Open to internships, freelance, and full-time roles where I can ship real product and keep growing.",
  location: "Cairo, Egypt",
  channels: [
    {
      id: "email",
      label: "Email",
      href: "mailto:momenrabie111@gmail.com",
      display: "momenrabie111@gmail.com",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/momenrabie/",
      display: "linkedin.com/in/momenrabie",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Momenrabie",
      display: "github.com/Momenrabie",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/201149238382",
      display: "01149238382",
    },
  ],
};

export function getAvailableChannels(): AvailableChannel[] {
  return contact.channels.filter(
    (channel): channel is AvailableChannel =>
      typeof channel.href === "string" && channel.href.length > 0,
  );
}

export function isExternalChannel(channel: Pick<ContactChannel, "id">) {
  return EXTERNAL_CHANNEL_IDS.has(channel.id);
}

export function getChannelHrefValue(
  channel: AvailableChannel,
  prefix: "mailto:" | "tel:",
) {
  return channel.href.startsWith(prefix)
    ? channel.href.slice(prefix.length)
    : channel.href;
}
