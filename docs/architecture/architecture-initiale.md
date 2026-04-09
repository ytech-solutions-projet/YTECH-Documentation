---
title: Architecture initiale
---

# Architecture initiale

L’architecture initiale représentait la base de départ du projet. Elle permettait de faire fonctionner l’application, mais elle restait limitée du point de vue de l’organisation et de la sécurité.

Dans ce type de situation, les services sont souvent d’abord pensés pour fonctionner, puis seulement ensuite pour être correctement protégés. C’est précisément ce que nous avons observé ici : un environnement utilisable, mais encore perfectible sur plusieurs aspects essentiels.

## Limites observées

L’analyse de l’existant a permis d’identifier plusieurs faiblesses :

- cloisonnement insuffisant entre les services ;
- exposition trop directe de certains composants ;
- manque de segmentation logique ;
- sécurité des accès administratifs encore perfectible ;
- faible visibilité sur les événements techniques ;
- organisation des secrets et de la supervision à renforcer.

## Représentation de l’architecture initiale

![Architecture initiale](/img/architecture/architecture-initiale.png)

Cette figure illustre l’état initial de l’infrastructure avant la mise en place des améliorations de sécurité.

## Intérêt de cette analyse

Étudier l’architecture initiale était indispensable pour comprendre d’où l’on partait. Cela a permis de justifier les choix faits dans l’architecture finale, au lieu d’ajouter des outils sans logique claire.
