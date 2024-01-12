import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import { YMInitializer } from 'react-yandex-metrika';
 
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.heroText}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/general-guide/overview">
              Начать путешествие
            </Link>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Guide to Thailand is a comprehensive resource for planning a trip to Thailand, created and maintained by a community of travelers. From top tourist destinations to off-the-beaten-path experiences, our guide has something for everyone. Find information on hotels, transportation, cultural events, and more. Start planning your dream trip to Thailand today with Guide to Thailand!">
      <HomepageHeader />
      <YMInitializer accounts={[96087561]}/>
      <main>
        <HomepageFeatures />
      </main>
      
    </Layout>
  );
}
