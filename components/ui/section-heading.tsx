interface SectionHeadingProps {
  kicker: string;
  title: string;
  intro?: string;
}

/** En-tête standard pour chaque section (kicker + titre + intro courte).
 * Un seul composant garantit la même hiérarchie typographique partout. */
export function SectionHeading({ kicker, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-sm font-medium text-accent-cyan">{kicker}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 text-base text-fg-muted">{intro}</p> : null}
    </div>
  );
}
