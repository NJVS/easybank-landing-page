import global from '../../../global.module.scss';
import styles from './Overview.module.scss';
import { ReactComponent as IconOnline } from '../../../assets/icons/icon-online.svg';
import { ReactComponent as IconBudget } from '../../../assets/icons/icon-budgeting.svg';
import { ReactComponent as IconOnboard } from '../../../assets/icons/icon-onboarding.svg';
import { ReactComponent as IconApi } from '../../../assets/icons/icon-api.svg';

const data = [
  {
    icon: <IconOnline />,
    title: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    icon: <IconBudget />,
    title: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
  },
  {
    icon: <IconOnboard />,
    title: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
  },
  {
    icon: <IconApi />,
    title: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
  }
]

const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={global.container}>
        <div className={styles.header}>
          <h2 className={global.heading}>Why choose Easybank?</h2>
          <p className={`${global.paragraph} ${global.lg}`}>
            We leverage Open Banking to turn your bank account into your financial
            hub. Control your finances like never before.
          </p>
        </div>
        <div className={styles.body}>
          {data.map(item => (
            <OverviewItem key={item.title} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

const OverviewItem = ({ data }) => {
  const { icon, title, desc } = data;

  return (
    <div className={styles.item}>
      <div className={styles.item_header}>
        {icon}
        <h3 className={global.heading}>{title}</h3>
      </div>
      <div className={styles.item_body}>
        <p className={global.paragraph}>{desc}</p>
      </div>
    </div>
  )
}

export default Overview