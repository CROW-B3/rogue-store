import { formatPrice } from "@/lib/utils";

interface PriceProps {
  amount: number;
  currency?: string;
  className?: string;
}

/**
 * Render a span that displays a formatted monetary amount.
 *
 * @param amount - The numeric amount to format and display
 * @param currency - Currency code used for formatting (defaults to `"LKR"`)
 * @param className - Optional CSS class applied to the wrapping span
 * @returns A span element containing the formatted price
 */
export function Price({ amount, currency = "LKR", className }: PriceProps) {
  return <span className={className}>{formatPrice(amount, currency)}</span>;
}