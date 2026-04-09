---
title: Déploiement de l’application
---

# Déploiement de l’application

Le déploiement constitue la première étape concrète permettant de rendre les services accessibles. Dans le projet YTech Solutions, cette étape concerne à la fois le **site vitrine** et l’**application RH interne**.

## Site vitrine

Le site vitrine permet de présenter les services proposés et d’offrir plusieurs points d’interaction à l’utilisateur.

![Page d’accueil du site vitrine](/img/deploiement/site-vitrine-home.png)

Cette capture montre l’interface principale du site vitrine accessible depuis le navigateur.

![Page de connexion du site vitrine](/img/deploiement/site-vitrine-login.png)

Cette capture présente l’interface de connexion destinée aux utilisateurs du site.

![Page d’inscription du site vitrine](/img/deploiement/site-vitrine-register.png)

Cette capture montre le formulaire d’inscription du site vitrine.

## Application RH interne

L’application RH représente la partie métier du projet. Elle permet de gérer les employés, leurs profils et plusieurs opérations internes.

![Connexion à l’application RH](/img/deploiement/crud-login.png)

Cette capture montre la page de connexion de l’application RH.


Cette capture présente le tableau de bord utilisateur après authentification.

![Liste des employés dans l’application RH](/img/deploiement/crud-employee-list.png)

Cette interface illustre la gestion des employés dans l’application RH. Elle démontre que les données sont effectivement manipulées via une logique applicative réelle.

![Profil utilisateur RH](/img/deploiement/crud-profile.png)

Cette capture présente une vue de profil dans l’application RH.

## Exécution du backend avec PM2

Le backend a été exécuté avec **PM2**, ce qui permet de superviser le service, de le maintenir actif et de faciliter son administration.

![Processus backend géré par PM2](/img/deploiement/pm2-running.png)

Cette capture montre le backend en cours d’exécution via PM2. Le statut `online` confirme que le service applicatif est actif et stable.

## Intérêt de cette étape

Le déploiement permet de vérifier que :

- les interfaces sont accessibles ;
- le backend fonctionne ;
- la logique applicative est bien exécutée ;
- la structure générale du projet est opérationnelle.

Autrement dit, cette étape constitue le socle sur lequel reposent ensuite les mécanismes de sécurité et d’administration.
