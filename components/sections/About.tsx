import { FiPlay } from 'react-icons/fi';
import SectionTitle from '@/components/ui/SectionTitle';
import { siteConfig } from '@/data/site';
import { technologyColumns } from '@/data/technologies';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <SectionTitle number="01" title="About" />

      <div className={styles.aboutWrapper}>
        <div
          className={styles.textSection}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
        >
          <p className={styles.aboutText}>
            Hello! I&apos;m Ridwan //{' '}
            <span className={styles.alias}>{`{alias: '${siteConfig.alias}'}`}</span> 🤓, a software
            engineer based in Nigeria 🇳🇬.
          </p>
          <p className={styles.aboutText}>
            An algorithm lover with problem-solving skills and proven experience in creating and
            designing software in a test driven environment. I have a bachelor&apos;s degree in
            Electrical Engineering (First-class graduate).
          </p>
          <p className={styles.aboutText}>
            A certified Agile Practitioner and a graduate member of Nigeria Society of Engineers
            (GMNSE)
          </p>
          <p className={styles.aboutText}>
            I currently work with the following technologies to address problems digitally:
          </p>

          <div className={styles.technologies}>
            {technologyColumns.map((column, columnIndex) => (
              <div key={columnIndex} className={styles.technologyColumn}>
                {column.map((technology) => (
                  <div key={technology} className={styles.technology}>
                    <FiPlay className={styles.technologyIcon} />
                    <p className={styles.technologyText}>{technology}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.photoContainer}
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
        >
          {/* The frame must come right after the photo: hovering the photo moves the frame (see SCSS). */}
          <div className={styles.photo} />
          <div className={styles.photoFrame} />
        </div>
      </div>
    </section>
  );
}
