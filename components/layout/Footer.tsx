import { siteConfig } from '@/data/site';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <p className={styles.text}>
        Design inspired by Brittany Chiang&apos;s portfolio. Redesigned and built by
        <span className={styles.highlight}> {siteConfig.ownerName}</span>.
      </p>
    </footer>
  );
}
