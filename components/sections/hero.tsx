"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { EXTRA_ICONS } from "@/components/ui/icon";
import { useLanguage } from "@/hooks/use-language";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  const { t, locale } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="flex min-h-[88vh] scroll-mt-20 items-center px-4 pt-10 sm:px-6 lg:pl-24"
    >
      <motion.div
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={prefersReducedMotion ? undefined : "show"}
        className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[auto_1fr]"
      >
        <motion.div variants={prefersReducedMotion ? undefined : item} className="justify-self-center md:justify-self-start">
          <div className="relative h-40 w-40 sm:h-52 sm:w-52">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet opacity-40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-border-glow bg-bg-elevated">
              <Image
                src={PROFILE.avatarSrc}
                alt={PROFILE.fullName}
                fill
                sizes="208px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            variants={prefersReducedMotion ? undefined : item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-glow bg-panel px-3 py-1 text-xs text-fg-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            {t("hero.tag")}
          </motion.p>

          <motion.h1
            variants={prefersReducedMotion ? undefined : item}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            {t("hero.greeting")}{" "}
            <span className="text-gradient">{PROFILE.firstName}</span>
          </motion.h1>

          <motion.p
            variants={prefersReducedMotion ? undefined : item}
            className="mt-3 font-display text-xl text-fg-muted sm:text-2xl"
          >
            {t("hero.eyebrow")}
          </motion.p>

          <motion.p
            variants={prefersReducedMotion ? undefined : item}
            className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.div variants={prefersReducedMotion ? undefined : item} className="mt-8 flex flex-wrap gap-4">
            <Button href="/#portfolio" variant="solid">
              {t("hero.ctaProjects")}
            </Button>
            <Button href={PROFILE.cvHref[locale]} variant="outline" download>
              <EXTRA_ICONS.download className="h-4 w-4" strokeWidth={1.75} />
              {t("hero.ctaCv")}
            </Button>
          </motion.div>

          <motion.p variants={prefersReducedMotion ? undefined : item} className="mt-6 text-sm text-fg-muted">
            {t("hero.location")}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
