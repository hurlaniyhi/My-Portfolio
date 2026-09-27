import { useEffect } from 'react';

/**
 * Stops the page from scrolling while `isLocked` is true
 * (e.g. while the intro animation plays or the mobile menu is open).
 * Scrolling is restored automatically when `isLocked` becomes false or the component unmounts.
 */
export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
}
