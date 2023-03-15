import { useState, useEffect } from 'react';
import global from '../../global.module.scss';
import styles from './Navbar.module.scss';
import { ReactComponent as MainLogo } from '../../assets/logos/logo.svg';
import { ReactComponent as MainLogoOnly } from '../../assets/logos/logo_only.svg';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 734);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 734);
    });
  }, [])

  return (
    <nav className={styles.container}>
      <div className={global.container}>
        {isMobile && (
          <button className={styles.nav_toggler}>
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
          <ul className={styles.nav_links_mobile}>
            <li><a href="/" className={styles.active}>Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Careers</a></li>
              <hr />
              <li><a href="/">Support</a></li>
              <li><a href="/">Privacy Policy</a></li>
          </ul>
          
        )}
      </div>
    </nav>
  )
}

export default Navbar