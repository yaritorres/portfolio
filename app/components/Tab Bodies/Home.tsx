import styles from '../../styles/tabMatrix.module.css'
import { motion } from 'framer-motion';

export default function HomeBody({ activeTab, animateBodyText }) {
  const homeBodyStyles = {
    display: activeTab === 'home' ? 'flex' : 'none',
  }
  return (
    <div className={`${styles.homeBody} ${styles.tabBody}`} style={homeBodyStyles}>
      <div className={styles.bodyText}>
        <motion.p
          animate={ activeTab === 'home' ? 'fadeIn' : 'fadeOut'}
          variants={animateBodyText}
          transition={{ duration: 0.2 }}
          className={styles.homeTextWithMargin}
        >
          Welcome to my portfolio. It&apos;s a simple page meant to be an intro to me and what I do.
        </motion.p>
        <motion.p
          animate={ activeTab === 'home' ? 'fadeIn' : 'fadeOut'}
          variants={animateBodyText}
          transition={{ duration: 0.2 }}
          className={styles.homeTextWithMargin}>
          If you want to learn more about me as a person, click the ABOUT tab.
        </motion.p>
        <motion.p
          animate={ activeTab === 'home' ? 'fadeIn' : 'fadeOut'}
          variants={animateBodyText}
          transition={{ duration: 0.2 }}
          className={styles.homeText}>
          Feel free to reach out to me through the CONTACT tab.
        </motion.p>
      </div>
    </div>
  )
}