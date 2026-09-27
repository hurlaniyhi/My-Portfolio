import { FiExternalLink } from 'react-icons/fi';
import type { FeaturedProject } from '@/types/portfolio';
import styles from './FeaturedProjects.module.scss';

// Class names for the text column. The text always sits on the opposite side to the image.
const textClasses = {
  left: {
    column: styles.infoLeft,
    align: styles.textLeft,
    descriptionBox: styles.descriptionBoxLeft,
    description: styles.descriptionTextLeft,
    link: styles.linkIconLeft,
  },
  right: {
    column: styles.infoRight,
    align: styles.textRight,
    descriptionBox: styles.descriptionBoxRight,
    description: styles.descriptionTextRight,
    link: styles.linkIconRight,
  },
};

// Class names for the image, depending on its type and which side it sits on.
const imageClasses = {
  screenshot: {
    left: { wrapper: styles.screenshotWrapperLeft, image: styles.screenshot },
    right: { wrapper: styles.screenshotWrapperRight, image: styles.screenshot },
  },
  phone: {
    left: { wrapper: styles.phoneWrapperLeft, image: styles.phoneImageLeft },
    right: { wrapper: styles.phoneWrapperRight, image: styles.phoneImageRight },
  },
};

/** A large project card with an image on one side and details on the other. */
export default function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const isImageLeft = project.imagePosition === 'left';
  const text = textClasses[isImageLeft ? 'right' : 'left'];
  const image = imageClasses[project.imageType][project.imagePosition];

  const imageColumn = (
    <div className={image.wrapper}>
      <img src={project.image} alt={`${project.name} preview`} className={image.image} />
    </div>
  );

  const textColumn = (
    <div className={text.column}>
      {project.label && <p className={`${styles.label} ${text.align}`}>{project.label}</p>}
      <p className={`${styles.name} ${text.align}`}>{project.name}</p>

      <div className={styles.descriptionWrapper}>
        <div className={text.descriptionBox}>
          <p className={text.description}>{project.description}</p>
        </div>
      </div>

      <div className={styles.tools}>
        {project.tools.map((tool) => (
          <p key={tool} className={styles.tool}>
            {tool}
          </p>
        ))}
      </div>

      <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
        <FiExternalLink className={text.link} />
      </a>
    </div>
  );

  return (
    <div
      className={isImageLeft ? `${styles.card} ${styles.cardReverse}` : styles.card}
      data-aos={project.animation}
      data-aos-once="true"
    >
      {isImageLeft ? imageColumn : textColumn}
      {isImageLeft ? textColumn : imageColumn}
    </div>
  );
}
