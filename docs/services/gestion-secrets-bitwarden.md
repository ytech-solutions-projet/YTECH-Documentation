---
title: Gestion des secrets avec Bitwarden
---

# Gestion des secrets avec Bitwarden / Vaultwarden

La gestion des mots de passe, identifiants et informations sensibles est un sujet important dans tout projet technique. Dans YTech Solutions, une solution de type **Bitwarden / Vaultwarden** a été déployée afin de centraliser ces informations et d’éviter leur dispersion dans des notes locales, des messages informels ou des fichiers non protégés.

## Rôle de Vaultwarden dans le projet

L’outil a été retenu pour répondre à plusieurs besoins :

- centraliser les identifiants dans un coffre unique ;
- structurer les accès par utilisateur ou par service ;
- faciliter l’authentification sans encourager les mauvaises pratiques ;
- améliorer la gouvernance des accès dans l’environnement technique.

## Vue globale des coffres

[Capture à insérer : interface Vaultwarden “Tous les coffres” montrant la liste des comptes et des catégories.]

La vue globale des coffres montre que l’outil est réellement utilisé comme référentiel d’accès. Elle permet d’observer :

- une classification par type d’élément ;
- une organisation par coffre et par dossier ;
- la présence de plusieurs comptes liés à l’environnement YTech ;
- l’indication du propriétaire sur les éléments enregistrés.

Cette vue est importante, car elle montre que Vaultwarden n’est pas un outil ajouté “pour la forme”, mais une brique de gouvernance des accès effectivement exploitée.

## Remplissage automatique sur l’application RH

![Remplissage automatique Bitwarden sur Ytech HR](/img/bitwarden/bitwarden-autofill-login.png)

Cette capture montre l’utilisation de **Bitwarden** directement sur la page de connexion de l’application RH `ytechhr.ddns.net/login`. On y voit que le gestionnaire de mots de passe propose automatiquement les identifiants enregistrés, ici `HR 1` et `BENAMAR Othmane`.

Cette fonctionnalité est importante, car elle permet :

- de retrouver rapidement les comptes liés à un service donné ;
- d’éviter la saisie manuelle répétée des identifiants ;
- de limiter les erreurs de frappe sur les noms d’utilisateur ou les e-mails ;
- d’encourager l’usage de mots de passe plus robustes.

## Usage mobile du coffre

![Coffre mobile Bitwarden](/img/bitwarden/bitwarden-mobile-vault.png)

Cette seconde capture montre l’interface mobile du coffre Bitwarden. On y retrouve :

- la barre de recherche ;
- le filtrage par type d’élément ;
- les suggestions de saisie automatique ;
- la liste des identifiants enregistrés dans le coffre.

Cette mobilité est utile, car elle montre que la gestion des accès peut rester centralisée sans être limitée à un seul poste d’administration.

## Ce que l’outil apporte concrètement

L’usage de Bitwarden / Vaultwarden permet :

- de centraliser les secrets ;
- de structurer les accès ;
- d’organiser les comptes utilisateurs dans un coffre unique ;
- de réduire la dépendance à des pratiques informelles ;
- de soutenir une approche plus rigoureuse de l’administration.

## Gouvernance des accès

Au-delà de l’aspect purement pratique, l’outil apporte aussi une valeur de gouvernance :

- les comptes peuvent être recensés plus clairement ;
- les identifiants ne sont pas disséminés dans plusieurs supports ;
- la consultation des accès devient plus maîtrisée ;
- la documentation peut mentionner les comptes sans exposer les secrets en clair.

> **Point important :** les mots de passe eux-mêmes ne doivent jamais être reproduits en clair dans la documentation.

## Limites et remarques

Pour renforcer encore cette partie, il serait utile d’ajouter plus tard :

- le mode exact de déploiement de Vaultwarden ;
- la politique de sauvegarde du coffre ;
- le mode de partage entre utilisateurs si celui-ci a été mis en place ;
- les règles de rotation ou de révocation des accès.

## Conclusion de section

Dans YTech Solutions, Vaultwarden ne sert pas uniquement à stocker des mots de passe. Il participe à une démarche plus large de **centralisation, de gouvernance et de réduction des mauvaises pratiques**.
