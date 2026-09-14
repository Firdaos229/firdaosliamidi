"use client";

import { useLanguage } from "@/hooks/use-language";

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("language.toggle")}
      title={t("language.toggle")}
      className="flex h-9 items-center gap-1 rounded-full border border-border-glow bg-panel px-3 text-xs font-medium text-fg-muted transition-colors hover:text-accent-cyan"
    >
      <span className={locale === "fr" ? "text-fg" : undefined}>FR</span>
      <span aria-hidden="true">/</span>
      <span className={locale === "en" ? "text-fg" : undefined}>EN</span>
    </button>
  );
}
