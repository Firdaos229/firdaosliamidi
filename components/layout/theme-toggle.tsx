"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { EXTRA_ICONS } from "@/components/ui/icon";
import { useLanguage } from "@/hooks/use-language";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Évite un mismatch d'hydratation : resolvedTheme n'est fiable qu'après le montage client.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? t("theme.toggleToLight") : t("theme.toggleToDark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-glow bg-panel text-fg-muted transition-colors hover:text-accent-cyan"
    >
      {mounted ? (
        isDark ? (
          <EXTRA_ICONS.sun className="h-4 w-4" strokeWidth={1.75} />
        ) : (
          <EXTRA_ICONS.moon className="h-4 w-4" strokeWidth={1.75} />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
