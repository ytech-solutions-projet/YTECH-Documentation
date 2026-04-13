---
title: Pare-feu OPNsense
---

# Pare-feu OPNsense

Dans l’architecture finale de YTech Solutions, **OPNsense** joue le rôle de pare-feu principal. Il permet de contrôler les flux entre les postes d’administration, les services internes et les applications web exposées. Cette brique est importante, car elle matérialise la séparation entre ce qui doit circuler librement dans le réseau et ce qui doit être autorisé de manière explicite.

L’intérêt d’OPNsense dans le projet ne se limite pas au blocage du trafic. Il sert aussi à :

- visualiser l’état global du pare-feu et des passerelles ;
- organiser les règles par interface ;
- créer des alias réutilisables pour simplifier la configuration ;
- appliquer une logique de moindre privilège sur les accès réseau.

## Tableau de bord OPNsense

![Tableau de bord OPNsense](/img/opnsense/opnsense-dashboard.png)

Cette première capture montre l’écran d’accueil d’OPNsense. On y voit plusieurs informations utiles pour l’exploitation quotidienne :

- le nom de l’équipement `Y-TECH.internal`, qui identifie clairement le pare-feu dans l’infrastructure ;
- les versions d’OPNsense, de FreeBSD et d’OpenSSL, utiles pour vérifier la base logicielle utilisée ;
- l’état des passerelles `WAN_DHCP` et `WAN_DHCP6`, qui confirme la connectivité IPv4 et IPv6 ;
- le temps de fonctionnement et la charge système, qui donnent une indication rapide de la stabilité de la machine ;
- les widgets de services et les graphes de trafic, qui permettent de vérifier en un coup d’œil que le système tourne correctement.

Ce tableau de bord a un intérêt opérationnel fort : il centralise l’état du pare-feu, du réseau et des services système dans une seule interface. Pour un administrateur, cela facilite la détection rapide d’un problème de connectivité, d’une passerelle inactive ou d’une surcharge.

## Création de l’alias `WEB_PORTS`

![Alias WEB_PORTS dans OPNsense](/img/opnsense/opnsense-web-ports.png)

Cette capture montre la création de l’alias **`WEB_PORTS`** dans le menu *Firewall > Aliases*. L’alias est configuré avec :

- le type `Port(s)` ;
- les valeurs `80` et `443` ;
- un état activé, ce qui le rend immédiatement disponible dans les règles du pare-feu.

Le choix de cet alias apporte plusieurs avantages :

- il regroupe les ports standards du trafic web, c’est-à-dire **HTTP** (`80`) et **HTTPS** (`443`) ;
- il évite de répéter les mêmes ports dans plusieurs règles ;
- il rend la lecture des règles plus claire, car `WEB_PORTS` est plus parlant qu’une suite de numéros ;
- il simplifie la maintenance : si un port doit être ajouté ou modifié plus tard, il suffit de changer l’alias au lieu de corriger chaque règle une par une.

Dans le contexte du projet, cet alias sert à encadrer l’accès aux services web hébergés derrière le reverse proxy. C’est une bonne pratique de configuration, car elle améliore à la fois la lisibilité et la fiabilité de l’ensemble des règles.

## Règles LAN et logique de filtrage

![Règles LAN OPNsense](/img/opnsense/opnsense-lan-rules.png)

Cette capture présente les règles appliquées sur l’interface **LAN**. On y distingue plusieurs autorisations ciblées ainsi que des restrictions plus précises. Même si toutes les règles n’ont pas le même niveau de granularité, l’ensemble montre une logique claire : ne laisser passer que les flux utiles à l’administration et à l’accès aux services autorisés.

Parmi les éléments visibles sur cette capture, on peut relever :

- une présence des règles par protocole (`IPv4`, `IPv6`, `TCP`, `ICMP`) selon le besoin réseau ;
- l’utilisation d’objets nommés comme `LAN_NET`, `TAILSCALE_NET`, `ADMIN_PC` et `Tailscale_Serveur`, ce qui améliore fortement la lisibilité ;
- une règle dédiée à l’accès de `ADMIN_PC` vers `Tailscale_Serveur` sur l’alias `WEB_PORTS`, ce qui signifie que le poste d’administration est autorisé à atteindre le serveur uniquement sur les ports web nécessaires ;
- une règle `ICMP`, utile pour les tests de connectivité et le diagnostic réseau ;
- une règle de blocage sur `SSH (22)`, qui illustre une volonté de limiter les accès d’administration non souhaités.

Cette organisation est intéressante pour plusieurs raisons :

- elle traduit une **segmentation logique** entre les machines, les réseaux et les usages ;
- elle réduit la surface d’exposition en évitant les ouvertures trop larges ;
- elle facilite les audits, car chaque règle est plus simple à comprendre ;
- elle s’inscrit dans une démarche de **moindre privilège**, où un flux n’est autorisé que s’il répond à un besoin identifié.

## Apport d’OPNsense dans le projet

L’intégration d’OPNsense renforce concrètement l’architecture finale. Elle montre que la sécurité du projet n’est pas seulement applicative, mais aussi réseau. Grâce à ce pare-feu, les accès peuvent être structurés, justifiés et contrôlés.

Cette partie complète donc naturellement le reverse proxy, le durcissement Linux, le VPN et les autres outils de supervision. Ensemble, ces éléments construisent une infrastructure plus cohérente, plus lisible et plus défendable.
