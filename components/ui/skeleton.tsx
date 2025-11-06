import { cn } from "@/lib/utils";

/**
 * Renders a div styled as a pulsing skeleton placeholder.
 *
 * @param className - Additional class names to merge with the default skeleton styles.
 * @param props - Other HTML div attributes that are spread onto the rendered element.
 * @returns The rendered skeleton div element.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };