import type { IconType } from 'react-icons';

/** A link in the top navbar and the mobile side menu. */
export interface NavLink {
  label: string;
  /** Section id to scroll to, e.g. "#about". */
  href: string;
}

/** A social profile shown as an icon (left sidebar and contact section). */
export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

/** One job in the "Where I've worked" section. */
export interface Experience {
  /** Short name shown in the clickable company list (keep it short so it fits on one line). */
  shortName: string;
  /** Full company name shown next to the job title, e.g. "Flutterwave" → "@Flutterwave". */
  company: string;
  /** Company website. Leave out to show the company name without a link. */
  url?: string;
  position: string;
  /** Free text, e.g. "June 2022 - Present". */
  period: string;
  /** Bullet points describing the work done. */
  highlights: string[];
}

/** The AOS scroll animations used on this site. See https://michalsnik.github.io/aos/ */
export type AosAnimation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-right'
  | 'fade-down-right'
  | 'fade-down-left'
  | 'fade-up-right'
  | 'fade-up-left'
  | 'zoom-in';

/** A large project card in the "Some Things I've Built" section. */
export interface FeaturedProject {
  name: string;
  description: string;
  tools: string[];
  url: string;
  /** Path to an image inside the `public` folder, e.g. "/assets/crendly.png". */
  image: string;
  /** Which side of the card the image sits on. The text goes on the other side. */
  imagePosition: 'left' | 'right';
  /**
   * `screenshot` – a wide desktop screenshot.
   * `phone` – a tall mobile mockup (displayed narrower).
   */
  imageType: 'screenshot' | 'phone';
  /** Scroll animation for the card. */
  animation: AosAnimation;
  /** Optional small label above the project name, e.g. "Featured Project". */
  label?: string;
}

/** A small card in the "Other Noteworthy Projects" grid. */
export interface OtherProject {
  name: string;
  description: string;
  tools: string[];
  url: string;
}
