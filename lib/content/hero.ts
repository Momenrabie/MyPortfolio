export type CodeTokenKind = "keyword" | "string" | "comment" | "plain";

export type CodeToken = {
  text: string;
  kind: CodeTokenKind;
};

export type CodeLine = {
  indent: number;
  tokens: CodeToken[];
};

export const heroTypewriterDurationMs = 3200;

export const hero = {
  eyebrow: "Full-Stack Engineer",
  firstName: "Momen",
  headline: "I build for the web.",
  description:
    "I design and ship production web apps with Next.js, TypeScript, and Node.js — from polished interfaces to reliable backends.",
  primaryCta: { href: "/#contact", label: "Hire Me" },
  secondaryCta: { href: "/#projects", label: "View Work" },
  skills: [
    { id: "nextjs", label: "Next.js" },
    { id: "typescript", label: "TypeScript" },
    { id: "prisma", label: "Prisma" },
    { id: "postgresql", label: "PostgreSQL" },
    { id: "react", label: "React" },
    { id: "nodejs", label: "Node.js" },
    { id: "tailwind", label: "Tailwind CSS" },
    { id: "git", label: "Git" },
    { id: "docker", label: "Docker" },
  ],
  codeFileName: "developer.ts",
} as const;

function skillsCodeLines(): CodeLine[] {
  const lastIndex = hero.skills.length - 1;

  return [
    { indent: 2, tokens: [{ kind: "plain", text: "skills: [" }] },
    ...hero.skills.map((item, index) => ({
      indent: 4,
      tokens: [
        { kind: "string" as const, text: `"${item.label}"` },
        ...(index < lastIndex ? [{ kind: "plain" as const, text: "," }] : []),
      ],
    })),
    { indent: 2, tokens: [{ kind: "plain", text: "]," }] },
  ];
}

export const heroCodeLines: CodeLine[] = [
  {
    indent: 0,
    tokens: [
      { kind: "keyword", text: "const" },
      { kind: "plain", text: " developer = {" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { kind: "plain", text: "name: " },
      { kind: "string", text: '"Momen Rabie"' },
      { kind: "plain", text: "," },
    ],
  },
  {
    indent: 2,
    tokens: [
      { kind: "plain", text: "role: " },
      { kind: "string", text: '"Full-Stack Engineer"' },
      { kind: "plain", text: "," },
    ],
  },
  ...skillsCodeLines(),
  {
    indent: 2,
    tokens: [{ kind: "comment", text: "// always shipping" }],
  },
  {
    indent: 0,
    tokens: [{ kind: "plain", text: "};" }],
  },
];

export function countCodeChars(lines: readonly CodeLine[]): number {
  return lines.reduce((sum, line, index) => {
    const tokenChars = line.tokens.reduce(
      (tokenSum, token) => tokenSum + token.text.length,
      0,
    );
    const newline = index < lines.length - 1 ? 1 : 0;
    return sum + line.indent + tokenChars + newline;
  }, 0);
}

export function sliceTokens(
  lines: readonly CodeLine[],
  visibleChars: number,
): CodeLine[] {
  const total = countCodeChars(lines);
  if (visibleChars >= total) {
    return lines.map((line) => ({
      indent: line.indent,
      tokens: [...line.tokens],
    }));
  }

  if (visibleChars <= 0) {
    return [];
  }

  const result: CodeLine[] = [];
  let remaining = visibleChars;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line || remaining <= 0) {
      break;
    }

    const indentShown = Math.min(line.indent, remaining);
    remaining -= indentShown;

    const tokens: CodeToken[] = [];
    if (remaining > 0) {
      for (const token of line.tokens) {
        if (remaining <= 0) {
          break;
        }

        if (token.text.length <= remaining) {
          tokens.push(token);
          remaining -= token.text.length;
        } else {
          tokens.push({
            kind: token.kind,
            text: token.text.slice(0, remaining),
          });
          remaining = 0;
        }
      }
    }

    result.push({ indent: indentShown, tokens });

    if (index < lines.length - 1 && remaining > 0) {
      remaining -= 1;
    }
  }

  return result;
}

export function codeLinesToPlainText(lines: readonly CodeLine[]): string {
  return lines
    .map(
      (line) =>
        `${" ".repeat(line.indent)}${line.tokens.map((token) => token.text).join("")}`,
    )
    .join("\n");
}
