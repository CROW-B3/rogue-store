"use client";

import { Toaster } from "sonner";

/**
 * Renders a toast container positioned at the bottom-right with project-specific styling and button variants.
 *
 * @returns A React element that renders a configured `Toaster` for displaying toasts.
 */
export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-background text-foreground border-border shadow-lg",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground",
        },
      }}
    />
  );
}