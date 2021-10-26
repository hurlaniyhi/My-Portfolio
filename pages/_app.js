import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  useEffect(() =>{
    AOS.init({
      duration: 800,
      delay: 100,
      easing: 'linear'
    })
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
