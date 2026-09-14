import { ExperienceItem } from "@/types";

// Ordre ante-chronologique (le plus récent en premier).
// Le rôle, l'entreprise, la période et le détail (highlights) sont traduits :
// voir locales/*.json sous experience.items.<id>. `tools` reste ici (noms de
// marque, non traduits).
export const EXPERIENCE: ExperienceItem[] = [
  { id: "sinedev", logoLetter: "S", tools: ["WordPress", "Yoast SEO", "Débogage cross-browser"] },
  { id: "digiword", logoLetter: "D", tools: ["WordPress", "Elementor", "WPBakery", "WooCommerce", "SEO"] },
  { id: "byteinnov", logoLetter: "B", tools: ["Next.js", "Tailwind CSS", "API REST", "Scrum", "GitLab", "Docker"] },
  { id: "seed", logoLetter: "S", tools: ["Laravel", "API de paiement", "Cahier des charges"] },
];
