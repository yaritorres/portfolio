'use client'
import styles from '../styles/tabMatrix.module.css';
import { useState } from 'react';

export default function TabMatrix() {
  const [activeTab, setActiveTab] = useState('home');
  const homeTabStyles = {
    display: activeTab === 'home' ? 'block' : 'none',
  }
  const aboutTabStyles = {
    display: activeTab === 'about' ? 'block' : 'none',
  }
  const contactTabStyles = {
    display: activeTab === 'contact' ? 'block' : 'none',
  }

  return (
    <div className={styles.matrixContainer}>
      <div className={styles.headerContainer}>
        <div
          className={styles.homeHeader}
          onClick={() => setActiveTab('home')}
          style={{borderBottom: activeTab === 'home' ? 'none' : 'green solid 2px'}}
        >
          <span>home</span>
        </div>
        <div
          className={styles.aboutHeader}
          onClick={() => setActiveTab('about')}
          style={{borderBottom: activeTab === 'about' ? 'none' : 'red solid 2px'}}
        >
          <span>about me</span>
        </div>
        <div
          className={styles.contactHeader}
          onClick={() => setActiveTab('contact')}
          style={{borderBottom: activeTab === 'contact' ? 'none' : 'blue solid 2px'}}
        >
          <span>contact</span>
        </div>
      </div>
      <div className={styles.tabContainer}>
        <div className={styles.homeBody} style={homeTabStyles}>
          <p>hello it me</p>
        </div>
        <div className={styles.aboutBody} style={aboutTabStyles}>
          <p>some info about me</p>
        </div>
        <div className={styles.contactBody} style={contactTabStyles}>
          <p>contact me!</p>
        </div>
      </div>
    </div>
  )
}