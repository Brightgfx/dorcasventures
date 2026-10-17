'use client';
import { useRef, useState } from 'react';
import { VIDEO_ITEMS } from '@/lib/constants';
import styles from './VideoGallery.module.css';

export default function VideoGallery() {
  const refs = useRef([]);
  const [playing, setPlaying] = useState(null);

  // Only one clip plays at a time
  const play = i => {
    refs.current.forEach((v, j) => { if (v && j !== i) v.pause(); });
    refs.current[i]?.play();
  };

  return (
    <section className={styles.videos} id="videos">
      <div className="sectionLabel">Behind the Scenes</div>
      <div className="sectionTitle">See Us <em>in Action</em></div>
      <span className="goldLine" />
      <p className="sectionSub">From our warehouse to your site: watch how we produce, store and deliver quality plaster materials.</p>

      <div className={styles.grid}>
        {VIDEO_ITEMS.map((v, i) => (
          <div key={v.src} className={`${styles.card} ${playing === i ? styles.active : ''}`}>
            <video
              ref={el => (refs.current[i] = el)}
              src={v.src}
              poster={v.poster}
              preload="none"
              playsInline
              controls={playing === i}
              onPlay={() => setPlaying(i)}
              onEnded={() => setPlaying(null)}
              className={styles.video}
            />
            {playing !== i && (
              <button className={styles.cover} onClick={() => play(i)} aria-label={`Play ${v.title}`}>
                <span className={styles.play} />
                <span className={styles.info}>
                  <span className={styles.tag}>{v.tag}</span>
                  <span className={styles.title}>{v.title}</span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
