import {Linking} from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import styles from '../styles/Contact.module.scss'

const Contact = () => {
    return(
        <div id="contacts" className={styles.container}>
            <div className={styles.contactWrapper}>
                <p className={styles.introText}><span className={styles.number}>04.</span>Wanna reach me?</p>
                <h3 className={styles.contactTitle}>Get In Touch</h3>
                <p className={styles.contactText}>
                    I am currently open to new job opportunities. If you wanna reach me, be part of your team or just say hi, click the button below or send an email to <span className={styles.developer}> olaniyi.jibola152@gmail.com</span> and ~let's make the world a better place to live!
                </p>
                <a className={styles.contactNavBtn} href='mailto:olaniyi.jibola152@gmail.com'>Say Hello</a>
                <div className={styles.contactLinks}>
                    <a href="https://www.facebook.com/hurlaniyhi/" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.contactLinkIcons} /></a>
                    <a href="https://www.instagram.com/hurlaniyhi/" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.contactLinkIcons} /></a>
                    <a href="https://www.linkedin.com/in/ridwan-kolawole-7b4931184/?originalSubdomain=ng" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.contactLinkIcons} /></a>
                    <a href="https://github.com/hurlaniyhi" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.contactLinkIcons} /></a>
                    <a href="https://twitter.com/MisterJS" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.contactLinkIcons} /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact