import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Architecture',
    image: require('@site/static/img/architecture/architecture-finale.png').default,
    imageAlt: 'Architecture finale du projet YTECH',
    description: (
      <>
        Vue d&apos;ensemble de l&apos;infrastructure, de l&apos;environnement technique
        et de l&apos;organisation cible.
      </>
    ),
  },
  {
    title: 'Déploiement',
    image: require('@site/static/img/deploiement/site-vitrine-home.png').default,
    imageAlt: 'Application YTECH déployée',
    description: (
      <>
        Étapes de mise en ligne, configuration PM2, reverse proxy Nginx et
        validation de l&apos;application.
      </>
    ),
  },
  {
    title: 'Sécurisation',
    image: require('@site/static/img/securisation-linux/lynis-score.png').default,
    imageAlt: 'Contrôle de sécurisation Linux',
    description: (
      <>
        Durcissement Linux, WAF, supervision, centralisation des logs et scans
        de vulnérabilités.
      </>
    ),
  },
];

function Feature({image, imageAlt, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt={imageAlt} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
