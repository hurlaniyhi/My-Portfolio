import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import styles from '../styles/Contact.module.scss'

const Contact = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contactWrapper}>
                <p className={styles.introText}><span className={styles.number}>04.</span>Wanna reach me?</p>
                <h3 className={styles.contactTitle}>Get In Touch</h3>
                <p className={styles.contactText}>
                    I am currently open to new job opportunities. If you wanna reach me, be part of your team or just say hi, click the button below or send an email to <span className={styles.developer}> olaniyi.jibola152@gmail.com</span> and ~let's make the world a better place to live!
                </p>
                <a className={styles.contactNavBtn}>Say Hello</a>
                <div className={styles.contactLinks}>
                    <FaFacebook className={styles.contactLinkIcons} />
                    <FaInstagram className={styles.contactLinkIcons} />
                    <FaLinkedin className={styles.contactLinkIcons} />
                    <FaGithub className={styles.contactLinkIcons} />
                    <FaTwitter className={styles.contactLinkIcons} />
                </div>
            </div>
        </div>
    )
}

export default Contact