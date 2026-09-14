import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageToggle } from "@/components/layout/language-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-glow bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:pl-24">
        <Link
          href="/#hero"
          className="font-display text-lg font-semibold tracking-tight text-fg"
        >
          {PROFILE.firstName}
          <span className="text-accent-cyan">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
