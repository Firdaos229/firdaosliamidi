import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/** Étiquette utilisée pour les tags technos des projets. */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-border-glow bg-bg-elevated/60 px-3 py-1 text-xs text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
