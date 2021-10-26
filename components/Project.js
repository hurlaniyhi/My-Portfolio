import Image from 'next/image'
import styles from '../styles/Project.module.scss'
import Title from '../components/reusable/Title'
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    return(
        <div className={styles.container}>
            <Title number="03" title="Some Things I've Built" />

            <div className={styles.projectWrapper} data-aos='fade-down-right' data-aos-once={true}>
                <div className={styles.projectInfoLeft}>
                    <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textLeft}`}>Virtuous Sprouts Portal</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectLeft}>
                            <p className={styles.aboutProjectTextLeft}>Virtuous Sprouts Portal is a web app used by Virtuous Sprouts Academy for Student registration, Result upload. e.t.c with the student, teacher and admin dashboard.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                    </div>
                    <FiExternalLink className={styles.linkIconLeft} />
                </div>
                <div className={styles.projectImageRight}>
                    <img src="/assets/vsprout.png" className={styles.projectImage} />
                    <div className={styles.overlay}></div>
                </div>
            </div>

            <div className={`${styles.projectWrapper} ${styles.projectWrapperReverse}`} data-aos='fade-down-left' data-aos-once={true}>
                <div className={styles.projectImageLeft}>
                    <img src="/assets/email-platform2.png" className={styles.projectImage} />
                    <div className={styles.overlay}></div>
                </div>
                <div className={styles.projectInfoRight}>
                    <p className={`${styles.projectText} ${styles.textRight}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textRight}`}>Email-Service Platform</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectRight}>
                            <p className={styles.aboutProjectTextRight}>This is a web application that allows GTBank staff to personalize and send already written mails to developers registered on GTBank developers' portal.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                    </div>
                    <FiExternalLink className={styles.linkIconRight} />
                </div>
            </div>

            <div className={styles.projectWrapper} data-aos='fade-up-right' data-aos-once={true}>
                <div className={styles.projectInfoLeft}>
                    <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textLeft}`}>GTWorld</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectLeft}>
                            <p className={styles.aboutProjectTextLeft}>GTWorld is one of GTBank mobile apps used by customers to carry out all banking activities including account opening and transactions.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>Ionic Angular</p>
                        <p className={styles.toolText}>Asp.net</p>
                        <p className={styles.toolText}>SQL</p>
                    </div>
                    <FiExternalLink className={styles.linkIconLeft} />
                </div>
                <div className={styles.projectImageRight}>
                    <img src="/assets/emulator1.png" className={styles.emulatorImageRight} />
                    {/* <div className={styles.overlay}></div> */}
                </div>
            </div>

            <div className={`${styles.projectWrapper} ${styles.projectWrapperReverse}`} data-aos='fade-up-left' data-aos-once={true}>
                <div className={styles.projectImageLeft}>
                    <img src="/assets/emulator1.png" className={styles.emulatorImageLeft} />
                    {/* <div className={styles.overlay}></div> */}
                </div>
                <div className={styles.projectInfoRight}>
                    <p className={`${styles.projectText} ${styles.textRight}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textRight}`}>Shopwyse</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectRight}>
                            <p className={styles.aboutProjectTextRight}>Shopwyse is an e-commerce mobile app that makes buying and selling easy for both sellers and buyers. It has in-app call and chat features.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React-Native</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                        <p className={styles.toolText}>Socket.io</p>
                    </div>
                    <FiExternalLink className={styles.linkIconRight} />
                </div>
            </div>

        </div>
    )
}

export default Projects