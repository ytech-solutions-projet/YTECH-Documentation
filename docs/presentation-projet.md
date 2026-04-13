---
title: Présentation du projet
---

# Présentation du projet

Le projet **YTech Solutions** repose sur la mise en place d’un environnement capable d’héberger deux volets complémentaires :

- un **site vitrine** destiné à présenter l’activité, les services proposés et les moyens de contact ;
- une **application RH interne** destinée à gérer des informations plus sensibles liées aux employés.

Cette dualité est structurante. Le site vitrine relève d’une logique de communication et d’accès externe, tandis que l’application RH relève d’une logique métier interne, avec des enjeux plus forts en matière de contrôle d’accès, de confidentialité et d’administration.

## Finalité fonctionnelle

Le projet ne vise pas uniquement à produire des interfaces, mais à démontrer qu’un même environnement peut supporter :

- une façade publique orientée présentation ;
- une partie authentifiée destinée aux usages internes ;
- un socle technique capable d’être sécurisé, supervisé et administré.

| Volet | Public visé | Finalité | Sensibilité des données |
| --- | --- | --- | --- |
| Site vitrine | Visiteurs, prospects, utilisateurs externes | Présenter l’activité et permettre les premiers échanges | Faible à moyenne |
| Application RH | Employés, administrateurs, gestionnaires RH | Gérer un espace métier interne | Élevée |

## Site vitrine

Le site vitrine constitue la partie la plus visible du projet. Il a pour rôle de présenter l’identité de YTech Solutions, d’expliquer les services proposés et de fournir plusieurs points d’interaction aux utilisateurs.

### Pages et interactions visibles

![Accueil du site vitrine](/img/deploiement/site-vitrine-home.png)

Cette capture montre la page d’accueil du site. Elle matérialise la couche publique du projet et sert de point d’entrée principal pour l’utilisateur externe.

![Formulaire de devis](/img/deploiement/site-vitrine-devis.png)

La page de devis montre que le site ne se limite pas à une simple vitrine statique. Elle permet une interaction structurée avec l’utilisateur.

![Formulaire de contact](/img/deploiement/site-vitrine-contact.png)

Cette vue confirme la présence d’un canal de contact intégré à l’application web.

![Page de connexion du site vitrine](/img/deploiement/site-vitrine-login.png)

La présence d’une page de connexion montre qu’une partie des usages peut être liée à une authentification.

![Page d’inscription du site vitrine](/img/deploiement/site-vitrine-register.png)

Cette capture complète la logique d’accès en montrant la création de compte utilisateur.

### Ce que ces captures démontrent

Les preuves visuelles du site vitrine permettent de montrer que :

- l’interface est réellement accessible via un navigateur ;
- le projet comporte plusieurs parcours utilisateur ;
- l’application gère des formulaires et non uniquement de l’affichage ;
- le service public constitue un point d’exposition qu’il faut ensuite sécuriser correctement.

## Application RH interne

L’application RH correspond à la partie métier du projet. Elle traite des données plus sensibles et s’inscrit dans une logique d’accès restreint à des utilisateurs autorisés.

### Parcours visible dans l’application

![Connexion à l’application RH](/img/deploiement/login-hr.png)

Cette interface constitue le point d’entrée de l’espace interne. Elle matérialise la séparation entre accès public et accès métier.

![Tableau de bord de l’application RH](/img/deploiement/dashboard-hr.png)

Le tableau de bord montre qu’une fois authentifié, l’utilisateur accède à un espace de travail structuré contenant des informations et des fonctionnalités internes.

![Modification du mot de passe dans l’application RH](/img/deploiement/change-password.png)

Cette vue met en évidence la gestion du compte utilisateur et la possibilité de modifier le mot de passe, ce qui participe directement à la sécurité des accès.

![Suivi des avertissements dans l’application RH](/img/deploiement/warnings-hr.png)

Cette capture illustre une fonctionnalité RH plus spécifique, liée au suivi administratif des employés.

### Enjeu de cette application

L’application RH est plus sensible que le site vitrine pour plusieurs raisons :

- elle implique une authentification ;
- elle expose des données internes ;
- elle nécessite un cloisonnement plus strict ;
- elle impose une meilleure maîtrise des accès administratifs et applicatifs.

## Vision d’ensemble

Au-delà des interfaces visibles, le projet s’appuie sur un environnement technique complet intégrant notamment :

- une interface utilisateur développée côté client ;
- un service applicatif côté serveur ;
- une base de données relationnelle ;
- un reverse proxy ;
- un pare-feu ;
- des outils de supervision, de journalisation et d’analyse de vulnérabilités.

> **Point important :** la présentation du projet ne doit pas être comprise comme une simple démonstration graphique. Les captures servent ici à prouver l’existence de services fonctionnels qui s’insèrent ensuite dans une architecture plus large.

## Conclusion de la page

YTech Solutions combine donc une **dimension applicative** et une **dimension infrastructurelle**. Cette articulation entre services visibles, données internes et mécanismes de sécurité justifie l’approche globale adoptée dans la suite de la documentation.
