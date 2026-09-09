import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { getAvailableChannels } from "@/lib/content/contact";

export function getJsonLd(siteUrl: string) {
  const sameAs = getAvailableChannels()
    .filter((channel) => channel.id === "github" || channel.id === "linkedin")
    .map((channel) => channel.href);

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
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
    ],
  };
}
