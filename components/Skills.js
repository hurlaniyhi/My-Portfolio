import {useEffect} from 'react'
import Title from '../components/reusable/Title'
import skillsIllustrator from '../assets/illustrator.png'
import styles from '../styles/Skills.module.scss'

const Skills = () => {
    let [webDesign, electronics, networking, consultancy] = ["95%", "74%", "90%", "65%"]

    useEffect(()=>{
        const callback = function(entries){
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    console.log({ratio: entry.intersectionRatio})
                    if(entry.intersectionRatio >= 0){
                        alert("yes")
                        document.querySelector(".bar1").classList.add("show-level1")
                        document.querySelector(".bar2").classList.add("show-level2")
                        document.querySelector(".bar3").classList.add("show-level3")
                        document.querySelector(".bar4").classList.add("show-level4")
                    }
                }
                else{
                    document.querySelector(".bar1").classList.remove("show-level1")
                    document.querySelector(".bar2").classList.remove("show-level2")
                    document.querySelector(".bar3").classList.remove("show-level3")
                    document.querySelector(".bar4").classList.remove("show-level4")
                }
            })
        }

        let observer = new IntersectionObserver(callback)
        const target = document.querySelectorAll(".level-on-view")
        console.log(target)
        target.forEach(target=>{
            observer.observe(target)
        })

        return () => {
            observer = null;
        };
    })
    return(
        <div className={styles.container}>
            <Title number="02" title="Skills" />

            <div className={styles["skills-container"]}>
                <img src="/assets/ill5.svg" className={styles["skills-illustrator"]}/>
                <div className={styles["skills-texts"]} data-aos='fade-up-left' data-aos-once={true}>
                    <div className={styles["skills-levels-wrapper"]}>
                        <span className={styles["skills-level-text"]}>App design / Develompent <i className={styles["level-val"]}>{webDesign}</i></span>
                        <div className={styles["level-bar-wrapper"]}>
                            <div className={styles["level-bar bar1"]} style={{width: webDesign}}></div>
                        </div>
                    </div>
                    <div className={styles["skills-levels-wrapper"]}>
                        <span className={styles["skills-level-text"]}>Electronics / Solar power <i className={styles["level-val"]}>{electronics}</i></span>
                        <div className={styles["level-bar-wrapper"]}>
                            <div className={styles["level-bar bar2"]} style={{width: electronics}}></div>
                        </div>
                    </div>
                    <div className={styles["skills-levels-wrapper"]}>
                        <span className={styles["skills-level-text"]}>Networking <i className={styles["level-val"]}>{networking}</i></span>
                        <div className={styles["level-bar-wrapper"]}>
                            <div className={styles["level-bar bar3"]} style={{width: networking}}></div>
                        </div>
                    </div>
                    <div className={styles["skills-levels-wrapper level-on-view"]}>
                        <span className={styles["skills-level-text"]}>Digital Security / IT Consultancy <i className={styles["level-val"]}>{consultancy}</i></span>
                        <div className={styles["level-bar-wrapper"]}>
                            <div className={styles["level-bar bar4"]} style={{width: consultancy}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills