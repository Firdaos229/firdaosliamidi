# Portfolio - Chade Liamidi

Portfolio professionnel de développeuse Web Frontend, construit avec Next.js (App Router),
TypeScript strict et Tailwind CSS v4, en respectant les principes SOLID.

## Stack

- **Next.js 16** (App Router, rendu statique)
- **TypeScript** strict
- **Tailwind CSS v4** (tokens de thème définis dans `app/globals.css`)
- **next-themes** - mode sombre/clair persistant
- **framer-motion** - animations légères (entrée du Hero, barres de progression)
- **lucide-react** - icônes de la sidebar et des sections

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Build de production

```bash
npm run build
npm start
```

> Le build télécharge les polices Google Fonts (Space Grotesk, Inter) : une connexion
> internet est nécessaire au moment du `build` (comme pour tout projet Next.js utilisant
> `next/font/google`). Sans connexion, remplacer l'import dans `app/layout.tsx` par
> `next/font/local` avec des fichiers de police locaux.

## Structure du projet

```
app/                 Pages, layout racine, métadonnées SEO, sitemap/robots
components/ui/       Composants réutilisables (Button, GlassCard, ProgressBar, Icon...)
components/layout/   Header, Sidebar, Footer, toggles thème/langue
components/sections/ Une section = un fichier (Hero, Skills, Portfolio, Experience...)
context/             Providers (thème, langue)
hooks/               Logique métier réutilisable (scrollspy, formulaire de contact, i18n)
data/                Contenu structuré non traduisible (listes, niveaux, tags)
locales/             Traductions FR/EN - tout le texte affiché passe par ces fichiers
types/               Types TypeScript centralisés
public/images/       Visuels (avatar + mockups projets en SVG, à remplacer par de vrais visuels)
public/cv/           CV téléchargeable (à remplacer par ton vrai CV)
```

## Personnaliser le contenu

- **Textes affichés (FR/EN)** → `locales/fr.json` et `locales/en.json`.
- **Listes de données** (compétences, projets, expériences, formations, langues) →
  fichiers dans `data/`.
- **Coordonnées, avatar, lien du CV** → `data/profile.ts`.
- **Visuels** → remplacer les SVG dans `public/images/` par de vraies photos/mockups
  (formats JPG/PNG/WebP acceptés, adapter le champ `image`/`avatarSrc` correspondant).
- **CV** → remplacer `public/cv/chade-liamidi-cv.pdf` par le PDF à jour (même nom de
  fichier, ou mettre à jour `cvHref` dans `data/profile.ts`).
- **Couleurs / thème** → variables CSS dans `app/globals.css` (`:root` = thème clair,
  `.dark` = thème sombre).

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) (recommandé pour
Next.js) : importer le dépôt Git, aucune configuration supplémentaire n'est nécessaire.
Fonctionne aussi sur Netlify ou tout hébergeur supportant Next.js.
