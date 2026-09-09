import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import { ProjectCard } from "@/components/sections/projects/project-card";
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

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.items.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={index === 0 ? "none" : "sm"}>
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
