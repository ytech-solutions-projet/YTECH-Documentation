import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const heroImage = require('@site/static/img/nessus/nessus-summary.png').default;
const securityImage = require('@site/static/img/securisation-linux/fail2ban-status.png').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{'--hero-image': `url(${heroImage})`}}>
      <div className={clsx('container', styles.heroContent)}>
        <p className={styles.eyebrow}>Pilotage cybersécurité</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.primaryButton)}
            to="/docs/intro">
            Ouvrir la documentation
          </Link>
          <Link
            className={clsx('button button--lg', styles.secondaryButton)}
            to="/docs/securisation/securisation-serveur-linux">
            Voir la sécurisation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Accueil"
      description="Documentation technique du projet YTECH">
      <HomepageHeader />
      <main>
        <section className={styles.commandCenter}>
          <div className="container">
            <div className={styles.commandGrid}>
              <div className={styles.commandCopy}>
                <p className={styles.sectionKicker}>Exploitation sécurisée</p>
                <Heading as="h2">Du serveur durci au suivi opérationnel.</Heading>
                <p>
                  Une documentation orientée terrain pour comprendre
                  l&apos;architecture, les protections Linux, le reverse proxy,
                  le WAF, la supervision et la centralisation des logs.
                </p>
              </div>
              <div className={styles.signalPanel}>
                <img
                  src={securityImage}
                  alt="Statut Fail2ban du serveur Linux"
                  className={styles.signalImage}
                />
                <div className={styles.signalStats} aria-label="Indicateurs cybersécurité">
                  <span>WAF</span>
                  <span>VPN</span>
                  <span>Nginx</span>
                  <span>Zabbix</span>
                  <span>Graylog</span>
                  <span>Nessus</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
