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
