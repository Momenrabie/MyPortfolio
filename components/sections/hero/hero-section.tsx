import Link from "next/link";

import { AppButton } from "@/components/app/app-button";
import { CodeWindow } from "@/components/sections/hero/code-window";
import { StackIcon } from "@/components/sections/hero/stack-icons";
import {
  hero,
  heroCodeLines,
  heroTypewriterDurationMs,
} from "@/lib/content/hero";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-x-clip px-6 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
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
          <ul className="flex flex-wrap gap-2">
            {hero.stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-foreground"
              >
                <StackIcon id={item.id} className="size-4 text-primary" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <CodeWindow
          fileName={hero.codeFileName}
          lines={heroCodeLines}
          durationMs={heroTypewriterDurationMs}
        />
      </div>
    </section>
  );
}
