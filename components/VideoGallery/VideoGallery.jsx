'use client';
import { useEffect, useRef, useState } from 'react';
import { VIDEO_ITEMS } from '@/lib/constants';
import styles from './VideoGallery.module.css';

export default function VideoGallery() {
  const gridRef = useRef(null);
  const refs = useRef([]);
  const [active, setActive] = useState(null);
  const [canHover, setCanHover] = useState(true);
  const [near, setNear] = useState(false);

  // Mouse devices play on hover; touch devices play the card in the middle
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  // Start buffering once the section is about to scroll into view
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setNear(true); io.disconnect(); }
    }, { rootMargin: '800px 0px' });
    io.observe(gridRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (canHover) return;
    const grid = gridRef.current;
    let raf = null;
    const update = () => {
      raf = null;
      const g = grid.getBoundingClientRect();
      const onScreen = g.top < innerHeight * 0.7 && g.bottom > innerHeight * 0.3;
      const mid = g.left + g.width / 2;
      let best = null, bestDist = Infinity;
      refs.current.forEach((v, i) => {
        if (!v) return;
        const r = v.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - mid);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setActive(onScreen ? best : null);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    grid.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      grid.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [canHover]);

  // Only the active clip plays
  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) v.play().catch(() => {});
      else v.pause();
    });
  }, [active]);

  return (
    <section className={styles.videos} id="videos">
      <div className="sectionLabel">Behind the Scenes</div>
      <div className="sectionTitle">See Us <em>in Action</em></div>
      <span className="goldLine" />
      <p className="sectionSub">From our warehouse to your site: watch how we produce, store and deliver quality plaster materials.</p>

      <div ref={gridRef} className={styles.grid}>
        {VIDEO_ITEMS.map((v, i) => (
          <div
            key={v.src}
            className={`${styles.card} ${active === i ? styles.active : ''}`}
            onMouseEnter={canHover ? () => setActive(i) : undefined}
            onMouseLeave={canHover ? () => setActive(null) : undefined}
          >
            <video
              ref={el => (refs.current[i] = el)}
              src={near ? v.src : undefined}
              poster={v.poster}
              preload={canHover || Math.abs(i - (active ?? 0)) <= 1 ? 'auto' : 'metadata'}
              muted
              loop
              playsInline
              disablePictureInPicture
              className={styles.video}
            />
            <div className={styles.cover}>
              <span className={styles.play} />
              <span className={styles.info}>
                <span className={styles.tag}>{v.tag}</span>
                <span className={styles.title}>{v.title}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
