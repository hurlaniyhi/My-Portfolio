import styles from '../styles/OtherWorks.module.scss'
import { FiExternalLink } from "react-icons/fi";

const OtherWorks = () => {
    return(
        <div className={styles.container}>
            <p className={styles.title}>Other Noteworthy Projects</p>
            <p className={styles.description}>Side Projects &nbsp; | &nbsp; Articles &nbsp; | &nbsp; Open Source</p>

            <div className={styles. projectsWrapper}>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Staff Manager App</p>
                    <p className={styles.aboutProject}>
                        This is a web application used by HR/Admin to manage their company departments, Staff, 
                        activities, documents e.t.c.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React</p>
                        <p className={styles.toolName}>Node</p>
                        <p className={styles.toolName}>MongoDb</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Orange Tool Box</p>
                    <p className={styles.aboutProject}>This is a mobile app used by the GTBank's staff majorly marketers to ease banking and solving customers' issues outside the bank</p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>Ionic Angular</p>
                        <p className={styles.toolName}>Asp.Net</p>
                        <p className={styles.toolName}>SQL</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Email-service Platform</p>
                    <p className={styles.aboutProject}>
                        This is a web application that allows GTBank staff to personalize and send already written mails to developers registered on GTBank developers' portal.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React.js</p>
                        <p className={styles.toolName}>Node.js</p>
                        <p className={styles.toolName}>MongoDb</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>GT Server Monitor</p>
                    <p className={styles.aboutProject}>
                        This is an internal web app for monitoring servers with auto-notification and server uptime and downtime analysis.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React.js</p>
                        <p className={styles.toolName}>Node.js</p>
                        <p className={styles.toolName}>MongoDb</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Rymz</p>
                    <p className={styles.aboutProject}>
                        This is a rhyme mobile app built for children for learning the English letters
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React-Native</p>
                        <p className={styles.toolName}>Node.js</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Newcore technologies Site</p>
                    <p className={styles.aboutProject}>
                        This is an online website for Newcore Technologies Ltd.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React</p>
                        <p className={styles.toolName}>AOS</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Thinklex</p>
                    <p className={styles.aboutProject}>
                        This is an online website for Newcore Technologies Ltd.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React-Native</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Robotics in Banking</p>
                    <p className={styles.aboutProject}>
                        This is an internal web app for monitoring servers with auto-notification and server uptime and downtime analysis.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>Canva</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>CI/CD with Travic CI</p>
                    <p className={styles.aboutProject}>
                        Implementation of Unit Testing with and CI/CD using Node.js, Mocha, and Travis CI
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>Node.js</p>
                        <p className={styles.toolName}>Mocha</p>
                        <p className={styles.toolName}>Travis CI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherWorks