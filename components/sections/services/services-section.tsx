import { Layers, PanelsTopLeft, Server } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import { services } from "@/lib/content/services";

const serviceIcons = {
  "full-stack": Layers,
  frontend: PanelsTopLeft,
  backend: Server,
} as const;

type ServiceId = (typeof services.items)[number]["id"];

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
          const Icon = serviceIcons[service.id as ServiceId];

          return (
            <li key={service.id}>
              <Reveal delay={revealDelay[index] ?? "none"}>
                <article className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform motion-safe:hover:-translate-y-1 md:p-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
