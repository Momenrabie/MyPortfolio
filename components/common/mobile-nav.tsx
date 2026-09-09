"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { AppButton } from "@/components/app/app-button";
import { NAV_ITEMS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.classList.add("overflow-hidden");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function handleNavigate(href: (typeof NAV_ITEMS)[number]["href"]) {
    setOpen(false);
    const id = href.split("#")[1];

    if (!id) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  }

  return (
    <div className="xl:hidden">
      <AppButton
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </AppButton>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-md"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-6 py-6">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavigate(item.href)}
                    className="block rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <AppButton asChild className="mt-4 w-full rounded-full">
              <Link href="/#contact" onClick={() => handleNavigate("/#contact")}>
                Contact
              </Link>
            </AppButton>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
