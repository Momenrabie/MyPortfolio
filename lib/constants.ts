export const SITE_NAME = "Momen Rabie";

export const BRAND_COLORS = {
  lightPrimary: "#b44d32",
  lightPrimaryForeground: "#f4efe6",
} as const;

export const SITE_DESCRIPTION =
  "Full-Stack Engineer in Cairo building production web apps with Next.js, TypeScript, and Node.js — from polished interfaces to reliable backends.";

export const SITE_KEYWORDS = [
  "Momen Rabie",
  "Full-Stack Engineer",
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Cairo",
  "Portfolio",
] as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export const NAV_ITEMS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;
