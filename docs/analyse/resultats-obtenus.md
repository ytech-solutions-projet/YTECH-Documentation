---
title: Résultats obtenus
---

# Résultats obtenus

Le projet YTech Solutions a permis d’obtenir plusieurs résultats concrets sur les plans technique, sécuritaire, opérationnel et pédagogique. L’intérêt de cette page est de faire apparaître non seulement les outils mis en place, mais aussi ce qu’ils prouvent et ce qu’ils apportent réellement à l’environnement.

## Résultats techniques

Les résultats techniques les plus visibles sont les suivants :

- déploiement d’un site vitrine fonctionnel ;
- déploiement d’une application RH opérationnelle ;
- exécution d’un backend géré par PM2 ;
- intégration d’un reverse proxy avec Nginx ;
- présence d’un environnement applicatif articulé autour d’un frontend, d’un backend et d’une base de données ;
- intégration d’un assistant IA local avec Open WebUI et Ollama.

| Résultat technique | Preuve observable | Intérêt |
| --- | --- | --- |
| Site vitrine accessible | Captures des pages d’accueil, contact, devis, connexion et inscription | Démonstration du fonctionnement public |
| Application RH accessible | Captures de connexion, tableau de bord et fonctionnalités internes | Démonstration de la partie métier |
| Backend actif | Capture PM2 avec statut `online` | Validation de l’exécution côté serveur |
| Reverse proxy en place | Configuration Nginx et test de validation | Exposition web mieux maîtrisée |
| Assistant IA local multi-utilisateur | Captures Open WebUI pour plusieurs comptes | Preuve d’un service interne réellement exploitable |

## Résultats en matière de sécurité

Le projet a également produit plusieurs résultats concrets en matière de sécurité :

- amélioration de l’organisation globale de l’architecture ;
- mise en place d’un pare-feu OPNsense avec logique de filtrage ;
- meilleure maîtrise des accès via des solutions dédiées ;
- renforcement du serveur Linux ;
- intégration d’outils de gestion des secrets, de scan de vulnérabilités et de protection web.

### Indicateurs visibles de renforcement

| Élément | Observation | Effet concret |
| --- | --- | --- |
| Hardening Linux | Score Lynis passé de `67` à `85` | Amélioration mesurable du socle système |
| Filtrage réseau | Règles OPNsense et alias dédiés | Réduction des flux non justifiés |
| Secrets | Centralisation dans Vaultwarden | Réduction des mauvaises pratiques |
| Journalisation et supervision | Graylog et Zabbix opérationnels | Meilleure visibilité sur l’environnement |
| Scan de vulnérabilités | Analyse réalisée avec Nessus | Évaluation plus objective de la posture de sécurité |
| Détection réseau | Suricata actif et producteur d’événements | Capacité de visibilité supplémentaire sur le trafic |

## Résultats d’exploitation et de supervision

L’environnement final n’est pas seulement fonctionnel : il devient aussi mieux observable. Cela se traduit par :

- une supervision des hôtes et des scénarios web avec Zabbix ;
- une centralisation des journaux avec Graylog ;
- une meilleure capacité à identifier un incident ou un comportement anormal ;
- une documentation plus précise des composants et de leurs rôles.

Ces éléments sont importants, car ils marquent le passage d’une logique de simple déploiement à une logique d’**exploitation**.

Plus concrètement, le projet démontre désormais :

- une collecte de logs via **Graylog** avec des inputs actifs en **GELF UDP** et **Syslog UDP** ;
- une supervision **Zabbix** avec hôtes, scénario web et alertes visibles ;
- une gestion centralisée des identifiants, y compris pour les comptes de l’assistant IA ;
- une séparation plus nette entre exposition web, administration et observation.

## Résultats pédagogiques

Le projet a également permis de développer plusieurs compétences :

- compréhension des architectures web et réseau ;
- administration Linux ;
- exposition contrôlée des services ;
- supervision et journalisation ;
- analyse de vulnérabilités ;
- gestion des accès et des secrets ;
- documentation technique structurée.

## Ce que le projet démontre globalement

Le projet montre qu’il est possible de :

- articuler développement, système, réseau et sécurité dans une même démarche ;
- transformer un environnement initialement peu structuré en architecture plus cohérente ;
- produire des preuves techniques soutenables devant un lecteur ou un jury ;
- expliquer de façon argumentée l’intérêt de chaque brique intégrée.

## Limites ou prolongements possibles

Pour renforcer encore cette page, plusieurs données pourraient être ajoutées :

- détail complet des vulnérabilités identifiées par Nessus ;
- mesures chiffrées de disponibilité ou de performance ;
- nombre exact d’hôtes, de services et de scénarios supervisés ;
- extraits de journaux ou d’alertes particulièrement représentatifs.

Ces compléments seraient utiles pour une soutenance très orientée métriques, mais la documentation actuelle fournit déjà des preuves techniques suffisantes pour justifier les résultats obtenus.

## Conclusion de section

Le résultat global du projet est positif : l’environnement final est plus structuré, mieux observé, plus cohérent et plus défendable que l’environnement de départ.
