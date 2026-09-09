import type { ProjectPreviewKind } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

type ProjectPreviewProps = {
  kind: ProjectPreviewKind;
  title: string;
};

export function ProjectPreview({ kind, title }: ProjectPreviewProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-video overflow-hidden border-b border-border",
        kind === "vylor" ? "bg-navy-950" : "bg-cream-50",
      )}
    >
      <div className="absolute inset-0 bg-primary/10 blur-3xl" />
      {kind === "vylor" ? <VylorPreview title={title} /> : <AgilloPreview title={title} />}
    </div>
  );
}

function VylorPreview({ title }: { title: string }) {
  return (
    <div className="relative flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-navy-950/80 px-3 py-2">
        <span className="font-mono text-xs text-mist-50">{title}</span>
        <span className="rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[0.65rem] text-primary dark:bg-teal-600/20 dark:text-teal-600">
          Ready
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-card/30 p-3">
          <p className="font-mono text-[0.65rem] text-mist-50/70">workspace</p>
          <p className="mt-2 text-sm text-mist-50">FurniShop</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-card/30 p-3">
          <p className="font-mono text-[0.65rem] text-mist-50/70">api</p>
          <p className="mt-2 text-sm text-mist-50">FurniShop-Api</p>
        </div>
      </div>
    </div>
  );
}

function AgilloPreview({ title }: { title: string }) {
  return (
    <div className="relative flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-semibold text-ink-950">
          {title}
        </span>
        <span className="rounded-full bg-primary px-2 py-0.5 font-mono text-[0.65rem] text-primary-foreground dark:bg-teal-600 dark:text-cream-50">
          Studio
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3">
        {["UX/UI", "Product", "Media", "Fintech"].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-ink-950/10 bg-cream-50/80 p-3"
          >
            <p className="text-sm font-medium text-ink-950">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
