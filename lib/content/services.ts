export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export const services = {
  index: "03",
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
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      description:
        "Responsive, accessible interfaces with clear hierarchy, motion that respects the user, and code that stays maintainable.",
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description:
        "Typed APIs, auth, and Postgres models that match the product — not a leftover backend glued on after the UI.",
    },
  ] as const satisfies readonly ServiceItem[],
} as const;
