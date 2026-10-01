import Image from 'next/image';
import { GALLERY_ITEMS } from '@/lib/constants';
import styles from './Gallery.module.css';
export default function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className="sectionLabel">Our Portfolio</div>
      <div className="sectionTitle">Craftsmanship in <em>Every Detail</em></div>
      <span className="goldLine" />
      <div className={styles.grid}>
        {GALLERY_ITEMS.map((item, i) => (
          <div key={i} className={styles.item}>
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />
            <div className={styles.overlay}><div className={styles.caption}>{item.caption}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
