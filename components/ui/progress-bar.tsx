"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  /** Texte secondaire optionnel affiché à droite du label (ex. niveau de langue). */
  valueLabel?: string;
  level: number;
  delay?: number;
}

/** Barre de progression animée, utilisée par Compétences et Langues (une seule
 * implémentation de "niveau visuel" dans tout le site). */
export function ProgressBar({ label, valueLabel, level, delay = 0 }: ProgressBarProps) {
  const prefersReducedMotion = useReducedMotion();
  const clamped = Math.min(100, Math.max(0, level));

  return (
    <div className="w-full">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-fg">{label}</span>
        <span className="text-xs text-fg-muted">{valueLabel ?? `${clamped}%`}</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-track"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
          initial={{ width: prefersReducedMotion ? `${clamped}%` : 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
