export interface ServiceItem {
  id: string;
  icon: "fullstack" | "wordpress-express" | "seo-performance" | "design-marketing";
}

// Clés de traduction -> services.items.<id>.{title,description}
export const SERVICES: ServiceItem[] = [
  { id: "fullstack", icon: "fullstack" },
  { id: "wordpress-express", icon: "wordpress-express" },
  { id: "seo-performance", icon: "seo-performance" },
  { id: "design-marketing", icon: "design-marketing" },
];
