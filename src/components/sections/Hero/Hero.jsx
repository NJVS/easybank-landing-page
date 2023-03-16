import global from '../../../global.module.scss';
import styles from './Hero.module.scss';
import bgDesktop from '../../../assets/images/bg-intro-desktop.svg'
import bgMobile from '../../../assets/images/bg-intro-mobile.svg'
import mockup from '../../../assets/images/image-mockups.png';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={global.container}>
        <figure className={styles.illustration}>
          <picture className={styles.background}>
            <source media='(max-width: 734px)' srcSet={bgMobile} />
            <img src={bgDesktop} alt="hero background illustration" />
          </picture>
          <picture className={styles.mockup}>
            <img src={mockup} alt="easybank mobile app mockup" />
          </picture>
        </figure>
        <article className={styles.content}>
          <h1 className={global.heading}>Next generation digital banking</h1>
          <p className={`${global.paragraph} ${global.lg}`}>
            Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.
          </p>
          <a href="/" className={global.button}>
            <span>Request Invite</span>
          </a>
        </article>
      </div>
    </section>
  )
}

export default Hero