import { Skeleton } from "@/components/ui/skeleton";

/**
 * Renders a skeleton placeholder for a product card.
 *
 * @returns A JSX element containing a square image skeleton and line skeletons for title and details.
 */
export function ProductSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <Skeleton className="aspect-square w-full" />
      <div className="p-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="mt-2 h-5 w-1/2" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-1 h-4 w-full" />
      </div>
    </div>
  );
}

/**
 * Renders a responsive grid of product card skeletons used as loading placeholders.
 *
 * @param count - Number of skeleton items to render (defaults to 8)
 * @returns A JSX element containing the grid of product skeleton cards
 */
export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}