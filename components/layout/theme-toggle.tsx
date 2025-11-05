"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/lib/theme-store";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

/**
 * Renders an icon button that toggles the application's color theme and applies the current theme class to the document root.
 *
 * The button displays a Moon icon when the current theme is "light" and a Sun icon otherwise. When the theme changes, the component ensures the document's root element has the matching "light" or "dark" class.
 *
 * @returns A React element: an icon-styled button that toggles the theme and reflects the active theme with the appropriate icon.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Button
      data-testid="theme-toggle"
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
