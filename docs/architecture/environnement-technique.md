---
title: Environnement technique
---

# Environnement technique

Le projet YTech Solutions s’appuie sur plusieurs technologies et outils complémentaires. L’intérêt de cette page est de montrer non seulement quels composants ont été utilisés, mais surtout **pourquoi** ils ont été retenus et **comment** ils s’articulent dans l’environnement global.

## Vue d’ensemble

L’environnement technique combine :

- des technologies applicatives pour exécuter les services ;
- des composants d’hébergement et d’exposition ;
- des outils de sécurité ;
- des outils d’exploitation, de supervision et d’administration.

## Tableau récapitulatif

| Composant | Rôle | Technologie | Hébergement | Exposition |
| --- | --- | --- | --- | --- |
| Site vitrine | Présentation publique des services | React / Vite | Build frontend servi via Nginx sur serveur Linux | Exposé |
| Application RH | Fonction métier interne | Interface web + service applicatif | Serveur Linux Ubuntu derrière Nginx | Interne ou exposition contrôlée |
| Service applicatif | Traitement des requêtes et logique métier | Node.js / Express | Serveur Linux avec PM2 | Interne |
| Base de données | Stockage relationnel | PostgreSQL | Instance PostgreSQL interne | Interne |
| Reverse proxy | Point d’entrée web et routage | Nginx | Serveur d’exposition sous Linux | Exposé |
| Gestionnaire de processus | Maintien en service du backend | PM2 | Serveur applicatif | Interne |
| Pare-feu | Filtrage et segmentation réseau | OPNsense | Appliance ou VM dédiée | Interne, rôle transverse |
| Supervision | Suivi de l’état des services | Zabbix 7.0.24 | Serveur de supervision interne | Interne |
| Journalisation | Centralisation des événements | Graylog 5.2.12 | Instance interne dédiée | Interne |
| Gestion des secrets | Centralisation des identifiants | Vaultwarden | Instance web interne | Interne |
| Scan de vulnérabilités | Évaluation de la posture de sécurité | Nessus Essentials | Interface Nessus sur le réseau interne | Interne |
| Accès distant | Administration sécurisée | Tailscale / Ngrok | Postes d’administration et services concernés | Contrôlé / temporaire |
| Assistant IA local | Assistance interne et expérimentation | Ollama / Open WebUI | Hôte interne dédié, accessible sur le port 3000 | Interne |

## Technologies applicatives

Les briques applicatives identifiées dans le projet sont les suivantes :

- **React** pour la construction des interfaces ;
- **Vite** pour le développement et la génération de build côté client ;
- **Node.js** pour l’exécution JavaScript côté serveur ;
- **Express** pour la structuration du service applicatif ;
- **PostgreSQL** pour le stockage relationnel.

Ces composants forment la chaîne fonctionnelle principale : interface utilisateur, logique métier et persistance des données.

## Hébergement et exploitation

Le socle d’hébergement et d’administration repose sur :

- **Ubuntu Server** comme système d’exploitation principal ;
- **Nginx** comme reverse proxy ;
- **PM2** pour la gestion du service Node.js ;
- **Docker** pour certains outils ou services complémentaires.

Cette couche permet d’exécuter durablement les services, de les exposer de manière plus propre et de simplifier l’administration quotidienne.

## Outils de sécurité et d’observation

Le projet intègre également plusieurs outils transverses :

- **OPNsense** pour le filtrage réseau et la segmentation ;
- **Fail2Ban** pour la protection de certains services exposés ;
- **Graylog** pour la centralisation des journaux ;
- **Zabbix** pour la supervision ;
- **Vaultwarden** pour la gestion des secrets ;
- **Nessus Essentials** pour les scans de vulnérabilités ;
- **Tailscale** et **Ngrok** pour l’accès distant selon les besoins ;
- un **WAF** en démonstration ;
- **Suricata** en appui de la visibilité réseau ;
- **Ollama** et **Open WebUI** pour l’expérimentation d’un assistant IA local.

## Repères concrets observés dans l’environnement

Les captures et pages de service permettent déjà d’identifier plusieurs repères techniques concrets :

- **Zabbix** apparaît en version `7.0.24` côté serveur et interface ;
- **Graylog** affiche une instance `5.2.12` avec des inputs **GELF UDP** et **Syslog UDP** actifs ;
- **Nessus Essentials** est accessible sur une interface web interne en `https` sur le port `8834` ;
- **Open WebUI** est utilisé en local sur le port `3000` avec plusieurs comptes utilisateurs ;
- **Suricata** est actif en version `7.0.3` sur le serveur Linux.

## Relation entre les composants

Le fonctionnement global peut être résumé ainsi :

1. l’utilisateur accède au service web via la couche d’exposition ;
2. le reverse proxy relaie les requêtes vers le service applicatif ;
3. le service applicatif interagit avec la base de données ;
4. le pare-feu encadre les flux autorisés ;
5. les outils de supervision et de journalisation donnent de la visibilité ;
6. les outils de sécurité et de gestion des secrets renforcent l’exploitation.

```text
Utilisateur -> Nginx -> Service applicatif -> Base de données
                 |-> Journalisation / supervision / contrôle des accès
```

## Niveau de précision retenu

Cette documentation cherche un équilibre entre précision technique et lisibilité. Les rôles, les flux et les outils sont détaillés de façon explicite, tandis que certaines valeurs très sensibles ou trop dépendantes du contexte d’exécution ne sont pas répétées partout.

L’essentiel est donc bien documenté :

- la place de chaque composant dans l’architecture ;
- la logique d’exposition ou d’isolement ;
- les outils réellement visibles dans l’environnement ;
- les relations entre exploitation, sécurité et administration.
