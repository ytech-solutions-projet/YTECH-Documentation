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
| Site vitrine | Présentation publique des services | React / Vite | À compléter avec l’hébergement réel | Exposé |
| Application RH | Fonction métier interne | Interface web + service applicatif | À compléter avec l’hébergement réel | Interne ou exposition contrôlée |
| Service applicatif | Traitement des requêtes et logique métier | Node.js / Express | Serveur Linux | Interne |
| Base de données | Stockage relationnel | PostgreSQL | Serveur Linux ou hôte dédié à confirmer | Interne |
| Reverse proxy | Point d’entrée web et routage | Nginx | Serveur d’exposition | Exposé |
| Gestionnaire de processus | Maintien en service du backend | PM2 | Serveur applicatif | Interne |
| Pare-feu | Filtrage et segmentation réseau | OPNsense | Équipement réseau / VM dédiée | Interne, rôle transverse |
| Supervision | Suivi de l’état des services | Zabbix | À compléter avec l’hôte réel | Interne |
| Journalisation | Centralisation des événements | Graylog | À compléter avec l’hôte réel | Interne |
| Gestion des secrets | Centralisation des identifiants | Vaultwarden | À compléter avec l’hôte réel | Interne |
| Scan de vulnérabilités | Évaluation de la posture de sécurité | Nessus Essentials | Hôte de sécurité à compléter | Interne |
| Accès distant | Administration sécurisée | Tailscale / Ngrok | Selon usage | Contrôlé / temporaire |
| Assistant IA local | Assistance interne et expérimentation | Ollama / Open WebUI | Réseau local | Interne |

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

## Données techniques à confirmer

Certaines informations gagneraient à être complétées dans une version finale encore plus précise :

- versions exactes de chaque composant ;
- ports réellement utilisés ;
- hôtes ou machines associés à chaque service ;
- adresses IP finales ;
- noms d’hôtes homogénéisés dans toute la documentation.

> **Point important :** lorsqu’une donnée précise n’est pas encore figée, il vaut mieux l’indiquer clairement plutôt que d’inventer une valeur approximative.
