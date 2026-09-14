import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Fusionne des classes conditionnelles en résolvant les conflits Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Relit un tableau traduit depuis les locales (ex. "experience.items.sinedev.highlights")
 * en s'appuyant sur t(), qui résout déjà les index numériques comme des clés de tableau.
 * Utilisé partout où une liste à puces vit dans les fichiers de traduction (expériences,
 * projets...), pour éviter de dupliquer cette lecture indexée dans chaque composant.
 */
export function translateList(t: (key: string) => string, baseKey: string): string[] {
  const items: string[] = [];
  let index = 0;
  while (true) {
    const key = `${baseKey}.${index}`;
    const value = t(key);
    if (value === key) break;
    items.push(value);
    index += 1;
  }
  return items;
}

