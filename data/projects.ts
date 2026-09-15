import { ProjectItem } from "@/types";

// categories[] alimente le filtre de la page /projets (Frontend / Backend / WordPress).
// gallery[] alimente le modal de détail (en plus de `image`, la couverture affichée sur les cartes).
// Les visuels sont des mockups génériques à remplacer par de vraies captures d'écran (voir README).
export const PROJECTS: ProjectItem[] = [
  {
    id: "hopeful-portfolio",
    categories: ["frontend", "backend"],
    tags: ["Next.js", "Notion API", "Resend"],
    image: "/images/project-hopeful-portfolio.png",
    gallery: ["/images/hopeful_maquette.webp"],
    href: "https://hopeful-dossou-portfolio.vercel.app/",
  },
  {
    id: "avalon-secure-site",
    categories: ["wordpress"],
    tags: ["WordPress", "SEO"],
    image: "/images/project-avalon-secure-site.png",
    href: "https://avalonsecure.com/",
  },
  {
    id: "prepaexams",
    categories: ["backend", "frontend"],
    tags: ["Laravel", "PHP"],
    image: "/images/project-prepaexams.png",
    href: "http://prepaexams.esgis.bj/",
  },
  {
    id: "libre-comme-lere",
    categories: ["wordpress"],
    tags: ["WordPress", "Rédaction de contenu"],
    image: "/images/project-libre-comme-lere.png",
    href: "https://librecommelere.com/",
  },
  {
    id: "la-signature",
    categories: ["wordpress"],
    tags: ["WordPress", "Refonte UI"],
    image: "/images/project-la-signature.png",
  },
  {
    id: "digiword-refonte",
    categories: ["wordpress"],
    tags: ["WordPress", "Elementor", "WPBakery", "Optimisation SEO"],
    image: "/images/project-digiword-refonte.png",
    gallery: [
      "/images/project-digiword-refonte-2.png",
      "/images/project-digiword-refonte-3.png",
    ],
    href: "https://digiword.fr/",
  },
  {
    id: "dinero",
    categories: ["frontend"],
    tags: ["React.js", "Refonte"],
    image: "/images/project-dinero.png",
    href: "https://www.dinerotechnologieslimited.com/",
  },
  {
    id: "seed-billetterie",
    categories: ["frontend", "backend"],
    tags: ["Laravel", "API de paiement"],
    image: "/images/project-seed-billetterie.png",
    href: "https://github.com/Firdaos229/monProjetMemo",
  },
  {
    id: "food-truck",
    categories: ["wordpress"],
    tags: ["WordPress", "Refonte UI", "Optimisation SEO"],
    image: "/images/project-food-truck.png",
    href: "https://dev-digiword-food-truck3.pantheonsite.io/",
  },
  {
    id: "bella-storia",
    categories: ["wordpress"],
    tags: ["WordPress", "Refonte UI", "Optimisation SEO"],
    image: "/images/project-bella-storia.png",
    href: "https://dev-bella-storia.pantheonsite.io/",
  },
];
