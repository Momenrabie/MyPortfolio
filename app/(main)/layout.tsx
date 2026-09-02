import type { ReactNode } from "react";

import { SiteHeader } from "@/components/common/site-header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
