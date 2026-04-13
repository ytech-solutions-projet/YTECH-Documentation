---
title: Centralisation des logs avec Graylog
---

# Centralisation des logs avec Graylog

Les **logs** sont les journaux d’événements générés par les systèmes et les applications. Lorsqu’ils restent dispersés sur différentes machines, il devient plus difficile de comprendre ce qui se passe dans l’environnement. C’est pourquoi **Graylog** a été utilisé pour centraliser ces informations.

## Inputs configurés

_Capture fournie : page `System / Inputs` de Graylog._

La capture montre que deux inputs ont été configurés et démarrés dans Graylog :

- un input **GELF UDP** ;
- un input **Syslog UDP**.

On voit aussi plusieurs paramètres techniques utiles, comme l’écoute sur `0.0.0.0`, l’encodage `UTF-8`, le nombre de threads de traitement, les tailles de buffer, les ports associés et les métriques de débit réseau.

Cette étape est importante, car sans input actif, Graylog ne peut rien centraliser. La présence simultanée de GELF et de Syslog montre que la plateforme a été pensée pour recevoir des journaux issus de plusieurs formats et de plusieurs sources.

## Message reçu via GELF

_Capture fournie : message de test GELF dans Graylog._

La première vue de recherche montre un événement de test reçu via l’input **GELF UDP**. On y voit notamment :

- un message `test` ;
- un champ `event_type` également positionné à `test` ;
- une source `192.168.10.40` ;
- un stockage dans l’index `graylog_0` ;
- un routage dans le `Default Stream`.

Cette capture confirme que Graylog reçoit bien les messages au bon format, les indexe et les rend consultables immédiatement dans l’interface.

## Message reçu via Syslog

_Capture fournie : message de test Syslog dans Graylog._

Une autre capture montre la réception d’un message `Test Graylog depuis Ubuntu` via l’input **Syslog UDP**. Plusieurs métadonnées sont visibles :

- la source `yyechadmin` ;
- le nom d’application `ytech` ;
- le niveau `user-level` ;
- les champs de facility et de synchronisation.

Cette vue est utile, car elle prouve que la chaîne de journalisation fonctionne aussi pour les journaux système classiques envoyés depuis une machine Linux.

## Journaux centralisés

_Capture fournie : vue de plusieurs événements centralisés dans Graylog._

La dernière vue montre une série de logs réellement agrégés dans Graylog, avec un histogramme de messages et une liste d’événements provenant de l’hôte `yyechadmin`. On y retrouve des traces variées :

- des événements `cron` ;
- des ouvertures et fermetures de session `pam_unix` ;
- des messages `systemd` ;
- des tâches planifiées liées à l’environnement serveur.

Cette centralisation apporte une vraie valeur opérationnelle, car elle permet de consulter l’activité d’une machine sans se connecter en permanence au serveur source.

## Intérêt

Graylog permet :

- de regrouper les journaux en un seul point ;
- de faciliter le diagnostic en cas de problème ;
- d’améliorer la traçabilité ;
- de valider qu’un message a bien été reçu, indexé et routé ;
- de disposer d’une meilleure vision globale du système.

Cette brique est importante, car elle transforme une infrastructure simplement fonctionnelle en infrastructure mieux observée et mieux comprise.
