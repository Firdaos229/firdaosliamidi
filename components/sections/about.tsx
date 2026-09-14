"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/hooks/use-language";
import { translateList } from "@/lib/utils";

const STATS = [
  { value: "3+", labelKey: "about.stats.years" },
  { value: "10+", labelKey: "about.stats.sites" },
  { value: "Next.js", labelKey: "about.stats.stack" },
] as const;

export function About() {
  const { t } = useLanguage();
  const paragraphs = translateList(t, "about.paragraphs");

  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t("about.kicker")} title={t("about.title")} />

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <GlassCard>
            <p className="font-display text-lg italic leading-relaxed text-gradient sm:text-xl">
              &ldquo;{t("about.quote")}&rdquo;
            </p>
            <div className="mt-4 space-y-4 border-t border-border-glow pt-4">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </GlassCard>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {STATS.map((stat) => (
              <GlassCard key={stat.labelKey} className="text-center md:text-left">
                <p className="font-display text-2xl font-semibold text-gradient">{stat.value}</p>
                <p className="mt-1 text-xs text-fg-muted">{t(stat.labelKey)}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
