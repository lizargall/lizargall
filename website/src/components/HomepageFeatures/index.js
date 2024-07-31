import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation is Everywhere',
    Svg: require('@site/static/img/connectdevelop.svg').default,
    description: (
      <>
      I train, inspire and empower SMEs to create stronger documentation. Whether the content is for websites, manuals or in the code.
      </>
    ),
  },
  {
    title: 'Greenfield or Legacy Documentation',
    Svg: require('@site/static/img/sitemap.svg').default,
    description: (
      <>
       I use data based decision making, stakeholder engagement and content marketing strategies to create documentation, training and websites. Breaking ground for new products or transforming old content into revitalized experiences.
      </>
    ),
  },
  {
    title: 'Your Organization is Unique',
    Svg: require('@site/static/img/hat-wizard.svg').default,
    description: (
      <>
      I thrive learning about new processes, software, and what matters to your experts and audiences. To write effectively for an organization, it's essential to listen deeply and get hands on experience with their products.
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
