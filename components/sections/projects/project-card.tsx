import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { ProjectPreview } from "@/components/sections/projects/project-preview";
import type { ProjectItem } from "@/lib/content/projects";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform motion-safe:hover:-translate-y-1">
      {project.imageSrc ? (
        <div className="relative aspect-video overflow-hidden border-b border-border">
          <Image
            src={project.imageSrc}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      ) : (
        <ProjectPreview kind={project.preview} title={project.title} />
      )}

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {project.role}
        </p>
        <h3 className="font-display text-2xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-primary transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            Live site
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
