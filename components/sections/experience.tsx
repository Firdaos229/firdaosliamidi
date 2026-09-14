"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { EXPERIENCE } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";
import { translateList } from "@/lib/utils";

export function Experience() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLOListElement>(null);

  // La ligne qui relie les repères se "remplit" en fonction de la progression du
  // scroll à travers la timeline (et se vide si on remonte) : offset calé pour que
  // le remplissage démarre/termine pile au premier/dernier repère.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  return (
    <section id="experience" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t("experience.kicker")}
          title={t("experience.title")}
          intro={t("experience.intro")}
        />

        <ol ref={timelineRef} className="relative space-y-8 pl-8">
          {/* Ligne de fond, discrète, toujours visible */}
          <div className="absolute bottom-0 left-[11px] top-0 w-[2px] rounded-full bg-border-glow" />
          {/* Ligne active : se remplit du haut vers le bas au fil du scroll */}
          <motion.div
            className="absolute left-[11px] top-0 w-[2px] origin-top rounded-full bg-gradient-to-b from-accent-blue to-accent-cyan"
            style={{ scaleY: lineProgress, height: "100%" }}
          />

          {EXPERIENCE.map((exp) => {
            const base = `experience.items.${exp.id}`;
            const highlights = translateList(t, `${base}.highlights`);

            return (
              <li key={exp.id} className="relative">
                <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border-glow bg-bg-elevated text-xs font-semibold text-accent-cyan">
                  {exp.logoLetter}
                </span>
                <GlassCard>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {t(`${base}.role`)}
                    </h3>
                    <span className="text-xs text-fg-muted">{t(`${base}.period`)}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-cyan">
                    {t(`${base}.company`)}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {highlights.map((line, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-fg-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg-muted" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <Badge key={tool}>{tool}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
