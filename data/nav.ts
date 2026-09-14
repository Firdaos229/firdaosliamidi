import { NavItem } from "@/types";

/**
 * Ordre unique de navigation, consommé par la Sidebar, le scrollspy et la page.
 * Ajouter une section = ajouter une ligne ici (SRP : la sidebar ne connaît pas le contenu métier).
 */
export const NAV_ITEMS: NavItem[] = [
  { id: "hero", icon: "home", labelKey: "home" },
  { id: "about", icon: "user", labelKey: "about" },
  { id: "services", icon: "services", labelKey: "services" },
  { id: "skills", icon: "code", labelKey: "skills" },
  { id: "portfolio", icon: "folder", labelKey: "portfolio" },
  { id: "experience", icon: "briefcase", labelKey: "experience" },
  { id: "education", icon: "graduation", labelKey: "education" },
  { id: "languages", icon: "languages", labelKey: "languages" },
  { id: "contact", icon: "mail", labelKey: "contact" },
];
