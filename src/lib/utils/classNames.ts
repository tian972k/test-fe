import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes using twMerge.
 *
 * @param classNames - A list of class names or conditions to combine.
 * @returns A string of combined class names, optimized by twMerge.
 */
export function classNames(...classNames: ClassValue[]): string {
  return twMerge(clsx(...classNames));
}
