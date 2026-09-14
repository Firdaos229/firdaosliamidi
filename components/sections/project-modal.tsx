"use client";

import Image from "next/image";
import type { ProjectItem } from "@/types";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EXTRA_ICONS } from "@/components/ui/icon";
import { useLanguage } from "@/hooks/use-language";
import { translateList } from "@/lib/utils";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

/** Détail complet d'un projet : image principale + galerie, ce qui a été réalisé,
 * outils utilisés, et un lien externe optionnel. Découplé de la grille/slider
 * (SRP) : n'importe quel déclencheur peut ouvrir ce même modal. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  if (!project) return null;

  const base = `portfolio.projects.${project.id}`;
  const title = t(`${base}.title`);
  const images = [project.image, ...(project.gallery ?? [])];

  return (
    <Modal open={Boolean(project)} onClose={onClose} labelledBy={`project-modal-${project.id}`}>
      <div className="relative aspect-[16/10] w-full border-b border-border-glow bg-bg-elevated">
        <Image src={project.image} alt={title} fill sizes="(min-width: 768px) 640px, 100vw" className="object-cover" />
      </div>

      <div className="p-5 sm:p-6">
        <h3 id={`project-modal-${project.id}`} className="font-display text-2xl font-semibold text-fg">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t(`${base}.description`)}</p>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-accent-cyan">
            {t("portfolio.highlightsTitle")}
          </h4>
          <ul className="space-y-2">
            {translateList(t, `${base}.highlights`).map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-accent-cyan">{t("portfolio.toolsTitle")}</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {images.slice(1).map((src) => (
              <div
                key={src}
                className="relative aspect-video overflow-hidden rounded-xl border border-border-glow bg-bg-elevated"
              >
                <Image src={src} alt={title} fill sizes="280px" className="object-cover" />
              </div>
            ))}
          </div>
        )}

        {project.href && (
          <Button href={project.href} variant="outline" className="mt-8">
            {t("portfolio.viewProject")}
            <EXTRA_ICONS.externalLink className="h-4 w-4" strokeWidth={2} />
          </Button>
        )}
      </div>
    </Modal>
  );
}
