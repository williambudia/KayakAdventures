import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine multiple class names with clsx and tailwind-merge
 * @param  {...string} inputs - Class names to combine
 * @returns {string} - Combined class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}