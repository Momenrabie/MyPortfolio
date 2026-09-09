export type ExperienceRole = {
  id: string;
  company: string;
  href: string;
  title: string;
  period: string;
  summary: string;
};

export const experience = {
  index: "05",
  eyebrow: "Experience",
  heading: "Where the work shipped.",
  description:
    "Two production teams, one through-line: own the feature from schema to interface and leave it ready for real users.",
  roles: [
    {
      id: "vylor",
      company: "Vylor AI",
      href: "https://vylorai.com/",
      title: "Full-Stack Engineer",
      period: "Dec 2025 – Jul 2026",
      summary:
        "Shipped full-stack features for a cloud workspace that plans and delivers across multiple repositories — from data and APIs to the interface people actually use.",
    },
    {
      id: "agillo",
      company: "Agillo",
      href: "https://agillo.net/",
      title: "Frontend Developer",
      period: "Dec 2023 – Dec 2025",
      summary:
        "Built production interfaces for a Cairo software studio serving clients across product, media, and fintech — responsive, accessible, and ready to ship.",
    },
  ] as const satisfies readonly ExperienceRole[],
} as const;
