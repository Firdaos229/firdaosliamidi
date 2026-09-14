"use client";

import { useMemo, useState } from "react";
import { PROJECTS } from "@/data/projects";
import type { ProjectCategory, ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { ProjectCard } from "@/components/sections/project-card";
import { ProjectModal } from "@/components/sections/project-modal";
import { cn } from "@/lib/utils";

type FilterValue = "all" | ProjectCategory;

const FILTERS: FilterValue[] = ["all", "frontend", "backend", "wordpress"];

export function ProjectsPageContent() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterValue>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.categories.includes(filter)),
    [filter]
  );

  return (
    <section className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-6xl">
        <Button href="/#portfolio" variant="ghost" className="mb-6 -ml-4 px-4">
          {t("portfolio.backHome")}
        </Button>

        <SectionHeading
          kicker={t("portfolio.pageKicker")}
          title={t("portfolio.pageTitle")}
          intro={t("portfolio.pageIntro")}
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === value
                  ? "border-accent-cyan/60 bg-accent-cyan/10 text-accent-cyan"
                  : "border-border-glow bg-panel text-fg-muted hover:text-fg"
              )}
            >
              {t(`portfolio.filters.${value}`)}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-border-glow bg-panel p-8 text-center text-sm text-fg-muted">
            {t("portfolio.emptyFiltered")}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={() => setActiveProject(project)} />
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
