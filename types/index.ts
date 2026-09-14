// Types centralisés du portfolio.
// Toute nouvelle forme de données partagée entre plusieurs composants doit être déclarée ici,
// jamais recréée localement dans un composant (principe SOLID : une seule source de vérité).

export type Locale = "fr" | "en";

export type ThemeMode = "dark" | "light";

/** Icônes disponibles pour la sidebar / sections (voir components/ui/icon.tsx). */
export type SectionIconName =
  | "home"
  | "user"
  | "services"
  | "code"
  | "folder"
  | "briefcase"
  | "graduation"
  | "languages"
  | "mail";

/** Une entrée de navigation, utilisée à la fois par la Sidebar et le scrollspy. */
export interface NavItem {
  id: string;
  icon: SectionIconName;
  /** Clé de traduction dans locales/{fr,en}.json -> nav.<labelKey> */
  labelKey: string;
}

export interface SkillItem {
  id: string;
  /** Clé de traduction -> skills.items.<id> */
  labelKey: string;
  /** Niveau de maîtrise en pourcentage, 0-100. Donnée non traduisible -> reste dans data/. */
  level: number;
  category: "frontend" | "backend-cms" | "outils" | "autres";
}

export type ProjectCategory = "frontend" | "backend" | "wordpress";

export interface ProjectItem {
  id: string;
  /** Une ou plusieurs catégories : un projet fullstack peut être à la fois
   * "frontend" et "backend", un site WordPress peut être seul dans "wordpress". */
  categories: ProjectCategory[];
  /** Clés de traduction -> portfolio.projects.<id>.{title,description,highlights[]} */
  tags: string[];
  /** Image de couverture (carte + slider). */
  image: string;
  /** Images supplémentaires affichées dans le détail (modal), en plus de `image`. */
  gallery?: string[];
  href?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  /** Clés de traduction -> experience.items.<id>.{role,company,period,highlights[]} */
  logoLetter: string;
  /** Technologies utilisées sur ce poste (non traduit : noms de marque). */
  tools: string[];
}

export interface EducationItem {
  id: string;
  /** Clé de traduction -> education.items.<id>.{title,institution,period} */
  kind: "formation" | "certification";
}

export interface LanguageItem {
  id: string;
  level: number;
}

export interface ContactChannel {
  id: string;
  icon: SectionIconName | "phone";
  value: string;
  href: string;
}
