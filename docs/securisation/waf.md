---
title: Intégration du WAF
---

# Intégration du WAF

Dans le cadre du projet, un **WAF** (Web Application Firewall) a été intégré en mode démonstration avec **SafeLine WAF**. L’objectif n’était pas de déployer une solution industrielle complète sur toute l’infrastructure, mais de montrer qu’il est possible d’ajouter une couche de défense supplémentaire au niveau des requêtes HTTP et HTTPS.

Un WAF agit comme un filtre spécialisé pour les applications web. Contrairement à un pare-feu réseau classique, il ne s’intéresse pas seulement aux adresses IP ou aux ports, mais aussi au contenu des échanges web : URL appelées, paramètres transmis, comportements suspects, volume de requêtes ou tentatives d’exploitation.

## Page de détection SafeLine

![Page de détection SafeLine WAF](/img/waf/safeline-waf-detection-page.jpg)

Cette capture montre l’écran affiché lorsqu’une requête est interceptée ou qu’un filtrage SafeLine WAF est en cours. On distingue une page bleue plein écran, le domaine `ytech.myddns.me` dans le navigateur et, en bas de l’écran, le message `Security Detection Powered By SafeLine WAF`.

Cette vue est intéressante dans la documentation, car elle matérialise la protection de manière visible côté utilisateur. Elle montre qu’entre le client et l’application, une couche supplémentaire est capable d’inspecter la requête et de renvoyer une réponse spécifique lorsqu’un contrôle de sécurité s’applique.

## Tableau de bord SafeLine WAF

![Tableau de bord SafeLine WAF](/img/waf/safeline-waf-dashboard.jpg)

Cette capture reprend les principaux éléments visibles sur le tableau de bord **SafeLine WAF > Statistics** utilisé dans le projet. On y retrouve plusieurs indicateurs utiles :

- `Requests : 70`, soit le volume total de requêtes observées ;
- `Views (PV) : 58`, qui donne une idée du nombre de consultations ;
- `Visitors (UV) : 10` et `Unique IP : 10`, qui montrent le nombre d’utilisateurs ou d’origines distinctes ;
- `Blocked : 4`, qui indique que certaines requêtes ont effectivement été filtrées ;
- `4xx Errors : 52` avec un `Error Rate : 74.29%`, ce qui met en évidence un nombre important de réponses client incorrectes ou rejetées ;
- `4xx Blocked : 4` et `Blocked Rate : 5.71%`, qui montrent qu’une part du trafic a été explicitement bloquée par la politique de sécurité ;
- `5xx Errors : 0`, ce qui est intéressant, car cela suggère qu’aucune erreur serveur critique n’est remontée sur cette période.

La partie droite du tableau de bord montre aussi deux graphes utiles :

- un graphe de statut des requêtes, qui permet d’observer les pics d’activité ;
- un graphe de blocage, qui permet d’identifier visuellement les moments où le WAF a déclenché une action de protection.

La zone **Geo Location** donne une répartition géographique des requêtes observées. Dans cette capture, les origines les plus visibles sont l’Inde, le Maroc, les États-Unis, la France et le Royaume-Uni. Même dans un projet pédagogique, ce type d’information est utile pour comprendre d’où viennent les accès et si certains flux paraissent cohérents avec le contexte attendu.

## Fonctions visibles dans l’interface

La barre latérale de SafeLine WAF met en évidence plusieurs briques de sécurité :

- `Applications`, pour gérer les applications protégées ;
- `Attacks`, pour visualiser les événements ou tentatives détectées ;
- `Allow & Deny`, pour définir des règles d’autorisation ou de blocage ;
- `HTTP Flood`, pour traiter les comportements de saturation ou de trafic excessif ;
- `Anti-Bot`, pour réduire certains trafics automatisés ;
- `Auth`, pour compléter la protection par des mécanismes d’authentification ou de contrôle d’accès.

Même si toutes ces fonctionnalités n’ont pas été exploitées à un niveau avancé dans le projet, leur présence montre qu’un WAF moderne ne se limite pas à un simple blocage binaire. Il propose une logique de filtrage beaucoup plus riche, orientée application.

## Rôle dans le projet

Cette intégration a principalement une valeur pédagogique. Elle permet d’illustrer la notion de **défense en profondeur**, c’est-à-dire l’idée qu’un système doit être protégé par plusieurs couches complémentaires plutôt que par une seule mesure.

Dans l’architecture YTech Solutions, le WAF vient compléter :

- le pare-feu OPNsense pour le contrôle réseau ;
- le reverse proxy Nginx pour l’exposition des services web ;
- le hardening Linux pour la sécurisation du serveur ;
- la supervision et les logs pour la détection d’incidents.

Autrement dit, le WAF ajoute une couche spécialisée sur les échanges web eux-mêmes. Il est particulièrement pertinent pour observer ou filtrer :

- des requêtes anormales vers certaines pages ;
- des volumes inhabituels d’appels HTTP ;
- des comportements automatisés ;
- des tentatives d’accès à des chemins sensibles.

## Apport concret de cette démonstration

L’intérêt de cette intégration est double :

- elle montre qu’une application web peut être protégée à plusieurs niveaux, et pas uniquement par un login ou par un pare-feu réseau ;
- elle donne une visibilité plus opérationnelle sur le trafic, grâce aux statistiques, aux événements de blocage et aux tableaux de bord.

Même dans un contexte académique, ce type d’outil aide à faire le lien entre théorie et pratique : on ne parle plus seulement de sécurité web de manière abstraite, on voit comment un produit de protection observe, classe et bloque certains comportements.

## Limites

Dans le cadre de ce projet, le WAF a été utilisé en démonstration. Il ne remplace ni le reverse proxy, ni le hardening système, ni les autres outils d’analyse ou de supervision. Il ne remplace pas non plus une revue de configuration applicative ou des bonnes pratiques de développement.

En revanche, il complète utilement l’architecture finale en montrant une protection supplémentaire au niveau applicatif, ce qui renforce la cohérence globale de la démarche de sécurisation.
