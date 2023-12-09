import styles from '../../styles/tabMatrix.module.css';
import projectStyles from '../../styles/Tab Body Styles/projects.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import DuguidModal from './ProjectsTabModals/DuguidModal';

export default function ProjectsBody({ activeTab, animateBodyText }) {
  const projectsBodyStyles = {
    display: activeTab === 'projects' ? 'flex' : 'none',
  }
  const [duguidShow, setDuguidShow] = useState(false);

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
          <motion.label
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
          >
            royale
          </motion.label>
        </div>
        <div className={projectStyles.labeledImageContainer} onClick={() => { setDuguidShow(true) }}>
          <motion.img
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={projectStyles.projectImage}
            src='../../duguid.gif'
            height={200}
            width={250}
          />
          <motion.label
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
          >
            duguid construction
          </motion.label>
        </div>
        <DuguidModal duguidShow={duguidShow} setDuguidShow={setDuguidShow} />
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
          <motion.label
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
          >
            atelier
          </motion.label>
        </div>
      </div>
    </div>
  )
}