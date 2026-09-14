interface SocialGlyphProps {
  className?: string;
}

/** GitHub et LinkedIn ne sont plus fournis par lucide-react (icônes de marque
 * retirées) : deux glyphes SVG minimalistes maison, cohérents avec le reste
 * du set d'icônes (trait fin, pas de remplissage plein). */
export function GithubGlyph({ className }: SocialGlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinGlyph({ className }: SocialGlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="10" x2="8" y2="17" />
      <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
      <path d="M12 17v-4.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17" />
      <line x1="12" y1="10" x2="12" y2="17" />
    </svg>
  );
}
