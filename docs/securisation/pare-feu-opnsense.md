---
title: Pare-feu OPNsense
---

# Pare-feu OPNsense

Dans l’architecture finale de YTech Solutions, **OPNsense** joue le rôle de pare-feu principal. Il permet de contrôler les flux entre les postes d’administration, les services internes et les applications web exposées. Cette brique est essentielle, car elle matérialise la séparation entre ce qui doit circuler librement dans le réseau et ce qui doit être autorisé de manière explicite.

## Rôle d’OPNsense dans l’architecture

L’intérêt d’OPNsense dans le projet ne se limite pas au blocage du trafic. Il sert aussi à :

- visualiser l’état global du pare-feu et des passerelles ;
- organiser les règles par interface ;
- créer des alias réutilisables pour simplifier la configuration ;
- appliquer une logique de **moindre privilège** sur les accès réseau ;
- soutenir la segmentation entre administration, services internes et exposition web.

## Principe de filtrage retenu

La logique de filtrage mise en avant dans le projet repose sur une idée simple :

- un flux n’est pas autorisé parce qu’il existe ;
- il est autorisé parce qu’il répond à un besoin identifié.

Cette approche s’oppose à une configuration trop permissive où les communications seraient largement ouvertes par défaut.

> **Point important :** plus une règle est ciblée, plus elle est facile à justifier, à maintenir et à auditer.

## Tableau de bord OPNsense

![Tableau de bord OPNsense](/img/opnsense/opnsense-dashboard.png)

Cette première capture montre l’écran d’accueil d’OPNsense. On y voit plusieurs informations utiles pour l’exploitation quotidienne :

- le nom de l’équipement ;
- les versions logicielles principales ;
- l’état des passerelles ;
- la charge système et le temps de fonctionnement ;
- les widgets de services et les graphes de trafic.

Ce tableau de bord permet de vérifier rapidement si le pare-feu fonctionne correctement avant même d’analyser les règles en détail.

## Intérêt des alias

![Alias WEB_PORTS dans OPNsense](/img/opnsense/opnsense-web-ports.png)

La capture montre la création de l’alias **`WEB_PORTS`** dans le menu *Firewall > Aliases*. Cet alias regroupe les ports web standards `80` et `443`.

L’usage d’un alias apporte plusieurs bénéfices :

- il évite de répéter des valeurs identiques dans plusieurs règles ;
- il rend les règles plus lisibles ;
- il simplifie la maintenance ;
- il réduit le risque d’erreur lors des modifications futures.

Dans une documentation soutenable, cet élément est important car il prouve que la configuration n’a pas été réalisée de manière improvisée.

## Règles LAN et logique de filtrage

![Règles LAN OPNsense](/img/opnsense/opnsense-lan-rules.png)

Cette capture présente les règles appliquées sur l’interface **LAN**. On y distingue plusieurs autorisations ciblées ainsi que des restrictions explicites.

Les éléments visibles montrent une volonté de :

- distinguer les objets réseau par nom ;
- cibler les flux par protocole et destination ;
- autoriser les accès utiles à l’administration et aux services web ;
- bloquer ou limiter certains accès plus sensibles comme SSH.

## Lecture des règles visibles

Le tableau suivant synthétise la logique observable dans la capture.

| Élément visible | Interprétation | Intérêt |
| --- | --- | --- |
| `WEB_PORTS` | Regroupement des ports web `80` et `443` | Lisibilité et maintenance |
| `ADMIN_PC -> Tailscale_Serveur -> WEB_PORTS` | Autorisation ciblée d’un poste d’administration vers les ports web | Contrôle des accès |
| Règle `ICMP` | Autorisation de tests réseau ciblés | Diagnostic et supervision |
| Blocage `SSH (22)` | Limitation d’un accès administratif sensible | Réduction de l’exposition |
| Objets nommés `LAN_NET`, `TAILSCALE_NET`, `ADMIN_PC` | Structuration de la configuration | Compréhension plus rapide |

## Apports concrets dans le projet

L’intégration d’OPNsense renforce concrètement l’architecture finale :

- la segmentation réseau devient visible et justifiable ;
- les flux ne sont plus laissés implicites ;
- les services exposés peuvent être encadrés plus proprement ;
- la sécurité ne repose plus uniquement sur la configuration applicative.

Cette partie complète naturellement le reverse proxy, le hardening Linux, l’accès distant contrôlé et les outils d’observation.

## Limites et approfondissements possibles

Pour une version encore plus démonstrative, on pourrait ajouter :

- le détail complet des interfaces et sous-réseaux ;
- un extrait des règles WAN si elles ont été utilisées ;
- la politique par défaut réellement appliquée ;
- le nom exact des objets réseau utilisés dans la configuration finale.

La documentation actuelle reste néanmoins suffisante pour comprendre la logique de filtrage : objets nommés, alias réutilisables, règles ciblées et limitation explicite de certains accès sensibles.

## Conclusion de section

OPNsense apporte au projet une couche de contrôle réseau essentielle. Son intérêt ne réside pas uniquement dans le filtrage, mais dans la capacité à **formaliser une politique d’accès lisible, ciblée et défendable**.
