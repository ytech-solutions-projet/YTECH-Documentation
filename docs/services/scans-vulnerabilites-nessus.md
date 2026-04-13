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

La présente documentation doit être lue comme une base d’analyse. Les informations suivantes doivent être précisées si elles sont disponibles :

- cible ou cibles exactes du scan ;
- adresse IP ou nom d’hôte réellement scanné ;
- date de lancement ;
- profil ou politique de scan utilisée.

> **À compléter avec la valeur réelle observée dans l’environnement.**

## Résumé du scan

![Résumé du scan Nessus](/img/nessus/nessus-summary.png)

Cette capture présente un résumé global du scan de vulnérabilités réalisé sur l’infrastructure. Elle prouve qu’un audit automatisé a bien été mené et qu’une restitution exploitable a été obtenue.

## Lecture des résultats

Même lorsque tous les détails ne sont pas encore documentés, un scan Nessus permet généralement de classer les observations selon leur niveau de gravité :

- critique ;
- élevé ;
- moyen ;
- faible ;
- informationnel.

Le rôle de cette classification est de hiérarchiser les actions à mener. Une faiblesse informationnelle n’a pas le même impact qu’une vulnérabilité élevée exposant directement un service.

## Exemple de tableau de synthèse

Le tableau ci-dessous fournit une structure claire à compléter avec les observations réelles du scan.

| Élément | Observation | Impact | Action |
| --- | --- | --- | --- |
| Système ou service scanné | À compléter avec la cible réelle | Dépend de l’élément analysé | Vérifier la criticité |
| Vulnérabilité ou famille détectée | À compléter avec le résultat réel | Faible / moyen / élevé / critique | Corriger, mettre à jour ou isoler |
| Configuration faible | À compléter avec le résultat réel | Risque de durcissement insuffisant | Ajuster la configuration |
| Information utile | À compléter avec le résultat réel | Impact limité mais intéressant | Documenter ou surveiller |

## Détail d’une vulnérabilité

[Capture à insérer : détail d’une vulnérabilité Nessus avec nom, description, sévérité et recommandation.]

Cette section a vocation à présenter au moins un exemple concret de résultat remonté par Nessus :

- nom de la vulnérabilité ou de la faiblesse ;
- description synthétique ;
- niveau de gravité ;
- impact potentiel ;
- recommandation de correction.

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
