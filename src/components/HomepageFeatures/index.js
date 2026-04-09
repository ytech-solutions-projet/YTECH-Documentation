import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Durcissement Linux',
    image: require('@site/static/img/securisation-linux/lynis-score.png').default,
    imageAlt: 'Audit Lynis du serveur Linux',
    href: '/docs/securisation/securisation-serveur-linux',
    description: (
      <>
        Comptes, SSH, pare-feu, Fail2ban et contrôle de la posture système.
      </>
    ),
  },
  {
    title: 'Reverse proxy et WAF',
    image: require('@site/static/img/nginx/nginx-config.png').default,
    imageAlt: 'Configuration Nginx du reverse proxy',
    href: '/docs/securisation/reverse-proxy-nginx',
    description: (
      <>
        Publication contrôlée, filtrage HTTP et protection de l&apos;application.
      </>
    ),
  },
  {
    title: 'Logs et vulnérabilités',
    image: require('@site/static/img/nessus/nessus-summary.png').default,
    imageAlt: 'Synthèse de scan Nessus',
    href: '/docs/services/scans-vulnerabilites-nessus',
    description: (
      <>
        Scans Nessus, centralisation Graylog et signaux de supervision Zabbix.
      </>
    ),
  },
];

function Feature({image, imageAlt, title, description, href}) {
  return (
    <article className={clsx(styles.featureCard)}>
      <Link to={href} className={styles.featureLink}>
        <img className={styles.featureImage} src={image} alt={imageAlt} />
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <span>Consulter</span>
      </Link>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureHeader}>
          <p>Points de contrôle</p>
          <Heading as="h2">Les zones critiques du projet.</Heading>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
