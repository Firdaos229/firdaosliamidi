"use client";

import { useEffect, useState } from "react";

/**
 * Observe une liste de sections par id et retourne l'id de celle actuellement
 * la plus visible dans le viewport. Découplé de la Sidebar : n'importe quel
 * composant peut s'y abonner (SRP + réutilisabilité).
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Fenêtre centrée sur le viewport : la section "active" est celle qui
        // occupe le milieu de l'écran, pas seulement celle qui touche le haut.
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
