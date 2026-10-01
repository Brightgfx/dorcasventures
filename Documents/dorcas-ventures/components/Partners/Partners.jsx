import Image from 'next/image';
import styles from './Partners.module.css';

const FEATS = [
  {
    icon: '🏭',
    title: 'Factory Excellence',
    desc: 'Direct partnerships with production facilities ensuring consistent, certified quality in every batch.',
  },
  {
    icon: '🤝',
    title: 'Trusted Collaboration',
    desc: 'Long-standing relationships built on mutual trust, transparency, and shared commitment to excellence.',
  },
  {
    icon: '🌍',
    title: 'Global Standards',
    desc: 'Working with partners who meet international production standards to bring the best to Ghana.',
  },
];

export default function Partners() {
  return (
    <section className={styles.section} id="partners">
      <div className={styles.inner}>

        <div className={styles.imgWrap}>
          <Image
            src="/images/partners.jpg"
            alt="Dorcas Ventures Factory Partners"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div className={styles.goldFrame} />
          <div className={styles.pill}>Factory Partners</div>
        </div>

        <div className={styles.text}>
          <div className="sectionLabel">Our Partners</div>
          <h2 className="sectionTitle">The Team Behind <em>Our Quality</em></h2>
          <span className="goldLine" />
          <p className="sectionSub">
            Behind every quality product at Dorcas Ventures stands a team of dedicated
            factory partners who share our vision — building Ghana one excellent finish
            at a time.
          </p>
          <div className={styles.feats}>
            {FEATS.map(f => (
              <div key={f.title} className={styles.feat}>
                <div className={styles.featIcon}>{f.icon}</div>
                <div className={styles.featTxt}>
                  <strong>{f.title}</strong>
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
