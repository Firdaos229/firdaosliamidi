"use client";

import { useState, type FormEvent } from "react";
import { PROFILE } from "@/data/profile";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: ContactFormState = { name: "", email: "", message: "" };

/**
 * Le portfolio n'a pas de backend : le formulaire compose un lien mailto avec
 * le contenu saisi et ouvre le client mail de l'utilisateur. Logique isolée du
 * composant visuel (SRP) pour pouvoir la remplacer plus tard par un vrai appel API.
 */
export function useContactForm() {
  const [values, setValues] = useState<ContactFormState>(INITIAL_STATE);

  function updateField(field: keyof ContactFormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Contact portfolio — ${values.name || "Nouveau message"}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  }

  return { values, updateField, handleSubmit };
}
