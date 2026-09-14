"use client";

import { CONTACT_CHANNELS, PROFILE } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/social-glyphs";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/hooks/use-language";
import { useContactForm } from "@/hooks/use-contact-form";

const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", icon: SiInstagram, href: PROFILE.social.instagram },
  { id: "linkedin", label: "LinkedIn", icon: LinkedinGlyph, href: PROFILE.social.linkedin },
  { id: "whatsapp", label: "WhatsApp", icon: SiWhatsapp, href: PROFILE.social.whatsapp },
  { id: "github", label: "GitHub", icon: GithubGlyph, href: PROFILE.social.github },
] as const;

export function Contact() {
  const { t } = useLanguage();
  const { values, updateField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:pl-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t("contact.kicker")}
          title={t("contact.title")}
          intro={t("contact.intro")}
        />

        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <GlassCard>
            <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
              <Field
                id="contact-name"
                label={t("contact.formName")}
                value={values.name}
                onChange={(v) => updateField("name", v)}
                required
              />
              <Field
                id="contact-email"
                label={t("contact.formEmail")}
                type="email"
                value={values.email}
                onChange={(v) => updateField("email", v)}
                required
              />
              <Field
                id="contact-message"
                label={t("contact.formMessage")}
                value={values.message}
                onChange={(v) => updateField("message", v)}
                as="textarea"
                required
              />
              <Button type="submit" variant="solid" className="justify-self-start">
                {t("contact.formSubmit")}
              </Button>
              <p className="text-xs text-fg-muted">{t("contact.formNote")}</p>
            </form>
          </GlassCard>

          <GlassCard>
            <h3 className="font-display text-lg font-semibold text-fg">
              {t("contact.directTitle")}
            </h3>
            <ul className="mt-4 space-y-4">
              {CONTACT_CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    className="flex items-center gap-3 rounded-xl border border-transparent p-2 text-sm text-fg-muted transition-colors hover:border-border-glow hover:text-accent-cyan"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-glow bg-bg-elevated text-accent-cyan">
                      <Icon name={channel.icon} className="h-4 w-4" />
                    </span>
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 border-t border-border-glow pt-5">
              {SOCIAL_LINKS.map(({ id, label, icon: SocialIcon, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-glow bg-bg-elevated text-fg-muted transition-colors hover:text-accent-cyan"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}

/** Champ de formulaire unique (label + input/textarea) pour garder le markup du
 * formulaire lisible et l'accessibilité (label lié) centralisée à un seul endroit. */
function Field({ id, label, value, onChange, type = "text", as = "input", required }: FieldProps) {
  const sharedClasses =
    "w-full rounded-xl border border-border-glow bg-bg-elevated/60 px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted/60 outline-none transition-colors focus:border-accent-cyan";

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={sharedClasses}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={sharedClasses}
        />
      )}
    </div>
  );
}
