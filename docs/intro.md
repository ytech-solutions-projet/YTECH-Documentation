---
title: Introduction
---

# Introduction

Le projet **YTech Solutions** s’inscrit dans une démarche à la fois académique, technique et démonstrative. Son objectif n’est pas uniquement de faire fonctionner une application web, mais de montrer comment cette application peut être déployée, structurée, supervisée et sécurisée dans un environnement cohérent.

Dans un projet de ce type, la partie visible par l’utilisateur n’est qu’un élément d’un ensemble plus large. Derrière une interface web, on retrouve généralement plusieurs couches complémentaires :

- une interface utilisateur destinée aux visiteurs ou aux employés ;
- un service applicatif chargé de traiter la logique métier ;
- une base de données pour stocker les informations ;
- une couche d’exposition ou de proxy pour contrôler les accès ;
- des mécanismes de sécurité pour limiter les risques ;
- des outils d’observation pour comprendre ce qui se passe réellement sur l’infrastructure.

YTech Solutions a donc été abordé comme un **projet d’infrastructure applicative sécurisée**, et non comme une simple réalisation de site web. Cette documentation a pour rôle d’expliquer les choix techniques, de montrer les preuves observables de mise en œuvre et de présenter les bénéfices concrets apportés par chaque brique.

## Périmètre du projet

Le périmètre documentaire couvre principalement quatre dimensions :

- le **déploiement applicatif**, avec un site vitrine et une application RH ;
- l’**architecture technique**, depuis l’état initial jusqu’à une version plus structurée ;
- la **sécurisation de l’environnement**, au niveau système, réseau et exposition web ;
- l’**exploitation de l’infrastructure**, avec supervision, journalisation, gestion des secrets et analyse de vulnérabilités.

Le projet ne se limite donc pas à un livrable logiciel. Il met aussi en évidence la manière dont une application s’insère dans un environnement technique réaliste.

## Démarche adoptée

La progression du travail s’est appuyée sur une logique en plusieurs étapes :

1. comprendre l’existant et identifier les faiblesses de l’architecture initiale ;
2. proposer une architecture plus lisible et plus défendable ;
3. déployer les composants applicatifs nécessaires ;
4. renforcer l’exposition des services avec un reverse proxy et un pare-feu ;
5. améliorer la posture de sécurité du serveur Linux ;
6. ajouter des outils d’observation, d’audit et de gestion des accès ;
7. formaliser les résultats, les limites et les enseignements du projet.

Cette méthode permet d’éviter une approche “outil par outil” sans fil conducteur. Chaque brique technique a été étudiée au regard de son rôle dans l’ensemble de l’architecture.

## Axes étudiés

| Axe | Contenu principal | Finalité |
| --- | --- | --- |
| Développement et déploiement | Site vitrine, application RH, service applicatif, base de données | Rendre les services opérationnels |
| Architecture | Analyse initiale, architecture cible, séparation des zones | Structurer l’infrastructure |
| Sécurité | Nginx, OPNsense, hardening Linux, WAF, accès distant | Réduire l’exposition et contrôler les accès |
| Exploitation | Zabbix, Graylog, Vaultwarden, Nessus | Observer, administrer et évaluer l’environnement |

## Logique de lecture de la documentation

La documentation a été construite pour être lue progressivement :

- les premières pages présentent le contexte du projet ;
- les pages d’architecture expliquent la logique d’ensemble ;
- les pages techniques détaillent les outils mis en place ;
- les dernières pages proposent une analyse critique des résultats et des difficultés rencontrées.

> **À retenir :** cette documentation ne cherche pas seulement à décrire des outils. Elle vise à démontrer comment plusieurs composants techniques peuvent être articulés pour former une infrastructure plus propre, plus lisible et plus sécurisée.
