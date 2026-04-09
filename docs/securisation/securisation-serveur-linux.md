---
title: Sécurisation du serveur Linux
---

# Sécurisation du serveur Linux

Le serveur Linux constitue le socle de l’infrastructure. Sa sécurisation est donc essentielle. Dans le cadre du projet, plusieurs mécanismes ont été étudiés ou mis en place pour renforcer la protection du système.

## Fail2Ban

**Fail2Ban** permet de surveiller certains journaux afin de détecter des comportements abusifs, comme des tentatives répétées de connexion. Lorsqu’un comportement suspect est détecté, l’outil peut appliquer des mesures temporaires de blocage.

![Statut de Fail2Ban](/img/securisation-linux/fail2ban-status.png)

Cette capture montre l’état de Fail2Ban et les protections actives sur le service SSH.

## Configuration SSH

L’accès SSH est un point critique dans l’administration d’un serveur. Il doit donc être protégé avec soin.

![Configuration SSH sécurisée](/img/securisation-linux/ssh-config.png)

Cette capture présente une partie de la configuration SSH, notamment les paramètres de sécurité liés à l’authentification et à l’accès administrateur.

## Audit Lynis

**Lynis** est un outil d’audit système permettant d’évaluer rapidement le niveau global de sécurité d’un serveur Linux.

![Score Lynis](/img/securisation-linux/lynis-score.png)

Cette capture montre le résultat de l’audit Lynis et l’indice de hardening observé sur le serveur.

## Intérêt du hardening

L’objectif de ces mesures est de :

- réduire les risques d’accès non autorisés ;
- mieux contrôler l’administration distante ;
- améliorer la cohérence globale du système ;
- renforcer la posture de sécurité du serveur.

Même pour un lecteur non spécialiste, il faut retenir l’idée suivante : un serveur Linux correctement configuré ne se contente pas de fonctionner, il doit également limiter autant que possible les risques inutiles.
