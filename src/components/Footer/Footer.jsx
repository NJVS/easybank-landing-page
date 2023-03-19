import global from '../../global.module.scss';
import styles from './Footer.module.scss';
import { ReactComponent as MainLogo } from '../../assets/logos/logo.svg';
import { ReactComponent as LogoFb } from '../../assets/logos/icon-facebook.svg';
import { ReactComponent as LogoYt } from '../../assets/logos/icon-youtube.svg';
import { ReactComponent as LogoInsta } from '../../assets/logos/icon-instagram.svg';
import { ReactComponent as LogoTwit } from '../../assets/logos/icon-twitter.svg';
import { ReactComponent as LogoPint } from '../../assets/logos/icon-pinterest.svg';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={global.container}>
        <div className={styles.logos}>
          <a href="/" className={styles.logo}><MainLogo /></a>
          <ul className={styles.socials}>
            <li><a href="/"><LogoFb /></a></li>
            <li><a href="/"><LogoYt /></a></li>
            <li><a href="/"><LogoTwit /></a></li>
            <li><a href="/"><LogoPint /></a></li>
            <li><a href="/"><LogoInsta /></a></li>
          </ul>
        </div>
        <ul className={styles.nav_links}>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Support</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>
        <div className={styles.attr}>
          <a href="" className={`${global.button} ${global.sm}`}>
            <span>Request Invite</span>
          </a>
          <p>&copy; Easybacnk. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer