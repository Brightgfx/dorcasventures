'use client';
import { useRef, useEffect } from 'react';
import { HERO_IMAGES, HERO_STATS } from '@/lib/constants';
import { useSlider } from '@/hooks/useSlider';
import { useParticles } from '@/hooks/useParticles';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const pbRef = useRef(null);
  const { current, goTo, next, prev } = useSlider(HERO_IMAGES.length, 6500);
  useParticles(canvasRef);
  useEffect(() => {
    const pb = pbRef.current;
    if (!pb) return;
    let ticking = false;
    const fn = () => {
      if (!ticking) { requestAnimationFrame(() => { pb.style.transform = `translateY(${window.scrollY * 0.28}px)`; ticking = false; }); ticking = true; }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <section className={styles.hero} id="home">
      <div ref={pbRef} className={styles.parallax} />
      {HERO_IMAGES.map((img, i) => (
        <div key={img.src} className={`${styles.slide} ${i === current ? styles.active : ''}`} style={{ backgroundImage: `url(${img.src})` }} />
      ))}
      <div className={styles.overlay} />
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.shimmer} />
      <div className={styles.content}>
        <div className={styles.badge}>Ghana's Premium Plastering Specialists</div>
        <p className={styles.eyebrow}>Dorcas Ventures</p>
        <h1 className={styles.h1}>Building Excellence<br /><em>Wall by Wall</em></h1>
        <p className={styles.sub}>Premium POP ceilings, fibre materials & plastering solutions trusted by homeowners and contractors across Ghana.</p>
        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get a Free Quote</button>
          <button className={styles.btnOutline} onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>View Our Work</button>
        </div>
      </div>
      <button className={styles.arrowPrev} onClick={prev}>&#8592;</button>
      <button className={styles.arrowNext} onClick={next}>&#8594;</button>
      <div className={styles.dots}>
        {HERO_IMAGES.map((_, i) => (
          <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
      <div className={styles.scrollHint}>Scroll</div>
      <div className={styles.stats}>
        {HERO_STATS.map(s => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLbl}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
