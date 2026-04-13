---
title: Reverse proxy Nginx
---

# Reverse proxy Nginx

Le reverse proxy **Nginx** joue un rôle central dans l’architecture finale. Il constitue le point d’entrée des requêtes web et agit comme intermédiaire entre l’utilisateur et les services internes. Cette position est stratégique, car elle permet de contrôler l’exposition des services, d’organiser le routage et de mieux dissocier la couche web du service applicatif.

## Rôle de Nginx dans le projet

Dans le cadre de YTech Solutions, Nginx remplit plusieurs fonctions :

- recevoir les requêtes provenant des utilisateurs ;
- servir le frontend ou le contenu web exposé ;
- relayer certaines requêtes vers le backend ;
- éviter une exposition trop directe du service applicatif ;
- simplifier la gestion des accès, des noms d’hôtes et du HTTPS.

## Principe de fonctionnement

Le cheminement logique d’une requête peut être résumé ainsi :

1. l’utilisateur accède à l’adresse du site ;
2. la requête arrive sur Nginx ;
3. Nginx décide s’il doit servir un contenu statique ou transmettre la requête au backend ;
4. le backend traite la demande et renvoie la réponse ;
5. Nginx renvoie ensuite le résultat au client.

```text
Trafic utilisateur -> Nginx -> Backend -> Base de données
```

> **Bénéfice concret :** cette intermédiation permet de centraliser l’exposition web et de réduire le contact direct entre l’extérieur et le service applicatif.

## Séparation entre frontend et backend

L’intérêt du reverse proxy est particulièrement visible lorsqu’on distingue :

- la **couche de présentation**, servie côté web ;
- la **couche applicative**, traitée par le backend ;
- la **couche de données**, qui doit rester interne.

Cette séparation apporte plusieurs avantages :

- une meilleure lisibilité de l’architecture ;
- une administration plus simple ;
- une réduction de la surface d’exposition ;
- une meilleure compatibilité avec les mécanismes de filtrage et de journalisation.

## Exemple de configuration commentée

L’extrait ci-dessous est volontairement générique, mais il correspond bien à la logique d’exposition retenue dans le projet : service du frontend côté web, puis relais des appels applicatifs vers un backend local.

```nginx
server {
    listen 80;
    server_name <nom-de-domaine-ou-adresse>;

    # Sert le frontend généré en production
    location / {
        root /var/www/<repertoire-build-frontend>;
        try_files $uri /index.html;
    }

    # Relaye les appels applicatifs vers le backend
    location /api/ {
        proxy_pass http://127.0.0.1:<port-backend>;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Dans une configuration réelle, les éléments les plus sensibles à vérifier sont :

- le `server_name` réellement utilisé ;
- le chemin du frontend servi par Nginx ;
- le port local sur lequel écoute le backend ;
- les éventuelles directives supplémentaires liées au HTTPS ou aux en-têtes de sécurité.

## Preuve de configuration

![Configuration Nginx](/img/nginx/nginx-config.png)

Cette capture montre une partie de la configuration du reverse proxy Nginx utilisée dans le projet. Elle prouve qu’une configuration explicite a bien été définie et qu’il ne s’agit pas d’un simple accès web direct sans couche d’intermédiation.

## Vérification de la configuration

![Test de configuration Nginx](/img/nginx/nginx-test-ok.png)

Cette capture montre le test de validation de la configuration Nginx. Le message de succès confirme que la syntaxe chargée par le service est correcte.

Cette étape est importante, car une configuration erronée de reverse proxy peut rendre l’application indisponible ou provoquer des comportements inattendus dans le routage.

## Accès au site via Nginx

![Site accessible via Nginx](/img/nginx/site-nginx.png)

Cette capture montre le site accessible via Nginx. Elle confirme que les requêtes web passent bien par le reverse proxy avant d’atteindre les composants internes.

## Apports concrets dans l’architecture

L’usage de Nginx apporte plusieurs bénéfices techniques :

- centralisation des accès web ;
- séparation plus propre entre exposition et traitement applicatif ;
- simplification de l’administration des flux HTTP/HTTPS ;
- préparation naturelle à l’intégration du TLS, du WAF ou de règles spécifiques ;
- meilleure maîtrise des chemins exposés.

## Limites et remarques

Nginx ne remplace pas :

- un pare-feu réseau ;
- le hardening du serveur ;
- une supervision correcte ;
- une bonne configuration du backend.

Il doit être compris comme une **brique d’exposition contrôlée**, pas comme une solution unique de sécurité.

## Conclusion de section

Dans YTech Solutions, Nginx constitue un point de passage stratégique entre les utilisateurs et les services. Son intérêt dépasse le simple affichage du site : il participe directement à la lisibilité, à l’administration et à la sécurisation de l’architecture.
