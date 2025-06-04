# Resume

Ce projet permet de générer un CV à partir d'un fichier `resume.json` en utilisant des thèmes personnalisés basés sur [JSON Resume](https://jsonresume.org/).

## Fonctionnalités
- Génération de CV en HTML, PDF et JSON
- Thèmes personnalisables (dossier `theme/custom`)
- Utilisation de [puppeteer](https://pptr.dev/) pour l'export PDF
- Scripts de build et de lint intégrés

## Installation

1. Clonez le dépôt et placez-vous dans le dossier du projet.
2. Installez les dépendances :

```sh
pnpm install
```

## Utilisation

### Initialisation du CV

```sh
pnpm run init
```

### Générer le CV (HTML, PDF, JSON)

```sh
pnpm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.

### Lint du code

```sh
pnpm run lint
```

### Corriger automatiquement les erreurs de lint

```sh
pnpm run lint:fix
```

## Structure du projet

- `resume.json` : Données du CV au format JSON Resume
- `theme/` : Thèmes personnalisés et classiques
- `scripts/` : Scripts de génération HTML et PDF
- `dist/` : Dossier de sortie des fichiers générés

## Personnalisation du thème

Modifiez ou ajoutez des fichiers dans `theme/custom/` pour adapter le rendu à vos besoins.

## Dépendances principales
- [jsonresume-theme-classic](https://github.com/jsonresume/jsonresume-theme-classic)
- [puppeteer](https://pptr.dev/)
- [cpy-cli](https://www.npmjs.com/package/cpy-cli)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

## Licence

ISC
