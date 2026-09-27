'use client';

import { useState } from 'react';
import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { formatListNumber } from '@/lib/formatListNumber';
import styles from './MobileMenu.module.scss';

/** Hamburger button and slide-in side menu for small screens. */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useBodyScrollLock(isOpen);

  const closeMenu = () => setIsOpen(false);

  // NOTE: The SCSS shows/hides the menu with `.checkbox:checked ~ ...` selectors,
  // so these four elements must stay siblings, in this exact order.
  return (
    <>
      <input
        type="checkbox"
        id="navi-toggle"
        className={styles.checkbox}
        checked={isOpen}
        onChange={(event) => setIsOpen(event.target.checked)}
      />
      <label htmlFor="navi-toggle" className={styles.menuButton} aria-label="Toggle navigation menu">
        <span className={styles.menuIcon}>&nbsp;</span>
      </label>

      <div className={styles.backdrop} />

      <nav className={styles.sidebar}>
        {navLinks.map((link, index) => (
          <a key={link.href} href={link.href} className={styles.sidebarLink} onClick={closeMenu}>
            <span className={styles.sidebarNumber}>{formatListNumber(index)}</span>
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
    </>
  );
}
