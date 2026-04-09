---
title: Reverse proxy Nginx
---

# Reverse proxy Nginx

Le reverse proxy **Nginx** joue un rôle central dans l’architecture finale. Il sert d’intermédiaire entre l’utilisateur et les services internes, ce qui permet de mieux organiser les accès au site et à l’application.

Pour un lecteur non technique, on peut le comparer à un point de passage contrôlé : l’utilisateur ne s’adresse pas directement à tous les services internes, mais passe par Nginx, qui se charge de transmettre les requêtes au bon composant.

## Configuration du reverse proxy

![Configuration Nginx](/img/nginx/nginx-config.png)

Cette capture montre une partie de la configuration du reverse proxy Nginx.

## Vérification de la configuration

![Test de configuration Nginx](/img/nginx/nginx-test-ok.png)

Cette capture montre le test de validation de la configuration Nginx. Elle confirme que la configuration chargée par le service est correcte.

## Accès au site via Nginx

![Site accessible via Nginx](/img/nginx/site-nginx.png)

Cette capture montre le site accessible via le serveur Nginx. Elle confirme que les requêtes HTTP sont bien servies par le reverse proxy.

## Intérêt de Nginx

L’usage de Nginx permet :

- de centraliser l’accès aux services ;
- de mieux séparer la couche d’accès web du backend ;
- de préparer ou renforcer la gestion du HTTPS ;
- de réduire l’exposition directe des composants internes.

Cette brique contribue donc à une meilleure organisation de l’infrastructure et à un meilleur contrôle des flux web.
