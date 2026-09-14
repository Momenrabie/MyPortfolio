import Image from "next/image";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionShell } from "@/components/common/section-shell";
import { about, type AboutTextSegment } from "@/lib/content/about";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5" delay="sm" from="left">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 -z-10 bg-primary/20 blur-3xl"
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="absolute inset-0 dark:invisible">
                <Image
                  src={about.portrait.lightSrc}
                  alt={about.portrait.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 invisible dark:visible">
                <Image
                  src={about.portrait.darkSrc}
                  alt={about.portrait.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-6 lg:col-span-7">
          <SectionHeading
            index={about.index}
            eyebrow={about.eyebrow}
            heading={about.statement}
          />
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((segments, index) => (
              <AboutParagraph key={index} segments={segments} />
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function AboutParagraph({
  segments,
}: {
  segments: readonly AboutTextSegment[];
}) {
  return (
    <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
      {segments.map((segment, index) => (
        <span
          key={`${segment.text}-${index}`}
          className={segment.emphasize ? "text-foreground" : undefined}
        >
          {segment.text}
        </span>
      ))}
    </p>
  );
}
