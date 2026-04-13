---
title: Supervision avec Zabbix
---

# Supervision avec Zabbix

La supervision est importante, car un service peut être correctement déployé tout en devenant indisponible plus tard. Dans le projet YTech Solutions, **Zabbix** a été utilisé pour vérifier la disponibilité du site, suivre l’état des hôtes et observer plusieurs indicateurs de fonctionnement.

## Vue globale du tableau de bord

_Capture fournie : tableau de bord global Zabbix._

La vue globale montre que la supervision ne se limite pas à un simple contrôle binaire. On y retrouve plusieurs éléments utiles :

- l’activité générale du serveur Zabbix avec un débit d’environ `2.41` valeurs par seconde ;
- les informations système de la plateforme de supervision ;
- l’état de disponibilité des hôtes ;
- une synthèse des problèmes par niveau de gravité ;
- une liste des incidents courants, ici une alerte de mémoire élevée sur le serveur Zabbix.

Cette vue est importante, car elle donne immédiatement une lecture opérationnelle de l’environnement. En quelques secondes, l’administrateur peut voir si la plateforme fonctionne correctement, si des hôtes répondent encore et si une anomalie mérite une investigation plus poussée.

## Hôtes supervisés

_Capture fournie : page des hôtes dans Zabbix._

La page des hôtes montre les équipements et services déjà intégrés dans la supervision. Dans la capture, on distingue notamment :

- `App RH CRUD` ;
- `OpenSense` ;
- `Site Commercial Ytech` ;
- `Zabbix server`.

Cette liste montre que la supervision porte à la fois sur l’application métier, l’infrastructure réseau et le serveur de supervision lui-même. Les colonnes visibles permettent aussi de consulter rapidement :

- l’interface utilisée pour le suivi ;
- la disponibilité de l’agent ou du service ;
- le statut d’activation ;
- l’accès aux dernières données ;
- les problèmes, graphiques, tableaux de bord et contrôles web associés.

Autrement dit, Zabbix sert ici de point central pour organiser le suivi de plusieurs briques techniques au même endroit.

## Scénario web configuré

![Scénario web Zabbix](/img/zabbix/zabbix-web-scenario.png)

Cette première capture montre le scénario web configuré dans Zabbix pour contrôler l’accessibilité du service. On y voit le scénario `Disponibilité site Ytech`, associé au `Web Server Ytech`, avec un intervalle d’exécution régulier et un état `Enabled`.

Ce type de scénario est utile, car il permet de vérifier automatiquement plusieurs éléments :

- si l’URL répond ;
- si le code HTTP attendu est bien retourné ;
- si le délai de réponse reste acceptable ;
- si une étape du parcours web échoue.

## Résultats du contrôle

![Résultats du scénario web Zabbix](/img/zabbix/zabbix-web-results.png)

Cette seconde capture montre les éléments remontés par Zabbix après l’exécution du scénario : code de réponse, temps de réponse, erreur éventuelle et état des étapes. On voit ici que l’outil conserve une trace exploitable pour comprendre rapidement si le service est disponible ou si un incident doit être investigué.

Dans une logique d’exploitation, cette vue apporte une vraie valeur :

- elle permet d’identifier rapidement l’étape qui échoue ;
- elle facilite le diagnostic en cas d’indisponibilité ;
- elle donne des données concrètes sur le comportement du service dans le temps.

## Intérêt

Zabbix permet :

- de vérifier si le service répond ;
- de surveiller la disponibilité ;
- de détecter plus rapidement un dysfonctionnement ;
- d’améliorer la visibilité opérationnelle sur l’infrastructure ;
- d’avoir une vue centralisée sur plusieurs hôtes et plusieurs types d’alertes.

Pour un lecteur non technique, on peut dire que Zabbix sert à "surveiller si le site et les serveurs répondent toujours correctement".
