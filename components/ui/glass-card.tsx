import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Active un léger effet de lever + bordure lumineuse au survol (cartes cliquables). */
  interactive?: boolean;
}

/** Carte de base "glassmorphism" utilisée par toutes les sections. Une seule définition
 * du style évite toute divergence visuelle entre sections (SRP + cohérence design). */
export function GlassCard({ children, className, interactive = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-glow bg-panel backdrop-blur-xl p-5",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/50 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.5)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
