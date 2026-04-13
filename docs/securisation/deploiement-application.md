---
title: Déploiement de l’application
---

# Déploiement de l’application

Le déploiement constitue la première étape concrète permettant de rendre les services accessibles. Dans le projet YTech Solutions, cette étape concerne à la fois le **site vitrine** et l’**application RH interne**. Elle ne se limite pas à afficher des interfaces : elle implique aussi l’organisation des composants applicatifs, l’exécution du service métier, la présence d’une base de données et l’intégration de briques d’administration comme PM2 et Nginx.

## Rôle du déploiement dans le projet

Le déploiement a plusieurs objectifs :

- rendre les interfaces réellement accessibles ;
- faire fonctionner la logique métier côté serveur ;
- assurer la communication avec la base de données ;
- préparer l’environnement pour la sécurisation et la supervision ;
- fournir des preuves concrètes d’exécution.

## Chaîne de déploiement

La logique générale de déploiement peut être résumée de la manière suivante :

| Élément | Rôle dans la chaîne | Finalité |
| --- | --- | --- |
| Interface utilisateur (frontend) | Présenter les pages aux utilisateurs | Offrir l’accès au site vitrine et à l’application RH |
| Service applicatif (backend) | Traiter les requêtes et la logique métier | Gérer l’authentification et les traitements |
| Base de données | Stocker les informations métiers | Assurer la persistance des données |
| PM2 | Maintenir le backend en exécution | Stabiliser le service côté serveur |
| Nginx | Exposer et router les requêtes web | Centraliser l’accès HTTP/HTTPS |

```text
Utilisateur -> Nginx -> Backend -> PostgreSQL
```

> **Point important :** dans une architecture web moderne, le déploiement ne consiste pas à “lancer un site”, mais à faire coopérer plusieurs couches techniques.

## Lecture opérationnelle du déploiement

Dans le contexte du projet, cette chaîne signifie concrètement que :

- le visiteur ou l’utilisateur n’accède pas directement à la base ou au backend ;
- le frontend constitue la couche visible ;
- le backend traite les actions métier et l’authentification ;
- la base PostgreSQL conserve l’état applicatif ;
- Nginx et PM2 assurent la stabilité d’exploitation autour de l’application.

## Site vitrine

Le site vitrine représente la partie publique du projet. Il a été conçu pour présenter les services, afficher des contenus de communication et permettre plusieurs interactions avec les visiteurs.

### Preuves visuelles de mise en œuvre

![Page d’accueil du site vitrine](/img/deploiement/site-vitrine-home.png)

Cette capture montre l’interface principale du site vitrine accessible depuis le navigateur.

![Page de connexion du site vitrine](/img/deploiement/site-vitrine-login.png)

Cette capture présente une interface de connexion destinée aux utilisateurs du site.

![Page d’inscription du site vitrine](/img/deploiement/site-vitrine-register.png)

Cette vue montre que le projet prend en charge la création de compte.

![Page de devis du site vitrine](/img/deploiement/site-vitrine-devis.png)

Elle confirme la présence d’interactions orientées service et non d’un simple affichage statique.

![Page de contact du site vitrine](/img/deploiement/site-vitrine-contact.png)

Cette capture met en évidence la présence d’un canal de communication utilisateur.

### Ce que cela prouve

Les écrans du site vitrine permettent d’établir que :

- l’interface web a bien été générée et servie correctement ;
- plusieurs parcours utilisateur ont été intégrés ;
- la couche de présentation est suffisamment avancée pour être démontrée ;
- la partie publique du projet est exploitable dans un navigateur.

## Application RH interne

L’application RH représente la partie métier du projet. Elle manipule des données plus sensibles et suppose donc un niveau d’attention plus élevé sur le plan technique et sécuritaire.

### Accès utilisateur

![Connexion à l’application RH](/img/deploiement/login-hr.png)

Cette capture montre le point d’entrée de l’espace interne.

![Tableau de bord de l’application RH](/img/deploiement/dashboard-hr.png)

Cette vue présente le tableau de bord utilisateur après authentification. On y voit les informations principales du salarié ainsi qu’un résumé des fonctionnalités RH disponibles.

![Modification du mot de passe dans l’application RH](/img/deploiement/change-password.png)

Cette interface illustre la fonctionnalité de changement de mot de passe, preuve qu’une gestion du compte utilisateur a été intégrée.

![Consultation des avertissements dans l’application RH](/img/deploiement/warnings-hr.png)

Cette capture met en évidence un usage métier plus spécifique, lié au suivi administratif des employés.

