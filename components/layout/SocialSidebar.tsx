import { socialLinks } from '@/data/socialLinks';
import styles from './Sidebars.module.scss';

/** Social icons fixed to the bottom-left of the screen (hidden on small screens). */
export default function SocialSidebar() {
  return (
    <div className={styles.socialSidebar}>
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
          <Icon className={styles.socialIcon} />
        </a>
      ))}
      <div className={styles.verticalLine} />
    </div>
  );
}
