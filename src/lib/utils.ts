/**
 * A simple utility to combine class names conditionally.
 * Usage: cn("bg-blue-500", isActive && "text-white", "p-4")
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}