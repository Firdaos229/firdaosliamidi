"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 480;

/** Bouton global (posé dans le layout racine, donc présent sur toutes les pages)
 * qui n'apparaît qu'après un certain défilement, pour ne pas encombrer le Hero. */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("a11y.backToTop")}
      title={t("a11y.backToTop")}
      className={cn(
        "fixed right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border-glow bg-panel text-fg-muted shadow-lg backdrop-blur-xl transition-all duration-300 hover:text-accent-cyan",
        "bottom-20 lg:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
    </button>
  );
}
