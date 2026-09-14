export type ContactChannelId = "email" | "linkedin" | "github" | "whatsapp";

export type ContactChannel = {
  id: ContactChannelId;
  label: string;
  href?: string;
  display?: string;
};

export type AvailableChannel = ContactChannel & { href: string };

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
    { id: "email", label: "Email" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "github", label: "GitHub" },
    { id: "whatsapp", label: "WhatsApp" },
  ],
};

export function getAvailableChannels(): AvailableChannel[] {
  return contact.channels.filter(
    (channel): channel is AvailableChannel =>
      typeof channel.href === "string" && channel.href.length > 0,
  );
}
