---
title: Centralisation des logs avec Graylog
---

# Centralisation des logs avec Graylog

Les **logs** sont les journaux d’événements générés par les systèmes et les applications. Lorsqu’ils restent dispersés sur différentes machines, il devient plus difficile de comprendre ce qui se passe dans l’environnement. C’est pourquoi **Graylog** a été utilisé pour centraliser ces informations.

## Rôle de Graylog dans le projet

Graylog permet de :

- regrouper les journaux en un point unique ;
- faciliter le diagnostic en cas de problème ;
- améliorer la traçabilité des événements ;
- visualiser rapidement l’activité observée sur les machines ;
- disposer d’une source complémentaire aux outils de supervision.

## Mise en place des inputs

![Inputs Graylog actifs](/img/graylog/graylog-inputs.jpg)

Cette capture montre les deux inputs actifs configurés dans Graylog : **GELF UDP** et **Syslog UDP**.

La configuration observée dans le projet montre l’utilisation de deux entrées principales :

- un input **GELF UDP** ;
- un input **Syslog UDP**.

Cette double configuration est intéressante, car elle permet de recevoir des journaux issus de sources et de formats différents. On constate également que les paramètres techniques de traitement sont visibles dans l’interface : écoute réseau, encodage, nombre de threads, ports utilisés et métriques de débit.

Les valeurs observables dans la capture sont déjà parlantes :

- écoute sur `0.0.0.0` ;
- encodage `UTF-8` ;
- `2` threads de traitement ;
- port `12201` pour **GELF UDP** ;
- port `1514` pour **Syslog UDP** ;
- `recv_buffer_size` à `262144`.

## Principe de fonctionnement

Le fonctionnement de Graylog peut être résumé de la manière suivante :

1. une machine ou une application émet des journaux ;
2. les messages sont envoyés vers un input Graylog ;
3. Graylog reçoit, indexe et classe les événements ;
4. les messages deviennent consultables dans l’interface de recherche ;
5. ils peuvent ensuite être analysés dans une logique d’exploitation ou de sécurité.

```text
Source de logs -> Input Graylog -> Indexation -> Recherche / analyse
```

## Exemple de message reçu via GELF

![Message de test reçu via GELF dans Graylog](/img/graylog/graylog-gelf-test-message.jpg)

On y voit un message `test` reçu via l’input **GELF UDP**, avec sa source, son index de stockage et son routage dans le flux par défaut.

Une des vues disponibles dans le projet montre un message de test reçu via l’input **GELF UDP**. Les informations visibles permettent d’établir que :

- un message de test a bien été reçu ;
- une source IP est associée au journal ;
- l’événement est stocké dans un index Graylog ;
- le message a été routé dans un flux par défaut.

Cette preuve est importante, car elle montre que la chaîne de journalisation fonctionne réellement.

La capture montre aussi que le message est associé à la source `192.168.10.40`, stocké dans l’index `graylog_0` et routé vers le `Default Stream`. Cela prouve que la réception, l’indexation et la consultation fonctionnent de bout en bout.

## Exemple de message reçu via Syslog

La réception de messages système via **Syslog UDP** depuis une machine Ubuntu est illustrée dans la vue centralisée présentée ci-dessous.

Une autre vue montre la réception d’un message de test via **Syslog UDP** depuis une machine Linux. Cela prouve que Graylog peut centraliser à la fois :

- des messages système classiques ;
- des journaux applicatifs ou structurés ;
- des événements provenant de plusieurs origines.

## Journaux centralisés et exploitation

![Journaux centralisés dans Graylog](/img/graylog/graylog-journaux-centralises.jpg)

Cette vue montre des événements système déjà centralisés dans Graylog, notamment `cron`, `pam_unix` et `systemd`, en provenance de la machine `yyechadmin`.

La vue de recherche centralisée permet de consulter des événements variés provenant d’une même machine ou de plusieurs hôtes :

- tâches planifiées `cron` ;
- ouvertures et fermetures de session `pam_unix` ;
- événements `systemd` ;
- traces applicatives ou messages de test.

Cette centralisation apporte une vraie valeur opérationnelle, car elle évite de devoir se connecter en permanence sur chaque machine pour consulter localement les journaux.

Le graphique d’activité visible en haut de l’interface ajoute aussi une dimension temporelle : il devient possible d’identifier les périodes d’activité, de repérer un pic inhabituel et de replacer un événement dans une séquence chronologique.

## Synthèse opérationnelle

| Source | Type de logs | Intérêt opérationnel | Bénéfice sécurité |
| --- | --- | --- | --- |
| GELF | Messages structurés ou applicatifs | Validation rapide d’un envoi de logs | Meilleure traçabilité |
| Syslog | Journaux système Linux | Suivi de l’activité de la machine | Détection plus facile d’événements inhabituels |
| Journaux centralisés | Vue agrégée | Diagnostic plus rapide | Corrélation plus simple des événements |

## Limites et remarques

Des compléments seraient possibles pour aller encore plus loin :

- les ports exacts utilisés par chaque input ;
- un exemple réel d’extracteur ou de pipeline si cette fonction a été exploitée ;
- la politique de rétention ou de rotation des index ;
- le détail des sources configurées de façon définitive.

## Conclusion de section

Graylog transforme les journaux techniques en information exploitable. Dans le projet YTech Solutions, il apporte une dimension de **visibilité et de traçabilité** indispensable pour comprendre le comportement de l’infrastructure.
