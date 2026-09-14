import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import { ProjectsCarousel } from "@/components/sections/projects/projects-carousel";
import { projects } from "@/lib/content/projects";

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <Reveal>
        <SectionHeading
          index={projects.index}
          eyebrow={projects.eyebrow}
          heading={projects.heading}
          description={projects.description}
        />
      </Reveal>

      <Reveal delay="sm">
        <ProjectsCarousel items={projects.items} />
      </Reveal>
    </SectionShell>
  );
}
