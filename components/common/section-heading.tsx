import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  heading: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  heading,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", className)}>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-primary">{index}</span>
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
