'use client';

import { useEffect, useState } from 'react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import styles from './IntroLoader.module.scss';

/**
 * How long the intro animation stays on screen.
 * The navbar and hero use `data-aos-delay="3000"` so they animate in right after it.
 */
const INTRO_DURATION_MS = 3000;

/** Full-screen animated logo shown for a few seconds when the site first opens. */
export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useBodyScrollLock(isVisible);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), INTRO_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.wrapper}>
      <img src="/assets/logoGif.gif" alt="" className={styles.gif} />
    </div>
  );
}
