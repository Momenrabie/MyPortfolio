import Link from "next/link";

import { AppButton } from "@/components/app/app-button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <h1 className="font-display text-2xl font-semibold">Page not found</h1>
      <AppButton asChild>
        <Link href="/">Back home</Link>
      </AppButton>
    </main>
  );
}
