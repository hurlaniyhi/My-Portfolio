import type { NavLink } from '@/types/portfolio';

/**
 * Links shown in the navbar and mobile menu.
 * Each `href` must match the `id` of a section on the page.
 * Numbers ("01.", "02." …) are added automatically from the order below.
 */
export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contacts' },
];
