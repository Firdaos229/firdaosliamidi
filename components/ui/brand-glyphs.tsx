interface GlyphProps {
  className?: string;
}

/** Badges minimalistes "Ps" / "Ai", dans le même esprit trait fin que le reste
 * du set d'icônes (pas de couleur de marque imposée : hérite de currentColor). */
export function PhotoshopGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" />
      <text x="12" y="15.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="700" fill="currentColor" stroke="none">
        Ps
      </text>
    </svg>
  );
}

export function IllustratorGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" />
      <text x="12" y="15.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="700" fill="currentColor" stroke="none">
        Ai
      </text>
    </svg>
  );
}
