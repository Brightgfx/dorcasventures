import { SITE } from '@/lib/constants';
import styles from './Contact.module.css';
const INFO = [
  { icon: '📞', label: 'Phone',         val: `${SITE.phone} / ${SITE.phone2}` },
  { icon: '✉️', label: 'Email',         val: SITE.email },
  { icon: '📍', label: 'Location',      val: SITE.address },
  { icon: '⏰', label: 'Working Hours', val: SITE.hours },
];
const SVC = ['POP Cement Supply','Fibre & Gypsum Boards','Ceiling Installation','Design Consultation','Bulk/Project Supply','P.O.P Soap','Other'];
export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.info}>
        <div className="sectionLabel">Contact Us</div>
        <h2 className="sectionTitle">Let's Build Something <em>Beautiful</em></h2>
        <span className="goldLine" />
        <p className="sectionSub" style={{ marginBottom: 28 }}>Ready to transform your space? Get in touch for a free quote or product enquiry.</p>
        {INFO.map(i => (
          <div key={i.label} className={styles.item}>
            <div className={styles.icon}>{i.icon}</div>
            <div><div className={styles.lbl}>{i.label}</div><div className={styles.val}>{i.val}</div></div>
          </div>
        ))}
      </div>
      <div className={styles.form}>
        <h3 className={styles.formTitle}>Request a Free Quote</h3>
        <div className={styles.row}>
          <div className={styles.group}><label>Full Name</label><input type="text" placeholder="Your name" /></div>
          <div className={styles.group}><label>Phone Number</label><input type="tel" placeholder="+233 ..." /></div>
        </div>
        <div className={styles.group}><label>Email Address</label><input type="email" placeholder="your@email.com" /></div>
        <div className={styles.group}><label>Service Required</label><select><option value="">Select a service...</option>{SVC.map(s => <option key={s}>{s}</option>)}</select></div>
        <div className={styles.group}><label>Message</label><textarea placeholder="Tell us about your project..." /></div>
        <button className={styles.btn}>Send Enquiry →</button>
      </div>
    </section>
  );
}
