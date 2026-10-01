'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Ambassador.module.css';

const PHOTOS = [
  { src: '/images/ambassador1.jpg', alt: 'Kwame Gyedu — Brand Ambassador' },
  { src: '/images/ambassador2.jpg', alt: 'Kwame Gyedu — Fist pump' },
  { src: '/images/ambassador3.jpg', alt: 'Kwame Gyedu — Thumbs up' },
];

export default function Ambassador() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="ambassador">
      <div className={styles.inner}>

        <div className={styles.text}>
          <div className="sectionLabel">Brand Ambassador</div>
          <h2 className="sectionTitle">Meet <em>Kwame Gyedu</em></h2>
          <div className={styles.titleLine}>Award-Winning Music Minister</div>
          <span className="goldLine" />
          <p className="sectionSub" style={{ marginBottom: 14 }}>
            Dorcas Ventures is proud to partner with Kwame Gyedu — celebrated
            music minister and award-winning Gospel artist — as our official
            Brand Ambassador.
          </p>
          <p className="sectionSub">
            His passion for excellence, integrity, and uplifting communities
            mirrors the very values we build our brand on. Together, we are
            committed to raising the standard — in homes, in art, and in life.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>🎵 Music Minister</span>
            <span className={styles.tag}>🏆 Award-Winning Artist</span>
            <span className={styles.tag}>🤝 Brand Ambassador</span>
          </div>
          <div className={styles.dots}>
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.photoWrap}>
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className={`${styles.photo} ${i === active ? styles.photoActive : ''}`}
            >
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          ))}
          <div className={styles.ring} />
          <div className={styles.badge}>Official Ambassador</div>
          <div className={styles.thumbs}>
            {PHOTOS.map((p, i) => (
              <button
                key={p.src}
                className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                onClick={() => setActive(i)}
              >
                <Image src={p.src} alt="" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
