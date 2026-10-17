import { TESTIMONIALS } from '@/lib/constants';
import styles from './Testimonials.module.css';
export default function Testimonials() {
  return (
    <section className={styles.section} id="reviews">
      <div className="sectionLabel">Client Reviews</div>
      <div className="sectionTitle">What Our Clients <em>Say</em></div>
      <span className="goldLine" />
      <div className={styles.grid}>
        {TESTIMONIALS.map(t => (
          <div key={t.name} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>"{t.quote}"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div><div className={styles.name}>{t.name}</div><div className={styles.role}>{t.role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
