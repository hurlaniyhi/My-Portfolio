'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Starts the AOS (Animate On Scroll) library once the page loads in the browser.
 * Any element with a `data-aos="..."` attribute will then animate into view.
 */
export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      easing: 'linear',
    });
  }, []);

  return null;
}
