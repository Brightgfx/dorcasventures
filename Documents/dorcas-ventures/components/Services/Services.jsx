import { SERVICES } from '@/lib/constants';
import styles from './Services.module.css';
export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="sectionLabel">What We Do</div>
      <div className="sectionTitle">Services We <em>Offer</em></div>
      <span className="goldLine" />
      <div className={styles.grid}>
        {SERVICES.map(s => (
          <div key={s.num} className={styles.item}>
            <div className={styles.num}>{s.num}</div>
            <div><h3 className={styles.title}>{s.title}</h3><p className={styles.desc}>{s.desc}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
