import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine multiple class value inputs into a single, conflict-resolved class name string.
 *
 * @param inputs - One or more class values (strings, arrays, objects, etc.) to be combined
 * @returns A single string of class names with Tailwind CSS class conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a numeric amount as a locale-aware currency string for Sri Lanka.
 *
 * @param price - The monetary amount in major currency units (e.g., 1234.5 for one thousand two hundred thirty-four and fifty cents)
 * @param currency - ISO 4217 currency code to use for formatting (defaults to "LKR")
 * @returns The amount formatted as a currency string using the "en-LK" locale with between 0 and 2 fractional digits
 */
export function formatPrice(price: number, currency: string = "LKR"): string {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Creates a short unique order identifier.
 *
 * @returns An identifier in the format `ORD-<TIMESTAMP>-<RANDOM>` where `<TIMESTAMP>` is the current time encoded in base-36 (uppercase) and `<RANDOM>` is a 4-character random base-36 segment (uppercase)
 */
export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ORD-${timestamp}-${random}`;
}

/**
 * Creates a debounced wrapper that delays invoking `func` until `wait` milliseconds have elapsed since the last call.
 *
 * @param func - The function to debounce; its parameter types are preserved by the returned wrapper.
 * @param wait - Delay in milliseconds to wait after the most recent call before invoking `func`
 * @returns A function with the same parameters as `func` that cancels any pending invocation and schedules `func` to run after `wait` ms; it does not return a value
 */
export function debounce<T extends (...args: never[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
