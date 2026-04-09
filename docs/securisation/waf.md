---
title: Intégration du WAF
---

# Intégration du WAF

Dans le cadre du projet, un **WAF** (Web Application Firewall) a été intégré en mode démonstration. L’objectif n’était pas de mettre en place un dispositif industriel complet, mais de montrer qu’il est possible d’ajouter une couche de protection au niveau des requêtes web elles-mêmes.

Un WAF agit comme un filtre spécialisé pour les applications web. Il s’intéresse non seulement au trafic réseau, mais aussi au contenu de certaines requêtes HTTP.

## Rôle dans le projet

Cette intégration a principalement une valeur pédagogique. Elle permet d’illustrer la notion de **défense en profondeur**, c’est-à-dire l’idée qu’un système doit être protégé par plusieurs couches complémentaires plutôt que par une seule mesure.

## Limites

Dans le cadre de ce projet, le WAF a été utilisé en démonstration. Il ne remplace ni le reverse proxy, ni le hardening système, ni les autres outils d’analyse ou de supervision. En revanche, il complète utilement l’architecture finale en montrant une protection supplémentaire au niveau applicatif.
