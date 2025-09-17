import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Contributors',
    Svg: require('@site/static/img/CNCF-Contributor-Icons-Contributor.svg').default,
    description: (
      <>
        Navigate the Cloud Native as an individual contributor. Get started, find new friends, forge your path.
      </>
    ),
  },
  {
    title: 'Projects',
    Svg: require('@site/static/img/CNCF-Contributor-Icons-Projects.svg').default,
    description: (
      <>
        Over 220 Projects choose the CNCF as their home. These resources document how we work together as a team. 
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/CNCF-Contributor-Icons-Community.svg').default,
    description: (
      <>
        Stronger, together. Contributors and Projects collaborate to get larger goals accomplished. 
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
