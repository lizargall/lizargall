import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Help with the messy middle',
    Svg: require('@site/static/img/unique.svg').default,
    description: (
      <>
      Working with leaders to turn ambiguity into action.
      </>
    ),
  },
  {
    title: 'Support for your vision',
    Svg: require('@site/static/img/unique.svg').default,
    description: (
      <>
      Helping SMEs and change makers articulate their vision in ways that are grounded and scalable
      </>
    ),
  },
  {
    title: 'Fostering healthy organizations',
    Svg: require('@site/static/img/unique.svg').default,
    description: (
      <>
      Facilitating processes to help organizations innovate, renew, and rally around a shared goal
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
