import SectionTitle from '@/components/ui/SectionTitle';
import { featuredProjects } from '@/data/featuredProjects';
import FeaturedProjectCard from './FeaturedProjectCard';
import styles from './FeaturedProjects.module.scss';

export default function FeaturedProjects() {
  return (
    <section id="projects" className={styles.container}>
      <SectionTitle number="03" title="Some Things I've Built" />

      {featuredProjects.map((project) => (
        <FeaturedProjectCard key={project.name} project={project} />
      ))}
    </section>
  );
}
