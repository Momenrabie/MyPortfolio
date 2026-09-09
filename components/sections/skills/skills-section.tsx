import { Code2, Database, Server, Wrench } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import { skills } from "@/lib/content/skills";

const groupIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
} as const;

type SkillGroupId = (typeof skills.groups)[number]["id"];

const revealDelay = ["none", "sm", "md", "lg"] as const;

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <Reveal>
        <SectionHeading
          index={skills.index}
          eyebrow={skills.eyebrow}
          heading={skills.heading}
          description={skills.description}
        />
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.groups.map((group, index) => {
          const Icon = groupIcons[group.id as SkillGroupId];

          return (
            <li key={group.id}>
              <Reveal delay={revealDelay[index] ?? "none"}>
                <article className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform motion-safe:hover:-translate-y-1">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <SkillsMarquee />
    </SectionShell>
  );
}

function SkillsMarquee() {
  const loop = [...skills.marquee, ...skills.marquee];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-secondary py-4">
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 motion-safe:hidden">
        {skills.marquee.map((item) => (
          <li
            key={item}
            className="font-display text-sm font-medium tracking-wide text-muted-foreground uppercase"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="hidden w-max gap-8 motion-safe:flex motion-safe:animate-marquee">
        {loop.map((item, index) => (
          <p
            key={`${item}-${index}`}
            className="flex items-center gap-8 font-display text-sm font-medium tracking-wide text-muted-foreground uppercase"
            aria-hidden={index >= skills.marquee.length}
          >
            {item}
            <span className="text-primary" aria-hidden="true">
              ✦
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
