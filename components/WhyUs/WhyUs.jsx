import { WHY_US } from '@/lib/constants';
import styles from './WhyUs.module.css';
export default function WhyUs() {
  return (
    <section className={styles.section} id="whyus">
      <div className={styles.label}>Why Choose Us</div>
      <div className={styles.title}>The Dorcas <em>Difference</em></div>
      <span className="goldLine" />
      <p className={styles.sub}>We don't just sell materials — we deliver confidence, quality, and lasting beauty to every project we touch.</p>
      <div className={styles.grid}>
        {WHY_US.map(w => (
          <div key={w.title} className={styles.card}>
            <div className={styles.icon}>{w.icon}</div>
            <h3 className={styles.cardTitle}>{w.title}</h3>
            <p className={styles.cardDesc}>{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
