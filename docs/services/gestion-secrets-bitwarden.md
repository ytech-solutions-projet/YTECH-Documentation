---
title: Gestion des secrets avec Bitwarden
---

# Gestion des secrets avec Bitwarden / Vaultwarden

La gestion des mots de passe, identifiants et informations sensibles est un sujet important dans tout projet technique. Dans YTech Solutions, une solution de type **Bitwarden / Vaultwarden** a été déployée afin de centraliser ces informations et d’éviter leur dispersion.

## Vue globale des coffres Vaultwarden

_Capture fournie : liste des coffres dans Vaultwarden._

La capture de Vaultwarden montre une vue plus large de l’organisation des accès dans le coffre. On y voit plusieurs éléments importants :

- le filtrage par coffre, type d’élément et dossier ;
- les catégories comme `Identifiant`, `Carte de paiement`, `Identité`, `Note` et `Clé SSH` ;
- une liste d’entrées déjà créées pour différents utilisateurs et services ;
- l’indication du propriétaire sur chaque élément.

La liste visible met en évidence plusieurs comptes enregistrés dans l’environnement YTech, par exemple :

- `BENAMAR Othmane` ;
- `HR 1` ;
- `IT` ;
- plusieurs entrées liées à `192.168.9.193` avec des adresses `@ytech.local`.

Cette vue est intéressante, car elle montre que Vaultwarden n’est pas utilisé comme un coffre vide ou théorique. Il sert réellement à structurer les accès de plusieurs utilisateurs dans un espace unique, organisé et consultable.

## Remplissage automatique sur l’application RH

![Remplissage automatique Bitwarden sur Ytech HR](/img/bitwarden/bitwarden-autofill-login.png)

Cette capture montre l’utilisation de **Bitwarden** directement sur la page de connexion de l’application RH `ytechhr.ddns.net/login`. On y voit que le gestionnaire de mots de passe propose automatiquement les identifiants enregistrés, ici `HR 1` et `BENAMAR Othmane`.

Cette fonctionnalité est importante, car elle permet :

- de retrouver rapidement les comptes liés à un service donné ;
- d’éviter la saisie manuelle répétée des identifiants ;
- de limiter les erreurs de frappe sur les noms d’utilisateur ou les e-mails ;
- d’encourager l’usage de mots de passe complexes, puisque l’utilisateur n’a plus besoin de les mémoriser manuellement.

Dans le cadre du projet, cette capture illustre très bien le lien entre la gestion des secrets et l’usage réel des applications internes. Bitwarden n’est donc pas seulement un coffre de stockage : il devient aussi un outil d’assistance à l’authentification.

## Coffre mobile Bitwarden

![Coffre mobile Bitwarden](/img/bitwarden/bitwarden-mobile-vault.png)

Cette seconde capture montre l’interface mobile du coffre Bitwarden. On y retrouve :

- la barre de recherche ;
- le filtrage par type d’élément ;
- les suggestions de saisie automatique ;
- la liste des identifiants enregistrés dans le coffre.

L’application mobile apporte un intérêt pratique supplémentaire :

- les accès peuvent être consultés depuis un smartphone ;
- les comptes sont organisés dans une interface simple et rapide ;
- les identifiants restent centralisés dans un même espace sécurisé ;
- l’équipe peut mieux gérer les secrets sans multiplier les notes locales ou les messages dispersés.

## Intérêt

Cette solution permet :

- de centraliser les secrets ;
- de structurer les accès ;
- d’organiser les comptes utilisateurs dans un coffre unique ;
- d’éviter les pratiques risquées comme les mots de passe dispersés ;
- d’améliorer la rigueur administrative du projet.

Pour un lecteur non technique, on peut comparer cet outil à un coffre-fort numérique partagé, organisé et plus sûr qu’un simple fichier local.
