---
title: Scans de vulnérabilités avec Nessus
---

# Scans de vulnérabilités avec Nessus

La sécurité ne peut pas être évaluée uniquement à l’intuition. Il est important de vérifier concrètement si un environnement présente encore des faiblesses techniques. Dans le projet YTech Solutions, cette vérification a été réalisée à l’aide de **Nessus Essentials**.

## Rôle de Nessus dans le projet

L’outil a été utilisé pour :

- identifier des vulnérabilités connues ;
- repérer certaines mauvaises configurations ;
- obtenir une lecture plus objective de la posture de sécurité ;
- orienter les actions correctives ou les points de vigilance.

## Contexte du scan

La capture disponible donne déjà plusieurs informations concrètes sur la campagne Nessus utilisée dans le projet :

- l’interface Nessus est accessible sur `https://192.168.10.19:8834` ;
- le scan affiché porte le nom `Ytech-scan-for recordine vidéo` ;
- la politique utilisée est `Advanced Scan` ;
- l’exécution est réalisée par le `Local Scanner` ;
- la base de sévérité visible est `CVSS v3.0` ;
- l’onglet `Hosts` montre `1` hôte analysé.

Ces éléments sont suffisants pour montrer qu’il ne s’agit pas d’une simple installation de l’outil, mais bien d’une campagne de scan réellement lancée et interprétable.

## Résumé du scan

![Résumé du scan Nessus](/img/nessus/nessus-summary.png)

Cette capture présente un résumé global du scan de vulnérabilités réalisé sur l’infrastructure. Elle prouve qu’un audit automatisé a bien été mené et qu’une restitution exploitable a été obtenue.

Les informations visibles permettent également de relever :

- `1` hôte dans l’onglet `Hosts` ;
- `3` entrées dans l’onglet `Vulnerabilities` ;
- `2` éléments dans l’historique ;
- une visualisation synthétique des niveaux de sévérité.

## Lecture des résultats

Même lorsque tous les détails ne sont pas encore documentés, un scan Nessus permet généralement de classer les observations selon leur niveau de gravité :

- critique ;
- élevé ;
- moyen ;
- faible ;
- informationnel.

Le rôle de cette classification est de hiérarchiser les actions à mener. Une faiblesse informationnelle n’a pas le même impact qu’une vulnérabilité élevée exposant directement un service.

## Tableau de lecture du scan

Le tableau ci-dessous résume ce qui est directement observable dans la capture :

| Élément | Observation | Impact | Action |
| --- | --- | --- | --- |
| Scan Nessus | `Ytech-scan-for recordine vidéo` | Campagne clairement identifiée | Conserver une convention de nommage compréhensible |
| Politique de scan | `Advanced Scan` | Couverture plus large qu’un test minimal | Adapter le profil au type de cible |
| Moteur d’exécution | `Local Scanner` | Analyse réalisée depuis la plateforme locale | Vérifier la portée réseau du scanner |
| Hôtes analysés | `1` hôte visible | Lecture ciblée des résultats | Prioriser plus facilement les corrections |
| Vulnérabilités | `3` éléments visibles dans l’onglet dédié | Besoin de qualification et de hiérarchisation | Corriger ou surveiller selon la sévérité |

## Comment lire un résultat Nessus

La capture disponible montre surtout une vue consolidée. Même sans zoom sur un plugin précis, la logique de lecture d’un résultat Nessus reste la suivante :

1. identifier le nom de la vulnérabilité ou de la famille de plugins ;
2. relever la sévérité attribuée ;
3. comprendre si le risque est réellement exploitable dans le contexte du projet ;
4. lire la recommandation proposée ;
5. décider s’il faut corriger, compenser ou simplement surveiller.

Cette méthode de lecture est importante, car un scan n’a de valeur que si ses résultats sont interprétés avec discernement.

## Actions correctives ou remarques

Selon les observations relevées, plusieurs types d’actions peuvent être envisagés :

- mise à jour du système ou d’un composant exposé ;
- désactivation d’un service non nécessaire ;
- durcissement de configuration ;
- limitation d’exposition réseau ;
- surveillance renforcée d’un point identifié comme sensible.

## Limites de Nessus Essentials

Nessus Essentials reste très utile dans un projet académique, mais il présente des limites :

- il ne remplace pas une revue manuelle de configuration ;
- il ne couvre pas toute la profondeur d’une analyse d’architecture ;
- ses possibilités restent plus limitées qu’une offre de sécurité plus complète ;
- il détecte des familles de risques, mais ne corrige pas lui-même l’environnement.

## Conclusion de section

Dans YTech Solutions, Nessus apporte une dimension d’**évaluation concrète** de la sécurité. Il permet de dépasser le simple ressenti et de s’appuyer sur des résultats observables pour documenter la posture de sécurité du projet.
