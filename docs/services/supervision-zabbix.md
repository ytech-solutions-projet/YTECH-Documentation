---
title: Supervision avec Zabbix
---

# Supervision avec Zabbix

La supervision est importante, car un service peut être correctement déployé tout en devenant indisponible plus tard. Dans le projet YTech Solutions, **Zabbix** a été utilisé pour vérifier la disponibilité du site et observer certains indicateurs de fonctionnement.

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
- d’améliorer la visibilité opérationnelle sur l’infrastructure.

Pour un lecteur non technique, on peut dire que Zabbix sert à “surveiller si le site répond toujours correctement”.
