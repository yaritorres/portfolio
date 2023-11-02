'use client'
import styles from '../styles/tabMatrix.module.css';
import { useState } from 'react';

export default function TabMatrix() {
  const [activeTab, setActiveTab] = useState('home');
  const homeBodyStyles = {
    display: activeTab === 'home' ? 'flex' : 'none',
    backgroundColor: activeTab === 'home' ? '#7765E3' : '#C8ADC0',
  }
  const homeHeaderStyles = {
    borderBottom: activeTab === 'home' ? 'none' : 'black solid 2px',
    backgroundColor: activeTab === 'home' ? '#7765E3' : '#C8ADC0',
  }
  const aboutBodyStyles = {
    display: activeTab === 'about' ? 'block' : 'none',
    backgroundColor: activeTab === 'about' ? '#7765E3' : '#C8ADC0',
  }
  const aboutHeaderStyles = {
    borderBottom: activeTab === 'about' ? 'none' : 'black solid 2px',
    backgroundColor: activeTab === 'about' ? '#7765E3' : '#C8ADC0',
  }
  const contactBodyStyles = {
    display: activeTab === 'contact' ? 'flex' : 'none',
    backgroundColor: activeTab === 'contact' ? '#7765E3' : '#C8ADC0',
  }
  const contactHeaderStyles = {
    borderBottom: activeTab === 'contact' ? 'none' : 'black solid 2px',
    backgroundColor: activeTab === 'contact' ? '#7765E3' : '#C8ADC0',
  }

  return (
    <div className={styles.matrixContainer}>
      <div className={styles.headerContainer}>
        <div
          className={`${styles.homeHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('home')}
          style={homeHeaderStyles}
        >
          <span>home</span>
        </div>
        <div
          className={`${styles.aboutHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('about')}
          style={aboutHeaderStyles}
        >
          <span>about me</span>
        </div>
        <div
          className={`${styles.contactHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('contact')}
          style={contactHeaderStyles}
        >
          <span>contact</span>
        </div>
      </div>
      <div className={styles.tabsContainer}>
        <div className={`${styles.homeBody} ${styles.tabBody}`} style={homeBodyStyles}>
          <p className={styles.bodyText}> we're home baybee </p>
        </div>
        <div className={`${styles.aboutBody} ${styles.tabBody}`} style={aboutBodyStyles}>
          <img src='../yari.jpeg' height={250} width={200} className={styles.aboutImage} />
          <p className={styles.bodyText}>
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
          </p>
        </div>
        <div className={`${styles.contactBody} ${styles.tabBody}`} style={contactBodyStyles}>
          <p className={styles.bodyText}> contact me! </p>
        </div>
      </div>
    </div>
  )
}