import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/sections/projects-page-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Tous les projets développés par Chade Liamidi, filtrables par type de mission (frontend, backend, WordPress).",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
