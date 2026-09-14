"use client";

import { EDUCATION, CERTIFICATIONS } from "@/data/education";
import type { EducationItem } from "@/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { useLanguage } from "@/hooks/use-language";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t("education.kicker")} title={t("education.title")} />

        <div className="grid gap-8 md:grid-cols-2">
          <EducationColumn
            title={t("education.formationLabel")}
            items={EDUCATION}
            emptyLabel={undefined}
          />
          <EducationColumn
            title={t("education.certificationLabel")}
            items={CERTIFICATIONS}
            emptyLabel={t("education.certificationsEmpty")}
          />
        </div>
      </div>
    </section>
  );
}

function EducationColumn({
  title,
  items,
  emptyLabel,
}: {
  title: string;
  items: EducationItem[];
  emptyLabel?: string;
}) {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-fg">
        <Icon name="graduation" className="h-4 w-4 text-accent-cyan" />
        {title}
      </h3>

      {items.length === 0 ? (
        <GlassCard className="text-sm text-fg-muted">{emptyLabel}</GlassCard>
      ) : (
        <div className="space-y-4">
          {items.map((edu) => {
            const base = `education.items.${edu.id}`;
            return (
              <GlassCard key={edu.id}>
                <p className="font-display text-base font-semibold text-fg">
                  {t(`${base}.title`)}
                </p>
                <p className="mt-1 text-sm text-accent-cyan">{t(`${base}.institution`)}</p>
                <p className="mt-2 text-xs text-fg-muted">{t(`${base}.period`)}</p>
              </GlassCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
