import { TICKER_ITEMS } from '@/lib/constants';
import styles from './Ticker.module.css';
export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {doubled.map((item, i) => <div key={i} className={styles.item}><span>✦</span> {item}</div>)}
      </div>
    </div>
  );
}
