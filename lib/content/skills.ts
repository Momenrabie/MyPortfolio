export type SkillGroup = {
  id: string;
  title: string;
  items: readonly string[];
};

export const skills = {
  index: "02",
  eyebrow: "Skills",
  heading: "The skills I build with.",
  description:
    "A focused set of skills I use in production, from the first schema to the last responsive pixel.",
  groups: [
    {
      id: "frontend",
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "CSS",
        "Responsive UI",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      items: ["Node.js", "Server Actions", "REST APIs", "Auth"],
    },
    {
      id: "database",
      title: "Data",
      items: ["PostgreSQL", "Prisma", "Zod", "Caching"],
    },
    {
      id: "tools",
      title: "Tools",
      items: ["Git", "Docker", "GitHub", "Figma"],
    },
  ] as const satisfies readonly SkillGroup[],
  marquee: [
    "Website Design",
    "Responsive Layouts",
    "Full-Stack Apps",
    "API Integration",
    "Performance",
    "Accessibility",
    "Server Components",
    "Production Auth",
  ] as const,
} as const;
