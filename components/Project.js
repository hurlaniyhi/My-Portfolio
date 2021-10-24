import Image from 'next/image'
import styles from '../styles/Project.module.scss'
import Title from '../components/reusable/Title'
// import vsprout from '../assets/vsprout.png'
// import managerApp from '../assets/managerApp.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return(
        <div className={styles.container}>
            <Title number="03" title="Some Things I've Built" />

            <div className={styles.projectWrapper}>
                <div className={styles.projectInfoLeft}>
                    <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textLeft}`}>Virtuous Sprouts Portal</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectLeft}>
                            <p className={styles.aboutProjectTextLeft}>A platform for purchasing Gift cards that span across the eCommerce, Travel and Premium services.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                    </div>
                    <FaExternalLinkAlt className={styles.linkIconLeft} />
                </div>
                <div className={styles.projectImageRight}>
                    <img src="/assets/vsprout.png" className={styles.projectImage} />
                    <div className={styles.overlay}></div>
                </div>
            </div>

            <div className={`${styles.projectWrapper} ${styles.projectWrapperReverse}`}>
                <div className={styles.projectImageLeft}>
                    <img src="/assets/managerApp.png" className={styles.projectImage} />
                    <div className={styles.overlay}></div>
                </div>
                <div className={styles.projectInfoRight}>
                    <p className={`${styles.projectText} ${styles.textRight}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textRight}`}>Real Estate Staff App</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectRight}>
                            <p className={styles.aboutProjectTextRight}>A platform for purchasing Gift cards that span across the eCommerce, Travel and Premium services.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                    </div>
                    <FaExternalLinkAlt className={styles.linkIconRight} />
                </div>
            </div>

            <div className={styles.projectWrapper}>
                <div className={styles.projectInfoLeft}>
                    <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textLeft}`}>Virtuous Sprouts Portal</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectLeft}>
                            <p className={styles.aboutProjectTextLeft}>A platform for purchasing Gift cards that span across the eCommerce, Travel and Premium services.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                    </div>
                    <FaExternalLinkAlt className={styles.linkIconLeft} />
                </div>
                <div className={styles.projectImageRight}>
                    <img src="/assets/emulator1.png" className={styles.emulatorImageRight} />
                    {/* <div className={styles.overlay}></div> */}
                </div>
            </div>

            <div className={`${styles.projectWrapper} ${styles.projectWrapperReverse}`}>
                <div className={styles.projectImageLeft}>
                    <img src="/assets/emulator1.png" className={styles.emulatorImageLeft} />
                    {/* <div className={styles.overlay}></div> */}
                </div>
                <div className={styles.projectInfoRight}>
                    <p className={`${styles.projectText} ${styles.textRight}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textRight}`}>Real Estate Staff App</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectRight}>
                            <p className={styles.aboutProjectTextRight}>A platform for purchasing Gift cards that span across the eCommerce, Travel and Premium services.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                    </div>
                    <FaExternalLinkAlt className={styles.linkIconRight} />
                </div>
            </div>

        </div>
    )
}

export default Projects