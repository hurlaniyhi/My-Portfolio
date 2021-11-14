import {useEffect, useState} from 'react'
import Head from 'next/head'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub} from "react-icons/fa";
import About from '../components/About'
import Experience from '../components/Experience'
import Project from '../components/Project'
import OtherWorks from '../components/OtherWorks'
import Contact from '../components/Contact'
//import Skills from '../components/Skills'
import styles from '../styles/Home.module.scss'

export default function Home() {

  //=============== Intial video ============
  useEffect(() =>{
    document.body.style.overflow = "hidden"
    setTimeout(() =>{
      document.getElementById("video").style.display = "none"
      document.body.style.overflow = "auto"
    }, 3000)
  }, [])
//==============================================

  function handleNavigation(){
    console.log(document.getElementById("navi-toggle").checked)
    document.getElementById("navi-toggle").checked = false
    document.body.style.overflow = "auto"
  }

  const handleScroll = () => {
    console.log("Ok")
    if(document.getElementById("navi-toggle").checked === true){
      document.body.style.overflow = "hidden"
    }
    else{
      document.getElementById("navi-toggle").checked = false
      document.body.style.overflow = "auto"
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Ridwan's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.video_wrapper} id="video">
        <video className={styles.video} loop={false} autoPlay={true} muted={true}>
          <source src="/assets/logovideo.mp4" type="video/mp4" />
          Your video is not supported
        </video>
      </div>
      <div className={styles.navbar_container}>
        <p className={styles.myLogo}> 
          {/* <span className={styles.letterR}>R</span>
          <span className={styles.letterH}>h</span>
          <span className={styles.letterY}>y</span>
          <span className={styles.letterD}>d</span>
          <span className={styles.letterh}>h</span>
          <span className={styles.letterU}>u</span>
          <span className={styles.letterr}>r</span> */}
           <span className={styles.letter_one}>Rhy</span>
           <span className={styles.letter_two}>dhur</span>
        </p>
        <div className={styles.nav_item_container}>
            <a href="#about" className={styles.nav_item} name="about"><span className={styles.numbers}>01.</span>About</a>
            <a href="#experience" className={styles.nav_item} name="projects"><span className={styles.numbers}>02.</span>Experience</a>
            <a href="#projects" className={styles.nav_item} name="FAQ"><span className={styles.numbers}>03.</span>Projects</a>
            <a href="#contacts" className={styles.nav_item} name="contacts"><span className={styles.numbers}>04.</span>Contact</a>
            <a href="https://drive.google.com/file/d/1AuzYNYmo1wz3-yJhKQ9QKhWxv0k-YCqy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>Resume</a>
        </div>
      </div>

      <input type="checkbox" class={styles["navigation__checkbox"]} id="navi-toggle" onChange={handleScroll} />
      <label for="navi-toggle" class={styles["navigation__button"]}>
          <span class={styles["navigation__icon"]}>&nbsp;</span>
      </label>
      <div className={styles["navigation__side-bar-wrapper"]} onClick={handleScroll}>
      </div>
      <div className={styles["side-bar-container"]}>
          <a href="#about" className={styles["side-bar-items"]} onClick={()=>handleNavigation()} name="about="><span className={styles.sideNumbers}>01.</span>About</a>
          <a href="#experience" className={styles["side-bar-items"]} onClick={()=>handleNavigation()} name="experience"><span className={styles.sideNumbers}>02.</span>Experience</a>
          <a href="#projects" className={styles["side-bar-items"]} onClick={()=>handleNavigation()} name="projects"><span className={styles.sideNumbers}>03.</span>Projects</a>
          <a href="#contacts" className={styles["side-bar-items"]} onClick={()=>handleNavigation()} name="contacts"><span className={styles.sideNumbers}>04.</span>Contact</a>
          <a href="https://drive.google.com/file/d/1AuzYNYmo1wz3-yJhKQ9QKhWxv0k-YCqy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn2}>Resume</a>
        </div>


      <div className={styles.introSection}>
        <img src="/assets/homeills1.png" className={styles.homeIllustrator} />
        <div className={styles.introSectionWrapper}>
          <p className={`${styles.greeting} ${styles.resetPadding} ${styles.addFontWeight}`}>Hi, my name is</p>
          <p className={styles.myName} data-aos='fade-right' data-aos-delay='3000' data-aos-once={true} data-aos-duration="1300">Ridwan Kolawole.</p>
          <p className={`${styles.slogan} ${styles.resetPadding}`}>I use technology to build for humans.</p>
          <p className={styles.greeting}>
            I'm a Frontend Software engineer with over 4 years of experience using different tools to build software platforms and applications providing solutions to 
            client's problems digitally.
          </p>
          <p className={styles.greeting}>
            A computer programming enthusiast that loves being challenged while enjoying my journey towards making the world a betters place through my technological skills in addressing problems
            with both web and mobile softwares.
          </p>
          <a href='mailto:olaniyi.jibola152@gmail.com' className={styles.navBtn}>Get in touch</a>
        </div>
      </div>

      <div className={styles.contentSection}>
        <About />
        <Experience />
        <Project />
        <OtherWorks />
        <Contact />
        {/* <Skills /> */}

        <p className={styles.footerText}>
          Design inspired by Brittany Chiang's portfolio. Redesigned and built by 
          <span className={styles.developer}> Ridwan Kolawole</span>.
        </p>
      </div>

      <div className={styles.contactWrapper}>
      <a href="https://www.facebook.com/hurlaniyhi/" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.linkIcons} /></a>
      <a href="https://www.instagram.com/hurlaniyhi/" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.linkIcons} /></a>
      <a href="https://www.linkedin.com/in/ridwan-kolawole-7b4931184/?originalSubdomain=ng" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.linkIcons} /></a>
      <a href="https://twitter.com/MisterJS" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.linkIcons} /></a>
      <a href="https://github.com/hurlaniyhi" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.linkIcons} /></a>
        <div className={styles.verticalLine}></div>
      </div>
      <div className={styles.emailWrapper}>
        <p className={styles.emailText}>olaniyi.jibola152@gmail.com</p>
        <div className={styles.verticalLine}></div>
      </div>
    </div>
  )
}
