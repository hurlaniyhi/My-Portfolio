import EmailSidebar from '@/components/layout/EmailSidebar';
import Footer from '@/components/layout/Footer';
import IntroLoader from '@/components/layout/IntroLoader';
import MobileMenu from '@/components/layout/MobileMenu';
import Navbar from '@/components/layout/Navbar';
import SocialSidebar from '@/components/layout/SocialSidebar';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Hero from '@/components/sections/Hero';
import OtherProjects from '@/components/sections/OtherProjects';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <IntroLoader />
      <Navbar />
      <MobileMenu />

      {/* The hero fills the first screen; the content below slides over it as you scroll. */}
      <Hero />
      <main className={styles.content}>
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
        <Footer />
      </main>

      <SocialSidebar />
      <EmailSidebar />
    </div>
  );
}
