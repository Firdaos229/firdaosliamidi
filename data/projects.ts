import { ProjectItem } from "@/types";

// categories[] alimente le filtre de la page /projets (Frontend / Backend / WordPress).
// gallery[] alimente le modal de détail (en plus de `image`, la couverture affichée sur les cartes).
// Les visuels sont des mockups génériques à remplacer par de vraies captures d'écran (voir README).
export const PROJECTS: ProjectItem[] = [
  {
    id: "pentestad",
    categories: ["frontend"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/project-pentestad.svg",
    gallery: ["/images/project-pentestad-2.svg", "/images/project-pentestad-3.svg"],
    featured: true,
  },
  {
    id: "guardian",
    categories: ["frontend"],
    tags: ["Figma", "Design System", "Cybersécurité"],
    image: "/images/project-guardian.svg",
    gallery: ["/images/project-guardian-2.svg", "/images/project-guardian-3.svg"],
  },
  {
    id: "blueteam",
    categories: ["frontend"],
    tags: ["Next.js 14", "Notion CMS", "ISR"],
    image: "/images/project-blueteam.svg",
    gallery: ["/images/project-blueteam-2.svg", "/images/project-blueteam-3.svg"],
  },
  {
    id: "hopeful-portfolio",
    categories: ["frontend", "backend"],
    tags: ["Next.js", "Notion API", "Resend"],
    image: "/images/project-hopeful-portfolio.svg",
    href: "https://hopeful-dossou-portfolio.vercel.app/skills",
  },
  {
    id: "avalon-secure-site",
    categories: ["wordpress"],
    tags: ["WordPress", "SEO"],
    image: "/images/project-avalon-secure-site.svg",
    href: "https://avalonsecure.com/a-propos/",
  },
  {
    id: "prepaexams",
    categories: ["backend", "frontend"],
    tags: ["Laravel", "PHP"],
    image: "/images/project-prepaexams.svg",
    href: "http://prepaexams.esgis.bj/",
  },
  {
    id: "libre-comme-lere",
    categories: ["wordpress"],
    tags: ["WordPress", "Rédaction de contenu"],
    image: "/images/project-libre-comme-lere.svg",
    href: "https://librecommelere.com/",
  },
  {
    id: "la-signature",
    categories: ["wordpress"],
    tags: ["WordPress", "Refonte UI"],
    image: "/images/project-la-signature.svg",
  },
  {
    id: "digiword-refonte",
    categories: ["wordpress"],
    tags: ["WordPress", "Elementor", "WPBakery"],
    image: "/images/project-digiword-refonte.svg",
    href: "https://digiword.fr/",
  },
  {
    id: "dinero",
    categories: ["frontend"],
    tags: ["Next.js", "Refonte"],
    image: "/images/project-dinero.svg",
    href: "https://www.dinerotechnologieslimited.com/services",
  },
  {
    id: "seed-billetterie",
    categories: ["frontend", "backend"],
    tags: ["Laravel", "API de paiement"],
    image: "/images/project-seed-billetterie.svg",
  },
  {
    id: "food-truck",
    categories: ["wordpress"],
    tags: ["WordPress", "Refonte UI"],
    image: "/images/project-food-truck.svg",
    href: "https://dev-digiword-food-truck3.pantheonsite.io/",
  },
  {
    id: "bella-storia",
    categories: ["wordpress"],
    tags: ["WordPress", "Refonte UI"],
    image: "/images/project-bella-storia.svg",
    href: "https://dev-bella-storia.pantheonsite.io/",
  },
];
