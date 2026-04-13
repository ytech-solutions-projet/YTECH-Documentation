---
title: Sécurisation du serveur Linux
---

# Sécurisation du serveur Linux

Le serveur Linux constitue le socle d’hébergement du projet. Sa sécurisation est donc essentielle. Dans YTech Solutions, plusieurs mécanismes ont été étudiés ou mis en place pour renforcer la protection du système, limiter les accès non souhaités et mieux observer l’activité du serveur.

## Rôle de la sécurisation système dans le projet

La sécurité du serveur ne peut pas être réduite à un seul outil. Elle repose sur plusieurs mesures complémentaires :

- contrôle des accès d’administration ;
- protection contre certains comportements abusifs ;
- durcissement de la configuration système ;
- audit du niveau de sécurité ;
- visibilité sur les événements réseau et système.

## Fail2Ban

**Fail2Ban** permet de surveiller certains journaux afin de détecter des comportements abusifs, comme des tentatives répétées de connexion. Lorsqu’un comportement suspect est détecté, l’outil peut appliquer des mesures temporaires de blocage.

![Statut de Fail2Ban](/img/securisation-linux/fail2ban-status.png)

Cette capture montre l’état de Fail2Ban et les protections actives sur le service SSH.

### Ce que cela prouve

Cette preuve montre que la protection ne repose pas uniquement sur la robustesse des mots de passe ou des comptes. Une couche de défense automatique a également été prévue pour ralentir certains abus répétitifs.

## Configuration SSH

L’accès SSH est un point critique dans l’administration d’un serveur. Il doit donc être protégé avec soin.

![Configuration SSH sécurisée](/img/securisation-linux/ssh-config.png)

Cette capture présente une partie de la configuration SSH, notamment les paramètres de sécurité liés à l’authentification et à l’accès administrateur.

### Lignes directrices visibles dans la configuration

```conf
# Exemple représentatif de durcissement SSH
PermitRootLogin no
PasswordAuthentication <yes|no>
PubkeyAuthentication yes
AllowUsers <utilisateurs_autorises>
```

Même si la documentation ne recopie pas tout le fichier `sshd_config`, ce type de réglages montre déjà la logique retenue :

- désactivation de l’accès `root` direct ;
- préférence pour une authentification plus maîtrisée ;
- limitation des utilisateurs autorisés ;
- réduction de la surface d’accès administrateur.

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

### Analyse de l’avant / après

Ces résultats montrent que le niveau de protection du serveur s’est amélioré de manière visible :

- le score de hardening passe de **67** à **85**, soit un gain de **18 points** ;
- le nombre de tests réalisés augmente, ce qui reflète une couverture d’audit plus large ;
- le pare-feu reste actif dans les deux analyses ;
- le malware scanner apparaît ensuite comme activé.

Cette évolution est importante, car elle apporte une **preuve mesurable** du renforcement du socle système.

## Détection réseau avec Suricata

![Statut du service Suricata](/img/securisation-linux/suricata-status.jpg)

Cette sortie confirme que `suricata.service` est bien chargé, activé et actuellement en cours d’exécution sur le serveur.

Les détails visibles dans la sortie permettent d’aller plus loin :

- la version exécutée est `7.0.3` ;
- le service est lancé en mode `SYSTEM` ;
- la configuration est chargée depuis `/etc/suricata/suricata.yaml` ;
- le processus utilise le mode `af-packet`, cohérent avec une logique d’observation réseau sur l’interface système.

![Extrait du fichier eve.json de Suricata](/img/securisation-linux/suricata-eve-json.jpg)

L’extrait du fichier `eve.json` montre différents événements `flow` et `fileinfo`, ce qui confirme que Suricata produit bien des traces exploitables sur le trafic observé.

On y retrouve notamment :

- des métadonnées de flux réseau ;
- des traces HTTP ;
- des informations `fileinfo` ;
- des éléments liés à des accès web observés sur l’environnement.

En complément du durcissement du serveur, **Suricata** a été utilisé comme moteur de détection réseau. Les éléments attendus dans cette partie de la documentation doivent permettre de montrer :

- que le service est bien installé et démarré ;
- qu’il produit des événements exploitables ;
- qu’il apporte une visibilité supplémentaire sur le trafic observé.

À partir des éléments visibles, la lecture retenue est la suivante :

- le service `suricata.service` est actif ;
- la configuration est chargée depuis un fichier dédié ;
- les événements du fichier `eve.json` contiennent des traces de flux réseau, d’accès HTTP et d’informations de type `fileinfo`.

## Apports concrets dans le projet

La sécurisation du serveur Linux apporte plusieurs bénéfices directs :

- réduction du risque d’accès non autorisés ;
- meilleure maîtrise de l’administration distante ;
- amélioration mesurable de la posture de sécurité ;
- visibilité plus fine sur les événements système et réseau ;
- base plus solide pour l’hébergement de l’application.

## Mesures complémentaires possibles

Pour aller plus loin, plusieurs actions pourraient être ajoutées ou détaillées :

- journalisation renforcée des accès administratifs ;
- politique de mises à jour et de correctifs plus explicitement documentée ;
- désactivation des services non nécessaires ;
- règles `sudo` plus restrictives ;
- vérification régulière de l’exposition réseau ;
- export ou centralisation plus systématique des événements de sécurité.

## Conclusion de section

Le travail de hardening réalisé dans YTech Solutions montre qu’un serveur Linux ne doit pas seulement être fonctionnel. Il doit être **administrable, observable et défendable**, avec des preuves concrètes de renforcement.
