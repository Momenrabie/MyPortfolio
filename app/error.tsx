"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
      <p className="text-muted-foreground">Please try again.</p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </main>
  );
}
