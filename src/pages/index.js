import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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
  const pentestReportHref = useBaseUrl('/pentest/rapport-pentest-ytech-2026-v2.pdf');

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
                <div
                  className={styles.signalStats}
                  aria-label="Indicateurs cybersécurité">
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
        <section className={styles.pentestSpotlight}>
          <div className="container">
            <div className={styles.pentestGrid}>
              <div className={styles.pentestCopy}>
                <p className={styles.sectionKicker}>Restitution d&apos;audit</p>
                <Heading as="h2">
                  Une section pentest et un PDF téléchargeable ont été ajoutés
                  à la documentation.
                </Heading>
                <p>
                  Cette nouvelle entrée centralise le contexte du pentest, son
                  positionnement dans la démarche sécurité du projet et l&apos;accès
                  direct au rapport complet avec captures actuelles 2026.
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={clsx('button button--lg', styles.primaryButton)}
                    to="/docs/services/pentest">
                    Voir la section pentest
                  </Link>
                  <a
                    className={clsx('button button--lg', styles.downloadButton)}
                    href={pentestReportHref}
                    download>
                    Télécharger le rapport
                  </a>
                </div>
              </div>
              <div className={styles.pentestPanel}>
                <div className={styles.pentestBadgeRow}>
                  <span className={styles.pentestBadge}>PDF complet</span>
                  <span className={styles.pentestBadge}>Captures 2026</span>
                  <span className={styles.pentestBadge}>Section dédiée</span>
                </div>
                <div className={styles.pentestMetricGrid}>
                  <article className={styles.pentestMetricCard}>
                    <strong>Livrable centralisé</strong>
                    <span>
                      Le rapport de pentest est désormais servi directement
                      depuis le site.
                    </span>
                  </article>
                  <article className={styles.pentestMetricCard}>
                    <strong>Lecture guidée</strong>
                    <span>
                      La page doc relie le pentest aux pages Nessus, WAF et
                      sécurisation Linux.
                    </span>
                  </article>
                  <article className={styles.pentestMetricCard}>
                    <strong>Preuve exploitable</strong>
                    <span>
                      Le PDF peut être consulté, téléchargé et archivé pour la
                      soutenance.
                    </span>
                  </article>
                  <article className={styles.pentestMetricCard}>
                    <strong>Intégration propre</strong>
                    <span>
                      Sidebar, navbar et accueil pointent maintenant vers la
                      même section.
                    </span>
                  </article>
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
