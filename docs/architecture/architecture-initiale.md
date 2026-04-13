---
title: Architecture initiale
---

# Architecture initiale

L’architecture initiale représente l’état de départ du projet avant les actions de restructuration et de sécurisation. Elle permettait de faire fonctionner les premiers services, mais elle restait insuffisamment organisée pour répondre à des exigences sérieuses de lisibilité, de contrôle des accès et de sécurité.

Dans beaucoup de projets, la priorité initiale est de rendre l’application utilisable. Cette approche est compréhensible, mais elle conduit souvent à une infrastructure où les composants fonctionnent sans être encore correctement séparés ni réellement observés. C’est précisément ce que l’analyse initiale a mis en évidence.

## Rôle de cette page dans le projet

L’étude de l’architecture initiale sert à :

- comprendre le point de départ réel du projet ;
- justifier les choix réalisés dans l’architecture finale ;
- mettre en évidence les risques induits par une exposition trop directe ;
- montrer que les améliorations apportées répondent à des besoins concrets.

Autrement dit, cette page constitue la base de comparaison utilisée dans toute la suite de la documentation.

## Limites observées

L’analyse de l’existant a permis d’identifier plusieurs faiblesses structurelles :

- un cloisonnement insuffisant entre les services ;
- une exposition trop directe de certains composants ;
- une segmentation logique encore faible entre zones internes et zones exposées ;
- une sécurité des accès administratifs perfectible ;
- un manque de visibilité sur les événements techniques ;
- une gestion des secrets et des accès encore peu structurée.

## Analyse des faiblesses

| Constat | Ce que cela signifie | Risque principal |
| --- | --- | --- |
| Segmentation insuffisante | Les composants critiques ne sont pas suffisamment séparés du reste du réseau | Propagation plus facile d’un incident |
| Exposition excessive | Certains services peuvent être atteints trop directement | Surface d’attaque plus large |
| Manque de visibilité | Peu d’outils de supervision ou de centralisation des logs | Diagnostic plus difficile |
| Gouvernance des accès limitée | Secrets et comptes moins bien structurés | Risque de mauvaises pratiques |
| Sécurité d’administration perfectible | Les accès techniques ne sont pas encore assez encadrés | Risque d’accès non souhaité |

## Représentation de l’architecture initiale

![Architecture initiale](/img/architecture/architecture-initiale.png)

Cette figure illustre l’état initial de l’infrastructure avant la mise en place des améliorations de sécurité.

## Ce que la représentation permet de comprendre

Même si le schéma montre un environnement fonctionnel, il met surtout en évidence un besoin de clarification :

- quels services doivent être exposés vers l’extérieur ;
- quels services doivent rester internes ;
- où doivent se situer les mécanismes de filtrage ;
- comment réduire l’exposition des composants sensibles ;
- comment mieux observer l’activité de l’environnement.

> **Point important :** une architecture peut être fonctionnelle tout en restant fragile. Le rôle de l’analyse initiale est précisément de montrer cette différence entre “ça marche” et “c’est maîtrisé”.

## Limites de l’état initial

L’architecture initiale n’est pas “mauvaise” au sens où elle serait inutilisable. Elle constitue plutôt un état transitoire typique d’un environnement en cours de structuration. Ses principales limites sont les suivantes :

- elle ne sépare pas assez clairement les zones de confiance ;
- elle n’encadre pas suffisamment les flux ;
- elle ne fournit pas encore un niveau d’observation satisfaisant ;
- elle rend plus difficile l’argumentation de la sécurité globale.

## Conclusion de section

L’intérêt de cette analyse est de montrer que les améliorations apportées par la suite ne relèvent pas d’un empilement d’outils. Elles répondent à des faiblesses réelles observées dans l’architecture de départ.
