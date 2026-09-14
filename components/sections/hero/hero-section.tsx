import Link from "next/link";

import { AppButton } from "@/components/app/app-button";
import { CodeWindow } from "@/components/sections/hero/code-window";
import {
  hero,
  heroCodeLines,
  heroTypewriterDurationMs,
} from "@/lib/content/hero";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-4rem)] items-center overflow-x-clip px-6 py-16"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        <div className="flex min-w-0 flex-col gap-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">{hero.firstName}</span>
            <span className="mt-2 block">{hero.headline}</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <AppButton asChild size="lg" className="rounded-full">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </AppButton>
            <AppButton
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </AppButton>
          </div>
        </div>
        <div className="min-w-0">
          <CodeWindow
            fileName={hero.codeFileName}
            lines={heroCodeLines}
            durationMs={heroTypewriterDurationMs}
          />
        </div>
      </div>
    </section>
  );
}
