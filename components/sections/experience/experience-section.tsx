import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import { experience } from "@/lib/content/experience";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <Reveal>
        <SectionHeading
          index={experience.index}
          eyebrow={experience.eyebrow}
          heading={experience.heading}
          description={experience.description}
        />
      </Reveal>

      <ol className="relative flex flex-col border-l border-border pl-6 md:pl-8">
        {experience.roles.map((role, index) => (
          <li key={role.id} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-6 size-3 -translate-x-1/2 rounded-full bg-primary md:-left-8"
            />
            <Reveal delay={index === 0 ? "none" : "sm"}>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {role.period}
                </p>
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-2 rounded-sm font-display text-2xl font-semibold text-foreground transition-colors hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {role.company}
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <p className="mt-1 text-base font-medium text-primary">
                  {role.title}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
