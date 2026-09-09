export type ProjectPreviewKind = "vylor" | "agillo";

export type ProjectItem = {
  id: string;
  title: string;
  role: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  imageSrc?: string;
  techStack: readonly string[];
  preview: ProjectPreviewKind;
};

export const projects = {
  index: "04",
  eyebrow: "Projects",
  heading: "Selected work.",
  description:
    "Production work I shipped at Vylor AI and Agillo. Screenshots can land later — the products are live now.",
  items: [
    {
      id: "vylor",
      title: "Vylor AI",
      role: "Full-Stack Engineer",
      description:
        "A cloud workspace that maps team repositories, plans cross-repo work, and delivers coordinated changes without local setup friction.",
      liveUrl: "https://vylorai.com/",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      preview: "vylor",
    },
    {
      id: "agillo",
      title: "Agillo",
      role: "Frontend Developer",
      description:
        "Custom software studio site and production interfaces for a Cairo team serving product, media, and fintech clients.",
      liveUrl: "https://agillo.net/",
      techStack: ["React", "TypeScript", "Responsive UI", "CSS"],
      preview: "agillo",
    },
  ] as const satisfies readonly ProjectItem[],
} as const;
