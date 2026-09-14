import {
  Home,
  User,
  Sparkles,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Languages,
  Mail,
  Phone,
  Sun,
  Moon,
  Download,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { SectionIconName } from "@/types";

/**
 * Unique point de mapping nom -> icône. Les composants ne connaissent que des
 * chaînes de caractères (data-driven), jamais un composant lucide directement :
 * ça garde data/ découplé de la librairie d'icônes choisie.
 */
const ICON_MAP: Record<SectionIconName | "phone", LucideIcon> = {
  home: Home,
  user: User,
  services: Sparkles,
  code: Code2,
  folder: FolderGit2,
  briefcase: Briefcase,
  graduation: GraduationCap,
  languages: Languages,
  mail: Mail,
  phone: Phone,
};

export const EXTRA_ICONS = {
  sun: Sun,
  moon: Moon,
  download: Download,
  externalLink: ArrowUpRight,
};

interface IconProps {
  name: SectionIconName | "phone";
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const LucideComponent = ICON_MAP[name];
  return <LucideComponent className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
