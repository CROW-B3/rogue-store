import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders a section element with vertical padding and optional additional CSS classes.
 *
 * @param children - Content to render inside the section
 * @param className - Additional CSS class names merged with the default padding classes
 * @returns The rendered `<section>` element
 */
export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>{children}</section>
  );
}