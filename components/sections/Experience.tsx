'use client';

import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/experiences';
import type { Experience as ExperienceItem } from '@/types/portfolio';
import styles from './Experience.module.scss';

// Each company in the list takes up 3.5rem (2.1rem line height + 1.4rem gap).
// The highlight bar starts 0.9rem from the top so it lines up with the first company.
const COMPANY_ROW_HEIGHT_REM = 3.5;
const HIGHLIGHT_BAR_OFFSET_REM = 0.9;

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];
  const highlightBarTop = HIGHLIGHT_BAR_OFFSET_REM + activeIndex * COMPANY_ROW_HEIGHT_REM;

  return (
    <section
      id="experience"
      className={styles.container}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      data-aos-duration="1200"
    >
      <SectionTitle number="02" title="Where I've worked" />

      {/* Desktop: clickable company list on the left, selected job on the right */}
      <div className={styles.desktopLayout}>
        <div className={styles.companyList}>
          <div className={styles.verticalLine}>
            <div className={styles.highlightBar} style={{ top: `${highlightBarTop}rem` }} />
          </div>

          {experiences.map((experience, index) => {
            const isActive = index === activeIndex;
            return (
              <p
                key={experience.company}
                className={isActive ? `${styles.company} ${styles.companyActive}` : styles.company}
              >
                <button
                  type="button"
                  className={styles.companyButton}
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                >
                  {experience.shortName}
                </button>
              </p>
            );
          })}
        </div>

        <div className={styles.details}>
          <ExperienceDetails experience={activeExperience} />
        </div>
      </div>

      {/* Mobile: every job shown as a card, one after another */}
      {experiences.map((experience) => (
        <div key={experience.company} className={styles.mobileCard}>
          <ExperienceDetails experience={experience} />
        </div>
      ))}
    </section>
  );
}

/** Job title, company, dates and bullet points for a single job. */
function ExperienceDetails({ experience }: { experience: ExperienceItem }) {
  return (
    <>
      <p className={styles.role}>
        {experience.position}{' '}
        {experience.url ? (
          <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyName}
          >
            @{experience.company}
          </a>
        ) : (
          <span className={styles.companyName}>@{experience.company}</span>
        )}
      </p>
      <p className={styles.period}>{experience.period}</p>

      {experience.highlights.map((highlight) => (
        <div key={highlight} className={styles.highlight}>
          <div>
            <FiPlay className={styles.bulletIcon} />
          </div>
          <p className={styles.highlightText}>{highlight}</p>
        </div>
      ))}
    </>
  );
}
