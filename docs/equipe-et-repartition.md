---
title: Équipe et répartition des tâches
---

# Équipe et répartition des tâches

Le projet **YTech Solutions** a été conduit comme un travail d’équipe structuré, avec une répartition des responsabilités par domaine technique. Cette organisation a permis d’avancer en parallèle sur l’architecture réseau, l’administration système, la sécurisation, les outils d’exploitation, l’automatisation et la documentation.

L’objectif de cette page est de présenter une lecture claire et professionnelle des contributions, afin de montrer que le projet repose sur des rôles complémentaires et sur une exécution réellement collaborative.

## Vue d’ensemble des responsabilités

| Membre | Périmètre principal | Réalisations clés | Valeur apportée au projet |
| --- | --- | --- | --- |
| Othmane BENAMAR | Déploiement web et exposition sécurisée | Nginx, HTTPS, tests, sécurisation de la couche web | Mise en ligne maîtrisée des services applicatifs |
| Achraf Hmichane | Architecture cible et socle système | Linux, segmentation, DMZ, reverse proxy, WAF | Structuration de l’environnement et renforcement du socle technique |
| Mostafa NASIR | Outils de sécurité et d’exploitation | GitHub, Nessus, Vaultwarden, Zabbix, Graylog, Suricata | Visibilité opérationnelle, audit et administration sécurisée |
| Ismail ELOUAKIFI | Conception réseau | Schémas d’architecture, GNS3, plan d’adressage | Cohérence de la modélisation réseau et lisibilité de l’infrastructure |
| Bouchaib HERRADI | Automatisation et qualité | Jenkins, Trivy, SonarQube, Docker Hub, notifications | Renforcement de la chaîne qualité et de l’outillage projet |

## Répartition détaillée par membre

## Othmane BENAMAR

Othmane est intervenu principalement sur la mise en service de l’application et sur la sécurisation de son exposition web.

Ses contributions couvrent notamment :

- le déploiement de l’application web et des composants associés ;
- la configuration du reverse proxy **Nginx** ;
- la mise en place du **HTTPS / TLS** ;
- la sécurisation de la couche d’exposition web ;
- les tests techniques et vérifications de bon fonctionnement ;
- le traitement des problèmes liés au proxy, aux accès, aux en-têtes et au flux HTTPS ;
- la participation à la documentation et à la restitution du projet.

## Achraf Hmichane

Achraf a porté une part importante du cadrage technique de l’environnement et de la consolidation du socle système.

Ses contributions principales comprennent :

- l’analyse de l’infrastructure initiale ;
- l’identification des faiblesses de l’environnement de départ ;
- la proposition d’une architecture plus sécurisée ;
- la mise en place d’une logique de **DMZ** et de segmentation ;
- l’installation et la préparation du serveur **Linux** ;
- le déploiement de l’application **CRUD RH** ;
- l’intégration du reverse proxy ;
- l’intégration d’un **WAF** dans la démonstration ;
- le hardening du serveur Linux ;
- la sécurisation de l’accès **SSH** ;
- l’organisation du projet à l’aide de **Jira**.

## Mostafa NASIR

Mostafa a pris en charge la mise en place d’outils orientés exploitation, supervision, audit et sécurité opérationnelle.

Ses contributions principales comprennent :

- l’organisation du projet sur **GitHub** ;
- la mise en place de **Nessus** pour les scans de vulnérabilités ;
- la mise en place de **Vaultwarden / Bitwarden** pour la gestion des secrets ;
- la mise en place de **Zabbix** pour la supervision ;
- la mise en place de **Graylog** pour la centralisation des journaux ;
- la mise en place de **Suricata** pour la détection réseau et la production d’événements exploitables ;
- la participation à la structuration des outils d’exploitation et de sécurité.

## Ismail ELOUAKIFI

Ismail a contribué à la cohérence de la partie réseau en assurant la modélisation de l’architecture et du plan d’adressage.

Ses contributions portent principalement sur :

- la conception de l’architecture initiale sur **Packet Tracer** ;
- la conception de l’architecture finale sur **GNS3** ;
- l’élaboration du plan d’adressage réseau ;
- la clarification de la logique de circulation et d’organisation réseau ;
- la participation à la lisibilité globale de l’architecture documentaire.

## Bouchaib HERRADI

Bouchaib est intervenu sur la chaîne d’outillage orientée automatisation, contrôle qualité et services complémentaires.

Ses tâches comprennent :

- la mise en place de **Jenkins** ;
- l’utilisation de **Trivy** ;
- la mise en place de **SonarQube** ;
- la gestion des images sur **Docker Hub** ;
- les notifications par e-mail ;
- la participation à l’intégration d’outils complémentaires comme **Prometheus** et **Grafana**.

## Lecture transverse de l’organisation

Cette répartition met en évidence une organisation de projet fondée sur des blocs de compétences complémentaires :

- **déploiement et exposition web**, pour rendre les services accessibles dans de bonnes conditions ;
- **architecture et administration système**, pour poser une base technique solide ;
- **sécurité opérationnelle**, pour surveiller, analyser et réduire les risques ;
- **modélisation réseau**, pour garantir la cohérence de l’infrastructure ;
- **automatisation et qualité**, pour améliorer la maîtrise du cycle de mise en service.

## Apport de la répartition au projet

Une répartition claire des responsabilités a apporté plusieurs bénéfices concrets :

- meilleure lisibilité de l’avancement par domaine technique ;
- exécution parallèle de plusieurs chantiers sans confusion de rôles ;
- justification plus crédible des choix techniques devant un lecteur ou un jury ;
- valorisation explicite de la contribution de chaque membre ;
- meilleure cohérence entre la documentation, les livrables et les démonstrations techniques.

> **Synthèse :** le projet YTech Solutions ne repose pas sur une intervention isolée, mais sur une collaboration structurée où chaque membre a contribué à un volet technique identifié, avec un impact direct sur la qualité finale de l’environnement.
