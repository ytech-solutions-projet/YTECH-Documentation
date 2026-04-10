---
title: Présentation du projet
---

# Présentation du projet

Le projet **YTech Solutions** vise à mettre en place une infrastructure sécurisée destinée à héberger deux volets complémentaires :

- un **site vitrine** destiné à présenter les services proposés ;
- une **application web RH interne** permettant la gestion des employés et de certaines opérations liées aux ressources humaines.

Cette distinction est importante. Le site vitrine représente la partie visible, orientée communication et présentation. L’application RH, quant à elle, représente la partie métier, plus sensible, car elle traite des données internes.

## Vue générale du site vitrine

Le site vitrine a été conçu pour présenter l’activité, les services et les moyens de contact de la structure. Il intègre plusieurs formulaires, notamment pour les demandes de devis, de contact, d’inscription et de connexion.

![Accueil du site vitrine](/img/deploiement/site-vitrine-home.png)

Cette capture présente la page d’accueil du site vitrine. Elle constitue la façade publique du projet et montre la partie orientée présentation des services.

![Formulaire de devis](/img/deploiement/site-vitrine-devis.png)

Cette capture illustre la page de demande de devis. Elle montre que le site ne se limite pas à une page statique, mais propose également des formulaires d’interaction.

![Formulaire de contact](/img/deploiement/site-vitrine-contact.png)

Cette capture montre la page de contact, destinée à faciliter les échanges entre l’utilisateur et la structure.

## Vue générale de l’application RH

L’application RH correspond à la partie interne du projet. Elle permet aux employés de se connecter à leur espace, de consulter leurs informations, d’accéder à un tableau de bord utilisateur et d’effectuer plusieurs opérations liées à leur compte.

![Connexion à l’application RH](/img/deploiement/login-hr.png)

Cette capture montre l’interface de connexion à l’application RH. Elle constitue le point d’entrée de l’espace interne.

![Tableau de bord de l’application RH](/img/deploiement/dashboard-hr.png)

Cette capture présente le tableau de bord principal de l’application RH. On y retrouve les informations de l’employé ainsi qu’un aperçu des fonctionnalités internes disponibles.

![Modification du mot de passe dans l’application RH](/img/deploiement/change-password.png)

Cette interface illustre la fonctionnalité de changement de mot de passe, qui participe à la sécurisation des accès utilisateurs.

![Suivi des avertissements dans l’application RH](/img/deploiement/warnings-hr.png)

Cette vue montre l’espace de consultation des avertissements et blâmes, destiné au suivi administratif interne.

L’ensemble du projet repose sur une architecture web moderne utilisant un frontend, un backend et une base de données. Dans notre cas, les principales technologies utilisées sont **React**, **Vite**, **Node.js**, **Express**, **PostgreSQL**, **Nginx** et **Ubuntu Server**. À cela s’ajoutent plusieurs outils de sécurité, de supervision et d’administration étudiés dans les sections suivantes.
