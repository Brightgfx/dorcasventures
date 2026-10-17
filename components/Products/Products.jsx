import Image from 'next/image';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section className={styles.products} id="products">
      <div className="sectionLabel">Our Products</div>
      <div className="sectionTitle">Materials Built for <em>Excellence</em></div>
      <span className="goldLine" />

      {PRODUCT_CATEGORIES.map(cat => (
        <div key={cat.category}>
          <div className={styles.categoryLabel}>{cat.category}</div>
          <div className={styles.grid}>
            {cat.items.map(p => (
              <div key={p.title} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.body}>
                  <div className={styles.tag}>{p.tag}</div>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
