import global from '../../../global.module.scss';
import styles from './Articles.module.scss';
import img_currency from '../../../assets/images/image-currency.jpg';
import img_restaurant from '../../../assets/images/image-restaurant.jpg';
import img_plane from '../../../assets/images/image-plane.jpg';
import img_confetti from '../../../assets/images/image-confetti.jpg';

const data = [
  {
    id: 1,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    img_src: img_currency,
    img_alt: "currency"
  },
  {
    id: 2,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    img_src: img_restaurant,
    img_alt: "restaurant"
  },
  {
    id: 3,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    img_src: img_plane,
    img_alt: "plane"
  },
  {
    id: 4,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    img_src: img_confetti,
    img_alt: "confetti"
  }
]

const Articles = () => {

  return (
    <section className={styles.container}>
      <div className={global.container}>
        <div className={styles.header}>
          <h2 className={global.heading}>Latest Articles</h2>
        </div>
        <div className={styles.body}>
          {data.map(item => (
            <Article key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Article = ({ data }) => {
  const { author, title, desc, img_src, img_alt } = data;

  return (
    <article className={styles.item}>
      <div className={styles.item_header}>
        <img src={img_src} alt={img_alt} />
      </div>
      <div className={styles.item_body}>
        <p className={`${global.paragraph} ${global.sm}`}>By <b>{author}</b></p>
        <a href="/" className={global.heading}>{title}</a>
        <p className={`${global.paragraph} ${global.sm}`}>{desc}</p>
      </div>
    </article>
  )
}

export default Articles