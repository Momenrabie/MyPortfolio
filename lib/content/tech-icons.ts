import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithubactions,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "@icons-pack/react-simple-icons";

export const techIcons = {
  css: {
    label: "CSS",
    Icon: SiCss,
    brandClassName: "group-hover:text-brand-css",
  },
  docker: {
    label: "Docker",
    Icon: SiDocker,
    brandClassName: "group-hover:text-brand-docker",
  },
  express: {
    label: "Express",
    Icon: SiExpress,
    brandClassName: "group-hover:text-brand-express",
  },
  figma: {
    label: "Figma",
    Icon: SiFigma,
    brandClassName: "group-hover:text-brand-figma",
  },
  githubactions: {
    label: "GitHub Actions",
    Icon: SiGithubactions,
    brandClassName: "group-hover:text-brand-github-actions",
  },
  html5: {
    label: "HTML5",
    Icon: SiHtml5,
    brandClassName: "group-hover:text-brand-html5",
  },
  nextjs: {
    label: "Next.js",
    Icon: SiNextdotjs,
    brandClassName: "group-hover:text-brand-nextjs",
  },
  nodejs: {
    label: "Node.js",
    Icon: SiNodedotjs,
    brandClassName: "group-hover:text-brand-nodejs",
  },
  postgresql: {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    brandClassName: "group-hover:text-brand-postgresql",
  },
  prisma: {
    label: "Prisma",
    Icon: SiPrisma,
    brandClassName: "group-hover:text-brand-prisma",
  },
  radixui: {
    label: "Radix UI",
    Icon: SiRadixui,
    brandClassName: "group-hover:text-brand-radix",
  },
  react: {
    label: "React",
    Icon: SiReact,
    brandClassName: "group-hover:text-brand-react",
  },
  redis: {
    label: "Redis",
    Icon: SiRedis,
    brandClassName: "group-hover:text-brand-redis",
  },
  shadcnui: {
    label: "shadcn/ui",
    Icon: SiShadcnui,
    brandClassName: "group-hover:text-brand-shadcn",
  },
  tailwindcss: {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    brandClassName: "group-hover:text-brand-tailwind",
  },
  typescript: {
    label: "TypeScript",
    Icon: SiTypescript,
    brandClassName: "group-hover:text-brand-typescript",
  },
  vercel: {
    label: "Vercel",
    Icon: SiVercel,
    brandClassName: "group-hover:text-brand-vercel",
  },
  zod: {
    label: "Zod",
    Icon: SiZod,
    brandClassName: "group-hover:text-brand-zod",
  },
} as const;

export type TechId = keyof typeof techIcons;
