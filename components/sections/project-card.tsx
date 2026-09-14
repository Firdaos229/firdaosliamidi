"use client";

import Image from "next/image";
import type { ProjectItem } from "@/types";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";

/** Carte projet réutilisée par le teaser de la home et par la page /projets. */
export function ProjectCard({ project, onOpen }: { project: ProjectItem; onOpen: () => void }) {
  const { t } = useLanguage();
  const base = `portfolio.projects.${project.id}`;

  return (
    <button type="button" onClick={onOpen} className="block h-full w-full text-left">
      <GlassCard interactive className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/10] w-full border-b border-border-glow bg-bg-elevated">
          <Image
            src={project.image}
            alt={t(`${base}.title`)}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 85vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold text-fg">{t(`${base}.title`)}</h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-fg-muted">
            {t(`${base}.description`)}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-accent-cyan">
            {t("portfolio.seeDetails")}
          </span>
        </div>
      </GlassCard>
    </button>
  );
}
