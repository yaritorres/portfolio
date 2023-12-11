/* eslint-disable @next/next/no-img-element */
'use client'
import styles from '../styles/tabMatrix.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactBody from './Tab Bodies/Contact';
import AboutBody from './Tab Bodies/About';
import HomeBody from './Tab Bodies/Home';
import ProjectsBody from './Tab Bodies/Projects';
import { act } from 'react-dom/test-utils';

export default function TabMatrix() {
  const [activeTab, setActiveTab] = useState('home');
  const homeHeaderStyles = {
    borderBottom: activeTab === 'home' ? 'none' : 'black solid 2px',
  }
  const aboutHeaderStyles = {
    borderBottom: activeTab === 'about' ? 'none' : 'black solid 2px',
  }
  const contactHeaderStyles = {
    borderBottom: activeTab === 'contact' ? 'none' : 'black solid 2px',
  }
  const projectsHeaderStyles = {
    borderBottom: activeTab === 'projects' ? 'none' : 'black solid 2px',
  }

  const animateBodyText = {
    fadeIn: { y: 0, opacity: 100 },
    fadeOut: { y: 50, opacity: 0 }
  }

  const animateHomeHeader = {
    fadeColorIn: { backgroundColor: '#20A39E', borderBottom: 'transparent' },
    fadeColorOut: { backgroundColor: '#20A39E', borderBottom: 'solid 2px #EDF4ED' }
  }

  const animateAboutHeader = {
    fadeColorIn: { backgroundColor: '#EF5B5B', borderBottom: 'transparent' },
    fadeColorOut: { backgroundColor: '#EF5B5B', borderBottom: 'solid 2px #EDF4ED' }
  }

  const animateContactHeader = {
    fadeColorIn: { backgroundColor: '#F78735', borderBottom: 'transparent' },
    fadeColorOut: { backgroundColor: '#F78735', borderBottom: 'solid 2px #EDF4ED' }
  }

  const animateProjectsHeader = {
    fadeColorIn: { backgroundColor: '#FFB30F', borderBottom: 'transparent' },
    fadeColorOut: { backgroundColor: '#FFB30F', borderBottom: 'solid 2px #EDF4ED' }
  }

  return (
    <div className={styles.matrixContainer}>
      { /* HEADERS */ }
      <div className={styles.headerContainer}>
        <motion.div
          animate={ activeTab === 'home' ? 'fadeColorIn' : 'fadeColorOut' }
          variants={animateHomeHeader}
          transition={{ duration: 0.2 }}
          className={`${styles.homeHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('home')}
          style={homeHeaderStyles}
        >
          <span>home</span>
        </motion.div>
        <motion.div
          animate={ activeTab === 'about' ? 'fadeColorIn' : 'fadeColorOut' }
          variants={animateAboutHeader}
          transition={{ duration: 0.2 }}
          className={`${styles.aboutHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('about')}
          style={aboutHeaderStyles}
        >
          <span>about me</span>
        </motion.div>
        <motion.div
          animate={ activeTab === 'contact' ? 'fadeColorIn' : 'fadeColorOut' }
          variants={animateContactHeader}
          transition={{ duration: 0.2 }}
          className={`${styles.contactHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('contact')}
          style={contactHeaderStyles}
        >
          <span>contact</span>
        </motion.div>
        <motion.div
          animate={ activeTab === 'projects' ? 'fadeColorIn' : 'fadeColorOut' }
          variants={animateProjectsHeader}
          transition={{ duration: 0.2 }}
          className={`${styles.projectsHeader} ${styles.tabHeader}`}
          onClick={() => setActiveTab('projects')}
          style={projectsHeaderStyles}
        >
          <span>projects</span>
        </motion.div>
      </div>

      { /* TAB BODIES */ }

      <HomeBody activeTab={activeTab} animateBodyText={animateBodyText} />
      <AboutBody activeTab={activeTab} animateBodyText={animateBodyText} />
      <ContactBody activeTab={activeTab} animateBodyText={animateBodyText} />
      <ProjectsBody activeTab={activeTab} animateBodyText={animateBodyText} />
    </div>
  )
}