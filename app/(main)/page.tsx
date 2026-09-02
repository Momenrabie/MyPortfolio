import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Portfolio
        </h1>
        <ThemeToggle />
      </div>
      <p className="max-w-xl text-lg text-muted-foreground">
        Phase 1 scaffold is ready. Sections land in the next phase.
      </p>
      <p className="font-mono text-sm text-slate-500">
        Prisma client: {prisma ? "ready" : "missing"}
      </p>
      <div>
        <Button type="button">shadcn button</Button>
      </div>
    </main>
  );
}
