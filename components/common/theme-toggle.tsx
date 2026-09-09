"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { AppButton } from "@/components/app/app-button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <AppButton
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </AppButton>
  );
}
