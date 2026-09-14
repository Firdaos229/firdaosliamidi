import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiWordpress,
  SiElementor,
  SiWoocommerce,
  SiGit,
  SiGitlab,
  SiDocker,
} from "react-icons/si";
import { Kanban, Webhook, Bug, Gauge, MonitorSmartphone, Blocks } from "lucide-react";
import { PhotoshopGlyph, IllustratorGlyph } from "@/components/ui/brand-glyphs";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

/**
 * Point de mapping unique id de compétence -> icône. Certaines marques (Photoshop,
 * Illustrator) ne sont pas disponibles dans les librairies d'icônes open-source :
 * elles utilisent un glyphe SVG maison (voir brand-glyphs.tsx), dans le même style
 * que les autres (trait fin, une couleur).
 */
const SKILL_ICON_MAP: Record<string, IconType | LucideIcon> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  react: SiReact,
  nextjs: SiNextdotjs,
  laravel: SiLaravel,
  wordpress: SiWordpress,
  elementor: SiElementor,
  wpbakery: Blocks, // pas de logo officiel disponible : icône générique "blocs" (page builder)
  woocommerce: SiWoocommerce,
  git: SiGit,
  gitlab: SiGitlab,
  docker: SiDocker,
  scrum: Kanban,
  "api-rest": Webhook,
  debug: Bug,
  "seo-perf": Gauge,
  responsive: MonitorSmartphone,
  photoshop: PhotoshopGlyph,
  illustrator: IllustratorGlyph,
};

export function SkillIcon({ id, className }: { id: string; className?: string }) {
  const IconComponent = SKILL_ICON_MAP[id];
  if (!IconComponent) return null;
  return <IconComponent className={className} aria-hidden="true" />;
}
