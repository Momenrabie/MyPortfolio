import { ArrowUpRight } from "lucide-react";

import type {
  AboutFact,
  AboutRole,
  AboutStatus,
} from "@/lib/content/about";
import { cn } from "@/lib/utils";

type AboutAsideProps = {
  status: AboutStatus;
  experienceTitle: string;
  roles: readonly AboutRole[];
  facts: readonly AboutFact[];
};

export function AboutAside({
  status,
  experienceTitle,
  roles,
  facts,
}: AboutAsideProps) {
  return (
    <aside className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 bg-primary/20 blur-3xl"
      />
      <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                "size-2 rounded-full",
                status.available
                  ? "bg-accent motion-safe:animate-pulse"
                  : "bg-muted-foreground",
              )}
            />
            <p className="font-medium text-foreground">{status.label}</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{status.note}</p>
        </div>

        <div>
          <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
            {experienceTitle}
          </p>
          <ol className="mt-4">
            {roles.map((role) => (
              <li
                key={role.id}
                className="border-t border-border py-4 last:pb-0"
              >
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-sm font-display text-lg font-medium text-foreground transition-colors hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {role.company}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <p className="mt-1 text-sm text-foreground">{role.title}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {role.period}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {role.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <dl className="border-t border-border pt-2">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 border-b border-border py-3 last:border-b-0"
            >
              <dt className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="text-right text-sm text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
