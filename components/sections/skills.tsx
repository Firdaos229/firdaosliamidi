"use client";

import { SKILLS } from "@/data/skills";
import type { SkillItem } from "@/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillIcon } from "@/components/ui/skill-icon";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

const CATEGORY_ORDER: SkillItem["category"][] = ["frontend", "backend-cms", "outils", "autres"];

function groupByCategory(skills: SkillItem[]) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  }));
}

export function Skills() {
  const { t } = useLanguage();
  const groups = groupByCategory(SKILLS);

  return (
    <section id="skills" className="scroll-mt-24 py-16 lg:pl-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={t("skills.kicker")}
          title={t("skills.title")}
          intro={t("skills.intro")}
        />
      </div>

      <div className="space-y-6">
        {groups.map(({ category, skills }, index) => (
          <SkillRow
            key={category}
            title={t(`skills.categories.${category}`)}
            skills={skills}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}

function SkillRow({
  title,
  skills,
  direction,
}: {
  title: string;
  skills: SkillItem[];
  direction: "left" | "right";
}) {
  const { t } = useLanguage();
  // Vitesse proportionnelle au nombre d'éléments pour un défilement à rythme constant.
  const duration = Math.max(18, skills.length * 3.2);
  const track = [...skills, ...skills];

  return (
    <div>
      <p className="mx-auto mb-3 max-w-6xl px-4 font-display text-sm font-semibold text-fg-muted sm:px-6">
        {title}
      </p>
      <div
        className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div
          className={cn(
            "flex w-max gap-3 motion-reduce:animate-none group-hover:[animation-play-state:paused]",
            direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {track.map((skill, i) => (
            <div
              key={`${skill.id}-${i}`}
              title={t(`skills.items.${skill.labelKey}`)}
              className="flex shrink-0 items-center gap-2.5 rounded-xl border border-border-glow bg-panel px-4 py-3 backdrop-blur-xl transition-colors hover:border-accent-cyan/50"
            >
              <SkillIcon id={skill.id} className="h-5 w-5 shrink-0 text-fg-muted" />
              <span className="whitespace-nowrap text-sm text-fg-muted">
                {t(`skills.items.${skill.labelKey}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
