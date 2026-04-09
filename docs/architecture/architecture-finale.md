---
title: Architecture finale
---

# Architecture finale

À partir de l’analyse initiale, une architecture finale plus cohérente et plus sécurisée a été proposée. L’objectif principal était de mieux séparer les rôles des composants, de réduire l’exposition des services sensibles et d’intégrer des outils de sécurité et d’administration complémentaires.

Pour simplifier, l’architecture finale cherche à distinguer ce qui doit être visible depuis l’extérieur de ce qui doit rester protégé à l’intérieur.

## Principes retenus

Cette architecture repose sur plusieurs principes :

- séparation entre les services exposés et les services internes ;
- logique de **DMZ** pour les éléments accessibles ;
- protection renforcée des composants critiques ;
- usage d’un reverse proxy avec Nginx ;
- supervision et journalisation centralisées ;
- gestion des secrets ;
- amélioration du contrôle des accès distants.

## Représentation de l’architecture finale

![Architecture finale](/img/architecture/architecture-finale.png)

Cette figure présente l’architecture finale retenue après amélioration de l’infrastructure.

## Bénéfices

Cette organisation permet :

- de réduire la surface d’attaque ;
- de mieux contrôler les flux ;
- de mieux comprendre le rôle de chaque composant ;
- d’obtenir un environnement plus administrable et plus professionnel.
