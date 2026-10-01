import Image from 'next/image';
import { SITE, NAV_LINKS, FOOTER_PRODUCTS } from '@/lib/constants';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Image src="/images/logo.png" alt={SITE.name} width={52} height={52} className={styles.logo} />
          <p className={styles.tagline}>Ghana's premier supplier of premium plastering and ceiling materials. Quality you can see, durability you can trust.</p>
          <div className={styles.social}>
            {['f','in','W','𝕏'].map((s,i) => <a key={i} href="#" className={styles.socialLink}>{s}</a>)}
          </div>
        </div>
        <div className={styles.col}><h4>Quick Links</h4><ul>{NAV_LINKS.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}<li><a href="#contact">Contact</a></li></ul></div>
        <div className={styles.col}><h4>Products</h4><ul>{FOOTER_PRODUCTS.map(p => <li key={p}><a href="#">{p}</a></li>)}</ul></div>
        <div className={styles.col}>
          <h4>Newsletter</h4>
          <p className={styles.nlText}>Get updates on new products and special offers.</p>
          <div className={styles.nlForm}><input type="email" placeholder="Your email" /><button>Go</button></div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2025 {SITE.name}. All rights reserved.</span>
        <span>{SITE.slogan} 🏠</span>
      </div>
    </footer>
  );
}
