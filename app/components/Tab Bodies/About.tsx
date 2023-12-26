import styles from '../../styles/tabMatrix.module.css'
import { motion } from 'framer-motion';

export default function AboutBody({ activeTab, animateBodyText } : { activeTab:string, animateBodyText:any }) {
  const aboutBodyStyles = {
    display: activeTab === 'about' ? 'block' : 'none',
  }
  return (
    <div className={`${styles.aboutBody} ${styles.tabBody}`} style={aboutBodyStyles}>
      <motion.img
        animate={ activeTab === 'about' ? 'fadeIn' : 'fadeOut'}
        variants={animateBodyText}
        transition={{ duration: 0.2 }}
        src='../yari.jpeg'
        height={250}
        width={200}
        className={styles.aboutImage}
      />
      <motion.p
        animate={ activeTab === 'about' ? 'fadeIn' : 'fadeOut'}
        variants={animateBodyText}
        transition={{ duration: 0.2 }}
        className={styles.bodyText}
      >
        Hey! My name is Yari Torres Nicola.

        I&apos;m a software engineer.

        I was born in Argentina but have lived in the United States pretty much all my life.
        I&apos;m fluent in both English and Spanish too!

        Let&apos;s see here... a little more about me:

        I used to be an EMT before taking the dive into a bootcamp to learn how to code.
        It was a lot of fun and I miss my cohort mates! They were really awesome.

        I have lots of hobbies, like playing video games, drawing, playing the guitar, and soccer!

        I currently reside in Florida, but I&apos;d definitely like to move out and see more of the country!

        If you have any more questions about me, feel free to contact me via email or LinkedIn!
      </motion.p>
    </div>
  )
}