import type { TechId } from "@/lib/content/tech-icons";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  stack: readonly TechId[];
};

export const services = {
  index: "02",
  eyebrow: "Services",
  heading: "What I do.",
  description:
    "I take a product from a blank repo to a fast, maintainable interface — with the data and APIs it actually needs.",
  items: [
    {
      id: "full-stack",
      title: "Full-Stack Development",
      description:
        "End-to-end features in Next.js and TypeScript: schema, server actions, caching, and a UI that holds up in production.",
      stack: [
        "nextjs",
        "react",
        "typescript",
        "nodejs",
        "postgresql",
        "prisma",
        "vercel",
        "docker",
      ],
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      description:
        "Responsive, accessible interfaces with clear hierarchy, motion that respects the user, and code that stays maintainable.",
      stack: [
        "react",
        "typescript",
        "tailwindcss",
        "shadcnui",
        "radixui",
        "figma",
        "html5",
        "css",
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description:
        "Typed APIs, auth, and Postgres models that match the product — not a leftover backend glued on after the UI.",
      stack: [
        "nodejs",
        "express",
        "postgresql",
        "prisma",
        "zod",
        "redis",
        "docker",
        "githubactions",
      ],
    },
  ] as const satisfies readonly ServiceItem[],
} as const;
