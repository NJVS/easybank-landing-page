import { useState, useEffect } from 'react';
import global from '../../global.module.scss';
import styles from './Navbar.module.scss';
import { ReactComponent as MainLogo } from '../../assets/logos/logo.svg';
import { ReactComponent as LogoFb } from '../../assets/logos/icon-facebook.svg';
import { ReactComponent as LogoYt } from '../../assets/logos/icon-youtube.svg';
import { ReactComponent as LogoInsta } from '../../assets/logos/icon-instagram.svg';
import { ReactComponent as LogoTwit } from '../../assets/logos/icon-twitter.svg';
import { ReactComponent as LogoPint } from '../../assets/logos/icon-pinterest.svg';
import { ReactComponent as IconHome } from '../../assets/icons/house-solid.svg';
import { ReactComponent as IconAbout } from '../../assets/icons/circle-info-solid.svg';
import { ReactComponent as IconContact } from '../../assets/icons/square-phone-solid.svg';
import { ReactComponent as IconBlog } from '../../assets/icons/file-pen-solid.svg';
import { ReactComponent as IconCareers } from '../../assets/icons/briefcase-solid.svg';
import { ReactComponent as IconSupport } from '../../assets/icons/headphones-solid.svg';
import { ReactComponent as IconPrivacy } from '../../assets/icons/shield-halved-solid.svg';

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 734);

  // resize event
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 734);
      setToggled(false);
    });
  }, []);

  // disable scroll
  useEffect(() => {
    document.documentElement.style.overflow = toggled ? 'hidden' : '';
  }, [toggled])

  return (
    <nav className={styles.container}>
      <div className={global.container}>
        {isMobile && (
          <button 
            className={`${styles.nav_toggler} ${toggled ? styles.toggled : ''}`}
            onClick={() => setToggled(!toggled)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <a href="/" className={styles.logo}><MainLogo /></a>
        {!isMobile ? (
          <>
            <ul className={styles.nav_links}>
              <li><a href="/" className={styles.active}>Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Careers</a></li>
            </ul>
            <a href="" className={global.button}>
              <span>Request Invite</span>
            </a>
          </>
        ) : (
          <div className={`${styles.nav_mobile} ${toggled ? styles.toggled : ''}`}>
            <div className={styles.overlay} onClick={() => setToggled(false)}></div>
            <div className={styles.inner}>
              <a href="" className={global.button}>
                <span>Request Invite</span>
              </a>
              <ul className={styles.nav_links_mobile}>
                <li><a href="/" className={styles.active}><IconHome />Home</a></li>
                <li><a href="/"><IconAbout />About</a></li>
                <li><a href="/"><IconContact />Contact</a></li>
                <li><a href="/"><IconBlog />Blog</a></li>
                <li><a href="/"><IconCareers />Careers</a></li>
              </ul>
              <ul className={styles.nav_links_mobile}>
                <li className={styles.nav_title}>Others</li>
                <li><a href="/"><IconSupport />Support</a></li>
                <li><a href="/"><IconPrivacy />Privacy Policy</a></li>
              </ul>
              <div className={styles.nav_footer}>
                <div className={styles.socials}>
                  <a href=""><LogoFb /></a>
                  <a href=""><LogoYt /></a>
                  <a href=""><LogoTwit /></a>
                  <a href=""><LogoPint /></a>
                  <a href=""><LogoInsta /></a>
                </div>
                <p>&copy; Easybacnk. All Rights Reserved</p>
                {/* <p>
                  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                  Coded by <a href="#">lieneil</a>.
                </p> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar