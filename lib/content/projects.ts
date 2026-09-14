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
  preview?: ProjectPreviewKind;
};

export const projects = {
  index: "03",
  eyebrow: "Projects",
  heading: "Selected work.",
  description:
    "Production interfaces from Vylor AI and Agillo, plus client frontend I shipped for EGL and Makan Almustaqbal.",
  items: [
    {
      id: "vylor",
      title: "Vylor AI",
      role: "Full-Stack Engineer",
      description:
        "A cloud workspace that maps team repositories, plans cross-repo work, and delivers coordinated changes without local setup friction.",
      liveUrl: "https://vylorai.com/",
      imageSrc: "/images/projects/vylor.png",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      preview: "vylor",
    },
    {
      id: "egl",
      title: "Economic Green Laptops",
      role: "Frontend Developer",
      description:
        "Bilingual storefront for certified refurbished laptops in Egypt — catalog, quote flow, and service booking. I shipped the customer-facing UI as frontend for a period.",
      liveUrl: "https://www.egl.com.eg/en",
      imageSrc: "/images/projects/egl.png",
      techStack: ["React", "TypeScript", "i18n", "Responsive UI"],
    },
    {
      id: "agillo",
      title: "Agillo",
      role: "Frontend Developer",
      description:
        "Custom software studio site and production interfaces for a Cairo team serving product, media, and fintech clients.",
      liveUrl: "https://agillo.net/",
      imageSrc: "/images/projects/agillo.png",
      techStack: ["React", "TypeScript", "Responsive UI", "CSS"],
      preview: "agillo",
    },
    {
      id: "makan",
      title: "Makan Almustaqbal",
      role: "Frontend Developer",
      description:
        "Arabic RTL real-estate platform for property search across Saudi cities — listings, filters, and inquiry. Frontend work on the public interface for a period.",
      liveUrl: "https://makanalmustaqbal.com/",
      imageSrc: "/images/projects/makan-almustaqbal.jpg",
      techStack: ["WordPress", "RTL", "CSS", "Responsive UI"],
    },
  ] as const satisfies readonly ProjectItem[],
} as const;
