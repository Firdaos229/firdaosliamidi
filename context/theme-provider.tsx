"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Fine couche autour de next-themes : le sombre est le thème principal du design
 * (cf. brief), donc c'est le defaultTheme, mais l'utilisateur garde le contrôle
 * et son choix est persisté automatiquement (localStorage) par la librairie.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
