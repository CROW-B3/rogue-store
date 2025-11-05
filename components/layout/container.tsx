import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Centered layout wrapper that constrains content width and applies responsive horizontal padding.
 *
 * Merges the provided `className` with the component's default utility classes and renders `children` inside a containing div.
 *
 * @param children - Content to be rendered inside the container
 * @param className - Optional additional CSS class names to apply to the container
 * @returns A div element that centers its content, limits the maximum width, and applies responsive padding
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}