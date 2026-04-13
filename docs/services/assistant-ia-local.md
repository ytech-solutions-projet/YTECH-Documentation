---
title: Assistant IA local
---

# Assistant IA local avec Open WebUI et Ollama

Dans le cadre du projet YTech Solutions, une solution d’**IA locale** a été mise en place à l’aide de **Open WebUI** et **Ollama**. L’idée n’était pas simplement d’ajouter un outil “à la mode”, mais de montrer qu’il est possible d’intégrer un assistant conversationnel directement dans un environnement interne, sans dépendre uniquement de services cloud externes.

Les captures montrent une interface accessible sur l’adresse privée `192.168.9.193:3000`, ce qui indique un déploiement dans le réseau local. Cette approche est intéressante, car elle permet de garder la maîtrise de l’environnement d’exécution, des accès et des usages de l’outil.

## Interface d’accueil de l’assistant

![Accueil Open WebUI pour un utilisateur](/img/ia/openwebui-benamar-home.png)

Cette première capture montre l’écran d’accueil de **Open WebUI** une fois l’utilisateur connecté. On y voit :

- une interface sobre et claire centrée sur la zone de dialogue ;
- le message de bienvenue personnalisé `Bonjour, BENAMAR Othmane.` ;
- une zone de saisie principale pour formuler les requêtes ;
- des suggestions de prompts directement proposées sous le champ de saisie ;
- les commandes d’entrée vocale et d’actions rapides dans la barre de conversation.

Cette personnalisation est importante, car elle montre que l’outil n’est pas utilisé comme une simple page de test technique. Il s’inscrit dans un contexte multi-utilisateur, où l’interface peut être associée à un profil précis et à une session individualisée.

## Sélection et usage du modèle

![Modèle Mistral sélectionné dans Open WebUI](/img/ia/openwebui-mistral-home.png)

Cette deuxième capture montre l’interface avec le modèle **`mistral:latest`** sélectionné. Cet élément est important, car il prouve que l’environnement ne se limite pas à l’interface graphique : un modèle local est bien chargé derrière l’outil et prêt à être interrogé.

D’un point de vue fonctionnel, cette vue met en évidence :

- la sélection explicite du modèle dans la barre supérieure ;
- la possibilité de définir un modèle par défaut ;
- une expérience de chat prête à l’emploi pour un usage quotidien ;
- des suggestions de tâches variées comme l’aide au code, l’explication ou l’idéation.

Dans le projet, cela permet de montrer qu’un service IA local peut être rendu accessible à des utilisateurs non spécialistes à travers une interface web simple, beaucoup plus pratique qu’un usage en ligne de commande brute.

## Espace de travail et organisation de l’outil

![Espace de travail Open WebUI](/img/ia/openwebui-workspace.png)

Cette troisième capture montre la partie gauche de l’interface avec la navigation ouverte. On y retrouve plusieurs fonctions utiles :

- `Nouvelle conversation` pour lancer un nouvel échange ;
- `Recherche` pour retrouver des contenus ou discussions ;
- `Notes` pour conserver des éléments utiles ;
- `Espace de travail` pour organiser l’usage collaboratif ;
- `Dossiers` et `Conversations` pour structurer les échanges.

Le nom `YTECH Solutions (Open WebUI)` visible dans le panneau latéral montre aussi que l’outil a été intégré dans une logique de plateforme interne plutôt que laissé sous une configuration générique. Cela donne une dimension plus professionnelle au service.

## Intérêt de cette intégration

L’intégration de cette IA locale présente plusieurs intérêts dans le cadre du projet :

- expérimenter un service moderne d’assistance conversationnelle ;
- proposer une interface centralisée pour interroger un modèle local ;
- éviter de dépendre entièrement d’un service externe pour certains usages internes ;
- illustrer comment une brique d’IA peut s’ajouter à une infrastructure déjà structurée.

Sur le plan pratique, un tel outil peut servir à :

- aider à la rédaction technique ;
- reformuler ou résumer des informations ;
- proposer des idées ou des brouillons ;
- assister sur des questions de développement ou de configuration ;
- soutenir la documentation et la veille technique.

## Limites et vigilance

Comme toute solution d’IA, cet outil doit être utilisé avec discernement. Il peut aider, accélérer ou guider, mais il ne remplace ni la vérification humaine, ni le raisonnement technique, ni les bonnes pratiques de sécurité.

Dans le cadre du projet, sa valeur est donc principalement démonstrative et pédagogique : il montre comment une interface d’IA locale peut être intégrée dans un environnement interne, tout en restant compatible avec une logique de contrôle, de confidentialité et d’expérimentation technique.
