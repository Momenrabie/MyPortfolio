"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";

import { AppButton } from "@/components/app/app-button";
import { ProjectCard } from "@/components/sections/projects/project-card";
import type { ProjectItem } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

type ProjectsCarouselProps = {
  items: readonly ProjectItem[];
};

function padIndex(value: number) {
  return String(value).padStart(2, "0");
}

export function ProjectsCarousel({ items }: ProjectsCarouselProps) {
  const [duration, setDuration] = useState(20);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    duration,
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncDuration = () => {
      setDuration(media.matches ? 0 : 20);
    };

    syncDuration();
    media.addEventListener("change", syncDuration);

    return () => {
      media.removeEventListener("change", syncDuration);
    };
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollNext, scrollPrev],
  );

  const selectedProject = items[selectedIndex];
  const total = items.length;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected work"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="flex flex-col gap-6 rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-sm tracking-widest text-muted-foreground tabular-nums">
          <span className="text-foreground">{padIndex(selectedIndex + 1)}</span>
          <span aria-hidden="true"> / </span>
          <span className="sr-only">of</span>
          {padIndex(total)}
        </p>
        <div className="flex items-center gap-2">
          <AppButton
            type="button"
            variant="outline"
            size="icon-lg"
            aria-label="Previous project"
            onClick={scrollPrev}
          >
            <ChevronLeft aria-hidden="true" />
          </AppButton>
          <AppButton
            type="button"
            variant="outline"
            size="icon-lg"
            aria-label="Next project"
            onClick={scrollNext}
          >
            <ChevronRight aria-hidden="true" />
          </AppButton>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {selectedProject?.title}
      </p>

      <div
        className="cursor-grab overflow-hidden active:cursor-grabbing"
        ref={emblaRef}
      >
        <ul className="-ml-6 flex touch-pan-y">
          {items.map((project, index) => (
            <li
              key={project.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}`}
              aria-current={index === selectedIndex ? "true" : undefined}
              className="min-w-0 flex-[0_0_82%] pl-6 sm:flex-[0_0_62%] lg:flex-[0_0_44%]"
            >
              <ProjectCard project={project} liftOnHover={false} />
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex items-center justify-center gap-1">
        {items.map((project, index) => (
          <li key={project.id}>
            <button
              type="button"
              aria-label={`Go to ${project.title}`}
              aria-current={index === selectedIndex ? "true" : undefined}
              onClick={() => scrollTo(index)}
              className="flex size-8 items-center justify-center rounded-full focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <span
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  index === selectedIndex
                    ? "bg-primary"
                    : "bg-border hover:bg-muted-foreground/40",
                )}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
