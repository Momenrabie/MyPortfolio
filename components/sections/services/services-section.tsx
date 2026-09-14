import { Layers, PanelsTopLeft, Server } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import { TechIconGrid } from "@/components/sections/services/tech-icon-grid";
import { services } from "@/lib/content/services";

const serviceIcons = {
  "full-stack": Layers,
  frontend: PanelsTopLeft,
  backend: Server,
} as const;

const revealDelay = ["none", "sm", "md"] as const;

export function ServicesSection() {
  return (
    <SectionShell id="services">
      <Reveal>
        <SectionHeading
          index={services.index}
          eyebrow={services.eyebrow}
          heading={services.heading}
          description={services.description}
        />
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-3">
        {services.items.map((service, index) => {
          const Icon = serviceIcons[service.id];
          const serviceNumber = String(index + 1).padStart(2, "0");

          return (
            <li key={service.id} className="h-full">
              <Reveal
                className="h-full"
                delay={revealDelay[index] ?? "none"}
              >
                <article className="group relative flex h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-xl motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-300 motion-safe:hover:-translate-y-1 md:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-x-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-500"
                  />

                  <div className="relative z-10 flex h-full w-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground motion-safe:transition-colors motion-safe:duration-300">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <span
                        aria-hidden="true"
                        className="font-mono text-5xl font-semibold leading-none tracking-tighter text-border group-hover:text-primary/30 motion-safe:transition-colors motion-safe:duration-300"
                      >
                        {serviceNumber}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-4 grow text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-8 border-t border-border pt-6">
                      <TechIconGrid
                        items={service.stack}
                        label={service.title}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
