"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import type { ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { ProjectCard } from "@/components/sections/project-card";
import { ProjectModal } from "@/components/sections/project-modal";

/** Teaser sur la home : quelques projets, avec un lien vers la page complète
 * /projets (filtrable), pensée pour accueillir un nombre illimité de projets. */
export function Portfolio() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const preview = PROJECTS.slice(0, 3);

  return (
    <section id="portfolio" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t("portfolio.kicker")}
          title={t("portfolio.title")}
          intro={t("portfolio.intro")}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setActiveProject(project)} />
          ))}
        </div>

        <div className="mt-8">
          <Button href="/projets" variant="outline">
            {t("portfolio.allProjectsCta")}
          </Button>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
