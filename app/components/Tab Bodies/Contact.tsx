import styles from '../../styles/tabMatrix.module.css'
import { motion } from 'framer-motion';

export default function ContactBody({ activeTab, animateBodyText } : { activeTab:string, animateBodyText:any }) {
  const contactBodyStyles = {
    display: activeTab === 'contact' ? 'flex' : 'none',
  }
  return (
    <div className={`${styles.contactBody} ${styles.tabBody}`} style={contactBodyStyles}>
    <div className={`${styles.bodyText} ${styles.contactBodyText}`}>
      <motion.p
        animate={ activeTab === 'contact' ? 'fadeIn' : 'fadeOut'}
        variants={animateBodyText}
        transition={{ duration: 0.2 }}
        className={styles.contactText}
      >
        currently seeking a new opportunity!
      </motion.p>
      <motion.p
        animate={ activeTab === 'contact' ? 'fadeIn' : 'fadeOut'}
        variants={animateBodyText}
        transition={{ duration: 0.2 }}
        className={styles.contactText}
      >
        click any of the logos below to see my work or send me a message.
      </motion.p>
    </div>
    <div className={styles.logosContainer}>
      <a href='https://linkedin.com/in/yaritorresnicola' target='_blank' rel='noreferrer'>
        <motion.img
          animate={ activeTab === 'contact' ? 'fadeIn' : 'fadeOut'}
          variants={animateBodyText}
          transition={{ duration: 0.2 }}
          src='../linkedin-logo.png'
          alt='LinkedIn Logo'
          height={110}
          width={110}
        />
      </a>
      <a href='https://github.com/yaritorres' target='_blank' rel='noreferrer' style={{margin: '0px 20px 0px 20px'}}>
        <motion.img
          animate={ activeTab === 'contact' ? 'fadeIn' : 'fadeOut'}
          variants={animateBodyText}
          transition={{ duration: 0.2 }}
          src='../github logo.png'
          alt='Github Logo'
          height={110}
          width={110}
        />
      </a>
      <a href='mailto:ybtorres9@gmail.com?subject=Awesome New Opportunity'>
        <motion.img
          animate={ activeTab === 'contact' ? 'fadeIn' : 'fadeOut'}
          variants={animateBodyText}
          transition={{ duration: 0.2 }}
          src='../gmail-icon.png'
          alt='Gmail Logo'
          height={115}
          width={115} />
      </a>
    </div>
  </div>
  )
}