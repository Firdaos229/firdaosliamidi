import { Code2, Rocket, Gauge, Palette, type LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/data/services";

const SERVICE_ICON_MAP: Record<ServiceItem["icon"], LucideIcon> = {
  fullstack: Code2,
  "wordpress-express": Rocket,
  "seo-performance": Gauge,
  "design-marketing": Palette,
};

export function ServiceIcon({ icon, className }: { icon: ServiceItem["icon"]; className?: string }) {
  const IconComponent = SERVICE_ICON_MAP[icon];
  return <IconComponent className={className} strokeWidth={1.75} aria-hidden="true" />;
}
