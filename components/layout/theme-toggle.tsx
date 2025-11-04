"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/lib/theme-store";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
