---
title: Accès distant sécurisé
---

# Accès distant sécurisé

L’accès distant est un sujet important dans une infrastructure, car il concerne la manière dont les administrateurs ou les membres de l’équipe peuvent rejoindre les services à distance. Cet accès doit être pratique, mais aussi sécurisé.

## Tailscale

![Statut Tailscale](/img/acces-distant/tailscale-status.png)

Cette capture montre l’état des machines connectées via Tailscale.

## Ngrok

![Tunnel Ngrok indisponible](/img/acces-distant/ngrok-endpoint-offline.png)

Cette capture montre un accès **Ngrok** aboutissant à l’erreur `ERR_NGROK_3200`, indiquant que l’endpoint public n’est plus disponible. Cette situation est intéressante dans la documentation, car elle illustre bien la nature temporaire de ce type de tunnel : un service peut être exposé rapidement, mais l’URL publique dépend de l’état du tunnel en cours.

Ngrok reste utile dans un projet pour :

- exposer rapidement une application de test sans ouvrir tout le réseau ;
- réaliser une démonstration ponctuelle ;
- vérifier un accès externe sans configuration lourde.

Cette capture permet aussi de montrer une limite importante : contrairement à une solution plus pérenne comme un reverse proxy stable ou un accès VPN structuré, Ngrok n’est pas destiné à devenir le mécanisme principal d’exposition d’un service interne.

## Intérêt

L’étude de ces solutions a permis de comparer plusieurs approches d’accès distant :

- VPN plus classique ;
- réseau privé maillé ;
- tunnel temporaire.

Cette partie du projet montre que la sécurité ne concerne pas seulement l’application elle-même, mais aussi la manière dont l’équipe accède à l’environnement.