### Lecture technique

Ces captures démontrent que l’application RH ne se limite pas à une authentification simple. Elle comporte déjà :

- une gestion de session utilisateur ;
- un espace interne structuré ;
- des fonctionnalités liées aux ressources humaines ;
- une logique métier nécessitant un backend et un stockage persistant.

## Rôle du frontend, du backend et de PostgreSQL

Le déploiement applicatif repose sur plusieurs couches distinctes :

- le **frontend** fournit les pages, les formulaires et l’expérience utilisateur ;
- le **backend** traite les requêtes, applique la logique métier et interagit avec la base ;
- **PostgreSQL** stocke les données nécessaires au fonctionnement de l’application.

Cette séparation est essentielle, car elle facilite la maintenance, la compréhension de l’architecture et l’intégration de mécanismes de sécurité ciblés.

## Vérification du socle d’hébergement

Le déploiement de l’application CRUD RH ne se limite pas à son exécution fonctionnelle. Le serveur Linux qui l’héberge a également été audité avec **Lynis** afin d’évaluer le niveau de durcissement du système avant et après les actions de sécurisation.

| Indicateur | Avant renforcement | Après renforcement |
| --- | --- | --- |
| Hardening index | 67 | 85 |
| Tests performed | 278 | 289 |
| Plugins enabled | 1 | 1 |
| Firewall | Activé | Activé |
| Malware scanner | Désactivé | Activé |

Ces résultats montrent plusieurs évolutions concrètes :

- le score de hardening gagne **18 points** ;
- le nombre de tests augmente ;
- le pare-feu reste actif ;
- le malware scanner apparaît comme activé après renforcement.

Le déploiement applicatif s’inscrit donc dans un environnement d’hébergement qui a lui aussi été amélioré.

## Exécution du backend avec PM2

Le backend a été exécuté avec **PM2**, ce qui permet de superviser le service, de le maintenir actif et de faciliter son administration.

![Processus backend géré par PM2](/img/deploiement/pm2-running.png)

Cette capture montre le backend en cours d’exécution via PM2. Le statut `online` confirme que le service applicatif est actif et stable.

### Pourquoi PM2 est utile

PM2 apporte plusieurs bénéfices :

- maintien du service en exécution ;
- redémarrage facilité en cas d’incident ;
- meilleure lisibilité de l’état des processus ;
- administration plus simple qu’un lancement manuel unique.

## Exemples de commandes à documenter

Les chemins exacts peuvent varier selon l’organisation du serveur, mais la logique de déploiement documentée dans le projet peut être représentée ainsi :

```bash
# Frontend : build de production
cd /chemin/vers/frontend
npm install
npm run build
```

```bash
# Backend : installation et lancement via PM2
cd /chemin/vers/backend
npm install
pm2 start <fichier-entree-backend> --name <nom-du-service>
pm2 status
```

```bash
# Vérifications utiles côté serveur
systemctl status nginx
pm2 list
ss -tulpn
```

```nginx
# Exemple représentatif de reverse proxy pour le projet
server {
    listen 80;
    server_name <domaine-ou-adresse>;

    location / {
        root /chemin/vers/le/build/frontend;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:<port-backend>;
    }
}
```

Même lorsque les chemins exacts ne sont pas publiés, l’important est de comprendre la structure :

- `root` sert le frontend généré ;
- `try_files` permet le bon fonctionnement d’une application web côté client ;
- `proxy_pass` relaie les appels applicatifs vers le backend ;
- la séparation entre contenu statique et API reste lisible.

## Intérêt dans le projet

Le déploiement permet de démontrer que :

- les interfaces sont réellement accessibles ;
- le backend fonctionne dans un cadre d’exploitation structuré ;
- la base de données peut être intégrée à la logique métier ;
- l’infrastructure applicative constitue une base crédible pour les mesures de sécurité suivantes.

## Points de précision possibles

Une version encore plus poussée pourrait détailler :

- arborescence réelle des projets frontend et backend ;
- port exact du backend ;
- nom exact du fichier d’entrée PM2 ;
- extrait réel de configuration Nginx en production ;
- commandes de build réellement exécutées.

Ces informations sont utiles pour une reprise technique fine, mais elles ne sont pas indispensables pour comprendre la logique de déploiement exposée dans cette page.

## Conclusion de section

Le déploiement de l’application dans YTech Solutions ne relève donc pas d’une simple mise en ligne. Il s’agit d’une chaîne technique complète associant interface, logique métier, base de données, proxy d’exposition et outils d’administration.
