import { siteConfig } from '@/data/site';
import { socialLinks } from '@/data/socialLinks';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contacts" className={styles.container}>
      <div className={styles.content}>
        <p className={styles.intro}>
          <span className={styles.number}>04.</span>Wanna reach me?
        </p>
        <h3 className={styles.title}>Get In Touch</h3>
        <p className={styles.text}>
          I am currently open to new job opportunities. If you wanna reach me, be part of your team
          or just say hi, click the button below or send an email to
          <span className={styles.email}> {siteConfig.email}</span> and ~let&apos;s make the world a
          better place to live!
        </p>
        <a className={styles.button} href={`mailto:${siteConfig.email}`}>
          Say Hello
        </a>

        {/* Only shown on small screens, where the fixed social sidebar is hidden */}
        <div className={styles.socialLinks}>
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
              <Icon className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
