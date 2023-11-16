'use client'
import styles from '../styles/tabMatrix.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TabMatrix() {
  const [activeTab, setActiveTab] = useState('home');
  const homeBodyStyles = {
    display: activeTab === 'home' ? 'flex' : 'none',
  }
  const homeHeaderStyles = {
    borderBottom: activeTab === 'home' ? 'none' : 'black solid 2px',
  }
  const aboutBodyStyles = {
    display: activeTab === 'about' ? 'block' : 'none',
  }
  const aboutHeaderStyles = {
    borderBottom: activeTab === 'about' ? 'none' : 'black solid 2px',
  }
  const contactBodyStyles = {
    display: activeTab === 'contact' ? 'flex' : 'none',
  }
  const contactHeaderStyles = {
    borderBottom: activeTab === 'contact' ? 'none' : 'black solid 2px',
  }

  const animateBodyText = {
    fadeIn: { y: 0, opacity: 100 },
    fadeOut: { y: 50, opacity: 0 }
  }

  const animateTabHeader = {
    fadeColorIn: { backgroundColor: '#439775', borderBottom: 'transparent' },
    fadeColorOut: { backgroundColor: '#485665', borderBottom: 'solid 2px #EDF4ED' }
  }

  return (
    <div className={styles.matrixContainer}>
      { /* HEADERS */ }
      <div className={styles.headerContainer}>
        <motion.div
          animate={ activeTab === 'home' ? 'fadeColorIn' : 'fadeColorOut' }
          variants={animateTabHeader}
          transition={{ duration: 0.2 }}
          className={`${styles.homeHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('home')}
          style={homeHeaderStyles}
        >
          <span>home</span>
        </motion.div>
        <motion.div
          animate={ activeTab === 'about' ? 'fadeColorIn' : 'fadeColorOut' }
          variants={animateTabHeader}
          transition={{ duration: 0.2 }}
          className={`${styles.aboutHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('about')}
          style={aboutHeaderStyles}
        >
          <span>about me</span>
        </motion.div>
        <motion.div
          animate={ activeTab === 'contact' ? 'fadeColorIn' : 'fadeColorOut' }
          variants={animateTabHeader}
          transition={{ duration: 0.2 }}
          className={`${styles.contactHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('contact')}
          style={contactHeaderStyles}
        >
          <span>contact</span>
        </motion.div>
      </div>

      { /* TAB BODIES */ }
      <div
        className={`${styles.homeBody} ${styles.tabBody}`}
        style={homeBodyStyles}
      >
        <div className={styles.bodyText}>
          <motion.p
            animate={ activeTab === 'home' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={styles.homeFirstLine}
          >
            Welcome to my portfolio. It&apos;s a simple page meant to be an intro to me and what I do.
          </motion.p>
          <motion.p
            animate={ activeTab === 'home' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={styles.homeSecondLine}>
            If you want to learn more about me as a person, click the ABOUT tab.
          </motion.p>
          <motion.p
            animate={ activeTab === 'home' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={styles.homeText}>
            Feel free to contact me any time and reach out to me through the CONTACT tab. I am currently open to new opportunities!
          </motion.p>
        </div>
      </div>
      <div
        className={`${styles.aboutBody} ${styles.tabBody}`}
        style={aboutBodyStyles}
      >
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
          All that separates us is an imagined distance.

          Strangers.

          I wonder if you look at me and see a future where we are happy together.

          Lives intertwined. In love.

          And yet, here we are.
          You&apos;re seated next to a window,
          Head held up by your left hand,
          Eyes scanning a quiet sidewalk.

          I sit with my back to the corner,
          Furthest from the entrance.

          I&apos;m curious to know if you catch me stealing glances at you.
          If you steal glances at me.
          If you think of me at all.

          We could be perfect together, you know.
          We could know each other better than anyone.

          Share everything.
          Live and die together.

          I know I&apos;m being foolish, so,
          I leave our life behind when I get up.
        </motion.p>
      </div>
      <div className={`${styles.contactBody} ${styles.tabBody}`} style={contactBodyStyles}>
        <motion.p
          animate={ activeTab === 'contact' ? 'fadeIn' : 'fadeOut'}
          variants={animateBodyText}
          transition={{ duration: 0.2 }}
          className={styles.bodyText}
        >
          contact me!
        </motion.p>
      </div>
    </div>
  )
}