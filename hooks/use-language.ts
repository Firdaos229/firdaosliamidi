"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";

/** Accès typé au contexte i18n. Lève une erreur explicite si utilisé hors provider. */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage doit être utilisé à l'intérieur de <LanguageProvider>.");
  }
  return context;
}
