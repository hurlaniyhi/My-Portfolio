import {useState} from 'react'
import styles from '../styles/Experience.module.scss'
import Title from '../components/reusable/Title'
import { FiPlay} from "react-icons/fi";
import experienceProvider from '../provider/experienceProvider'

const Experience = () => {

    let initialExperienceState = {exp1: "#e492f5", exp2: "#e492f5", exp3: "#e492f5", exp4: "#e492f5", exp5: "#e492f5", exp6: "#e492f5", exp7: "#e492f5", exp8: "#e492f5"}
    const [index, setIndex] = useState(0)
    const [levelBar, setLevelBar] = useState('0.9rem')
    const [experience, setExperience] = useState(initialExperienceState)

    function handleExperience(index, barHeight, experienceNo){
        setIndex(index)
        setLevelBar(barHeight)
        setExperience({...initialExperienceState, [experienceNo]: "#F0C4F8"})
    }

    let experienceWorks = experienceProvider[index].workDone.map(data => {
        return(
            <div>
                <div className={`${styles.technologiesWrapper}`}>
                    <div><FiPlay className={styles.pointIcon} /></div>
                    <p className={styles.technologyText}>
                       {data}
                    </p>
                </div>
            </div>
        )
    })

    let allExperienceWorks = experienceProvider.map(data =>{
        return(
            <div className={styles.workWrapperMobile}>
                <div className={styles.workDetailsMobile}>
                    <p className={styles.roleText}> {data.position} <a href={`${data.link}`} target="_blank" rel="noopener noreferrer"  className={styles.companyName}>{data.organization}</a></p>
                    <p className={styles.workDate}>{data.date}</p>
                    
                    {
                        data.workDone.map(work=>{
                            return(
                                <div>
                                    <div className={`${styles.technologiesWrapper}`}>
                                        <div><FiPlay className={styles.pointIcon} /></div>
                                        <p className={styles.technologyText}>
                                            {work}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    })

    return(
        <div id="experience" className={styles.container} data-aos='fade-up' data-aos-once={true} data-aos-easing="ease-in-out" data-aos-duration="1200">
             <Title number="02" title="Where I've worked" />
             <div className={styles.workWrapper}>
                 <div className={styles.companyContainer}>
                    <div className={styles.verticalLine}>
                        <div className={styles.levelBar} style={{top: levelBar}}></div>
                    </div>
                    <p className={styles.companies} style={{color: experience.exp1}} onClick={()=> handleExperience(0, '0.9rem', 'exp1')}>Flutterwave</p>
                    <p className={styles.companies} style={{color: experience.exp2}} onClick={()=> handleExperience(1, '4.4rem', 'exp2')}>Appzone</p>
                    <p className={styles.companies} style={{color: experience.exp3}} onClick={()=> handleExperience(2, '7.8rem', 'exp3')}>Humexid</p>
                    <p className={styles.companies} style={{color: experience.exp4}} onClick={()=> handleExperience(3, '11.2rem', 'exp4')}>Access Bank Plc</p>
                    <p className={styles.companies} style={{color: experience.exp5}} onClick={()=> handleExperience(4, '14.7rem', 'exp5')}>GTBank Ltd</p>
                    <p className={styles.companies} style={{color: experience.exp6}} onClick={()=> handleExperience(5, '18.4rem', 'exp6')}>VSProuts</p>
                    <p className={styles.companies} style={{color: experience.exp7}} onClick={()=> handleExperience(6, '22.1rem', 'exp7')}>Newcore Tech.</p>
                 </div>
                 <div className={styles.workDetails}>
                     <p className={styles.roleText}> {experienceProvider[index].position} <a href={`${experienceProvider[index].link}`} target="_blank" rel="noopener noreferrer" className={styles.companyName}>{experienceProvider[index].organization}</a></p>
                     <p className={styles.workDate}>{experienceProvider[index].date}</p>
                     {experienceWorks}
                 </div>
            </div>

                {/* ======================Experience on Phone Screens========================== */}

            {allExperienceWorks}
        </div>
    )
}

export default Experience