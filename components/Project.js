import styles from '../styles/Project.module.scss'
import Title from '../components/reusable/Title'
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    return(
        <div id="projects" className={styles.container}>
            <Title number="03" title="Some Things I've Built" />

            <div className={styles.projectWrapper} data-aos='fade-down-right' data-aos-once={true}>
                <div className={styles.projectInfoLeft}>
                    {/* <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p> */}
                    <p className={`${styles.projectName} ${styles.textLeft}`}>Crendly</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectLeft}>
                            <p className={styles.aboutProjectTextLeft}>A platform for social lending. it brings lenders and borrowers together to make lending easier while also handling the processing, payment and disbursement</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>Typescript</p>
                        <p className={styles.toolText}>Styled-Component</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Asp.net</p>
                    </div>
                    <a href="https://crendly.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIconLeft} /></a>
                </div>
                <div className={styles.projectImageRight}>
                    {/* <img src="/assets/vsprout3.png" className={styles.projectImage} /> */}
                    {/* <div className={styles.overlay}></div> */}
                    {/* https://virtuous-sprout.herokuapp.com */}
                </div>
            </div>

            <div className={`${styles.projectWrapper} ${styles.projectWrapperReverse}`} data-aos='fade-down-left' data-aos-once={true}>
                <div className={styles.projectImageLeft}>
                    {/* <img src="/assets/email-platform2.png" className={styles.projectImage} /> */}
                    {/* <div className={styles.overlay}></div> */}
                </div>
                <div className={styles.projectInfoRight}>
                    <p className={`${styles.projectText} ${styles.textRight}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textRight}`}>Primus Plus</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectRight}>
                            <p className={styles.aboutProjectTextRight}>A fully integrated, secure web-based platform designed to provide Access bank corporate clients with a one-point access to banking solutions via an intuitive user interface.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>React.js</p>
                        <p className={styles.toolText}>SCSS</p>
                        <p className={styles.toolText}>Node.js</p>
                        <p className={styles.toolText}>MongoDb</p>
                    </div>
                    <a href="https://www.accessbankplc.com/primus/index.html" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIconRight} /></a>
                </div>
            </div>

            <div className={styles.projectWrapper} data-aos='fade-up-right' data-aos-once={true}>
                <div className={styles.projectInfoLeft}>
                    <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p>
                    <p className={`${styles.projectName} ${styles.textLeft}`}>GTWorld</p>
                    <div className={styles.aboutProjectWrapper}>
                        <div className={styles.aboutProjectLeft}>
                            <p className={styles.aboutProjectTextLeft}>GTWorld is one of GTBank mobile apps used by customers to carry out all banking activities including account opening, requests and transactions.</p>
                        </div>
                    </div>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolText}>Ionic-Angular</p>
                        <p className={styles.toolText}>Asp.net</p>
                        <p className={styles.toolText}>SQL</p>
                    </div>
                    <a href="https://play.google.com/store/search?q=gtword&c=apps" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIconLeft} /></a>
                </div>
                <div className={styles.altprojectImageRight}>
                    <img src="/assets/canva2.png" className={styles.emulatorImageRight} />
                    {/* <div className={styles.overlay}></div> */}
                </div>
            </div>

            <div className={`${styles.projectWrapper} ${styles.projectWrapperReverse}`} data-aos='fade-up-left' data-aos-once={true}>
                <div className={styles.altprojectImageLeft}>
                    <img src="/assets/canva1.png" className={styles.emulatorImageLeft} />
                    {/* <div className={styles.overlay}></div> */}
                </div>
                <div className={styles.projectInfoRight}>
                    {/* <p className={`${styles.projectText} ${styles.textRight}`}>Featured Project</p> */}
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
                    <a href="https://drive.google.com/file/d/1pPEbomgDKJRmQxgpCkrtM4sKOkzQtz4X/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIconRight} /></a>
                </div>
            </div>

        </div>
    )
}

export default Projects