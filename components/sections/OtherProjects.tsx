import { FiExternalLink } from 'react-icons/fi';
import { otherProjects } from '@/data/otherProjects';
import type { OtherProject } from '@/types/portfolio';
import styles from './OtherProjects.module.scss';

export default function OtherProjects() {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Other Noteworthy Projects</p>
      <p className={styles.subtitle}>Projects &nbsp; | &nbsp; Articles &nbsp; | &nbsp; Open Source</p>

      <div className={styles.grid}>
        {otherProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: OtherProject }) {
  return (
    <div className={styles.card} data-aos="zoom-in">
      <img src="/assets/stack.svg" alt="" className={styles.stackIcon} />
      <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
        <FiExternalLink className={styles.linkIcon} />
      </a>

      <p className={styles.name}>{project.name}</p>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.tools}>
        {project.tools.map((tool) => (
          <p key={tool} className={styles.tool}>
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
