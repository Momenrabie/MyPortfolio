import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import {
  getAvailableChannels,
  getChannelHrefValue,
} from "@/lib/content/contact";

export function getJsonLd(siteUrl: string) {
  const channels = getAvailableChannels();
  const sameAs = channels
    .filter((channel) => channel.id === "github" || channel.id === "linkedin")
    .map((channel) => channel.href);
  const email = channels.find((channel) => channel.id === "email");
  const whatsapp = channels.find((channel) => channel.id === "whatsapp");
  const telephone = whatsapp?.href.startsWith("https://wa.me/")
    ? `+${whatsapp.href.slice("https://wa.me/".length)}`
    : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: siteUrl,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "Person",
        name: SITE_NAME,
        jobTitle: "Full-Stack Engineer",
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
        ...(email ? { email: getChannelHrefValue(email, "mailto:") } : {}),
        ...(telephone ? { telephone } : {}),
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
    ],
  };
}
