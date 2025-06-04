# Thème Astro pour JSON Resume

Ce dossier contient un thème personnalisé basé sur [Astro](https://astro.build/) pour générer un CV à partir d'un fichier `resume.json`.

## Installation

1. Placez-vous dans ce dossier :
   ```sh
   cd theme/astro
   ```
2. Initialisez un projet Astro :
   ```sh
   npm create astro@latest . -- --template minimal --no-git
   ```
3. Installez les dépendances :
   ```sh
   pnpm install
   ```
4. Copiez le fichier `resume.json` à la racine du dossier `src/` ou dans `public/`.

## Utilisation

- Pour lancer le serveur de développement :
  ```sh
  pnpm dev
  ```
- Pour générer le site statique :
  ```sh
  pnpm build
  ```

## Structure recommandée
- `src/pages/index.astro` : page principale du CV
- `src/components/` : composants Astro pour chaque section (basics, work, education, etc.)
- `public/resume.json` : données du CV accessibles côté client

## Exemple d'intégration
Dans `src/pages/index.astro` :
```astro
---
import resume from '../public/resume.json';
---
<Layout>
  <Basics basics={resume.basics} />
  <Work work={resume.work} />
  <!-- etc. -->
</Layout>
```

N’hésitez pas à demander la génération automatique des composants ou une structure de base !
