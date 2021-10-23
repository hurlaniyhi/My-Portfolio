import styles from '../styles/About.module.scss'
import Title from '../components/reusable/Title'
import { FiPlay} from "react-icons/fi";

const About = () => {
    return(
        <div className={styles.container}>
           <Title number="01" title="About" />
            <div className={styles.aboutTextWrapper}>
                <div className={styles.textSection}>
                    <p className={styles.aboutText}>Hello! I'm Ridwan // <span className={styles.myAlias}>{ "{alias: 'Rhydhur'}" }</span> 🤓, a software engineer
                        based in Nigeria 🇳🇬.
                    </p>
                    <p className={styles.aboutText}>
                        An algorithm lover with problem-solving skills and proven experience in creating and designing
                        softwares(web and Mobile) in a test driven environment. I have a bachelor's degree
                        in Electrical Engineering (First-class graduate). 
                    </p>
                    <p className={styles.aboutText}>
                        A certified Agile Practitioner and a graduate member of Nigeria Society of Engineers (GMNSE)
                    </p>
                    <p className={styles.aboutText}>I currently work with the following technologies to address problems digitally: </p>
                    <div className={styles.technologies}>
                        <div className={styles.technologiesContainer}>
                            <div className={`${styles.technologiesWrapper}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>JavaScript (ES6+)</p>
                            </div>
                            <div className={`${styles.technologiesWrapper}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>React</p>
                            </div>
                            <div className={`${styles.technologiesWrapper}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>React-Native</p>
                            </div>
                            <div className={`${styles.technologiesWrapper}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>Node.js</p>
                            </div>
                        </div>
                        
                        <div className={styles.technologiesContainer}>
                            <div className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>Vue.js</p>
                            </div>
                            <div className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>HTML & SCSS</p>
                            </div>
                            <div className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>MongoDb & SQL</p>
                            </div>
                            <div className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}>
                                <FiPlay className={styles.technologyIcon} />
                                <p className={styles.technologyText}>C#</p>
                            </div>
                        </div>
                       
                    </div>
                </div> 
                <div className={styles.picsContainer}>
                    <div className={styles.picsWrapper}>
                        {/* <Image src={profilePics} className={styles.pics} layout="fill" /> */}
                    </div>
                    <div className={styles.picsFrame}></div>
                </div>
            </div>
           
        </div>
    )
}

export default About