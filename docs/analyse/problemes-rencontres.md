---
title: Problèmes rencontrés
---

# Problèmes rencontrés

Comme tout projet technique réel, YTech Solutions a rencontré plusieurs difficultés. Ces problèmes ont concerné le déploiement, la sécurité, la supervision, les outils d’exploitation et certaines contraintes propres à l’environnement de test.

L’intérêt de cette page n’est pas de lister des incidents de manière anecdotique, mais de montrer comment ces difficultés ont été identifiées, comprises puis traitées.

## Logique de retour d’expérience

Dans un projet soutenable, les difficultés rencontrées ne diminuent pas la crédibilité du travail. Au contraire, elles montrent :

- que l’environnement a réellement été manipulé ;
- que les choix techniques ont été confrontés à des contraintes concrètes ;
- que l’équipe a dû diagnostiquer et corriger des situations réelles.

## Tableau de synthèse des difficultés

| Problème | Cause probable | Solution appliquée | Résultat |
| --- | --- | --- | --- |
| Manque d’espace disque | Saturation de l’environnement ou des outils installés | Nettoyage, vérification de l’occupation et adaptation de l’environnement | Reprise du travail dans de meilleures conditions |
| Conflits de ports entre services | Plusieurs applications exposées ou écoutant sur les mêmes ports | Réattribution des ports, clarification des services ou passage par proxy | Réduction des collisions réseau |
| Plugins Nessus obsolètes | Base de plugins incomplète ou non à jour | Mise à jour ou relance de la synchronisation selon les possibilités | Amélioration de la qualité du scan |
| Difficulté d’authentification dans Graylog | Mauvaise configuration initiale, problème de compte ou de paramétrage | Reprise de la configuration et vérification de l’accès | Interface de journalisation devenue exploitable |
| Difficultés sur l’accès distant | Nature temporaire ou instable de certaines solutions | Comparaison entre Tailscale et Ngrok selon le besoin | Meilleure compréhension des usages adaptés |
| Contraintes réseau, proxy ou sécurité | Interaction entre filtrage, exposition web et services internes | Ajustement des règles, du proxy et des paramètres de sécurité | Architecture plus cohérente |

## Analyse par type de difficulté

### Contraintes système

Les problèmes de capacité ou de charge système rappellent qu’un projet ne dépend pas uniquement du code. Un environnement trop chargé, mal dimensionné ou mal entretenu peut perturber toute la chaîne de déploiement.

### Contraintes réseau et exposition

Les conflits de ports, les difficultés liées au proxy ou les problèmes d’accès distant montrent que l’exposition d’un service doit être pensée avec méthode. Une application peut être fonctionnelle, mais rester difficile à administrer si les flux et les points d’entrée ne sont pas clairement organisés.

### Contraintes sur les outils de sécurité et d’exploitation

Les difficultés rencontrées avec Graylog ou Nessus montrent qu’un outil ne devient pas utile du seul fait d’être installé. Il faut encore :

- le configurer correctement ;
- vérifier ses dépendances ;
- comprendre ses limites ;
- interpréter correctement ses résultats.

## Apports pédagogiques de ces difficultés

Ces incidents ont eu une réelle valeur pédagogique. Ils ont obligé l’équipe à :

- diagnostiquer des situations concrètes ;
- tester plusieurs approches ;
- adapter certaines décisions techniques ;
- documenter précisément les solutions appliquées ;
- distinguer les problèmes applicatifs, système et réseau.

## Limites de l’analyse

Certaines difficultés pourraient être encore mieux documentées si les éléments suivants étaient ajoutés :

- journaux ou messages d’erreur exacts ;
- commandes de diagnostic utilisées ;
- chronologie détaillée de résolution ;
- captures illustrant les incidents les plus significatifs.

Même sans ces annexes, l’analyse reste utile, car elle fait clairement apparaître les grandes familles de problèmes rencontrés et la logique de résolution appliquée.

## Conclusion de section

Les problèmes rencontrés ne doivent pas être vus comme de simples obstacles. Ils font partie de la réalité d’un projet technique et renforcent ici la crédibilité du travail réalisé, car ils montrent une capacité d’analyse, d’adaptation et de correction.
