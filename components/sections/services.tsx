"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ServiceIcon } from "@/components/ui/service-icon";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

/** Section "Ce que je vous apporte", en accordéon (façon FAQ) : un service ouvert
 * à la fois, on clique pour lire le détail. */
export function Services() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(SERVICES[0]?.id ?? null);

  return (
    <section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker={t("services.kicker")}
          title={t("services.title")}
          intro={t("services.intro")}
        />

        <div className="space-y-3">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;
            const base = `services.items.${service.id}`;

            return (
              <GlassCard key={service.id} className="overflow-hidden p-0">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-glow bg-bg-elevated text-fg-muted transition-colors",
                      isOpen && "border-accent-cyan/50 text-accent-cyan"
                    )}
                  >
                    <ServiceIcon icon={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-display text-base font-semibold text-fg">
                    {t(`${base}.title`)}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-fg-muted transition-transform duration-200",
                      isOpen && "rotate-180 text-accent-cyan"
                    )}
                    strokeWidth={1.75}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-[4.5rem] text-sm leading-relaxed text-fg-muted">
                        {t(`${base}.description`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
