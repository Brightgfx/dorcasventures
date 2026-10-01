import Image from 'next/image';
import { ABOUT_FEATS } from '@/lib/constants';
import styles from './About.module.css';
export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.imgWrap}>
        <Image src="/images/about.jpg" alt="Our craftsmanship" fill style={{ objectFit: 'cover' }} />
        <div className={styles.badge}><span className={styles.badgeNum}>10+</span><span className={styles.badgeLbl}>Years of Trust</span></div>
      </div>
      <div className={styles.text}>
        <div className="sectionLabel">About Dorcas Ventures</div>
        <h2 className="sectionTitle">Ghana's Home of <em>Quality Plasters</em></h2>
        <span className="goldLine" />
        <p className="sectionSub" style={{ marginBottom: 16 }}>We are a premier supplier of top-tier plastering and ceiling materials, serving homeowners, contractors, and developers across Ghana with excellence and reliability.</p>
        <p className="sectionSub">From premium POP cement to designer fibre ceilings, every product meets the highest quality standards — because your home deserves nothing less.</p>
        <div className={styles.feats}>
          {ABOUT_FEATS.map(f => (
            <div key={f.title} className={styles.feat}>
              <div className={styles.icon}>{f.icon}</div>
              <div><div className={styles.featTitle}>{f.title}</div><div className={styles.featSub}>{f.sub}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
