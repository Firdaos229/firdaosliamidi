import { ContactChannel } from "@/types";

/**
 * Informations factuelles non traduisibles (identiques en FR/EN).
 * Les textes narratifs (accroche, titres) vivent dans locales/*.json.
 */

const PHONE_BENIN = "+229 01 91 57 62 53";
const PHONE_COTE_IVOIRE = "+225 07 77 07 04 89";

export const PROFILE = {
  firstName: "Chade",
  fullName: "Firdaos Folachade Liamidi",
  email: "shadechakibou@gmail.com",
  phones: [PHONE_BENIN, PHONE_COTE_IVOIRE],
  location: "Cotonou, Bénin",
  avatarSrc: "/images/avatar.svg",
  cvHref: {
    fr: "/cv/chade-liamidi-cv.pdf",
    en: "/cv/chade-liamidi-cv-en.pdf",
  },
  social: {
    github: "https://github.com/Firdaos229",
    linkedin:
      "https://www.linkedin.com/in/firdaos-folachade-liamidi-771329279/",
    instagram:
      "https://www.instagram.com/ati_noukee?stkn=MTN1M3N2YjV5bGhiNg%3D%3D&utm_source=qr",
    // Lien WhatsApp construit à partir du numéro principal (format international, chiffres uniquement).
    whatsapp: `https://wa.me/${PHONE_BENIN.replace(/\D/g, "")}`,
  },
} as const;

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    icon: "mail",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    id: "phone-bj",
    icon: "phone",
    value: PROFILE.phones[0],
    href: `tel:${PROFILE.phones[0].replace(/\s/g, "")}`,
  },
  {
    id: "phone-ci",
    icon: "phone",
    value: PROFILE.phones[1],
    href: `tel:${PROFILE.phones[1].replace(/\s/g, "")}`,
  },
];
