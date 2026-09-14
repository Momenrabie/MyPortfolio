import {
  techIcons,
  type TechId,
} from "@/lib/content/tech-icons";
import { cn } from "@/lib/utils";

type TechIconGridProps = {
  items: readonly TechId[];
  label: string;
};

export function TechIconGrid({ items, label }: TechIconGridProps) {
  return (
    <ul
      className="grid grid-cols-4 gap-2"
      aria-label={`${label} technology stack`}
    >
      {items.map((id) => {
        const { Icon, brandClassName, label: iconLabel } = techIcons[id];

        return (
          <li
            key={id}
            aria-label={iconLabel}
            title={iconLabel}
            className={cn(
              "flex aspect-square items-center justify-center rounded-xl border border-border bg-secondary/60 text-muted-foreground group-hover:border-primary/30 hover:bg-primary/10 motion-safe:transition-[transform,background-color,border-color,color] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5",
              brandClassName,
            )}
          >
            <Icon className="size-5" aria-hidden="true" />
          </li>
        );
      })}
    </ul>
  );
}
