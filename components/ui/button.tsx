import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const VARIANT_STYLES: Record<Variant, string> = {
  solid:
    "bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-[0_0_24px_-6px_rgba(56,189,248,0.65)] hover:shadow-[0_0_32px_-4px_rgba(56,189,248,0.85)] hover:-translate-y-0.5",
  outline:
    "border border-border-glow text-fg bg-transparent hover:border-accent-cyan/70 hover:bg-accent-cyan/5 hover:-translate-y-0.5",
  ghost: "text-fg-muted hover:text-fg hover:bg-panel",
};

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** Bouton unique pour tout le site : garantit un style CTA cohérent (plein / outline / ghost). */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "solid", className, children, ...props }, ref) => {
    const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], className);

    if ("href" in props && props.href) {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...props}>
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
