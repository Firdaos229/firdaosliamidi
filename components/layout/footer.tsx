"use client";

import { PROFILE } from "@/data/profile";
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/social-glyphs";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-glow px-4 py-6 sm:px-6 lg:pl-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-fg-muted sm:flex-row">
        <p>
          © {year} {PROFILE.fullName}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-colors hover:text-accent-cyan"
          >
            <GithubGlyph className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent-cyan"
          >
            <LinkedinGlyph className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-6xl text-xs text-fg-muted/70">{t("footer.builtWith")}</p>
    </footer>
  );
}
