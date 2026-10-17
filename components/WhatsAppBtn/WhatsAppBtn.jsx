import Image from 'next/image';
import { SITE } from '@/lib/constants';
import styles from './WhatsAppBtn.module.css';
export default function WhatsAppBtn() {
  return (
    <a className={styles.btn} href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
      <Image src="/images/whatsapp.png" alt="WhatsApp" width={56} height={56} />
    </a>
  );
}
