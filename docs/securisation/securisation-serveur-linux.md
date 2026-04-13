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

Dans le cadre du projet, l’audit a permis de comparer l’état du serveur hébergeant l’application CRUD RH avant et après plusieurs actions de durcissement.

| Indicateur | Avant renforcement | Après renforcement |
| --- | --- | --- |
| Hardening index | 67 | 85 |
| Tests performed | 278 | 289 |
| Plugins enabled | 1 | 1 |
| Firewall | Activé | Activé |
| Malware scanner | Désactivé | Activé |

Ces résultats montrent que le niveau de protection du serveur s’est amélioré de manière visible.

- le score de hardening passe de **67** à **85**, soit un gain de **18 points** ;
- le nombre de tests réalisés augmente de **278** à **289**, ce qui reflète une couverture d’audit plus large ;
- le pare-feu reste actif dans les deux analyses, ce qui confirme la présence d’un filtrage réseau stable ;
- le malware scanner apparaît ensuite comme activé, ce qui constitue un renforcement supplémentaire de la défense du système.

Cette évolution montre que le travail de hardening n’est pas seulement théorique. Il a produit un résultat mesurable sur le serveur Linux qui héberge l’application, avec une meilleure posture globale et davantage de mécanismes de protection visibles dans l’audit.

## Détection réseau avec Suricata

_Captures fournies : état du service Suricata et consultation du fichier `eve.json`._

En complément du durcissement du serveur, **Suricata** a été utilisé comme moteur de détection réseau. Les captures montrent deux éléments particulièrement utiles.

La première affiche l’état du service avec la commande `systemctl status suricata`. On y voit que :

- le service `suricata.service` est bien **loaded** et **enabled** ;
- son état est **active (running)** ;
- la version exécutée est `7.0.3` ;
- le démon fonctionne avec la configuration `/etc/suricata/suricata.yaml`.

Cette vérification est importante, car elle confirme que le moteur IDS/IDP n’est pas seulement installé, mais réellement démarré et opérationnel sur la machine.

La seconde capture montre l’analyse du fichier `eve.json`, qui contient les événements produits par Suricata. On y distingue différents types de traces :

- des événements de flux réseau (`flow`) ;
- des métadonnées réseau sur les communications observées ;
- des événements HTTP et `fileinfo` ;
- des échanges liés à des accès web et à des communications internes.

Cette production d’événements montre que Suricata apporte une visibilité supplémentaire sur le trafic, au-delà des journaux système classiques. Dans une logique de sécurité, cela permet de mieux repérer les comportements réseau, de conserver des traces exploitables et d’alimenter une analyse plus fine en cas d’incident.

## Intérêt du hardening

L’objectif de ces mesures est de :

- réduire les risques d’accès non autorisés ;
- mieux contrôler l’administration distante ;
- améliorer la cohérence globale du système ;
- renforcer la posture de sécurité du serveur ;
- ajouter une capacité de détection sur l’activité réseau observée.

Même pour un lecteur non spécialiste, il faut retenir l’idée suivante : un serveur Linux correctement configuré ne se contente pas de fonctionner, il doit également limiter autant que possible les risques inutiles.
