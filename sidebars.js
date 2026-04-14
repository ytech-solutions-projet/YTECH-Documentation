module.exports = {
  tutorialSidebar: [
    'intro',
    'presentation-projet',
    'objectifs',
    'equipe-et-repartition',
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/architecture-initiale',
        'architecture/architecture-finale',
        'architecture/environnement-technique',
      ],
    },
    {
      type: 'category',
      label: 'Déploiement et sécurisation',
      items: [
        'securisation/deploiement-application',
        'securisation/pare-feu-opnsense',
        'securisation/reverse-proxy-nginx',
        'securisation/securisation-serveur-linux',
        'securisation/waf',
      ],
    },
    {
      type: 'category',
      label: 'Services et outils',
      items: [
        'services/acces-distant-vpn',
        'services/centralisation-logs-graylog',
        'services/gestion-secrets-bitwarden',
        'services/assistant-ia-local',
        'services/scans-vulnerabilites-nessus',
        'services/pentest',
        'services/supervision-zabbix',
      ],
    },
    {
      type: 'category',
      label: 'Analyse et résultats',
      items: [
        'analyse/problemes-rencontres',
        'analyse/resultats-obtenus',
        'analyse/analyse-financiere',
        'analyse/conclusion',
      ],
    },
  ],
};
