import styles from '../../styles/tabMatrix.module.css';
import projectStyles from '../../styles/Tab Body Styles/projects.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ProjectsBody({ activeTab, animateBodyText }) {
  const projectsBodyStyles = {
    display: activeTab === 'projects' ? 'flex' : 'none',
  }
  const [show, setShow] = useState('hide');

  return (
    <div className={`${styles.projectsBody} ${styles.tabBody}`} style={projectsBodyStyles}>
      <div className={`${styles.bodyText} ${styles.projectsImageContainer}`}>
        <div className={projectStyles.labeledImageContainer}>
          <motion.img
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={projectStyles.projectImage}
            src='../../royalepage.gif'
            height={200}
            width={250}
          />
          <label> royale </label>
        </div>
        <div className={projectStyles.labeledImageContainer}>
          <motion.img
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={projectStyles.projectImage}
            src='../../duguid.gif'
            height={200}
            width={250}
          />
          <label> duguid construction </label>
        </div>
        <div className={projectStyles.labeledImageContainer}>
          <motion.img
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={projectStyles.projectImage}
            src='../../loaderio_testing.png'
            height={200}
            width={250}
          />
          <label> atelier </label>
        </div>
      </div>
    </div>
  )
}