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
                    <a href="https://check-d-deck.herokuapp.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
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
                    <a href="https://play.google.com/store/apps/details?id=com.gtbank.appdev.orangetoolboxv1" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
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
                    <a href="https://allcountriesdetails.netlify.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Go Country</p>
                    <p className={styles.aboutProject}>
                        A web application that provides users with countries details and their neighbouring country. search can be done by country search or by continents
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React</p>
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
                    <a href="https://newcoretechnologies.netlify.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
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
                    <a href="https://gtdashboard.herokuapp.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
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
                {/* <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://drive.google.com/file/d/1KRUZLoBuwCXuVtVi5oxua56ho2KLxck0/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Thinklex</p>
                    <p className={styles.aboutProject}>
                        An app for engineering students that contains a scientific calculator, four equations with four unknowns 
                        solver S.I units, prefixes and Engineering formulas and how they are used.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React-Native</p>
                    </div>
                </div> */}
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://play.google.com/store/apps/details?id=com.vanso.gtbankapp" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>GTMobile</p>
                    <p className={styles.aboutProject}>
                        A GTBank mobile app used by customers to carry out all banking activities including account opening, requests and transactions.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>Native</p>
                        <p className={styles.toolName}>Asp.net</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <FiExternalLink className={styles.linkIcon} />
                    <p className={styles.projectName}>Robotics in Banking</p>
                    <p className={styles.aboutProject}>
                        An extensive article on how Robots begin to invade banking industry and how promising the future of Robotic technology is in banking.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>Canva</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://github.com/hurlaniyhi/Unit-Testing-With-Mocha" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>CI/CD with Travic CI</p>
                    <p className={styles.aboutProject}>
                        Implementation of Unit Testing and CI/CD using Node.js, Mocha, and Travis CI
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