'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_LINKS, SITE } from '@/lib/constants';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#home" className={styles.brand}>
          <Image src="/images/logo.png" alt={SITE.name} width={50} height={50} className={styles.logo} />
          <div>
            <div className={styles.name}>{SITE.name}</div>
            <div className={styles.slogan}>{SITE.slogan}</div>
          </div>
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map(l => <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>)}
          <a href="#contact" className={styles.cta}>Get Quote</a>
        </div>
        <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`${styles.mobile} ${open ? styles.open : ''}`}>
        {NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Get a Free Quote →</a>
      </div>
    </>
  );
}
