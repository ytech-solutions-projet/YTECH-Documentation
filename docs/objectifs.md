---
title: Objectifs
---

# Objectifs du projet

Le projet YTech Solutions poursuit des objectifs complémentaires. Ils concernent à la fois la mise en service d’une application web, la structuration de l’infrastructure, l’amélioration de la sécurité et la montée en compétence de l’équipe.

## Objectif général

L’objectif général est de **concevoir, déployer et sécuriser un environnement cohérent** capable d’héberger un site vitrine et une application RH, tout en améliorant le contrôle des accès, la visibilité technique sur le système et la qualité globale de l’exploitation.

## Objectifs techniques et sécuritaires

Les objectifs opérationnels du projet peuvent être résumés dans le tableau suivant :

| Domaine | Objectif | Finalité attendue |
| --- | --- | --- |
| Architecture | Analyser l’existant puis proposer une architecture cible plus lisible | Justifier les choix techniques et réduire les incohérences |
| Déploiement | Rendre le site vitrine et l’application RH réellement accessibles | Obtenir un environnement fonctionnel |
| Exposition web | Mettre en place un reverse proxy | Centraliser et mieux contrôler les accès HTTP/HTTPS |
| Réseau | Structurer le filtrage avec OPNsense | Limiter les flux autorisés au strict nécessaire |
| Système | Renforcer le serveur Linux | Réduire la surface d’attaque et durcir le socle d’hébergement |
| Exploitation | Superviser, journaliser et auditer | Mieux observer l’environnement et détecter les anomalies |
| Gouvernance des accès | Centraliser les secrets et les identifiants | Réduire les mauvaises pratiques de gestion des comptes |

## Objectifs spécifiques

Pour atteindre cet objectif général, plusieurs actions concrètes ont été poursuivies :

- analyser l’architecture initiale et documenter ses faiblesses ;
- proposer une architecture finale plus segmentée et mieux justifiée ;
- déployer correctement les composants applicatifs ;
- intégrer un reverse proxy pour organiser l’exposition des services ;
- sécuriser l’hébergement Linux et les accès d’administration ;
- mettre en place une logique de filtrage réseau cohérente ;
- ajouter des outils de supervision, de journalisation et de gestion des secrets ;
- réaliser des scans de vulnérabilités ;
- produire une documentation exploitable devant un jury technique.

## Intérêt pédagogique

Le projet présente également un intérêt pédagogique fort. Il permet de montrer qu’une application web :

- ne fonctionne jamais seule ;
- dépend d’un environnement système et réseau ;
- doit être observée et protégée ;
- s’inscrit dans une logique de choix techniques argumentés.

En ce sens, YTech Solutions constitue un support pertinent pour relier développement, administration système, réseau et cybersécurité.

## Critères de réussite

Sans prétendre couvrir tous les cas d’usage d’une infrastructure de production, le projet peut être considéré comme pertinent s’il permet de démontrer :

- un fonctionnement applicatif réel ;
- une architecture finale plus maîtrisée que l’architecture initiale ;
- une meilleure visibilité sur l’état de l’environnement ;
- une amélioration mesurable de la posture de sécurité ;
- une capacité à expliquer les choix et les limites de manière argumentée.

> **À retenir :** les objectifs du projet ne sont pas uniquement fonctionnels. Ils sont aussi méthodologiques et démonstratifs.
