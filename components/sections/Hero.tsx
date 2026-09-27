import { siteConfig } from '@/data/site';
import styles from './Hero.module.scss';

/** The full-screen introduction shown at the top of the page. */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/assets/homeills1.png" alt="" className={styles.illustration} />

      <div className={styles.content}>
        <p className={`${styles.greeting} ${styles.resetSpacing} ${styles.bold}`}>Hi, my name is</p>
        <p
          className={styles.name}
          data-aos="fade-right"
          data-aos-delay="3000"
          data-aos-once="true"
          data-aos-duration="1300"
        >
          {siteConfig.ownerName}.
        </p>
        <p className={`${styles.slogan} ${styles.resetSpacing}`}>I use technology to build for humans.</p>
        <p className={styles.greeting}>
          I&apos;m a Fullstack Software Engineer (specializes more on frontend) with over 6 years of
          experience using different tools to build software platforms and applications providing
          solutions to client&apos;s problems digitally.
        </p>
        <p className={styles.greeting}>
          A computer programming enthusiast that loves being challenged while enjoying my journey
          towards making the world a better place through my technological skills in addressing
          problems with both web and mobile software.
        </p>
        <a href={`mailto:${siteConfig.email}`} className={styles.ctaButton}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
