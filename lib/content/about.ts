export type AboutTextSegment = {
  text: string;
  emphasize?: boolean;
};

export type AboutFact = {
  label: string;
  value: string;
};

export type AboutStatus = {
  available: boolean;
  label: string;
  note: string;
};

export type AboutRole = {
  id: string;
  company: string;
  href: string;
  title: string;
  period: string;
  summary: string;
};

export const about = {
  index: "01",
  eyebrow: "About",
  statement: "I ship the full stack — data, API, and interface.",
  paragraphs: [
    [
      { text: "I'm a " },
      { text: "full-stack engineer", emphasize: true },
      {
        text: ". I don't split a product into a pretty UI and a leftover backend. I model the ",
      },
      { text: "Postgres schema", emphasize: true },
      { text: ", write the " },
      { text: "TypeScript", emphasize: true },
      { text: " that sits on both sides of the network, and build the " },
      { text: "Next.js", emphasize: true },
      { text: " interface people actually use." },
    ],
    [
      { text: "Most recently at " },
      { text: "Vylor", emphasize: true },
      { text: ", I owned features across the stack. Before that at " },
      { text: "Agillo", emphasize: true },
      {
        text: ", I shipped production interfaces. The work I care about is the middle: server actions, caching, auth, and accessibility — if a feature isn't ready for production, it isn't done.",
      },
    ],
  ] as const satisfies readonly (readonly AboutTextSegment[])[],
  status: {
    available: true,
    label: "Available for work",
    note: "Open to freelance and full-time roles.",
  } as const satisfies AboutStatus,
  experienceTitle: "Experience",
  roles: [
    {
      id: "vylor",
      company: "Vylor",
      href: "https://vylorai.com/",
      title: "Full-Stack Engineer",
      period: "Dec 2025 – Jul 2026",
      summary:
        "Shipped full-stack features for a cloud workspace that plans and delivers across multiple repos.",
    },
    {
      id: "agillo",
      company: "Agillo",
      href: "https://agillo.net/",
      title: "Frontend Developer",
      period: "Dec 2023 – Dec 2025",
      summary:
        "Built production UIs for a Cairo software studio serving clients across product, media, and fintech.",
    },
  ] as const satisfies readonly AboutRole[],
  facts: [
    { label: "Based in", value: "Cairo, Egypt" },
    { label: "Languages", value: "Arabic, English" },
  ] as const satisfies readonly AboutFact[],
} as const;
