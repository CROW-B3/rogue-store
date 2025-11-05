import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

/**
 * Render a star-based rating visualization.
 *
 * Displays up to `maxRating` stars where full stars represent the integer portion
 * of `rating` and a partial star represents a fractional portion; optionally
 * shows the numeric rating value formatted to one decimal place.
 *
 * @param rating - The rating value to visualize (typically between 0 and `maxRating`)
 * @param maxRating - The total number of stars to display
 * @param size - Visual size of each star: `"sm"`, `"md"`, or `"lg"`
 * @param showValue - Whether to show the numeric rating value next to the stars
 * @param className - Additional container class names
 * @returns A JSX element that displays the star visualization and optional numeric value
 */
export function Rating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = true,
  className,
}: RatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: maxRating }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const partial = i === Math.floor(rating) && rating % 1 !== 0;

          return (
            <Star
              key={i}
              className={cn(
                sizeClasses[size],
                filled
                  ? "fill-yellow-400 text-yellow-400"
                  : partial
                    ? "fill-yellow-400/50 text-yellow-400"
                    : "fill-none text-gray-300",
              )}
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}