import { siteConfig } from '@/data/site';
import styles from './Sidebars.module.scss';

/** Vertical email address fixed to the bottom-right of the screen (hidden on small screens). */
export default function EmailSidebar() {
  return (
    <div className={styles.emailSidebar}>
      <p className={styles.emailText}>{siteConfig.email}</p>
      <div className={styles.verticalLine} />
    </div>
  );
}
