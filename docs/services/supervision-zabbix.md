---
title: Supervision avec Zabbix
---

# Supervision avec Zabbix

La supervision est importante, car un service peut être correctement déployé tout en devenant indisponible plus tard. Dans le projet YTech Solutions, **Zabbix** a été utilisé pour vérifier la disponibilité du site, suivre l’état des hôtes et observer plusieurs indicateurs de fonctionnement.

## Rôle de Zabbix dans le projet

Zabbix sert à :

- surveiller l’état général des services ;
- suivre la disponibilité des hôtes ;
- mesurer certains indicateurs de performance ;
- détecter des anomalies ou des alertes ;
- fournir une visibilité exploitable pour l’administration.

## Supervision globale

![Vue globale Zabbix](/img/zabbix/zabbix-global-view.jpg)

Cette vue d’ensemble met en évidence la disponibilité des hôtes, la sévérité des problèmes et les principales informations système remontées par la plateforme.

Le tableau de bord global montre que la supervision ne se limite pas à un simple contrôle binaire. Il permet généralement d’observer :

- l’activité du serveur Zabbix ;
- l’état des hôtes supervisés ;
- les problèmes par gravité ;
- des indicateurs synthétiques utiles à l’exploitation ;
- les incidents actuellement visibles sur la plateforme.

Cette vue est précieuse, car elle fournit en quelques secondes une lecture opérationnelle de l’environnement.

Les informations visibles permettent également de relever plusieurs repères concrets :

- **Zabbix server version** : `7.0.24` ;
- **Zabbix frontend version** : `7.0.24` ;
- un problème courant affiché : `Linux: High memory utilization (>90% for 5m)` ;
- une synthèse de disponibilité et de sévérité déjà exploitable directement depuis le tableau de bord.

## Hôtes surveillés

![Hôtes supervisés dans Zabbix](/img/zabbix/zabbix-hosts.jpg)

On y distingue plusieurs hôtes supervisés, dont `App RH CRUD`, `OpenSense`, `Site Commercial Ytech` et `Zabbix server`, tous visibles depuis l’interface d’administration.

La page des hôtes montre les équipements et services déjà intégrés dans la supervision. Elle permet notamment de consulter :

- le nom de l’hôte ;
- l’interface associée ;
- la disponibilité ;
- le statut d’activation ;
- l’accès aux dernières données ;
- les problèmes ou graphiques associés.

Cette vue montre que la supervision porte à la fois sur les services applicatifs et sur des briques d’infrastructure.

## Scénario web configuré

![Scénario web Zabbix](/img/zabbix/zabbix-web-scenario.png)

Cette capture montre le scénario web configuré dans Zabbix pour contrôler l’accessibilité du service. On y voit le scénario `Disponibilité site Ytech`, associé au `Web Server Ytech`, avec un état `Enabled`.

Ce type de scénario est utile, car il permet de vérifier automatiquement :

- si l’URL répond ;
- si le code HTTP attendu est bien retourné ;
- si le délai de réponse reste acceptable ;
- si une étape du parcours web échoue.

## Disponibilité et temps de réponse

Le scénario web permet de transformer l’accessibilité du site en données observables. Cela apporte une valeur concrète :

- détection plus rapide d’une indisponibilité ;
- suivi de la réponse du service dans le temps ;
- meilleure compréhension de l’état réel du parcours web.

## Résultats du contrôle

![Résultats du scénario web Zabbix](/img/zabbix/zabbix-web-results.png)

Cette capture montre les éléments remontés par Zabbix après l’exécution du scénario : code de réponse, temps de réponse, erreur éventuelle et état des étapes.

Dans une logique d’exploitation, cette vue apporte une vraie valeur :

- elle permet d’identifier rapidement l’étape qui échoue ;
- elle facilite le diagnostic en cas d’indisponibilité ;
- elle donne des données concrètes sur le comportement du service dans le temps.

## Alertes observées

Selon les vues disponibles dans le projet, Zabbix peut également faire remonter :

- des alertes de disponibilité ;
- des anomalies liées aux performances ;
- des problèmes système sur les hôtes supervisés.

Même lorsqu’une alerte n’est pas critique, sa présence est utile, car elle montre que la plateforme détecte effectivement des événements exploitables.

Dans la capture globale, on voit d’ailleurs un exemple concret d’alerte de capacité mémoire sur le serveur Zabbix. Ce point est intéressant, car il prouve que la plateforme ne remonte pas uniquement des statuts “verts”, mais aussi des signaux réellement exploitables pour l’administration.

## Tableau de synthèse

| Élément supervisé | Type de contrôle | Ce que cela permet de savoir |
| --- | --- | --- |
| Hôte | Disponibilité / statut | Si la machine ou le service répond encore |
| Scénario web | Parcours HTTP | Si l’application reste accessible |
| Dernières données | Valeurs collectées | Si les métriques remontent correctement |
| Problèmes | Alertes et anomalies | Si une action d’administration est nécessaire |

## Limites et remarques

Des compléments pourraient encore être ajoutés pour aller plus loin :

- les noms exacts de tous les hôtes suivis ;
- les déclencheurs les plus importants ;
- les seuils d’alerte retenus ;
- les graphiques ou indicateurs les plus significatifs.

## Conclusion de section

Zabbix apporte au projet une dimension de **visibilité opérationnelle** indispensable. Il permet de passer d’un environnement simplement fonctionnel à un environnement réellement surveillé.
