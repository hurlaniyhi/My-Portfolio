import styles from '../styles/OtherWorks.module.scss'
import { FiExternalLink } from "react-icons/fi";

const OtherWorks = () => {
    return(
        <div className={styles.container}>
            <p className={styles.title}>Other Noteworthy Projects</p>
            <p className={styles.description}>Projects &nbsp; | &nbsp; Articles &nbsp; | &nbsp; Open Source</p>
            <div className={styles. projectsWrapper}>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://virtuoussprouts.org" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Virtuous Sprouts</p>
                    <p className={styles.aboutProject}>
                        This is a web application used by Virtuous Sprouts for student registration and result portal
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React</p>
                        <p className={styles.toolName}>Scss</p>
                        <p className={styles.toolName}>Node.Js</p>
                        <p className={styles.toolName}>MongoDb</p>
                    </div>
                    {/* https://check-d-deck.herokuapp.com */}
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
                    <a href="https://app.flutterwave.com/register" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Flutterwave For Business</p>
                    <p className={styles.aboutProject}>This is an application which helps merchants sell online, process payment and grow their business.</p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>Vue</p>
                        <p className={styles.toolName}>Node.js</p>
                        <p className={styles.toolName}>SQL</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://core-ibanking.netlify.app/ssb" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Internet Banking</p>
                    <p className={styles.aboutProject}>
                        A web application with three designs options used by 300+ micro-finance banks' customers to perform financial transactions.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React</p>
                        <p className={styles.toolName}>Typescript</p>
                        <p className={styles.toolName}>Asp.Net</p>
                    </div>
                </div>
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://drive.google.com/file/d/1pRg9vZrelncG5n_0UzjVESI2TWzllaeH/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
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
                    <a href="https://newcoretechnologies.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Newcore Technologies Site</p>
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
                    <a href="https://crendly-admin.netlify.app" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Crendly Admin Panel</p>
                    <p className={styles.aboutProject}>
                        This is an internal web platform for the Crendly app which handles customer support, fraud monitoring, risk underwriting, compliance, audit and control etc.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React</p>
                        <p className={styles.toolName}>Typescript</p>
                        <p className={styles.toolName}>Asp.Net</p>
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
                {/* <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://gtautoresponse.herokuapp.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Auto Email Response</p>
                    <p className={styles.aboutProject}>
                        This is a web application that allows GTBank staff to personalize and send already written mails to developers registered on GTBank developers' portal.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React</p>
                        <p className={styles.toolName}>Scss</p>
                        <p className={styles.toolName}>Node.js</p>
                        <p className={styles.toolName}>MongoDb</p>
                    </div>
                </div> */}
                <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://countrydet.netlify.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    {/* <a href="https://allcountriesdetails.netlify.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a> */}
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
                    
                    <a href="https://drive.google.com/file/d/1Ou9A_r8pxNXpPI2CGzbuGQ1auWXqdaqv/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Robotics in Banking</p>
                    <p className={styles.aboutProject}>
                        An extensive article on how Robots begin to invade banking industry and how promising the future of Robotic technology is in banking.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>Canva</p>
                    </div>
                </div>
                {/* <div className={styles.projectContainer} data-aos='zoom-in'>
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
                </div> */}
                {/* <div className={styles.projectContainer} data-aos='zoom-in'>
                    <img src="/assets/stack.svg" className={styles.stackIcon} />
                    <a href="https://swedbank-personal-loan.netlify.app" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a>
                    <p className={styles.projectName}>Personal Loan</p>
                    <p className={styles.aboutProject}>
                        A SwedBank web app prototype for personal loan application.
                    </p>
                    <div className={styles.projectToolsWrapper}>
                        <p className={styles.toolName}>React.js</p>
                        <p className={styles.toolName}>AOS</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default OtherWorks