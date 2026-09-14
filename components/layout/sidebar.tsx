"use client";

import { NAV_ITEMS } from "@/data/nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLanguage } from "@/hooks/use-language";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Sidebar() {
  const activeId = useActiveSection(SECTION_IDS);
  const { t } = useLanguage();

  return (
    <nav
      aria-label={t("a11y.sidebarNav")}
      className={cn(
        // Desktop : colonne fixe à gauche. Mobile : barre fixe en bas.
        "fixed z-50 flex border-border-glow bg-panel backdrop-blur-xl",
        "bottom-0 left-0 right-0 h-14 flex-row items-center justify-around border-t px-2",
        "lg:bottom-auto lg:left-0 lg:top-1/2 lg:h-auto lg:w-16 lg:-translate-y-1/2 lg:flex-col lg:justify-center lg:gap-2 lg:rounded-r-2xl lg:border-t-0 lg:border-r lg:py-5"
      )}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = item.id === activeId;
        const label = t(`nav.${item.labelKey}`);

        return (
          <a
            key={item.id}
            href={`/#${item.id}`}
            aria-current={isActive ? "true" : undefined}
            title={label}
            className={cn(
              "group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200",
              isActive
                ? "bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 text-accent-cyan"
                : "text-fg-muted hover:bg-bg-elevated hover:text-fg"
            )}
          >
            <Icon name={item.icon} className="h-5 w-5" />
            <span className="sr-only">{label}</span>

            {/* Info-bulle desktop uniquement, au survol */}
            <span
              className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg border border-border-glow bg-bg-elevated px-2.5 py-1 text-xs text-fg opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 lg:block"
              role="presentation"
            >
              {label}
            </span>

            {isActive && (
              <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-accent-cyan lg:-left-1 lg:bottom-auto lg:h-1.5 lg:w-1.5" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
