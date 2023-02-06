import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Актуальная информация',
    Svg: require('@site/static/img/relevantInfo.svg').default,
    description: (
      <>
        Наш гид всегда актуален и содержит самую свежую информацию о Таиланде.
      </>
    ),
  },
  {
    title: 'Полное покрытие',
    Svg: require('@site/static/img/fullCoverage.svg').default,
    description: (
      <>
       Наш гид охватывает множество городов и регионов Таиланда.
      </>
    ),
  },
  {
    title: 'Полезные советы',
    Svg: require('@site/static/img/usefulAdvice.svg').default,
    description: (
      <>
        Наш гид наполнен полезными советами и рекомендациями для путешествий по Таиланду.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className='featureTitle text--center padding-horiz--md'>Чем мы можем быть вам полезны?</h1>
        <p className='featureDescription text--center padding-horiz--md'>Мы живем в Тайланде и знаем как устроиться что купить что попить где потанцевать как сделать визу на чем лететь сколько все стоит где купить таблетки где купить кофе сколько сейчас время  и не только</p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
