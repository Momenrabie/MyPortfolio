import { Reveal } from "@/components/common/reveal";
import { AboutAside } from "@/components/sections/about/about-aside";
import { about, type AboutTextSegment } from "@/lib/content/about";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5" delay="sm">
          <AboutAside
            status={about.status}
            experienceTitle={about.experienceTitle}
            roles={about.roles}
            facts={about.facts}
          />
        </Reveal>

        <Reveal className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted-foreground">
              [{about.index}]
            </span>
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              {about.eyebrow}
            </p>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {about.statement}
          </h2>
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((segments, index) => (
              <AboutParagraph key={index} segments={segments} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
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
