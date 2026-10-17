'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CEO_DATA } from '@/lib/constants';
import styles from './CEO.module.css';
export default function CEO() {
  const [active, setActive] = useState(0);
  const { name, title, bio1, bio2, quote, stats, imgs } = CEO_DATA;
  return (
    <section className={styles.section} id="ceo">
      <div className={styles.inner}>
        <div className={styles.imgWrap}>
          {imgs.map((img, i) => (
            <div key={img.src} className={`${styles.photo} ${i === active ? styles.photoActive : ''}`}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          ))}
          <div className={styles.ring} />
          <div className={styles.badge}>Founder &amp; CEO</div>
          <div className={styles.thumbs}>
            {imgs.map((img, i) => (
              <button key={img.src} className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`} onClick={() => setActive(i)}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </button>
            ))}
          </div>
        </div>
        <div className={styles.text}>
          <div className="sectionLabel">Leadership</div>
          <h2 className="sectionTitle">Meet <em>{name}</em></h2>
          <div className={styles.titleLine}>{title}</div>
          <span className="goldLine" />
          <p className="sectionSub" style={{ marginBottom: 14 }}>{bio1}</p>
          <p className="sectionSub">{bio2}</p>
          <blockquote className={styles.quote}>{quote}</blockquote>
          <div className={styles.stats}>
            {stats.map(s => <div key={s.label} className={styles.stat}><span className={styles.statNum}>{s.num}</span><span className={styles.statLbl}>{s.label}</span></div>)}
          </div>
          <div className={styles.dots}>
            {imgs.map((_, i) => <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => setActive(i)} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
