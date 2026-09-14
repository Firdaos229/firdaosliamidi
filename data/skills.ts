import { SkillItem } from "@/types";

// Regroupées par catégorie pour l'affichage (Frontend / Backend & CMS / Outils / Autres).
// L'icône de chaque compétence est résolue séparément par id dans components/ui/skill-icon.tsx
// (la donnée métier ne connaît pas la librairie d'icônes utilisée).
export const SKILLS: SkillItem[] = [
  // Frontend
  { id: "javascript", labelKey: "javascript", level: 88, category: "frontend" },
  { id: "typescript", labelKey: "typescript", level: 85, category: "frontend" },
  { id: "html", labelKey: "html", level: 92, category: "frontend" },
  { id: "css", labelKey: "css", level: 90, category: "frontend" },
  { id: "tailwind", labelKey: "tailwind", level: 90, category: "frontend" },
  { id: "react", labelKey: "react", level: 88, category: "frontend" },
  { id: "nextjs", labelKey: "nextjs", level: 88, category: "frontend" },

  // Backend & CMS
  { id: "laravel", labelKey: "laravel", level: 55, category: "backend-cms" },
  { id: "wordpress", labelKey: "wordpress", level: 92, category: "backend-cms" },
  { id: "elementor", labelKey: "elementor", level: 85, category: "backend-cms" },
  { id: "wpbakery", labelKey: "wpbakery", level: 80, category: "backend-cms" },
  { id: "woocommerce", labelKey: "woocommerce", level: 75, category: "backend-cms" },

  // Outils
  { id: "git", labelKey: "git", level: 82, category: "outils" },
  { id: "gitlab", labelKey: "gitlab", level: 75, category: "outils" },
  { id: "docker", labelKey: "docker", level: 60, category: "outils" },
  { id: "scrum", labelKey: "scrum", level: 75, category: "outils" },
  { id: "api-rest", labelKey: "apiRest", level: 78, category: "outils" },
  { id: "debug", labelKey: "debug", level: 80, category: "outils" },

  // Autres
  { id: "seo-perf", labelKey: "seoPerf", level: 80, category: "autres" },
  { id: "responsive", labelKey: "responsiveDesign", level: 88, category: "autres" },
  { id: "photoshop", labelKey: "photoshop", level: 70, category: "autres" },
  { id: "illustrator", labelKey: "illustrator", level: 65, category: "autres" },
];
