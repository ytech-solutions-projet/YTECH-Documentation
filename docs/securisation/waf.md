---
title: Intégration du WAF
---

# Intégration du WAF

Dans le cadre du projet, un **WAF** (Web Application Firewall) a été intégré en mode démonstration avec **SafeLine WAF**. L’objectif n’était pas de déployer une protection industrielle complète sur l’ensemble de l’infrastructure, mais de montrer qu’il est possible d’ajouter une couche de défense spécialisée au niveau des requêtes HTTP et HTTPS.

## Rôle du WAF dans le projet

Un WAF agit comme un filtre applicatif orienté web. Contrairement à un pare-feu réseau classique, il ne s’intéresse pas uniquement aux adresses IP, aux interfaces ou aux ports, mais également :

- aux URL appelées ;
- aux paramètres transmis ;
- aux motifs de requêtes inhabituels ;
- aux comportements de type flood ou automatisation ;
- aux tentatives d’accès à des chemins sensibles.

Dans YTech Solutions, cette brique a donc une valeur démonstrative claire : elle complète la sécurité réseau et système par une couche de contrôle plus proche de l’application.

## Ce que le WAF protège

Le WAF vient se placer devant le service web exposé afin de :

- observer le trafic HTTP/HTTPS ;
- détecter certaines requêtes anormales ;
- bloquer ou ralentir certains comportements ;
- fournir une visibilité statistique sur le trafic reçu.

> **Point important :** un WAF ne remplace ni le reverse proxy, ni le pare-feu, ni les bonnes pratiques de développement. Il ajoute une couche complémentaire.

## Page de détection SafeLine

![Page de détection SafeLine WAF](/img/waf/safeline-waf-detection-page.jpg)

Cette capture montre l’écran affiché lorsqu’une requête est interceptée ou qu’un filtrage SafeLine WAF est en cours. Elle matérialise de façon visible l’existence d’une couche de protection située entre l’utilisateur et l’application.

Cette preuve visuelle est intéressante dans la documentation, car elle montre que le filtrage n’est pas seulement théorique : une réponse spécifique peut être renvoyée lorsqu’un contrôle de sécurité s’applique.

## Tableau de bord SafeLine WAF

![Tableau de bord SafeLine WAF](/img/waf/safeline-waf-dashboard.jpg)

Le tableau de bord met en évidence plusieurs indicateurs utiles :

- le volume de requêtes observées ;
- le nombre de visiteurs et d’origines distinctes ;
- le nombre de requêtes bloquées ;
- le taux d’erreurs `4xx` ;
- l’absence d’erreurs `5xx` sur la période visible ;
- la répartition géographique des accès ;
- les pics d’activité et les événements de blocage.

## Analyse de la démonstration

Cette intégration permet de montrer plusieurs points importants :

- une application web peut être protégée à plusieurs niveaux ;
- il est possible d’observer des comportements suspects avant même d’atteindre la couche métier ;
- les tableaux de bord du WAF apportent une lecture complémentaire aux logs et à la supervision ;
- la sécurité web ne se limite pas à l’authentification utilisateur.

## Apports concrets dans l’architecture

Dans le projet, le WAF vient compléter :

- le pare-feu OPNsense pour le contrôle réseau ;
- Nginx pour l’exposition des services ;
- le hardening Linux pour la sécurisation du socle système ;
- Graylog et Zabbix pour l’observation et l’exploitation.

Son intérêt est donc surtout pédagogique et architectural : il illustre la logique de **défense en profondeur**.

## Limites

Dans le cadre de ce projet, le WAF a été utilisé en démonstration. Cela implique plusieurs limites :

- la configuration n’est pas nécessairement calibrée pour un contexte de production réel ;
- toutes les fonctionnalités avancées n’ont pas forcément été exploitées ;
- le WAF ne remplace pas une revue de sécurité applicative ;
- il doit être interprété comme une couche supplémentaire, et non comme une solution unique.

## Conclusion de section

L’intégration de SafeLine WAF renforce la crédibilité technique du projet en montrant qu’une protection spécifique des requêtes web a été envisagée. Même en mode démonstratif, cette brique apporte une vraie valeur pédagogique et complète utilement l’architecture de sécurité.
