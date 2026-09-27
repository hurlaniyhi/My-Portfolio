'use client';

import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { useIsChrome } from '@/hooks/useIsChrome';
import { formatListNumber } from '@/lib/formatListNumber';
import styles from './Navbar.module.scss';

/** Fixed top bar with the logo, section links and resume button (desktop / tablet). */
export default function Navbar() {
  // The animated logo mask is not shown in Chrome, only in other browsers.
  const showAnimatedLogo = !useIsChrome();

  return (
    <div className={styles.navbar}>
      {showAnimatedLogo && <div className={styles.animatedLogo} />}

      <p
        className={styles.logo}
        data-aos="zoom-in"
        data-aos-delay="3000"
        data-aos-once="true"
        data-aos-duration="1300"
      >
        <span className={styles.logoFirstPart}>Rhy</span>
        <span className={styles.logoSecondPart}>dhur</span>
      </p>

      <nav
        className={styles.navItems}
        data-aos="zoom-in"
        data-aos-delay="3000"
        data-aos-once="true"
        data-aos-duration="1300"
      >
        {navLinks.map((link, index) => (
          <a key={link.href} href={link.href} className={styles.navItem}>
            <span className={styles.number}>{formatListNumber(index)}</span>
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          Resume
        </a>
      </nav>
    </div>
  );
}
