"use client";

import { LANGUAGES } from "@/data/languages";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { useLanguage } from "@/hooks/use-language";

export function LanguagesSection() {
  const { t } = useLanguage();

  return (
    <section id="languages" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading kicker={t("languages.kicker")} title={t("languages.title")} />

        <GlassCard className="grid gap-6">
          {LANGUAGES.map((lang, index) => (
            <ProgressBar
              key={lang.id}
              label={t(`languages.items.${lang.id}.label`)}
              valueLabel={t(`languages.items.${lang.id}.level`)}
              level={lang.level}
              delay={index * 0.1}
            />
          ))}
        </GlassCard>
      </div>
    </section>
  );
}
