---
title: Architecture finale
---

# Architecture finale

À partir de l’analyse initiale, une architecture finale plus cohérente et plus défendable a été proposée. L’objectif n’était pas seulement d’ajouter des composants techniques, mais de mieux répartir les rôles, de séparer les zones exposées des zones internes et d’améliorer à la fois la sécurité et l’exploitation.

L’architecture finale repose sur une idée simple : **tout ce qui doit être exposé ne doit pas donner un accès direct à tout le reste**.

## Rôle de l’architecture finale dans le projet

Cette architecture vise à :

- réduire la surface d’attaque ;
- améliorer la lisibilité des flux ;
- mieux distinguer les services publics et les services internes ;
- intégrer des outils d’observation et d’administration dans une logique d’ensemble.

## Principes retenus

La conception finale s’appuie sur plusieurs principes structurants :

- séparation entre les services exposés et les services internes ;
- logique de **DMZ** pour les composants accessibles depuis l’extérieur ;
- centralisation des accès web via un reverse proxy ;
- contrôle des flux réseau au niveau du pare-feu ;
- supervision et journalisation centralisées ;
- gestion plus rigoureuse des identifiants et des secrets ;
- amélioration du contrôle des accès distants.

## Représentation de l’architecture finale

![Architecture finale](/img/architecture/architecture-finale.png)

Cette figure présente l’architecture finale retenue après restructuration de l’infrastructure.

## Lecture par zones

Même si certaines adresses ou noms d’hôtes doivent encore être confirmés, la lecture de l’architecture finale peut être structurée en plusieurs zones :

| Zone | Rôle | Exposition |
| --- | --- | --- |
| Zone externe / utilisateur | Point d’entrée des visiteurs et des accès autorisés | Exposée |
| DMZ ou zone d’exposition contrôlée | Hébergement des services web accessibles | Exposée mais filtrée |
| Zone applicative interne | Services métiers et composants plus sensibles | Interne |
| Zone d’administration et d’observation | Supervision, journalisation, gestion des accès | Interne |

> **À compléter avec la valeur réelle observée dans l’environnement :** adresses IP, noms d’hôtes, sous-réseaux exacts et détail du plan d’adressage final.

## Rôle des composants structurants

| Composant | Rôle dans l’architecture | Bénéfice principal |
| --- | --- | --- |
| OPNsense | Filtrage réseau, contrôle des flux, segmentation logique | Réduction des communications non justifiées |
| Nginx | Point d’entrée web et routage vers les services internes | Exposition mieux maîtrisée |
| Serveur applicatif | Exécution de la logique métier | Séparation entre présentation et traitement |
| PostgreSQL | Stockage structuré des données | Centralisation et cohérence des données |
| Zabbix | Supervision de l’état des services | Visibilité opérationnelle |
| Graylog | Centralisation des journaux | Analyse des événements et traçabilité |
| Vaultwarden | Gestion centralisée des identifiants | Meilleure gouvernance des accès |

## Pourquoi la DMZ est importante

La DMZ ne doit pas être comprise comme un simple mot-clé de sécurité. Dans ce projet, elle matérialise surtout une **zone d’exposition contrôlée** :

- les services publics y sont plus facilement identifiables ;
- les flux vers les composants internes peuvent être filtrés ;
- une compromission d’un service exposé ne doit pas donner un accès direct à toute l’infrastructure ;
- la lecture de l’architecture devient plus claire pour l’administrateur comme pour le jury.

## Apports concrets de l’architecture finale

L’architecture finale apporte plusieurs bénéfices visibles :

- une réduction de l’exposition directe des composants sensibles ;
- une séparation plus nette entre accès public, traitement applicatif et administration ;
- une meilleure capacité à superviser l’environnement ;
- une cohérence plus forte entre sécurité réseau, sécurité système et exploitation.

## Limites et remarques

Cette architecture reste celle d’un projet pédagogique et démonstratif. Certaines valeurs exactes doivent encore être documentées précisément pour une version finale complète :

- ports réellement utilisés par chaque service ;
- adresses IP définitives et noms d’hôtes normalisés ;
- détail des flux autorisés entre zones ;
- éventuelles règles spécifiques à confirmer sur le pare-feu.

## Conclusion de section

L’architecture finale ne vaut pas uniquement par le nombre d’outils intégrés. Sa valeur tient surtout à la logique d’ensemble : **mieux séparer, mieux contrôler, mieux observer**.
