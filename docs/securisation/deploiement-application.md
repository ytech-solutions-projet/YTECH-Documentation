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

L’application RH représente la partie métier du projet. Elle permet aux employés d’accéder à leur espace interne, de consulter leurs informations personnelles et d’utiliser différentes fonctionnalités de gestion.

![Connexion à l’application RH](/img/deploiement/login-hr.png)

Cette capture montre la page de connexion de l’application RH.

![Tableau de bord de l’application RH](/img/deploiement/dashboard-hr.png)

Cette capture présente le tableau de bord utilisateur après authentification. On y voit les informations principales du salarié ainsi qu’un résumé des éléments RH disponibles.

![Modification du mot de passe dans l’application RH](/img/deploiement/change-password.png)

Cette interface illustre la fonctionnalité de changement de mot de passe. Elle montre qu’une gestion du compte utilisateur a bien été mise en place dans l’espace interne.

![Consultation des avertissements dans l’application RH](/img/deploiement/warnings-hr.png)

Cette capture présente l’écran de consultation des avertissements et blâmes. Elle met en évidence une fonctionnalité RH dédiée au suivi administratif des employés.

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
