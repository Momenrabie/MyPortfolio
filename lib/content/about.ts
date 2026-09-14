export type AboutTextSegment = {
  text: string;
  emphasize?: boolean;
};

export const about = {
  index: "01",
  eyebrow: "About",
  statement: "I ship the full stack — data, API, and interface.",
  portrait: {
    lightSrc: "/images/about-portrait.jpg",
    darkSrc: "/images/about-portrait-dark.jpg",
    alt: "Momen Rabie, a full-stack engineer, with a graphic of the tools he builds with.",
  },
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
      { text: "Vylor AI", emphasize: true },
      { text: ", I owned features across the stack. Before that at " },
      { text: "Agillo", emphasize: true },
      {
        text: ", I shipped production interfaces. The work I care about is the middle: server actions, caching, auth, and accessibility — if a feature isn't ready for production, it isn't done.",
      },
    ],
  ] as const satisfies readonly (readonly AboutTextSegment[])[],
} as const;
