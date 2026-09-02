# Portfolio

Portfolio de Manon Arteta, construit avec React + TypeScript + Vite + Tailwind CSS.

## Ajouter un projet

Chaque projet est un dossier dans `src/projets/<slug>/` contenant :

- un fichier `manifest.json` qui décrit le projet ;
- toutes les images du projet (`.jpg`, `.png`, `.webp`, …).

```jsonc
{
  "title": "Nom du projet",
  "category": "pro",              // "pro" | "perso"
  "client": "Nom du client",       // optionnel
  "kind": "Type de projet",
  "tags": ["Identité visuelle", "Logo"],
  "description": ["Paragraphe 1", "Paragraphe 2"],
  "order": 1,                      // optionnel : ordre d'affichage
  "date": "2024",                  // optionnel : année ("2024") ou range ("2023-2025")
  "cover": "02-palette.jpg",       // optionnel : image de couverture (sinon 1re image)
  "images": [                      // optionnel : sinon les images du dossier sont auto-découvertes
    { "src": "01-logo.jpg", "caption": "Le logo final", "date": "2024" }
  ]
}
```

Les champs `caption` et `date` d'une image sont optionnels. Le nom du dossier devient l'URL du projet (`/projets/<slug>`). Il suffit de déposer le dossier et ses images : la page est générée automatiquement au build.

### Regrouper des images

Pour afficher plusieurs images « collées » ensemble dans une même tuile de la mosaïque, déclarez un objet `group` à la place d'une image :

```jsonc
"images": [
  { "src": "01-logo.jpg", "caption": "Le logo" },
  {
    "group": [
      { "src": "02-recto.jpg", "caption": "Recto" },
      { "src": "03-verso.jpg", "caption": "Verso" }
    ],
    "caption": "La carte de visite"
  },
  { "src": "04-affiche.jpg", "caption": "L'affiche" }
]
```

Les images d'un groupe s'affichent côte à côte (2 → 2 colonnes, 3 → 3 colonnes, 4 et plus → grille 2×2). Chaque image reste cliquable individuellement dans la visionneuse. Les champs `caption` et `date` du groupe (optionnels) s'affichent sous la tuile.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
