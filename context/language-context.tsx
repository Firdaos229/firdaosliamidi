"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/types";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

type Dictionary = typeof fr;

const DICTIONARIES: Record<Locale, Dictionary> = { fr, en };
const STORAGE_KEY = "chade-portfolio-locale";
const DEFAULT_LOCALE: Locale = "fr";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Résout une clé pointée ("hero.tagline") dans le dictionnaire courant. */
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Récupère une valeur imbriquée à partir d'une clé pointée, sans dépendance externe. */
function resolveKey(dictionary: Dictionary, key: string): string {
  const value = key
    .split(".")
    .reduce<unknown>(
      (acc, segment) =>
        acc && typeof acc === "object" ? (acc as Record<string, unknown>)[segment] : undefined,
      dictionary
    );

  if (typeof value === "string") return value;

  // Clé manquante ou mal formée : on le signale au lieu d'afficher "undefined" à l'écran.
  if (process.env.NODE_ENV !== "production") {
    console.warn(`[i18n] Clé de traduction introuvable : "${key}"`);
  }
  return key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") {
      // Lecture d'une API navigateur (localStorage) indisponible côté serveur :
      // cette mise à jour post-montage est le seul moyen de restaurer le choix
      // de langue de l'utilisateur, comme le fait next-themes pour le thème.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "fr" ? "en" : "fr");
  }, [locale, setLocale]);

  const t = useCallback(
    (key: string) => resolveKey(DICTIONARIES[locale], key),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t]
  );

  // Le provider doit toujours exposer son contexte, y compris pendant le rendu
  // serveur (mounted === false) : sinon useLanguage() lève une erreur au build.
  // La locale passe de "fr" (valeur par défaut) à celle stockée juste après
  // l'hydratation, sans jamais laisser le contexte absent.
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
