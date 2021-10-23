import styles from '../styles/Experience.module.scss'
import Title from '../components/reusable/Title'
import { FiPlay} from "react-icons/fi";

const Experience = () => {
    return(
        <div className={styles.container}>
             <Title number="02" title="Where I've worked" />
             <div className={styles.workWrapper}>
                 <div className={styles.companyContainer}>
                    <div className={styles.verticalLine}></div>
                     <p className={styles.companies}>GTBank Ltd</p>
                     <p className={styles.companies}>GTB (Fintech)</p>
                     <p className={styles.companies}>Newcore Tech.</p>
                     <p className={styles.companies}>Freelance</p>
                     <p className={styles.companies}>TCN</p>
                 </div>
                 <div className={styles.workDetails}>
                     <p className={styles.roleText}> Software Engineer <span className={styles.companyName}>@Guaranty Trust Ltd</span></p>
                     <p className={styles.workDate}>2018 - 2020</p>
                     <div className={`${styles.technologiesWrapper}`}>
                        <FiPlay className={styles.technologyIcon} />
                        <p className={styles.technologyText}>
                            Design the Fullstack and algorithm curriculums.
                        </p>
                    </div>
                    <div className={`${styles.technologiesWrapper}`}>
                        <FiPlay className={styles.technologyIcon} />
                        <p className={styles.technologyText}>
                            Supervise other facilitators and ensure no student is left out irrespective of their learning pace and individual differences.
                        </p>
                    </div>
                    <div className={`${styles.technologiesWrapper}`}>
                        <FiPlay className={styles.technologyIcon} />
                        <p className={styles.technologyText}>
                            Perform logistical support duties which include booking and organizing sessions, processing payments and maintaining records & resources.
                        </p>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default Experience