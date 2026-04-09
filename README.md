# Documentation YTECH

Ce dépôt contient la documentation technique du projet YTECH, construite avec
[Docusaurus](https://docusaurus.io/).

## Développement local

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

Le build génère le site statique dans le dossier `build`.

## Déploiement GitHub Pages

Le workflow GitHub Actions `.github/workflows/deploy.yml` publie
automatiquement la documentation à chaque push sur `main`.

URL publique prévue :

```text
https://ytech-solutions-projet.github.io/YTECH-Documentation/
```

Dans GitHub, vérifier une fois dans `Settings > Pages` que la source de
publication est configurée sur `GitHub Actions`.

Le code source reste accessible aux collègues via :

```text
https://github.com/ytech-solutions-projet/YTECH-Documentation
```
